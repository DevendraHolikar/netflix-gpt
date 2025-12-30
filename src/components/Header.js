
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <div className="flex justify-between w-100">
      <div className="">
        <img className="absolute z-10  w-44" alt="logo" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
      </div>
      {user && <div className="flex justify-between gap-4 pt-4 pr-4">
        <img className="w-10" alt="user icon" src={user?.photoURL} />
        <button onClick={handleSignOut}>(Sign Out)</button>
      </div>
      }
    </div>

  )
}

export default Header