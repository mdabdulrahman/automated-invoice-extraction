import React from "react";
import { useSelector } from "react-redux";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";
import InvoiceCell from "../components/InvoiceCell";
function Invoices() {
  const navigate = useNavigate();
  const invoices = useSelector((state) => state.invoices);

  const cols = [
    "Sno",
    "invoice No",
    "Customer Name",
    "Products",
    "Tax",
    "Total Amount",
    "Date",
    "View Products",
  ];
  let rows = [];
  let generateRow = (row, i) => {
    let r = {
      Sno: i + 1,
      invoice_no: <InvoiceCell pos={i} row={row} prop_key={"invoice_no"} />,
      cust_name: <InvoiceCell pos={i} row={row} prop_key={"customer_name"} />,
      no_of_products: row.products.length,
      tax: <InvoiceCell pos={i} row={row} prop_key={"tax"} />,
      total_amount: <InvoiceCell pos={i} row={row} prop_key={"total_amount"} />,
      date: <InvoiceCell pos={i} row={row} prop_key={"date"} />,
      view:
        row.products.length === 0 ? (
          "-"
        ) : (
          <button
            className="bg-blue-400 p-2 text-white rounded-sm"
            onClick={() => navigate("/view-products?id=" + i)}
          >
            View
          </button>
        ),
    };
    return r;
  };
  invoices.forEach((row, i) => {
    rows.push(generateRow(row, i));
  });
  return (
    <div>
      <Table rows={rows} cols={cols} />
    </div>
  );
}

export default Invoices;
