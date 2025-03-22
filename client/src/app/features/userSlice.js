import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [], // Stores all users
  currentUser: null, // Stores the logged-in user
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      console.log("Register Action Payload:", action.payload); // Debugging
      state.users = [...state.users, action.payload]; // Merge new users
    },
    setCurrentUser: (state, action) => {
      console.log("🔄 Setting current user in Redux:", action.payload);
      state.currentUser = action.payload; // Set logged-in user
    },
  },
});

export const { register, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { axiosAPI } from "@/api/axios.js";

// const USER_ENDPOINT = "/api/users";

// export const getUser = createAsyncThunk(
//   "user/profile",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosAPI.get(`${USER_ENDPOINT}/profile`);

//       if (!response || !response.data) {
//         throw new Error("Invalid response from server");
//       }
//       console.log("response.data", response.data);
//       return response.data;
//     } catch (error) {
//       console.error("Login error:", error.response?.data || error.message);

//       return rejectWithValue(error.response?.data || "Unauthorized!");
//     }
//   }
// );

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     data: null,
//     error: null,
//     status: "idle",
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getUser.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(getUser.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.data = action.payload;
//         state.error = null;
//       })
//       .addCase(getUser.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       });
//   },
// });

// export default userSlice.reducer;
