import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/login/Login";
import { useState } from "react";
import NotFound from "./pages/notFound/NotFound";

function App() {
  const [user, setUser] = useState('');


  return (
    <>
      <BrowserRouter>
        <div className="block">
          <Sidebar />

          <div className="block__second">
          {user ? <Header user={user} /> : null}
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/product" element={<Product user={user} />} />
              <Route path="/newProduct" element={<NewProduct user={user} />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
