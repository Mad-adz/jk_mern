import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
  authToken: localStorage.getItem("authToken") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("Login Action Payload:", action.payload); // Debugging
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.authToken = action.payload.authToken;
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(action.payload.user)); // ✅ Correct
      localStorage.setItem("authToken", action.payload.authToken);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.authToken = null;
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
      localStorage.removeItem("authToken");
    },
    verifyEmail: (state) => {
      if (state.user) {
        state.user = { ...state.user, isVerified: true };
        localStorage.setItem("user", JSON.stringify(state.user)); // ✅ Correct
      }
    },
  },
});

export const { login, logout, verifyEmail } = authSlice.actions;
export default authSlice.reducer;

// import { axiosAPI } from "@/api/axios";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const AUTH_ENDPOINT = "/api/auth";

// // Async thunk for user login
// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async (userData, { rejectWithValue }) => {
//     try {
//       console.log(userData);
//       const response = await axiosAPI.post(`${AUTH_ENDPOINT}/login`, userData);

//       if (!response || !response.data) {
//         throw new Error("Invalid response from server");
//       }
//       console.log("response.data", response.data);
//       return response.data;
//     } catch (error) {
//       console.error("Login error:", error.response?.data || error.message);

//       return rejectWithValue(error.response?.data || "Login failed");
//     }
//   }
// );

// // Async thunk for user logout
// export const logoutUser = createAsyncThunk(
//   "auth/logout",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       await axiosAPI.post(`${AUTH_ENDPOINT}/logout`, credentials);
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     error: null,
//     status: "idle",
//     isAuth: false,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.user = action.payload;
//         state.error = null;
//         state.isAuth = true;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//         state.isAuth = false;
//       })
//       .addCase(logoutUser.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(logoutUser.fulfilled, (state) => {
//         state.status = "succeeded";
//         state.user = null;
//       })
//       .addCase(logoutUser.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       });
//   },
// });

// export default authSlice.reducer;
