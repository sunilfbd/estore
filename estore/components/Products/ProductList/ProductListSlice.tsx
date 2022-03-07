import { createSlice } from "@reduxjs/toolkit";

interface ProductListState {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}
[];

const initialState = {
  category: "",
  description: "",
  id: 0,
  image: "",
  price: 0,
  rating: {
    rate: 0,
    count: 0,
  },
  title: "",
} as ProductListState;

const ProductListSlice = createSlice({
  name: "ProductList",
  initialState,
  reducers: {
    addProduct(state) {
      console.log(state, "sssssss");
    },
  },
});

export const { loadProductList } = ProductListSlice.actions;
export default ProductListSlice.reducer;
