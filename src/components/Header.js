
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
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
    <div className="bg-gradient-to-b from-black absolute z-10 flex justify-between w-full pt-4 pl-4 pr-4">
      <div className="">
        <img className="w-44" alt="logo" src={LOGO} />
      </div>
      {user && <div className="flex gap-4 items-center">

        {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
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
          className="py-2 px-4 mx-2 my-2 bg-purple-800 text-white rounded-lg">
           {showGptSearch ? "Home" : "GPT Search"}
        </button>
        <img className="w-10 h-10" alt="user icon" src={user?.photoURL} />
        <button className="text-white" onClick={handleSignOut}>(Sign Out)</button>
      </div>
      }
    </div>

  )
}

export default Header