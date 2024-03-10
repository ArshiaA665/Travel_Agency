"use client";
import React, { Component } from "react";
import { Label } from "./ui/label2";
import { Input } from "./ui/input2";
import { cn } from "@/lib/utils";

interface State {
  fname: string;
  lname: string;
  email: string;
  password: string;
}

export default class SignupFormDemo extends Component<{}, State> {

 constructor(props: {}) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    // You can now use fname, lname, email, and password without TypeScript errors
    console.log("Form submitted:", { fname, lname, email, password });
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        fname,
        lname,
        email,
        password
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data,"userRegister")
    });
   }
   render(){

  return (
    <div className=" flex flex-col justify-center items-center mx-auto max-w-md w-screen h-screen rounded-none md:rounded-2xl p-4 md:p-8 shadow-input dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-500 dark:text-neutral-200">
        Welcome to Travela
      </h2>
      <p className="text-neutral-400 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to Travela if you can because we don&apos;t have a login flow
        yet
      </p>
      
      <form className="my-8" onSubmit={(e) => this.handleSubmit(e)}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-white/75">First name</Label>
            <Input 
              id="firstname" 
              placeholder="First Name" 
              type="text"
              onChange={(e) => this.setState({ fname: e.target.value })} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-white/75">Last name</Label>
            <Input 
              id="lastname" 
              placeholder="Last Name" 
              type="text" 
              onChange={(e) => this.setState({ lname: e.target.value })}/>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-white/75">Email Address</Label>
          <Input 
            id="email" 
            placeholder="Email" 
            type="email" 
            onChange={(e) => this.setState({ email: e.target.value })}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className="text-white/75">Password</Label>
          <Input 
            id="password" 
            placeholder="••••••••" 
            type="password" 
            onChange={(e) => this.setState({ password: e.target.value })}/>
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
        </div>
      </form>
    </div>
  );
  }
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
