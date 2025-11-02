import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " SignIn Page | TimeTract -  Dashboard Template",
  description: "This is  Signin Page TimeTract Dashboard Template",
};

export default function SignIn() {
  return <SignInForm />;
}
