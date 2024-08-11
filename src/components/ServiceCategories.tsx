import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServiceCategories = ({ getServiceCategories }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getServiceCategories();
      setCategories(data);
    };
    fetchCategories();
  }, [getServiceCategories]);

  return (
    <div>
      <Link to="/maistroz">Maistroz</Link>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCategories;
