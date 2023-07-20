import MainLayout from "./layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Hamburger from "./shared/hamburger/Hamburger";
import { AnimatePresence } from "framer-motion";
import LeatestProduct from "./pages/leatest-product/LeatestProduct";
import LeatestItem from "./pages/leatest-product/leatestItem/LeatestItem";
import Modal from "./modal/Modal";

function App() {
  const { isOpen } = useSelector((state) => state.hamburgerSlice);

  console.log(isOpen);
  return (
    <div>
      <AnimatePresence>{isOpen && <Hamburger />}</AnimatePresence>

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<LeatestProduct />}>
            <Route index={true} element={<LeatestItem />} />
            <Route path=":leatestCategory" element={<LeatestItem />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
