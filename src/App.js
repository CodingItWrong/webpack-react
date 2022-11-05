import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/detail',
    element: <Detail />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
