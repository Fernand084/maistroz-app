import { Link } from "react-router-dom";

const home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/maistroz">Maistroz</Link>
    </div>
  );
};

export default home;
