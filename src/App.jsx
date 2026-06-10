import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EnquiryModal from "./components/EnquiryModal";
import AuthModals from "./components/AuthModals";

import Home from "./Pages/Home";
import Learn from "./Pages/Learn";
import Build from "./Pages/Build";
import Hire from "./Pages/Hire";
import Invest from "./Pages/Invest";
import Adopt from "./Pages/Adopt";

function Layout() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [enquiryAudience, setEnquiryAudience] = useState("individual");
  const [enquiryMessage, setEnquiryMessage] = useState("");

  const handleOpenEnquiry = (audience = "individual", message = "") => {
    setEnquiryAudience(audience);
    setEnquiryMessage(message);
    setEnquiryOpen(true);
  };

  const handleOpenAuth = (mode = "login") => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-primary)" }}>
      <Navbar onOpenEnquiry={() => handleOpenEnquiry("individual")} onOpenAuth={handleOpenAuth} />
      <main style={{ flex: 1, paddingTop: "80px" }}> {/* Navbar height offset */}
        <Outlet context={{ handleOpenEnquiry, handleOpenAuth }} />
      </main>
      <Footer />
      
      <EnquiryModal 
        open={enquiryOpen} 
        onClose={() => setEnquiryOpen(false)} 
        initialAudience={enquiryAudience}
        initialMessage={enquiryMessage}
      />
      
      <AuthModals 
        open={authOpen} 
        onClose={() => setAuthOpen(false)} 
        initialMode={authMode}
      />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/learn", element: <Learn /> },
      { path: "/build", element: <Build /> },
      { path: "/hire", element: <Hire /> },
      { path: "/invest", element: <Invest /> },
      { path: "/adopt", element: <Adopt /> },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
