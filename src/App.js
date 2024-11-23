import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import UploadHandler from "./components/UploadHandler";
import Invoices from "./tabs/Invoices";
import Products from "./tabs/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customers from "./tabs/Customers";
import Tabs from "./components/Tabs";
import ViewProducts from "./components/ViewProducts";
import EditForm from "./components/EditForm";
function App() {
  return (
    <Provider store={store}>
      <div className="App font-poppins">
        <UploadHandler />
        <Router>
          <Tabs />
          <Routes>
            <Route path="/" element={<Invoices />} />
            <Route path="/products" element={<Products />} />
            <Route path="/view-products" element={<ViewProducts />} />
            <Route path="/edit" element={<EditForm />} />
            <Route path="/customers" element={<Customers />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
