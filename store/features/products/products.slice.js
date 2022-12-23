import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    currentPage: 0,
    filter: [],
   
    loading: true,
};

const PAGE_SIZE = 9;

export const loadProduct = createAsyncThunk(
    "products",
    async (args, thunkApi) => {
        const response = await fetch("http://localhost:3002/products");
        const data = await response.json();

        return data;
    }
);

export const loadProductById = createAsyncThunk(
    "products/byId",
    async (id, thunkApi) => {
        const response = await fetch("http://localhost:3002/products/" + id);
        const data = await response.json();

        return data;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        pageChanged: (state, action) => {
            return { ...state, currentPage: action.payload };
        },
        
        filterChanged: (state, action) => {
            return {
                ...state,
                currentPage: 0,
                filter: action.payload,
            };
        },
    },

    extraReducers: (builder) => {
        builder.addCase(loadProduct.fulfilled, (state, action) => {
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        });
    },
});

export const productsReducer = productsSlice.reducer;
export const { pageChanged, displayChanged, filterChanged } =
    productsSlice.actions;

export const selectAllProducts = (state) => state.products.data;
export const selectProductById = (productId) => (state) =>
    state.products.data.find((product) => product.id == productId);
    
export const selectProductStatus = (state) =>
    state.products.loading || state.categories.loading;
export const selectProductsList = (state) => {
    

    

    return {
       
        products:state.products,
        
        
       
    };
};
