// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { useDispatch, useSelector } from "react-redux";
// import { axiosAPI } from "@/api/axios.js";
// import { register, setCurrentUser } from "@/app/features/userSlice.js";
// import toast from "react-hot-toast";

// const USER_ENDPOINT = "/api/users";

// const registerAPI = async (userData) => {
//   const response = await axiosAPI.post(`${USER_ENDPOINT}/register`, userData);
//   return response.data;
// };

// const getUserAPI = async () => {
//   console.log("🚀 Fetching user from API..."); // Debugging
//   const response = await axiosAPI.get(`${USER_ENDPOINT}/profile`);
//   console.log("✅ API Response:", response.data); // Debugging
//   return response.data;
// };

// export const useUser = () => {
//   const { isAuthenticated } = useSelector((state) => state.auth);
//   console.log(isAuthenticated);
//   const dispatch = useDispatch();
//   const queryClient = useQueryClient();
//   console.log("🛠 Cached user data:", queryClient.getQueryData(["user"]));

//   const registerMutation = useMutation({
//     mutationFn: registerAPI,
//     onMutate: () => {
//       toast.loading("Registering...", { id: "register" });
//     },
//     onSuccess: (data) => {
//       dispatch(register(data)); // Update Redux state
//       toast.success(data.message || "Registration Successful!", {
//         id: "register",
//       });

//       // queryClient.invalidateQueries(["user"]);
//     },
//     onError: (error) => {
//       console.error("Register Error:", error?.response?.data || error?.message);
//       toast.error(error.response?.data?.message || "Registration Failed!", {
//         id: "register",
//       });
//     },
//   });

//   const getUserQuery = useQuery({
//     queryKey: ["user"],
//     queryFn: getUserAPI,
//     // suspense: true,
//     // staleTime: 0,
//     // cacheTime: 0,
//     staleTime: 1000 * 60 * 5, // 5 minutes
//     cacheTime: 1000 * 60 * 10, // 10 minutes
//     retry: false,
//     enabled: !!isAuthenticated,
//     refetchOnMount: "always",
//     refetchOnWindowFocus: true,
//     onSuccess: (data) => {
//       console.log("🎉 onSuccess Triggered:", data);
//       dispatch(setCurrentUser(data));
//       console.log("✅ Dispatched setCurrentUser");
//     },
//     onError: (error) => {
//       console.error(
//         "User Fetch Error:",
//         error?.response?.data || error?.message
//       );
//     },
//   });

//   return { registerMutation, getUserQuery };
// };

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { axiosAPI } from "@/api/axios.js";
import { register, setCurrentUser } from "@/app/features/userSlice.js";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const USER_ENDPOINT = "/api/users";

const registerAPI = async (userData) => {
  const response = await axiosAPI.post(`${USER_ENDPOINT}/register`, userData);
  return response.data;
};

const getUserAPI = async () => {
  console.log("🚀 Fetching user from API..."); // Debugging
  const response = await axiosAPI.get(`${USER_ENDPOINT}/profile`);
  console.log("✅ API Response:", response.data); // Debugging
  return response.data;
};

export const useUser = () => {
  const { isAuthenticated, user: userData } = useSelector(
    (state) => state.auth
  );
  console.log({ isAuthenticated, userData });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  // Check for a valid token in local storage or cookies
  const hasValidToken = () => {
    // Implement your logic to check for a valid token
    const token = localStorage.getItem("authToken");
    return !!token; // Return true if token exists
  };

  const registerMutation = useMutation({
    mutationFn: registerAPI,
    onMutate: () => {
      toast.loading("Registering...", { id: "register" });
    },
    onSuccess: (data) => {
      dispatch(register(data)); // Update Redux state
      toast.success(data.message || "Registration Successful!", {
        id: "register",
      });
      // if (isAuthenticated && userData?.isVerified === true) {
      //   navigate("/");
      // }
      navigate("/verify-email");
    },
    onError: (error) => {
      console.error("Register Error:", error?.response?.data || error?.message);
      toast.error(error.response?.data?.message || "Registration Failed!", {
        id: "register",
      });
    },
  });

  const getUserQuery = useQuery({
    queryKey: ["user"],
    queryFn: getUserAPI,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
    retry: false,
    enabled: hasValidToken(), // Use the token check to enable the query
    refetchOnMount: "always",
    refetchOnWindowFocus: true,
    onSuccess: (data) => {
      console.log("🎉 onSuccess Triggered:", data);
      dispatch(setCurrentUser(data));
      console.log("✅ Dispatched setCurrentUser");
    },
    onError: (error) => {
      console.error(
        "User Fetch Error:",
        error?.response?.data || error?.message
      );
    },
  });

  // Optionally, you can add a useEffect to handle the case where the user is not authenticated
  useEffect(() => {
    if (!isAuthenticated && !hasValidToken()) {
      // Redirect to login or handle the case where the user is not authenticated
      console.log("User is not authenticated, redirecting to login...");
      // history.push("/login"); // Example: Redirect to login page
    }
  }, [isAuthenticated]);

  return { registerMutation, getUserQuery };
};
