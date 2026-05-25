// This layout wraps all (marketing) routes.
// The home page (page.tsx) renders its own Navbar/Footer.
// The case-studies/* pages need Navbar/Footer from here.
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
