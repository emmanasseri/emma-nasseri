import { Inter } from "next/font/google";
//import { Lato } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
//const lato = Lato({ subsets: ["latin"], weights: [100, 300, 400, 700, 900] });

export const metadata = {
  title: "emma nasseri",
  description: "emma nasseri: an overview",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
