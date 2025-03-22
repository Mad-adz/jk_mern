import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// import { persistor, store } from "./app/store.js";
// import { PersistGate } from "redux-persist/integration/react";
// import ErrorBoundary from "./components/ErrorBoundary.jsx";
// import {
//   startTransition,
//   StrictMode,
//   Suspense,
//   useEffect,
//   useState,
// } from "react";

const client = new QueryClient();

// function Root() {
//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     startTransition(() => {
//       setIsReady(true);
//     });
//   }, []);

//   if (!isReady) return <div>Loading...</div>;

//   return (
//     <>
//       <Provider store={store}>
//         <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
//         <QueryClientProvider client={client}>
//           <Toaster />
//           <App />
//           <ReactQueryDevtools />
//         </QueryClientProvider>
//         </PersistGate>
//       </Provider>
//     </>
//   );
// }

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <ErrorBoundary>
//       <Root />
//     </ErrorBoundary>
//   </StrictMode>
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <Toaster />
        <App />
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
