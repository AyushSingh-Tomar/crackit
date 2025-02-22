import Image from "next/image";
import {Button} from "../components/ui/button"
import { SignIn,SignedIn,SignedOut,SignInButton,UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="m-10"><SignInButton>
      <Button>SignIn</Button>
    </SignInButton>
  </div>
  );
}
