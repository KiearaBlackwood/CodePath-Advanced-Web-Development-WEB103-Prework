import React from 'react';
import { useRoutes, Link } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

const App = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <ShowCreators />
    },
    {
      path: "/view/:id",
      element: <ViewCreator />
    },
    {
      path: "/edit/:id",
      element: <EditCreator />
    },
    {
      path: "/new",
      element: <AddCreator />
    }
  ]);

  return (
    <div className="container">
      <nav>
        <ul>
          <li><strong>Creatorverse</strong></li>
        </ul>
        <ul>
          <li><Link hidefocus="true" to="/" role="button" className="outline">View All Creators</Link></li>
          <li><Link hidefocus="true" to="/new" role="button" className="outline">Add Creator</Link></li>
        </ul>
      </nav>

      <main>
        {element}
      </main>
    </div>
  );
};

export default App;
