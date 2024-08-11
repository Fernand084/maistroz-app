import { useState, useEffect } from "react";
import api from "../api/axiosConfig";

const AddMaistro = () => {
  const [maistro, setMaistro] = useState({
    id: 0,
    name: "",
    phone: "",
    e_mail: "",
    state: "",
    city: "",
    rating: 0,
    category: [],
  });
  const [activeIndex, setActiveIndex] = useState(null);

  const [categories, setCategories] = useState([]);

  // Obtener las categorías desde la API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/service-categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMaistro((prevMaistro) => ({
      ...prevMaistro,
      [name]: value,
    }));
  };

  //const handleClick = (e) => {};

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;

    setMaistro((prevMaistro) => {
      setActiveIndex(e.target.selectedIndex);
      // Verifica si la categoría ya está en la lista
      if (!prevMaistro.category.includes(selectedCategory)) {
        return {
          ...prevMaistro,
          category: [...prevMaistro.category, selectedCategory],
        };
      }
      return prevMaistro;
    });

    //console.log(maistro.category);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/maistroz/add-maistro", maistro);
      console.log("Maistro added successfully");
    } catch (error) {
      console.error("Error adding maistro:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">id:</label>
      <br />
      <input
        type="number"
        name="id"
        value={maistro.id}
        onChange={handleChange}
        placeholder="id"
      />
      <br />
      <label htmlFor="name">Name:</label>
      <br />
      <input
        type="text"
        name="name"
        value={maistro.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <br />
      <label htmlFor="phone">phone:</label>
      <br />
      <input
        type="text"
        name="phone"
        value={maistro.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <br />
      <label htmlFor="email">email:</label>
      <br />
      <input
        type="email"
        name="e_mail"
        value={maistro.e_mail}
        onChange={handleChange}
        placeholder="Email"
      />
      <br />
      <label htmlFor="state">state:</label>
      <br />
      <input
        type="text"
        name="state"
        value={maistro.state}
        onChange={handleChange}
        placeholder="State"
      />
      <br />
      <label htmlFor="city">city:</label>
      <br />
      <input
        type="text"
        name="city"
        value={maistro.city}
        onChange={handleChange}
        placeholder="City"
      />
      <br />
      <label htmlFor="rating">rating:</label>
      <br />
      <input
        type="number"
        name="rating"
        value={maistro.rating}
        onChange={handleChange}
        placeholder="Rating"
      />
      <br />

      <label htmlFor="category">Category:</label>
      <select
        multiple={true}
        id="category"
        name="category"
        value={maistro.category}
        onChange={handleCategoryChange}
      >
        {categories.map((category, index) => (
          <option
            key={index}
            value={category}
            className={activeIndex === index ? "active" : ""}
          >
            {category}
          </option>
        ))}
      </select>
      <br />

      <button type="submit">Add Maistro</button>
    </form>
  );
};

export default AddMaistro;
