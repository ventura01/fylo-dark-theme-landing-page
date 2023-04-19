import "./globals.css";
import { Raleway, Open_Sans } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Frontend Mentor",
  description: "Fylo landing page with dark theme and features grid",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-darkBlueIntro">
      <body>{children}</body>
    </html>
  );
}
