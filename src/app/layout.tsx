import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { FACEBOOK_URL, INSTAGRAM_URL, MOBILE_NUMBER } from "@/contstant";

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
        {/* Fixed Instagram Button */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          style={{
            position: "fixed",
            right: "10px",
            top: "40%",
            transform: "translateY(-50%)",
            padding: "0px",
            borderRadius: "50%",
            fontSize: "18px",
            textDecoration: "none",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: "1000",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 3364.7 3364.7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                id="0"
                cx="217.76"
                cy="3290.99"
                r="4271.92"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".09" stop-color="#fa8f21" />
                <stop offset=".78" stop-color="#d82d7e" />
              </radialGradient>
              <radialGradient
                id="1"
                cx="2330.61"
                cy="3182.95"
                r="3759.33"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0" />
                <stop offset="1" stop-color="#8c3aaa" />
              </radialGradient>
            </defs>
            <path
              d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9"
              fill="url(#0)"
            />
            <path
              d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9"
              fill="url(#1)"
            />
            <path
              d="M1269.25,1689.52c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7-416.6-186.59-416.6-416.7m-225.26,0c0,354.5,287.36,641.86,641.86,641.86s641.86-287.36,641.86-641.86-287.36-641.86-641.86-641.86S1044,1335,1044,1689.52m1159.13-667.31a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M1180.85,2707c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27S2059.13,666,2191,672c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M1170.5,447.09c-133.07,6.06-224,27.16-303.41,58.06-82.19,31.91-151.86,74.72-221.43,144.18S533.39,788.47,501.48,870.76c-30.9,79.46-52,170.34-58.06,303.41-6.16,133.28-7.57,175.89-7.57,515.35s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43s139.14,112.18,221.43,144.18c79.56,30.9,170.34,52,303.41,58.06,133.35,6.06,175.89,7.57,515.35,7.57s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2586.8,537.06,2504.71,505.15c-79.56-30.9-170.44-52.1-303.41-58.06C2068,441,2025.41,439.52,1686,439.52s-382.1,1.41-515.45,7.57"
              fill="#ffffff"
            />
          </svg>
        </a>
        {/* Fixed Facebook Button */}
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          style={{
            position: "fixed",
            right: "10px",
            top: "30%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255, 255, 255, 01)",
            color: "#fff",

            borderRadius: "50%",
            fontSize: "18px",
            textDecoration: "none",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: "1000",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 48 48"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Facebook-color</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g
              id="Icons"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Color-"
                transform="translate(-200.000000, -160.000000)"
                fill="#4460A0"
              >
                <path
                  d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                  id="Facebook"
                ></path>
              </g>
            </g>
          </svg>
        </a>
      </body>
    </html>
  );
}
