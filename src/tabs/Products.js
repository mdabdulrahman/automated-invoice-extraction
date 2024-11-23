import React from "react";
import { useSelector } from "react-redux";
import Table from "../components/Table";
import ProductCell from "../components/ProductCell";
function Products() {
  const invoices = useSelector((state) => state.invoices);

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
  invoices.forEach((invoice, i) => {
    invoice.products.forEach((product, j) => {
      rows.push(generateRow(product, i, j));
    });
  });
  return (
    <div>
      <Table rows={rows} cols={cols} />
    </div>
  );
}

export default Products;
