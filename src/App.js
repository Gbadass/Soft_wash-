import "./App.css";
// import ScrollToTop from "./utils/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/auth/login/UserLogin";
import UserForgetPassword from "./pages/auth/forgot_password/UserForgetPassword";
import UserRegister from "./pages/auth/register/UserRegister";



function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<>you're here</>} />
        <Route path="/UserLogin" element={<UserLogin/>}/>
        <Route path="/UserForgetPassword" element={<UserForgetPassword/>}/>
        <Route path="/UserRegister" element={<UserRegister/>}/>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;