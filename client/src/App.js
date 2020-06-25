import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from './components/itemModal';
import { Container } from 'reactstrap';

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavbar />
          <Container>
          <ItemModal/>
          <ShoppingList />
          </Container>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
