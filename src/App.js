//import './App.css';
import HomePage from './pages/HomePage';
import "./App.scss";
import AllProducts from './pages/AllProducts';
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';


function App() {

const location = useLocation();


  return (
    <BrowserRouter>
    <AnimatePresence>
    <Switch  >
      <Route path='/' exact>
        <HomePage/>
      </Route>
      <Route path='/all-products' exact>
        <AllProducts/>
      </Route>

    </Switch>
    </AnimatePresence>


</BrowserRouter>

  );
}

export default App
