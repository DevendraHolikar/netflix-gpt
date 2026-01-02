import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate"
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR } from "../utils/constants";
import {BG_URL} from "../utils/constants"
 

const Login = () => {

    const [isSignInForm, setSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const disPatch = useDispatch()

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)


    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)
        if (message) return

        if (!isSignInForm) {


            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {

                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: AVATAR
                    }).then(() => {

                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        disPatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))

                    }).catch((error) => {
                        setErrorMessage(error)
                    });


                })
                .catch((error) => {

                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + errorMessage)

                });


        } else {


            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + errorMessage)
                });

        }
    }

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm)
    }

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <Header></Header>

            <div className="absolute inset-0 -z-10">
                <img className="h-full w-full object-cover" alt="bgimg" src={BG_URL} />
            </div>

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/75 text-white py-10 px-6">
                <h2 className="mb-6 text-2xl md:text-3xl font-bold pb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
                <form onSubmit={(e) => e.preventDefault()} className="w-52 md:w-80 grid gap-4">
                    {!isSignInForm && <input ref={name} className="bg-gray-300/10 h-8 md:h-12 p-2 border text-sm md:text-lg border-gray-400" type="text" placeholder="Full Name" />}
                    <input autoComplete="username" ref={email} className="bg-gray-300/10 h-8 md:h-12 p-2 text-sm md:text-lg border border-gray-400" type="text" placeholder="Email or mobile number" />
                    <input autoComplete="current-password" ref={password} className="bg-gray-300/10 h-8 text-sm md:text-lg md:h-12 p-2 border border-gray-400" type="password" placeholder="Password" />
                    <button onClick={handleButtonClick} className="mt-2 md:mt-6 rounded-lg bg-red-900 py-0 md:py-2 h-8 md:h-11 text-sm md:text-lg text-white">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                    <p className="text-red-700 text-sm md:text-lg text-center">{errorMessage}</p>
                    <p onClick={toggleSignInForm} className=" text-white text-center text-sm md:text-lg cursor-pointer">New to Netflix? {isSignInForm ? "Sign up now" : "Allready registered Sign in Now"}.</p>
                </form>
            </div>
        </div>
    )
}

export default Login