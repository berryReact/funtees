import Login from "@/app/_components/Login";

function LoginPage() {
  return (
    <div className="mx-auto flex flex-col gap-4">
      <div className="flex items-center justify-center py-6">
        <h1>Login Page</h1>
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
