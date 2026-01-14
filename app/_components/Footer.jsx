import { signOutAction } from "../_lib/actions";
import SubmitButton from "./SubmitButton";
import LinkButton from "./LinkButton";

function Footer() {
  return (
    <footer className="flex items-center justify-between bg-primary-100 p-4">
      <div className="">
        <form action={signOutAction}>
          <SubmitButton>Logout</SubmitButton>
        </form>
      </div>
      <div className="">
        <LinkButton href={"/signup"}>SignUp</LinkButton>
      </div>
    </footer>
  );
}

export default Footer;
