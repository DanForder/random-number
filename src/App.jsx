import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Generator } from "./components/Generator";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/100" replace />} />
        <Route path="/:number" element={<Generator />} />
      </Routes>
    </BrowserRouter>
  );
}
