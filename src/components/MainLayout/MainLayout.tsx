import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import MyAccountSidebar from "../MyAccountSidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";

interface MainLayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, darkMode }) => {
  const [user] = useAuthState(auth);

  return (
    <>
      <Header darkMode={darkMode} />
      <div className="flex">
        {user && <MyAccountSidebar />}
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
