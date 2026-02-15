import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { MOBILE_NUMBER } from "@/contstant";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata Configuration
export const metadata: Metadata = {
  title:
    "Anil Mehndi Art | Best Mehndi Artist in Chennai - Home Service Available",
  description:
    "Anil Mehndi Art offers professional bridal, Arabic, and traditional Mehndi designs in Chennai. Home service available for weddings, festivals, and special occasions. Book now for expert designs at affordable rates!",
  openGraph: {
    title:
      "Anil Mehndi Art | Best Mehndi Artist in Chennai - Home Service Available",
    description:
      "Anil Mehndi Art provides top-quality bridal, Arabic, and traditional Mehndi designs in Chennai. Enjoy expert artistry with the convenience of home service. Affordable and stunning designs guaranteed!",
    url: "https://anilmehndiart.com", // Update with actual website URL
    siteName: "Anil Mehndi Art",
    images: [
      {
        url: "https://anilmehndiart.combridal-mehndi.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Anil Mehndi Art - Bridal & Arabic Mehndi in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Anil Mehndi Art | Best Mehndi Artist in Chennai - Home Service Available",
    description:
      "Looking for the best Mehndi artist in Chennai? Anil Mehndi Art offers stunning bridal, Arabic, and traditional designs with home service convenience. Book now!",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords:
    "Anil Mehndi Art Chennai, best Mehndi artist Chennai, bridal Mehndi Chennai, Arabic Mehndi Chennai, traditional Mehndi Chennai, home service Mehndi Chennai, wedding Mehndi, festival Mehndi, Mehndi art Chennai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="favicon-48x48.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon-180x180.png"
        />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-TileImage" content="mstile-144x144.png" />

        <link rel="manifest" href="site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <div>{children}</div>

        <Footer />

        {/* Fixed Call Button */}
        <a
          href={`tel:${MOBILE_NUMBER}`}
          aria-label="Call Prince Mehndi Art"
          className="flex justify-center items-center"
          style={{
            position: "fixed",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#e63946",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "50%",
            fontSize: "16px",
            fontWeight: "bold",
            textDecoration: "none",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: "1000",
            width: "50px",
            height: "50px",
          }}
        >
          📞
        </a>
      </body>
    </html>
  );
}
