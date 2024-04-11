
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Send from "./pages/Send";
import Signin from "./pages/Sigin";
import Signup from "./pages/Signup";
function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/send" element={<Send />}/>
            <Route path="/signin" element={<Signin />}/>
            <Route path="/signup" element={<Signup />}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
