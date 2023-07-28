import MainLayout from "./layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Hamburger from "./shared/hamburger/Hamburger";
import { AnimatePresence } from "framer-motion";
import Body from "./components/body/Body";
import ProducDetail from "./pages/product-detail/ProducDetail";
import MyCart from "./pages/cart/MyCart";
import OrderComplete from "./pages/order-complete/OrderComplete";
import Products from "./pages/products/Products";
import Page404 from "./pages/404/Page404";
import Contact from "./pages/contact/Contact";
import Notification from "./shared/notification/Notification";
import Blogs from "./pages/blogs/Blogs";
import BlogDetails from "./pages/blogs/BlogDetails";
import Modal from "./shared/modal/Modal";

function App() {
  const { isOpen } = useSelector((state) => state.hamburgerSlice);
  const { isOpen: notify } = useSelector((state) => state.notificationSlice);
  const { isOpen: modal } = useSelector((state) => state.modalSlice);

  return (
    <div className="App">
      <AnimatePresence>{isOpen && <Hamburger />}</AnimatePresence>
      {modal && <Modal />}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Body />} />
          <Route path=":category/:id" element={<ProducDetail />} />
          <Route path="myCart" element={<MyCart />} />
          <Route path="orderComplete" element={<OrderComplete />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="blog/:blog" element={<BlogDetails />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
      {notify && <Notification />}
    </div>
  );
}

export default App;
