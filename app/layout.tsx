import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PostureAI – AI Posture Alerts for Developers",
  description: "Real-time webcam posture detection with gentle reminders to keep you healthy while coding."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f19601a2-63b6-461d-992b-e4fcc07cb8ee"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
