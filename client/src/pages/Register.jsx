import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { useUser } from "@/hooks/useUser";
import toast from "react-hot-toast";

const Register = ({ className, ...props }) => {
  // const navigate = useNavigate();
  const { registerMutation } = useUser();
  const { mutate, isPending, isSuccess, data, isError, error } =
    registerMutation;

  const [showPassword, setShowPassword] = useState(false);

  const formSchema = z.object({
    fname: z
      .string()
      .min(1, { message: "First name is required!" })
      .min(3, { message: "First name must be at least 3 characters!" }),
    lname: z.string().min(1, { message: "Last name is required!" }),
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
    defaultValues: { fname: "", lname: "", email: "", password: "" },
    resolver: zodResolver(formSchema),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (errors.fname || errors.lname || errors.email || errors.password) {
      toast.dismiss();
    }
    if (errors.fname) {
      toast.error(errors.fname.message);
    } else if (errors.lname) {
      toast.error(errors.lname.message);
    } else if (errors.email) {
      toast.error(errors.email.message);
    } else if (errors.password) {
      toast.error(errors.password.message);
    }
  }, [errors]);

  console.log({ isPending, isSuccess, data, isError, error });

  const onSubmit = (data) => {
    mutate(data); // call the register mutation
    reset(); // clear the form
    // navigate("/verify-email");
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Register</CardTitle>
              <CardDescription>
                Enter your details below to create new account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="grid gap-2 mb-4 md:mb-0">
                      <Label htmlFor="fname">First Name</Label>
                      <Input
                        id="fname"
                        type="text"
                        placeholder="First Name"
                        {...register("fname")}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="lname">Last Name</Label>
                      <Input
                        id="lname"
                        type="text"
                        placeholder="Last Name"
                        {...register("lname")}
                      />
                    </div>
                  </div>
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
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      {...register("password")}
                    />
                  </div>
                  {/* <div className="grid gap-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      {...register("confirm-password")}
                    />
                  </div> */}

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isPending === "loading"}
                  >
                    {isPending === "loading" ? "Registering..." : "Register"}
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="underline underline-offset-4">
                    Login
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

export default Register;
