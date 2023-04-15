
import Home from "./components/landing-section/home/home";
import Viewabout from "./components/about-section/viewabout";
import Layout from "./components/layout/layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<Viewabout />} />
      {/* <Route path="courses" element={<Course />} />
      <Route path="contact" element={<Contact />} />  */}
     
    </Route>
  )
);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
