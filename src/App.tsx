import api from "./api/axiosConfig";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import MaistrozList from "./components/MaistrozList";
import Home from "./components/Home";
import MaistroDetails from "./components/MaistroDetails";
import AddMaistro from "./components/AddMaistro";
import ServiceCategories from "./components/ServiceCategories";

function App() {
  const getMaistroz = async () => {
    try {
      const response = await api.get("/maistroz");
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getMaistroById = async (id) => {
    try {
      const response = await api.get(`/maistroz/${id}`);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getServiceCategories = async () => {
    try {
      const response = await api.get("/service-categories");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const addMaistro = async (newMaistro) => {
    try {
      const response = await api.post("maistroz/add-maistro", newMaistro);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/maistroz"
            element={<MaistrozList getMaistroz={getMaistroz} />}
          ></Route>
          <Route
            path="/maistroz/:id"
            element={<MaistroDetails getMaistroById={getMaistroById} />}
          ></Route>
          <Route
            path="/maistroz/add-maistro"
            element={<AddMaistro addMaistro={addMaistro} />}
          ></Route>
          <Route
            path="/service-categories"
            element={
              <ServiceCategories getServiceCategories={getServiceCategories} />
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
