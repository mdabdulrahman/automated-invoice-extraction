import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Table from "./Table";
import ProductCell from "./ProductCell";
function ViewProducts() {
  const invoices = useSelector((state) => state.invoices);
  const location = useLocation();
  let pos = parseInt(location.search.split("=")[1]);
  const cols = [
    "Sno",
    "Name",
    "Quantity",
    "Unit Price",
    "Tax",
    "Price with Tax",
    "Discounts",
  ];
  let rows = [];
  let generateRow = (product, i, j) => {
    let r = {
      sno: i + 1 + "." + (j + 1),
      name: (
        <ProductCell
          pos={i}
          product_pos={j}
          product={product}
          prop_key="product_name"
        />
      ),
      qty: (
        <ProductCell pos={i} product_pos={j} product={product} prop_key="qty" />
      ),
      unit_price: (
        <ProductCell
          pos={i}
          product_pos={j}
          product={product}
          prop_key="unit_price"
        />
      ),
      tax: (
        <ProductCell pos={i} product_pos={j} product={product} prop_key="tax" />
      ),
      price_with_tax: (
        <ProductCell
          pos={i}
          product_pos={j}
          product={product}
          prop_key="amount"
        />
      ),
      discount: (
        <ProductCell
          pos={i}
          product_pos={j}
          product={product}
          prop_key="discount"
        />
      ),
    };
    return r;
  };
  invoices[pos].products.forEach((product, i) => {
    rows.push(generateRow(product, pos, i));
  });
  rows.push({
    sno: "",
    name: "Total",
    qty: "",
    unit_price: "",
    tax: invoices[pos].tax,
    price_with_tax: invoices[pos].total_amount,
    discounts: "",
  });
  return (
    <div>
      <Table rows={rows} cols={cols} />
    </div>
  );
}

export default ViewProducts;
