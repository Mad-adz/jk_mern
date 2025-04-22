import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import toast from "react-hot-toast";

// import { useNavigate, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { axiosAPI } from "@/api/axios";
// import { login } from "@/app/features/authSlice";
// import { useMutation } from "@tanstack/react-query";

// const AUTH_ENDPOINT = "/api/auth";

// Login API function
// const loginAPI = async (userData) => {
//   const response = await axiosAPI.post(`${AUTH_ENDPOINT}/login`, userData);
//   return response.data;
// };

const Login = ({ className, ...props }) => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { loginMutation } = useAuth();
  const { mutate, isPending, isSuccess, data, isError, error } = loginMutation;

  const [showPassword, setShowPassword] = useState(false);

  const formSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email is required!" })
      .email({ message: "Email format is incorrect!" }),
    password: z
      .string()
      .min(1, { message: "Password is required!" })
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        { message: "Password format is incorrect!" }
      ),
  });

  const form = useForm({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(formSchema),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (errors.email || errors.password) {
      toast.dismiss();
    }
    if (errors.email) {
      toast.error(errors.email.message);
    } else if (errors.password) {
      toast.error(errors.password.message);
    }
  }, [errors]);

  // # React Query Mutation for login
  // const { mutate, isPending, isError, isSuccess } = useMutation({
  //   mutationFn: loginAPI,
  //   onSuccess: (data) => {
  //     console.log("API Response:", data); // debugging
  //     dispatch(login(data)); // save user data to Redux
  //     navigate("/"); // redirect on success
  //   },
  //   onError: (error) => {
  //     console.error("Login Error:", error.response?.data || error.message);
  //   },
  // });

  console.log({ isPending, isSuccess, data, isError, error });

  const onSubmit = (data) => {
    mutate(data);
    reset();
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      {...register("email")}
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        to=""
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      {...register("password")}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isPending === "loading"}
                  >
                    {isPending === "loading" ? "Logging in..." : "Login"}
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link to="/register" className="underline underline-offset-4">
                    Register
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
