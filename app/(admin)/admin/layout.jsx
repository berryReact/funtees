import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";

async function AdminLayout({ children }) {
  const { user, profile } = await requireAdmin("/login");
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-0 w-full flex-1 flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default AdminLayout;
