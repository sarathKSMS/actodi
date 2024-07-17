import { Route,Routes,BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";

function App() {

  const [users, setusers] = useState(
    [
      {
        username: "sarath",
        password: "123"
      }
    ]
  )


  return (
  < div >
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} setusers={setusers} />}></Route>
        <Route path='/Signup' element={<Signup users={users} setusers={setusers} />}></Route>
        <Route path='/Landing' element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>

  </div>)


}

export default App


