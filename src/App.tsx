import api from "./api/axiosConfig";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import MaistrozList from "./components/MaistrozList";

function App() {
  const [maistroz, setMaistroz] = useState();

  const getMaistroz = async () => {
    try {
      const response = await api.get("/maistroz");
      console.log(response.data);
      setMaistroz(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMaistroz();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={<MaistrozList maistroz={maistroz} />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
