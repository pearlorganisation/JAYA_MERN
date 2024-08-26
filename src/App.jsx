
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
import ChatBotForm from './pages/ChatBotForm/ChatBotForm';

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
        element: <ChatBotForm />

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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App
