import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { FACEBOOK_URL, INSTAGRAM_URL, MOBILE_NUMBER, WHATSAPP_URL } from "@/contstant";

export const metadata: Metadata = {
  title: "Vijay Mehndi Thrissur | Best Mehndi Artist in Thrissur Kerala - Home Service Available",
  description: "Vijay Mehndi Thrissur offers professional bridal, Arabic, and traditional Mehndi designs in Thrissur, Kerala. Home service available for weddings, festivals, and special occasions. Book now!",
  openGraph: {
    title: "Vijay Mehndi Thrissur | Best Mehndi Artist in Thrissur Kerala",
    description: "Vijay Mehndi Thrissur provides top-quality bridal, Arabic, and traditional Mehndi designs in Thrissur. Expert artistry with home service convenience.",
    siteName: "Vijay Mehndi Thrissur",
    images: [{ url: "/assets/bridal/1.jpeg", width: 1200, height: 630, alt: "Vijay Mehndi Thrissur - Bridal Mehndi in Kerala" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vijay Mehndi Thrissur | Best Mehndi Artist in Thrissur Kerala",
    description: "Looking for the best Mehndi artist in Thrissur, Kerala? Vijay Mehndi offers stunning bridal, Arabic, and traditional designs with home service. Book now!",
  },
  robots: { index: true, follow: true },
  keywords: "Vijay Mehndi Thrissur, best Mehndi artist Thrissur, bridal Mehndi Thrissur Kerala, Arabic Mehndi Thrissur, traditional Mehndi Kerala, home service Mehndi Thrissur, wedding Mehndi Thrissur, henna artist Thrissur Kerala",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="manifest" href="site.webmanifest" />
        <meta name="theme-color" content="#2b0a08" />
      </head>
      <body className="antialiased">
        <Header />
        <div>{children}</div>
        <Footer />

        {/* Fixed Call Button */}
        <a
          href={`tel:${MOBILE_NUMBER}`}
          aria-label="Call Vijay Mehndi Thrissur"
          style={{
            position: "fixed",
            right: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#e63946",
            color: "#fff",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            boxShadow: "0 4px 14px rgba(230,57,70,0.5)",
            zIndex: 999,
          }}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
          </svg>
        </a>

        {/* Fixed WhatsApp Circle Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Vijay Mehndi Thrissur"
          className="wa-pulse"
          style={{
            position: "fixed",
            right: "14px",
            top: "calc(50% + 60px)",
            transform: "translateY(-50%)",
            backgroundColor: "#25D366",
            color: "#fff",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            boxShadow: "0 4px 14px rgba(37,211,102,0.45)",
            zIndex: 999,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="#fff">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.766L0 32l8.469-2.004A15.937 15.937 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.26 13.26 0 01-6.76-1.851l-.484-.287-5.028 1.189 1.21-4.9-.317-.503A13.278 13.278 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.302-9.988c-.4-.2-2.366-1.168-2.732-1.3-.366-.133-.633-.2-.9.2s-1.032 1.3-1.265 1.567c-.233.267-.466.3-.866.1-.4-.2-1.69-.623-3.22-1.987-1.19-1.062-1.993-2.373-2.227-2.773-.233-.4-.025-.616.175-.815.18-.178.4-.466.6-.7.2-.233.267-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.966-.325-.78-.655-.673-.9-.685l-.766-.013c-.267 0-.7.1-1.067.5s-1.4 1.367-1.4 3.333 1.433 3.867 1.633 4.133c.2.267 2.82 4.304 6.833 6.033.955.413 1.7.66 2.28.844.958.306 1.83.263 2.52.16.768-.115 2.366-.967 2.7-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z" />
          </svg>
        </a>

        {/* Fixed Instagram Circle */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          style={{
            position: "fixed",
            right: "14px",
            top: "calc(50% - 60px)",
            transform: "translateY(-50%)",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
            overflow: "hidden",
            zIndex: 999,
          }}
        >
          <svg width="52" height="52" viewBox="0 0 3364.7 3364.7" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="ig0" cx="217.76" cy="3290.99" r="4271.92" gradientUnits="userSpaceOnUse">
                <stop offset=".09" stopColor="#fa8f21" /><stop offset=".78" stopColor="#d82d7e" />
              </radialGradient>
              <radialGradient id="ig1" cx="2330.61" cy="3182.95" r="3759.33" gradientUnits="userSpaceOnUse">
                <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0" /><stop offset="1" stopColor="#8c3aaa" />
              </radialGradient>
            </defs>
            <path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#ig0)"/>
            <path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#ig1)"/>
            <path d="M1269.25,1689.52c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7-416.6-186.59-416.6-416.7m-225.26,0c0,354.5,287.36,641.86,641.86,641.86s641.86-287.36,641.86-641.86-287.36-641.86-641.86-641.86S1044,1335,1044,1689.52m1159.13-667.31a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M1180.85,2707c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27S2059.13,666,2191,672c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M1170.5,447.09c-133.07,6.06-224,27.16-303.41,58.06-82.19,31.91-151.86,74.72-221.43,144.18S533.39,788.47,501.48,870.76c-30.9,79.46-52,170.34-58.06,303.41-6.16,133.28-7.57,175.89-7.57,515.35s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43s139.14,112.18,221.43,144.18c79.56,30.9,170.34,52,303.41,58.06,133.35,6.06,175.89,7.57,515.35,7.57s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2586.8,537.06,2504.71,505.15c-79.56-30.9-170.44-52.1-303.41-58.06C2068,441,2025.41,439.52,1686,439.52s-382.1,1.41-515.45,7.57" fill="#fff"/>
          </svg>
        </a>

        {/* Fixed Facebook Circle */}
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          style={{
            position: "fixed",
            right: "14px",
            top: "calc(50% - 120px)",
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            zIndex: 999,
          }}
        >
          <svg width="30" height="30" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd"><g transform="translate(-200 -160)" fill="#4460A0"><path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 Z"/></g></g>
          </svg>
        </a>
      </body>
    </html>
  );
}
