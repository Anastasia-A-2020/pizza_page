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

const pizzasName: string[] = [
  "pizza-1",
  "pizza-2",
  "pizza-3",
  "pizza-4",
  "pizza-5",
  "pizza-6",
  "pizza-7",
];

export const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<initStateTypes>(initState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewPizza({ ...newPizza, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("newPizza", newPizza);

    const { title, price, img } = newPizza;

    if (title && price) {
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
      <select
        name="img"
        className="form-input"
        onChange={handleChange}
        value={newPizza.img}
      >
        {pizzasName.map(name => (
          <option value={name} key={name}>
            {name}
          </option>
        ))}
      </select>
      <button type="submit">+ Add to cart</button>
    </form>
  );
};
