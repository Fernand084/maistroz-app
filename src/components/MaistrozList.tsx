import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MaistrozList = ({ getMaistroz }) => {
  const [maistroz, setMaistroz] = useState([]);

  useEffect(() => {
    const fetchMaistroz = async () => {
      const data = await getMaistroz();
      setMaistroz(data);
    };
    fetchMaistroz();
  }, [getMaistroz]);

  return (
    <div>
      <div>
        <Link to="/">Home</Link> |
        <Link to="/maistroz/add-maistro">Add New Maistro</Link> |
        <Link to="/service-categories">Service Categories</Link>
        <br />
        {maistroz?.map((maistro) => (
          <div key={maistro.id}>
            <h3>
              <Link to={`/maistroz/${maistro.id}`}>{maistro.name}</Link>
            </h3>
            <p>tel: {maistro.phone}</p>
            <p>e-mail: {maistro.e_mail}</p>
            <p>Estado: {maistro.state}</p>
            <p>Ciudad: {maistro.city}</p>
            <p>Rating: {maistro.rating}</p>
            <p>Categorias: {maistro.category.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaistrozList;
