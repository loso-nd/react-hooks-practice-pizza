import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaList, setpizzaList]= useState([])


  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(r => r.json())
    .then(pizzaData => setpizzaList(pizzaData));
    }, []
  );

  //Once we add a pizza to the db.json we want to update it to the DOM but updating the state
  const addPizza = (newPizza) => {
    console.log(newPizza)
    console.log([...pizzaList, newPizza])
    setpizzaList([...pizzaList, newPizza])

  }

  return (
    <>
      <Header />
      <PizzaForm addPizza={addPizza}/>
      <PizzaList pizzaList={pizzaList}/>
    </>
  );
}

export default App;