const MaistrozList = ({ maistroz }) => {
  return (
    <div>
      <div>
        {maistroz?.map((maistro) => (
          <div key={maistro.id}>
            <h2>{maistro.name}</h2>
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
