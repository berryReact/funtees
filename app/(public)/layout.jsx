import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";

function PublicLayout({ children }) {
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

export default PublicLayout;
