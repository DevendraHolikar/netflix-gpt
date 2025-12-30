import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {

  const disPatch = useDispatch()

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>
    }, {
      path: "/browse",
      element: <Browse></Browse>
    }
  ])

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
    } else {
      disPatch(removeUser());
    }
  });

  return () => unsubscribe();
}, [disPatch]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body