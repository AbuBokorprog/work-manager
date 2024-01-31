import LoginForm from "@/components/login_form";
import React from "react";
import loginImage from "@/public/assets/login.png";
import Image from "next/image";

export const metadata = {
  title: "Login",
  description: "Login",
};

const Login = () => {
  return (
    <div className="my-10 md:flex gap-2 justify-center">
      <div className="my-4 w-full">
        <Image
          src={loginImage}
          alt="Login Image"
          // width={500}
          // height={600}
          // sizes="100vw"
          placeholder="blur"
          quality={70}
          className="mx-auto w-auto h-auto rounded-lg"
          priority
        />
      </div>
      <div className="w-full">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
