import { ChangeEvent, FC, FormEvent, useState } from "react";
import "./EditPizzaForm.scss";
import { Pizza } from "../../modals/Pizza";

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

      <input
        name="img"
        type="text"
        placeholder="Image"
        onChange={handleChange}
        value={editPizza.img}
        className="form-input"
      />
      <button type="submit">Confirm</button>
    </form>
  );
};
