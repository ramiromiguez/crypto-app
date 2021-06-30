import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar.jsx'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer.jsx';      
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer.jsx';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { CartContextProvider } from "./context/CartContext"


const App = props => {
  return <>
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
              <Navbar/>
          </header>
          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>
            <Route exact path="/category/:categoryName">
              <ItemListContainer/>
            </Route>
            <Route exact path="/item/:itemId">
              <ItemDetailContainer/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  </>
}


export default App;
 