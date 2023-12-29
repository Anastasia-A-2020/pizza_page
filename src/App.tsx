import { FC, useState } from "react";
import "./App.scss";
import { AddPizzaForm } from "./components/AddPizzaForm/AddPizzaForm";
import { Pizza } from "./modals/Pizza";
import { DisplayPizzas } from "./components/DisplayPizzas/DisplayPizzas";

export const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(
      pizzasList.map(pizza => (pizza.id === newPizza.id ? newPizza : pizza))
    );
  };

  const deletePizza = (id: number) => {
    const newPiizasLIst = pizzasList.filter(pizza => pizza.id !== id);
    setPizzasList(newPiizasLIst);
  };

  return (
    <div className="app">
      <div className="wrap">
        <span className="heading"> Our pizza</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas
          pizzasList={pizzasList}
          updatePizza={updatePizza}
          deletePizza={deletePizza}
        />
      </div>
    </div>
  );
};
