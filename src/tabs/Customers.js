import React from "react";
import { useSelector } from "react-redux";
import Table from "../components/Table";
import InvoiceCell from "../components/InvoiceCell";
function Customers() {
  const invoices = useSelector((state) => state.invoices);
  const cols = [
    "Sno",
    "Invoice No",
    "Customer Name",
    "Phone Number",
    "Total Purchase Amount",
  ];
  let rows = [];

  let generateRow = (row, i) => {
    let r = {
      Sno: i + 1,
      invoice_no: <InvoiceCell pos={i} row={row} prop_key={"invoice_no"} />,
      cust_name: <InvoiceCell pos={i} row={row} prop_key={"customer_name"} />,
      cust_ph_no: <InvoiceCell pos={i} row={row} prop_key={"customer_ph_no"} />,
      total_amount: <InvoiceCell pos={i} row={row} prop_key={"total_amount"} />,
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

export default Customers;
