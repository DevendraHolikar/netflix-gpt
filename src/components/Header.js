
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants"
import { toggleGptSearchValue } from "../utils/gptSlice"
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const disPatch = useDispatch()
const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        disPatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL
          })
        );
        navigate("/browse")
      } else {
        disPatch(removeUser());
        navigate("/")
      }
    });

    return () => unsubscribe();
  }, [disPatch, navigate]);

  const handleSignOut = () => {
    signOut(auth).then(() => { }).catch((error) => {
      console.log(error)
    });
  }
  const handleGptSearchClick = () => {
    disPatch(toggleGptSearchValue())
  }
  const handleLanguageChange = (e) => {
    disPatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex-col md:flex-row justify-between bg-gradient-to-b from-black absolute z-10 flex w-full pt-4 pl-4 pr-4">
      <div className="">
       <Link to="/"><img className="w-28 md:w-44" alt="logo" src={LOGO} /></Link> 
      </div>
      {user && <div className="flex gap-4 items-center justify-end">

        {showGptSearch && (
            <select
              className="m-0 text-sm md:text-lg p-2 md:m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

        <button onClick={handleGptSearchClick}
          className="py-1 md:py-2 px-4 mx-0 md:mx-2 my-0 md:my-2 bg-gray-800 text-sm md:text-lg text-white rounded-lg">
           {showGptSearch ? "Home" : "Search"}
        </button>
        <img className=" hidden md:block w-10 h-10" alt="user icon" src={user?.photoURL} />
        <button className="py-1 md:py-2 px-2 md-px-4 mx-0 md:mx-2 my-0 md:my-2 text-sm md:text-lg bg-gray-800 text-white rounded-lg" onClick={handleSignOut}>Sign Out</button>
      </div> 
      }
    </div>

  )
}

export default Header