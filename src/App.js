import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnav/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Signup from './components/signup_signin/SignUp';
import Sign_in from './components/signup_signin/Sign_in';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import './App.css';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Switch, Route } from "react-router-dom";


function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, [])


  return (
    <>
      {
        data ? (
          <>
            <Navbaar />
            <Newnav />
            <Switch>
              <Route exact path="/">
                <Maincomp />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/login">
                <Sign_in />
              </Route>
              <Route exact path="/getproductsone/:id">
                <Cart />
              </Route>
              <Route exact path="/buynow">
                <Buynow />
              </Route>
            </Switch>
            <Footer />
          </>
        ) : (
          <div className="circle">
            <CircularProgress />
            <h2> Loading....</h2>
          </div>
        )
      }

    </>
  );
}

export default App;