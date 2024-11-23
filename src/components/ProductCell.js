import React from "react";
import { updateInvoiceProduct } from "../slices/invoiceSlice";
import { useDispatch } from "react-redux";

//in product table to make each entry editable this component is used
//input tag changes style to highlight missing field
function ProductCell(props) {
  //props format : { pos->invoice index in the invoices array , product_pos->product index inside the invoice's products array,key->property name,product->product object}

  const dispatch = useDispatch();
  let updateInvoiceProductValue = (pos, product_pos, key, value) => {
    dispatch(updateInvoiceProduct({ pos, product_pos, key, value }));
  };
  let val = props.product[props.prop_key];
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
        updateInvoiceProductValue(
          props.pos,
          props.product_pos,
          props.prop_key,
          e.target.value
        )
      }
      value={props.product[props.prop_key]}
    />
  );
}

export default ProductCell;
