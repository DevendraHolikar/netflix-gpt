import { useState } from "react"
import Header from "./Header"

const Login = () => {

    const [isSignInForm, setSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm)
    }

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <Header></Header>

            <div className="absolute inset-0 -z-10">
                <img className="h-full w-full object-cover" alt="bgimg" src="https://assets.nflxext.com/ffe/siteui/vlv3/9ddb442a-aca7-4d85-9cd1-dbed62f18f26/web/IN-en-20251222-TRIFECTA-perspective_a882efaa-75c8-4143-9dc1-4f9932a791ac_large.jpg" />
            </div>

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/75 text-white py-10 px-6">
                <h2 className="mb-6 text-3xl font-bold pb-4">{ isSignInForm ? "Sign In" : "Sign Up" }</h2>
                <form className="w-80 grid gap-4">
                    {!isSignInForm && <input className="bg-gray-300/10 h-12 p-2 border border-gray-400" type="text" placeholder="Full Name" />}
                    <input className="bg-gray-300/10 h-12 p-2 border border-gray-400" type="text" placeholder="Email or mobile number" />
                    <input className="bg-gray-300/10 h-12 p-2 border border-gray-400" type="password" placeholder="Password" />
                    <button className="mt-6 rounded-lg bg-red-900 py-2 h-11 text-white">{ isSignInForm ? "Sign In" : "Sign Up" }</button>
                    <p onClick={toggleSignInForm} className="text-sm text-white text-center cursor-pointer">New to Netflix? { isSignInForm ? "Sign up now" : "Allready registered Sign in Now"}.</p>
                </form>
            </div>
        </div>
    )
}

export default Login