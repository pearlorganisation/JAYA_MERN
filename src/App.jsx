
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import Layout from './components/layout/Layout'
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Schemes from './pages/Schemes/Schemes';
import SchemeDetail from './pages/SchemeDetail/SchemeDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path:'signin', 
        element:<Signin/>
      },
      {
        path:'signup', 
        element:<Signup/>
      },
      {
        path: 'schemes',
        element: <Schemes />,
        
      },
      {
        path: 'schemeDetail',
        element: <SchemeDetail />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App
