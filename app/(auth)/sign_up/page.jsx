import Sign_up from "@/components/sign_up";
import React from "react";
import signUpImage from "@/public/assets/signup.png";
import Image from "next/image";

const SignIn = () => {
  return (
    <div className="my-10 md:flex gap-5 justify-center items-center">
      <div className="my-4 w-full">
        <Image
          src={signUpImage}
          alt="Sign Up image"
          width={500}
          height={600}
          // sizes="100vw"
          placeholder="blur"
          quality={70}
          className="mx-auto w-auto h-auto rounded-lg"
          priority
        />
      </div>
      <div className="w-full">
        <Sign_up />
      </div>
    </div>
  );
};

export default SignIn;
