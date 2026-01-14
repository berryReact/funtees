import Footer from "@/app/_components/Footer";
import AccountHeader from "@/app/_components/AccountHeader";
import { getOptionalUser } from "@/app/_lib/auth/require-user";

async function AccountLayout({ children }) {
  const { user, profile } = await getOptionalUser();

  return (
    <>
      <AccountHeader user={user} profile={profile} />

      <main className="mx-auto flex min-h-0 w-full flex-1 flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default AccountLayout;
