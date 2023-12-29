import { ChangeEvent, FC, FormEvent, useState } from "react";
import "./AddPizzaForm.scss";
import { Pizza } from "../../modals/Pizza";

const initState = {
  title: "",
  price: "",
  img: "",
};

type initStateTypes = {
  title: string;
  price: string;
  img: string;
};

interface AddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

export const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<initStateTypes>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPizza({ ...newPizza, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = newPizza;

    if (title && price && img) {
      addPizza({ title, price: Number(price), img, id: Date.now() });
      setNewPizza(initState);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <div className="wrapper">
        <input
          name="title"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          value={newPizza.title}
          className="form-input"
        />
        <input
          name="price"
          type="text"
          placeholder="price"
          onChange={handleChange}
          value={newPizza.price}
          className="form-input"
        />
      </div>
      <input
        name="img"
        type="text"
        placeholder="Image"
        onChange={handleChange}
        value={newPizza.img}
        className="form-input"
      />
      <button type="submit">+ Add to cart</button>
    </form>
  );
};
