import VerifyEmailForm from "@/components/auth/VerifyEmailForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " SignUp Page | TimeTract -  Dashboard Template",
  description: "This is  SignUp Page TimeTract Dashboard Template",
  // other metadata
};

export default function SignUp() {
  return <VerifyEmailForm />;
}
