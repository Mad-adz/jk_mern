import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { axiosAPI } from "@/api/axios";
import { login, logout, verifyEmail } from "@/app/features/authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AUTH_ENDPOINT = "/api/auth";

const loginAPI = async (userData) => {
  const response = await axiosAPI.post(`${AUTH_ENDPOINT}/login`, userData);
  return response.data;
};

const logoutAPI = async () => {
  await axiosAPI.post(`${AUTH_ENDPOINT}/logout`);
};

const verifyEmailAPI = async (otp) => {
  const response = await axiosAPI.post(`${AUTH_ENDPOINT}/verify-email`, otp);
  return response.data;
};

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { isAuthenticated, user: userData } = useSelector(
    (state) => state.auth
  );
  console.log({ isAuthenticated, userData });

  // Login Mutation
  const loginMutation = useMutation({
    mutationFn: loginAPI,
    onMutate: () => {
      toast.loading("Logging in...", { id: "login" });
    },
    onSuccess: (data) => {
      dispatch(login(data));
      console.log(data);
      toast.success(data.message || "Login Successful!", { id: "login" });
      if (isAuthenticated && userData?.isVerified === true) {
        navigate("/");
      }
      navigate("/verify-email");
    },
    onError: (error) => {
      console.error("Login Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Login Failed!", {
        id: "login",
      });
    },
  });

  // Logout Mutation
  const logoutMutation = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      dispatch(logout());
      queryClient.clear();
      navigate("/");
    },
  });

  // Verify Email Mutation
  const verifyEmailMutation = useMutation({
    mutationFn: verifyEmailAPI,
    onMutate: () => {
      toast.loading("Verifying OTP...", { id: "verify-email" });
    },
    onSuccess: (data) => {
      dispatch(verifyEmail());
      toast.success(data.message || "Email verified successfully!", {
        id: "verify-email",
      });
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "OTP verification failed!", {
        id: "verify-email",
      });
    },
  });

  return { loginMutation, logoutMutation, verifyEmailMutation };
};
