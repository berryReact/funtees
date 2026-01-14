import { Rubik } from "next/font/google";

import "@/app/_styles/globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Website Name",
    default: "Welcome | Website Name",
  },
  description:
    "Discover Funtees—well-made t-shirts with standout designs and a comfortable fit. New styles added regularly with fast, secure checkout.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} text-primary-900 flex min-h-dvh flex-col antialiased`}
      >
        <div className="flex flex-1 flex-col bg-primary-200">{children}</div>
      </body>
    </html>
  );
}
