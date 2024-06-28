import { cookies } from "next/headers";
import LoginForm from "./ui/loginForm";
import { redirect } from "next/navigation";

export default function Home(){

  return(
    <LoginForm />
  )
}