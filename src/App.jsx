import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Sprints from './Sprints';
import Resources from './Resources';
import Todo from './Todo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'resources',
        element: <Resources />,
      },
      {
        path: 'sprints',
        element: <Sprints />,
      },
      {
        path: 'todo',
        element: <Todo />,
      },
      {
        path: '*',
        element: <ErrorPage status={404} message={'Page not found.'} />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
