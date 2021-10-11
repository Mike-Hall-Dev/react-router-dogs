import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import whiskey from "./whiskey.jpg";
import duke from "./duke.jpg";
import perry from "./perry.jpg";
import tubby from "./tubby.jpg";

import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav dogs={App.defaultProps.dogs} />
        <Switch>
          <Route exact path="/dogs">
            <DogList dogs={App.defaultProps.dogs} />
          </Route>
          <Route exact path="/dogs/:name">
            <DogDetails dogs={App.defaultProps.dogs}></DogDetails>
          </Route>
          <Route>
            <Redirect to="/dogs" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
