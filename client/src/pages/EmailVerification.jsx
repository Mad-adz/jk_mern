import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";

import toast from "react-hot-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const EmailVerification = ({ className, ...props }) => {
  const navigate = useNavigate();
  const { verifyEmailMutation } = useAuth(); // Access loginMutation from useAuth
  const { mutate, isPending, isSuccess, data, isError, error } =
    verifyEmailMutation;

  const formSchema = z.object({
    otp: z.string().min(6, {
      message: "Your one-time password must be 6 characters.",
    }),
  });

  const form = useForm({
    defaultValues: { otp: "" },
    resolver: zodResolver(formSchema),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  // useEffect(() => {
  //   toast.dismiss("otp-error");

  //   if (errors.otp) {
  //     toast.error(errors.otp.message, { id: "otp-error" });
  //   }
  // }, [errors.otp]);

  // console.log({ isPending, isSuccess, data, isError, error });

  const onSubmit = (data) => {
    console.log(data);
    mutate(data); // call the login mutation
    reset(); // clear the form
  };

  return (
    <>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md">
          {/* <div className={cn("flex flex-col gap-6", className)} {...props}> */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">OTP Verification</CardTitle>
              <CardDescription>
                Enter your otp here to verify your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full space-y-6"
                >
                  <FormField
                    control={control}
                    name="otp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>One-Time Password</FormLabel>
                        <FormControl>
                          <InputOTP maxLength={6} {...field}>
                            <InputOTPGroup>
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                              <InputOTPSlot index={2} />
                              <InputOTPSlot index={3} />
                              <InputOTPSlot index={4} />
                              <InputOTPSlot index={5} />
                            </InputOTPGroup>
                          </InputOTP>
                        </FormControl>
                        <FormDescription>
                          Please enter the one-time password sent to your email.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end gap-4">
                    <Button type="submit">Submit</Button>
                    <Button
                      type="reset"
                      variant="outline"
                      onClick={() => navigate("/login")}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </Form>
              {/* <div className="mt-4 text-center text-sm">
                Go back to{" "}
                <Link to="/" className="underline underline-offset-4">
                  Home
                </Link>
              </div> */}
            </CardContent>
          </Card>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default EmailVerification;
