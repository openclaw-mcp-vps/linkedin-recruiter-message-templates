import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkedInReach – AI-Powered Recruiter Message Templates",
  description: "Generate personalized LinkedIn outreach messages in seconds. AI-powered templates for technical recruiters, hiring managers, and talent acquisition teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="38bc270f-bc5e-4cf4-ab45-eae6326022cf"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
