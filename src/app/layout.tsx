import "./globals.css";
import Footer from "@/components/common/Footer";
import CardNav from "@/components/common/CardNav";

export const metadata = {
  title: "FiTusion | Gym Website",
  description: "Sculpt Your Body, Elevate Your Spirit",
};
const items = [
  {
    label: "About",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "About Us", href: "/about", ariaLabel: "About Company" },
      { label: "Careers", href: "/about/careers", ariaLabel: "About Careers" },
    ],
  },
  {
    label: "Projects",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      {
        label: "Featured",
        href: "/projects/featured",
        ariaLabel: "Featured Projects",
      },
      {
        label: "Case Studies",
        href: "/projects/case-studies",
        ariaLabel: "Project Case Studies",
      },
    ],
  },
  {
    label: "Contact",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      {
        label: "Email",
        href: "mailto:info@company.com",
        ariaLabel: "Email us",
      },
      {
        label: "Twitter",
        href: "https://twitter.com/company",
        ariaLabel: "Twitter",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/company/company",
        ariaLabel: "LinkedIn",
      },
    ],
  },
];

// Example logo import (update the path and type as needed)
import logo from "@/assets/icons/logo.jpg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <CardNav
          logo={logo.src}
          logoAlt="Company Logo"
          items={items}
          baseColor="#000000"
          menuColor="#fff"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
