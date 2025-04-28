import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./features/layout/Layout";
import Home from "./features/home/components/Home";
import Catalogue from "./features/catalogue/components/Catalogue";
import Contact from "./features/contact/components/Contact";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route element={<Layout />}>
              <Route path="/catalogue" element={<Catalogue />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
