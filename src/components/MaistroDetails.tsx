import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const MaistroDetails = ({ getMaistroById }) => {
  const { id } = useParams();
  const [maistro, setMaistro] = useState(null);

  useEffect(() => {
    const fetchMaistro = async () => {
      const data = await getMaistroById(id);
      setMaistro(data);
    };
    fetchMaistro();
  }, [id, getMaistroById]);

  return (
    <div>
      {maistro ? (
        <div>
          <h2>{maistro.name}</h2>
          <p>{maistro.phone}</p>
          <p>{maistro.e_mail}</p>
          <p>{maistro.state}</p>
          <p>{maistro.city}</p>
          <p>{maistro.rating}</p>
          <p>{maistro.category.join(", ")}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/maistroz">Return</Link>
    </div>
  );
};

export default MaistroDetails;
