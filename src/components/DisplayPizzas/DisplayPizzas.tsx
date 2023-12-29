import { FC } from "react";
import { Pizza } from "../../modals/Pizza";
import "./DisplayPizzas.scss";
import { SinglePizza } from "../SinglePizza/SinglePizza";

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

export const DisplayPizzas: FC<DisplayPizzasProps> = ({
  pizzasList,
  updatePizza,
  deletePizza,
}) => {
  return (
    <div className="container">
      {pizzasList.map(pizza => {
        return (
          <SinglePizza
            key={pizza.id}
            pizza={pizza}
            updatePizza={updatePizza}
            deletePizza={deletePizza}
          />
        );
      })}
    </div>
  );
};
