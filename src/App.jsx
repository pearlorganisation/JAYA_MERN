
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import Layout from './components/layout/Layout'
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Schemes from './pages/Schemes/Schemes';
import SchemeDetail from './pages/SchemeDetail/SchemeDetail';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import DocumentPage from './pages/DocumentPage/DocumentPage';
import DefaultLayout from './admin/components/DefaultLayout/DefaultLayout';
import Scheme from './admin/pages/Scheme/Scheme';
import ViewScheme from './admin/pages/Scheme/ViewScheme/ViewScheme';
import Editscheme from './admin/pages/Scheme/EditScheme/Editscheme';
import CreateScheme from './admin/pages/Scheme/CreateScheme/CreateScheme';

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
        path: 'schemes',
        element: <Schemes />,

      },
      {
        path: 'schemeDetail',
        element: <SchemeDetail />,
      },
      {
        path: 'profile',
        element: <ProfilePage />
      },
      {
        path: "mydocuments",
        element: <DocumentPage />

      }


    ],
  },
  {
    path: 'signin',
    element: <Signin />
  },
  {
    path: 'signup',
    element: <Signup />
  },
  {
    path:'admin',
    element:<DefaultLayout/>,
    children : [
      {
        index:true,
        element:<Scheme/>
      },
      {
        path:'viewScheme',
        element:<ViewScheme/>
      },
      {
        path:'createScheme',
        element:<CreateScheme/>
      },
      {
        path:'editScheme',
        element:<Editscheme/>
      }
    ]
  }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App
