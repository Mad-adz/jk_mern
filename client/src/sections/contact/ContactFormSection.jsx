// import { AddressCard } from "../../components";
// import { addresses } from "../../constants";
import { useEffect, useState } from "react";
import { AddressCard } from "@/components";
import { addresses } from "@/constants";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const ContactFormSection = () => {
  const [mailData, setMailData] = useState(null);
  const formSchema = z.object({
    fname: z
      .string()
      .min(1, "First Name is required!")
      .min(3, { message: "First name must be at least 3 characters!" }),
    lname: z.string().min(1, "Last Name is required!"),
    email: z
      .string()
      .min(1, { message: "Email is required!" })
      .email({ message: "Email format is incorrect!" }),
    message: z.string().min(1, "Message is required!"),
  });

  const form = useForm({
    defaultValues: { fname: "", lname: "", email: "", message: "" },
    resolver: zodResolver(formSchema),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (errors.fname || errors.lname || errors.email || errors.message) {
      toast.dismiss();
    }
    if (errors.fname) {
      toast.error(errors.fname.message);
    } else if (errors.lname) {
      toast.error(errors.lname.message);
    } else if (errors.email) {
      toast.error(errors.email.message);
    } else if (errors.message) {
      toast.error(errors.message.message);
    }
  }, [errors]);

  useEffect(() => {
    if (mailData) {
      reset();
    }
  }, [mailData, reset]);

  const onSubmit = (data) => {
    console.log(data);
    setMailData(data);
    alert("Submitted!");
  };

  // const onSubmit = async (data) => {
  //   const toastId = toast.loading("Sending your message...", {
  //     duration: 3000,
  //   });

  //   try {
  //     const response = await apiClient.post("api/contact/send", data);
  //     setMailData(response?.data);
  //     // console.log(response.data);

  //     toast.success(response.data.message || "Message sent successfully!", {
  //       id: toastId,
  //       duration: 2000,
  //     });
  //   } catch (error) {
  //     // console.log(error);
  //     toast.error(
  //       error.response?.data?.message || "Error submitting form! Try again.",
  //       {
  //         id: toastId,
  //         duration: 2000,
  //       }
  //     );
  //   }
  // };

  return (
    <section className="py-10 bg-white">
      <div className="container text-center">
        <h5 className="block antialiased tracking-normal font-sans font-semibold leading-snug text-blue-gray-900 mb-4 !text-xl lg:!text-2xl">
          Reach Us
        </h5>

        <p className="block antialiased font-sans leading-relaxed text-inherit mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Whether it&apos;s a question about our services, a request for our
          assistance, or suggestions for improvement, we are eager to hear from
          you.!
        </p>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          <div>
            {addresses.map((item) => (
              <div key={item.id} className="w-full lg:w-2/3 mx-auto mb-5">
                <AddressCard {...item} />
              </div>
            ))}
          </div>

          <form
            className="flex flex-col gap-4 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-left">
                <label className="mb-2 font-medium !text-zinc-900">
                  First Name
                </label>
                <input
                  {...register("fname")}
                  placeholder="First Name"
                  name="fname"
                  className="block w-full px-5 py-2.5 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="text-left">
                <label className="mb-2 font-medium !text-zinc-900">
                  Last Name
                </label>
                <input
                  {...register("lname")}
                  placeholder="Last Name"
                  name="lname"
                  className="block w-full px-5 py-2.5 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="text-left">
              <label className="mb-2 font-medium !text-zinc-900">
                Your Email
              </label>
              <input
                {...register("email")}
                placeholder="name@email.com"
                name="email"
                className="block w-full px-5 py-2.5 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="text-left">
              <label className="mb-2 font-medium !text-zinc-900">
                Your Message
              </label>
              <textarea
                {...register("message")}
                className="block w-full h-24 px-5 py-2.5 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-zinc-200 rounded-lg md:h-36 focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-1/2 px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-emerald-500 rounded-lg hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-50 cursor-pointer"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
