import { useState } from "react";

import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import CreateCity from "./pages/CreateCity";
import CityStudio from "./pages/CityStudio";

export default function App() {
  const [page, setPage] =
    useState("landing");

  const [city, setCity] =
    useState(null);

  function handleGenerate(generatedCity) {
    setCity(generatedCity);
    setPage("studio");
  }

  return (
    <div className="min-h-screen bg-[#050708]">

      {page === "landing" && (
        <Landing
          onStart={() =>
            setPage("auth")
          }
        />
      )}

      {page === "auth" && (
        <Auth
          onBack={() =>
            setPage("landing")
          }
          onSuccess={() =>
            setPage("create")
          }
        />
      )}

      {page === "create" && (
        <CreateCity
          onBack={() =>
            setPage("auth")
          }
          onGenerate={handleGenerate}
        />
      )}

      {page === "studio" && (
        <CityStudio
          city={city}
          onBack={() =>
            setPage("create")
          }
        />
      )}

    </div>
  );
}