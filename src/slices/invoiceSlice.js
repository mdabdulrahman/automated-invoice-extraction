import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const invoices = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    addInvoice(state, action) {
      state.push(action.payload);
    },
    updateInvoice(state, action) {
      let update = action.payload;
      state[update.pos][update.key] = update.value;
    },
    updateInvoiceProduct(state, action) {
      let update = action.payload;
      state[update.pos].products[update.product_pos][update.key] = update.value;
    },
  },
});

export const { addInvoice, updateInvoice, updateInvoiceProduct } =
  invoices.actions;
export default invoices.reducer;
