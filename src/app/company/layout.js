import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function CompanyLayou({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
