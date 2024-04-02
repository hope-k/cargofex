import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function CompanyLayout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
