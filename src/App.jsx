import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login onLogin={(userType) => console.log(userType)} />} />
        <Route path="/portal" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
