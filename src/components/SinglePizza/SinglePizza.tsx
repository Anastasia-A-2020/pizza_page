import { FC, useState } from "react";
import { Pizza } from "../../modals/Pizza";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./SinglePizza.scss";
import { EditPizzaForm } from "../EditPizzaForm/EditPizzaForm";

interface SinglePizzaProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

export const SinglePizza: FC<SinglePizzaProps> = ({
  pizza,
  updatePizza,
  deletePizza,
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleEditPizza = () => {
    setEdit(!edit);
  };

  const handleDeletePizza = () => {
    deletePizza(pizza.id);
  };

  return (
    <div className="pizza">
      <img
        className="pizza-img"
        src={`/images/${pizza.img?.length !== 0 ? pizza.img : "pizza-1"}.jpg`}
        alt={pizza.title}
      />
      <h2>{pizza.title}</h2>
      <span>{pizza.price} $</span>

      <div className="pizza-controls">
        <AiFillEdit size="16" onClick={handleEditPizza} />
        <AiFillDelete size="16" onClick={handleDeletePizza} />
      </div>
      {edit && (
        <EditPizzaForm
          data={pizza}
          updatePizza={updatePizza}
          handleEditPizza={handleEditPizza}
        />
      )}
    </div>
  );
};
