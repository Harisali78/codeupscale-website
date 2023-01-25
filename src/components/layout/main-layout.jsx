import Contact from "../contact-us/contact";
import FooterComponent from "../footer/footer";
import Header from "../header/header";

const MainLayout = ({ children }) => {
  return (
    <>
      <main>
        <Header />
        {children}
        <Contact />
        <FooterComponent />
      </main>
    </>
  );
};

export default MainLayout;
