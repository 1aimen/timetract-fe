import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " SignIn Page | TimeTract -  Dashboard Template",
  description: "This is  Signin Page TimeTract Dashboard Template",
};

export default function SignIn() {
  return <ResetPasswordForm />;
}
