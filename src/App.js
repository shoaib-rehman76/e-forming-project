
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import PrivacyAndPolicy from "./pages/privacy-and-policy/PrivacyAndPolicy";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyAndPolicy />} />
      </Routes>
    </>
  );
}

export default App;
