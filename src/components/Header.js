
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {LOGO} from "../utils/constants"

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const disPatch = useDispatch()

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
  }, [disPatch,navigate]);

  const handleSignOut = () => {
    signOut(auth).then(() => {}).catch((error) => {
      console.log(error)
    });
  }

  return (
    <div className="bg-gradient-to-b from-black absolute z-10 flex justify-between w-full pt-4 pl-4 pr-4">
      <div className="">
        <img className="w-44" alt="logo" src={LOGO} />
      </div>
      {user && <div className="flex gap-4 items-center">
        <img className="w-10 h-10" alt="user icon" src={user?.photoURL} />
        <button className="text-white" onClick={handleSignOut}>(Sign Out)</button>
      </div>
      }
    </div>

  )
}

export default Header