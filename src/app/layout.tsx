import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhiman Bhat | Business Analyst, Data Analyst & Strategist",
  description:
    "Portfolio showcasing business analytics, data visualization projects, and strategic insights. Transforming data into action.",
  keywords: [
    "Business Analyst",
    "Data Analyst",
    "Power BI",
    "Excel",
    "SQL",
    "Python",
    "Data Analytics",
    "Business Intelligence",
    "Market Analysis",
    "Revenue Modeling",
    "Dharwad",
    "Karnataka",
    "BBA Student",
    "Portfolio",
    "Analytics Projects",
    "Satyug Tales",
    "Data Visualization",
    "Strategic Insights",
  ],
  openGraph: {
    title: "Abhiman Bhat | Business Analyst, Data Analyst & Strategist",
    description:
      "Data-Driven Problem Solver | Turning Analytics into Action.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        {/* Google Analytics Placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('Google Analytics Placeholder');
              /* 
                TODO: Replace with actual GA tracking code
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_MEASUREMENT_ID');
              */
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
