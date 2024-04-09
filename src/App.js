
import './App.css';
import Home from './components/Home';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SignIn from './components/SignIn';

import AccountSettings from './components/AccountSettings';
import SignUp from './components/SignUp';

function App() {
  const appRouter = createBrowserRouter([
    {path: '/signIn',
    element : <SignIn />
    },
    {path: '/',
    element : <Home />
    },
    {
      path: '/signUp',
      element: <SignUp/>
    },
    {
      path: '/accountSettings',
      element: <AccountSettings />
    }
  ])
  return (
    <div>
     <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
