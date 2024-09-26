import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const abeeZee = localFont({
  src: "./fonts/ABeeZee-Regular.ttf",
  variable: "--font-abee-zee",
  weight: "400",
});
export const metadata: Metadata = {
  title: "ايكومبو - شريك التجارة الإلكترونية بالجملة",
  description:
    "تساعدك ايكومبو في بدء تجارتك الإلكترونية بسعر الجملة وبدون رأس مال. نحن نوفر المنتجات والتخزين والتغليف والشحن لدعم متجرك الإلكتروني.",
  keywords:
    "التجارة الإلكترونية, بالجملة, بدون رأس مال, الإمارات, المستودعات, التغليف, الشحن, ايكومبو",
  openGraph: {
    title: "ايكومبو - ابدأ تجارتك الإلكترونية بدون رأس مال",
    description:
      "ايكومبو هي أول وأكبر منصة لخدمات التجارة الإلكترونية في الإمارات. ابدأ مشروعك التجاري بسهولة وبدون رأس مال. نحن نوفر المنتجات، التخزين، التغليف، والشحن.",
    type: "website",
    url: "https://ecompo.com",
    images: [
      {
        url: "/images/ecompo-og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "ايكومبو - ابدأ تجارتك الإلكترونية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ecompo",
    title: "ايكومبو - شريك التجارة الإلكترونية بالجملة",
    description:
      "ابدأ تجارتك الإلكترونية بسعر الجملة وبدون رأس مال. نحن نوفر المنتجات، التخزين، التغليف، والشحن.",
    images: "/images/ecompo-twitter-image.jpg",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#59C6C9" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${abeeZee.variable} antialiased`}>{children}</body>
    </html>
  );
}
