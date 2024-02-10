import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Main } from "./components/Main";
import "./globals.css";
import { ContextProvider } from "./context/rootContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Maxwell Alves dos Santos",
  description:
    "A Portfolio created with love for who love software development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"pt-br"}>
      <body className={poppins.className}>
        <ContextProvider>
          <div className="flex justify-between mx-auto max-w-[1700px]">
            <Main />
            {children}
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
