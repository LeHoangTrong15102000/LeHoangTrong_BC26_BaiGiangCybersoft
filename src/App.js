import { Routes, Route, Link, NavLink } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import BauCua from "./BauCua";
import ProductManagement from "./ProductManagement";
import TodoAppRedux from "./TodoAppRedux";
import ArticleList from "./demoRouter/ArticleList";
import ArticleDetails from "./demoRouter/ArticleDetails";
import ArticleLayout from "./demoRouter/ArticleLayout";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "",
        })}
      >
        Bầu Cua
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "text-danger" : "")}
      >
        Product
      </NavLink>
      <Link to="/todos">Todos</Link>
      <Link to="/articles">Articles</Link>

      <Routes>
        <Route path="/" element={<BauCua />} />
        <Route path="/products" element={<ProductManagement />} />
        <Route path="/todos" element={<TodoAppRedux />} />

        {/* Nested Routes */}
        {/* Khi có nhiều Route có cùng layout, ta sẽ dùng nested routes để thiết kế */}
        <Route path="/articles" element={<ArticleLayout />}>
          <Route index element={<ArticleList />} />
          {/* params: dynamic url */}
          <Route path=":id" element={<ArticleDetails />} />
        </Route>

        {/* Khi không có bất kì path nào khớp với url, sẽ render ra fallback UI */}
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
