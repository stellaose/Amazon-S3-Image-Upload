import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const AppLayout = () => {
  return (
    <>
      <div className="bg-transparent">
        <Header />
        <div className="min-h-[90vh] mb-10  z-10">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
