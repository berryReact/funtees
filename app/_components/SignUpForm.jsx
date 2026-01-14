import { signUpAction } from "@/app/_lib/actions";
import SubmitButton from "./SubmitButton";

function SignUpForm() {
  return (
    <form action={signUpAction} className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>

      <div className="mb-6 flex items-center justify-between gap-2">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <SubmitButton>Submit</SubmitButton>
    </form>
  );
}

export default SignUpForm;
