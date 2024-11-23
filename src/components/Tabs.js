import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Tabs() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeStyle = " py-4 w-1/3 text-white bg-blue-600  active";
  const normalStyle = " py-4 w-1/3 border  ";

  return (
    <div className="w-2/4 mx-auto">
      <div className="flex justify-between font-medium  text-center text-gray-500 ">
        <button
          onClick={() => navigate("/")}
          className={location.pathname == "/" ? activeStyle : normalStyle}
        >
          Invoices
        </button>

        <button
          onClick={() => navigate("/products")}
          className={
            location.pathname == "/products" ? activeStyle : normalStyle
          }
        >
          Products
        </button>

        <button
          onClick={() => navigate("/customers")}
          className={
            location.pathname == "/customers" ? activeStyle : normalStyle
          }
        >
          Customers
        </button>
      </div>
    </div>
  );
}

export default Tabs;
