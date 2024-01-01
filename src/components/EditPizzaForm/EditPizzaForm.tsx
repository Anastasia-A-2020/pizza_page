import { ChangeEvent, FC, FormEvent, useState } from "react";
import "./EditPizzaForm.scss";
import { Pizza } from "../../modals/Pizza";
import { pizzasName } from "../../constants/constants";

interface EditPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleEditPizza: () => void;
}

export const EditPizzaForm: FC<EditPizzaFormProps> = ({
  data,
  updatePizza,
  handleEditPizza,
}) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditPizza({ ...editPizza, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = editPizza;

    if (title && price && img) {
      updatePizza(editPizza);
    }

    handleEditPizza();
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <input
        name="title"
        type="text"
        placeholder="Name"
        onChange={handleChange}
        value={editPizza.title}
        className="form-input"
      />
      <input
        name="price"
        type="text"
        placeholder="price"
        onChange={handleChange}
        value={editPizza.price}
        className="form-input"
      />

      <select
        name="img"
        className="form-input"
        onChange={handleChange}
        value={editPizza.img}
      >
        {pizzasName.map(name => (
          <option value={name} key={name}>
            {name}
          </option>
        ))}
      </select>
      <button type="submit">Confirm</button>
    </form>
  );
};
