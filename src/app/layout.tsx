import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://faiz.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Faiz Muhammad | AI Engineer",
  description:
    "Portfolio of Faiz Muhammad — AI Engineer building practical LLM applications, RAG systems, multi-step AI agents, and backend services.",
  keywords: [
    "Faiz Muhammad",
    "AI Engineer",
    "Forward Deployed Engineer",
    "LangGraph",
    "LangChain",
    "RAG",
    "FastAPI",
    "Python",
  ],
  authors: [{ name: "Faiz Muhammad", url: "https://github.com/Faiz-l" }],
  openGraph: {
    title: "Faiz Muhammad | AI Engineer",
    description:
      "AI Engineer building practical LLM applications, RAG systems, multi-step AI agents, and backend services.",
    type: "website",
    url: siteUrl,
    siteName: "Faiz Muhammad",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faiz Muhammad | AI Engineer",
    description:
      "AI Engineer building practical LLM applications, RAG systems, multi-step AI agents, and backend services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}