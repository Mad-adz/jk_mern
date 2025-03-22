import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/authSlice.js";
import userReducer from "./features/userSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

// # react-persist method

// import { configureStore } from "@reduxjs/toolkit";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";


// import authReducer from "./features/authSlice";
// import userReducer from "./features/userSlice";

// const authPersistConfig = {
//   key: "auth",
//   storage,
// };

// const userPersistConfig = {
//   key: "user",
//   storage,
// };

// const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
// const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

// export const store = configureStore({
//   reducer: {
//     auth: persistedAuthReducer,
//     user: persistedUserReducer,
//   },
//   devTools: true,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
//       },
//     }),
// });

// export const persistor = persistStore(store);
