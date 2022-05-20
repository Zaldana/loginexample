import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedHome from "./components/ProtectedHome";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="user-home"
            element={
            <PrivateRoute>
              <ProtectedHome />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;