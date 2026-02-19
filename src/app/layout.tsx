'use client';

import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Seshajalam G | AI Research & ML Engineer Portfolio</title>
        <meta name="description" content="Portfolio of Seshajalam G — AI Engineer specializing in deep learning, computer vision, and NLP." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Seshajalam G | AI Engineer Portfolio" />
        <meta property="og:description" content="AI Engineer specializing in deep learning, computer vision, and NLP. Explore my projects and research." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seshajalam.github.io" />
        <meta property="og:image" content="https://seshajalam.github.io/images/profile.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seshajalam G | AI Engineer Portfolio" />
        <meta name="twitter:description" content="AI Engineer specializing in deep learning, computer vision, and NLP." />
        <meta name="twitter:image" content="https://seshajalam.github.io/images/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
