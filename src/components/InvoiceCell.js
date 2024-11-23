import React from "react";
import { updateInvoice } from "../slices/invoiceSlice";
import { useDispatch } from "react-redux";
function InvoiceCell(props) {
  const dispatch = useDispatch();
  let updateInvoiceValue = (pos, key, value) => {
    dispatch(updateInvoice({ pos, key, value }));
  };
  let val = props.row[props.prop_key];
  return (
    <input
      className={
        "p-0 w-auto  focus:outline-none " +
        (val === null || val.length == 0
          ? "border-red-400 border-b bg-red-100"
          : "border-none bg-transparent")
      }
      type="text"
      onChange={(e) =>
        updateInvoiceValue(props.pos, props.prop_key, e.target.value)
      }
      value={props.row[props.prop_key]}
    />
  );
}

export default InvoiceCell;
