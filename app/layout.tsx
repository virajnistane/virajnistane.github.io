import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viraj Nistane | Data Scientist & Research Engineer",
  description:
    "Portfolio of Viraj Nistane — Data Scientist and Research/Data Engineer with a PhD in Theoretical Physics. Experienced in Python, SQL, ETL pipelines, machine learning, and scientific computing.",
  keywords: [
    "Viraj Nistane",
    "Data Scientist",
    "Research Engineer",
    "Python",
    "Machine Learning",
    "Cosmology",
    "Portfolio",
  ],
  authors: [{ name: "Viraj Nistane" }],
  openGraph: {
    title: "Viraj Nistane | Data Scientist & Research Engineer",
    description:
      "Portfolio of Viraj Nistane — Data Scientist and Research Engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
