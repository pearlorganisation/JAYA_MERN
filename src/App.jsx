
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import Layout from './components/layout/Layout'
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Schemes from './pages/Schemes/Schemes';
import SchemeDetail from './pages/SchemeDetail/SchemeDetail';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import DocumentPage from './pages/DocumentPage/DocumentPage';
import ChatBotForm from './pages/ChatBotForm/ChatBotForm';
import NewChatBotForm from './pages/ChatBotForm/NewChatBotForm';
import DefaultLayout from './admin/components/DefaultLayout/DefaultLayout';
import Scheme from './admin/pages/Scheme/Scheme';
import ViewScheme from './admin/pages/Scheme/ViewScheme/ViewScheme';
import Editscheme from './admin/pages/Scheme/EditScheme/Editscheme';
import CreateScheme from './admin/pages/Scheme/CreateScheme/CreateScheme';
import { useSelector } from 'react-redux';


function App() {
  const { isUserLoggedIn } = useSelector(state => state.auth)
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

        },
        {
          path: "/chatBotForm",
          element: <NewChatBotForm />

        }


      ],
    },
    {
      path: 'signin',
      element: isUserLoggedIn ? <Navigate to='/' /> : <Signin />
    },
    {
      path: 'signup',
      element: isUserLoggedIn ? <Navigate to='/' /> : <Signup />
    },
    {
      path: 'admin',
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <Scheme />
        },
        {
          path: 'viewScheme',
          element: <ViewScheme />
        },
        {
          path: 'createScheme',
          element: <CreateScheme />
        },
        {
          path: 'editScheme',
          element: <Editscheme />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
