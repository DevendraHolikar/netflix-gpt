import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import Details from "./Details"

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>
    }, {
      path: "/browse",
      element: <Browse></Browse>
    }, {
      path: "/details/:movieId",
      element: <Details></Details>
    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body