import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store  from './pages/lpn-store/store'
import RoutingLPN from './pages/lpn-routes/routes';


class App extends React.Component {
  render() {
      return (
          <Provider store={store}>
                  <div>
                      <header>
                          <React.Fragment>
                            <RoutingLPN />
                          </React.Fragment>
                      </header>
                  </div>
          </Provider>
      );
  }
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//     </div>
//   );
// }