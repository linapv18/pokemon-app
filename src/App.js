import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import DetailsPage from "./Components/DetailsPage/DetailsPage";


const App = () => {

return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:pokemonId" element={<DetailsPage />} />
  </Routes>
)

};

export default App;
