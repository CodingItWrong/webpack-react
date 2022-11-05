import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello Router!</div>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
