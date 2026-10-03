import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Plans from "./pages/Plans";
import CityGenerator from "./pages/CityGenerator";
import CityViewer from "./pages/CityViewer";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* Plans */}
        <Route
          path="/plans"
          element={<Plans />}
        />

        {/* City Input / Generator */}
        <Route
          path="/generate"
          element={<CityGenerator />}
        />

        {/* Generated City */}
        <Route
          path="/city/:cityId"
          element={<CityViewer />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;