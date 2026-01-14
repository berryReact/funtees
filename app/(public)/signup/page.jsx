import SignUpForm from "@/app/_components/SignUpForm";

function SignUpPage() {
  return (
    <div className="mx-auto flex flex-col gap-4">
      <div className="flex items-center justify-center py-6">
        <h1>Signup</h1>
      </div>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUpPage;
