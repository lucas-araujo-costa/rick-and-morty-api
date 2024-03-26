import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Characters } from '../Pages/Characters';
import Home from '../Pages/Home';
import Episodes from '../Pages/Episodes';
import Locations from '../Pages/Locations';
import ErrorPage from '../Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/characters",
    element: <Characters />,
  },
  {
    path: "/locations",
    element: <Locations />
  },
  {
    path: "/episodes",
    element: <Episodes />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

export function Routes() {

  return (
    <RouterProvider router={router} />
  )
}
