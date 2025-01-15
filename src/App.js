// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";
// import Template from "./scenes/templates/template";
// import Invitations from "./scenes/Invitation/Invitations";
// import TemplateFrontend from "./components/Template/Template";
// import WeddingFrontend from "./components/Wedding/Wedding";
// function App() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="app">
//           <Sidebar isSidebar={isSidebar} />
//           <main className="content">
//             <Topbar setIsSidebar={setIsSidebar} />
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/team" element={<Team />} />
//               <Route path="/contacts" element={<Contacts />} />
//               <Route path="/invoices" element={<Invoices />} />
//               <Route path="/form" element={<Form />} />
//               <Route path="/bar" element={<Bar />} />
//               <Route path="/pie" element={<Pie />} />
//               <Route path="/line" element={<Line />} />
//               <Route path="/faq" element={<FAQ />} />
//               <Route path="/calendar" element={<Calendar />} />
//               <Route path="/geography" element={<Geography />} />
//               <Route path="/template" element={<Template />} />
//               <Route path="/invitations" element={<Invitations />} />
//               <Route path="/templetFrontend" element={<TemplateFrontend />} />
//               <Route path="/weddingFrontend" element={<WeddingFrontend />} />
//             </Routes>
//           </main>
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import LoginPage from "./scenes/auth/LoginPage"; // Login/Signup page
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Contacts from "./scenes/contacts";
// import Invoices from "./scenes/invoices";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar/calendar";
// import Template from "./scenes/templates/template";
// import TemplateFrontend from "./components/Template/Template";
// import WeddingFrontend from "./components/Wedding/Wedding";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";

// function App() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);
//   const [user, setUser] = useState(null); // User state: null -> not logged in, object -> logged in

//   // const handleLogin = (userData) => {
//   //   setUser(userData); // Example userData: { role: "Admin" or "User" }
//   // };
//   const handleLogin = (userData) => {
//     console.log(userData.email);
//     if (userData.email === "avinashmadhukar4@gmail.com") {
//       userData.role = "Admin";
//     } else {
//       userData.role = "User ";
//     }
//     setUser(userData); // Example userData: { role: "Admin" or "User " }
//   };

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {!user ? (
//           <LoginPage onLogin={handleLogin} />
//         ) : user.role === "Admin" ? (
//           <div className="app">
//             <Sidebar isSidebar={isSidebar} />
//             <main className="content">
//               <Topbar setIsSidebar={setIsSidebar} />
//               <Routes>
//                 <Route path="/" element={<Dashboard />} />
//                 <Route path="/team" element={<Team />} />
//                 <Route path="/contacts" element={<Contacts />} />
//                 <Route path="/invoices" element={<Invoices />} />
//                 <Route path="/form" element={<Form />} />
//                 <Route path="/bar" element={<Bar />} />
//                 <Route path="/pie" element={<Pie />} />
//                 <Route path="/line" element={<Line />} />
//                 <Route path="/faq" element={<FAQ />} />
//                 <Route path="/calendar" element={<Calendar />} />
//                 <Route path="/geography" element={<Geography />} />
//                 <Route path="/template" element={<Template />} />
//                 <Route path="*" element={<Navigate to="/" />} />
//               </Routes>
//             </main>
//           </div>
//         ) : (
//           <Routes>
//             <Route
//               path="/templateFrontend"
//               element={
//                 <TemplateFrontend
//                   onNavigate={() => navigate("/weddingFrontend")}
//                 />
//               }
//             />
//             <Route path="/weddingFrontend" element={<WeddingFrontend />} />
//             <Route path="*" element={<Navigate to="/templateFrontend" />} />
//           </Routes>
//         )}
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import LoginPage from "./scenes/auth/LoginPage"; // Login/Signup page
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Contacts from "./scenes/contacts";
// import Invoices from "./scenes/invoices";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar/calendar";
// import Template from "./scenes/templates/template";
// import TemplateFrontend from "./components/Template/Template";
// import WeddingFrontend from "./components/Wedding/Wedding";
// import AnniversaryFrontend from "./components/Anniversary/anniversary";
// import Invitations from "./scenes/Wedding/Invitations";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
// import BirthdayFrontend from "./components/Birthday/Birthday";
// import Birthday from "./scenes/Birthday/bithday";
// import AnniversaryTable from "./scenes/Anniversary/anniversary";
// import Navbar from "./Components/LandingPage/Navbar";
// import Pricing from "./Components/LandingPage/Pricing";
// import Footer from "./Components/LandingPage/Footer";
// import About from "./Components/About/About";
// import HomePage from "./Components/LandingPage/HomePage";
// import ScrollToTop from "./components/ScrollToTop";
// function App() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);
//   const [user, setUser] = useState(null); // User state: null -> not logged in, object -> logged in
//   const navigate = useNavigate();

//   // Handle login functionality
//   const handleLogin = (userData) => {
//     console.log(userData.email);
//     userData.role =
//       userData.email === "avinashmadhukar4@gmail.com" ? "Admin" : "User";
//     setUser(userData);
//   };

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {!user ? (
//           // Render Login Page when user is not logged in
//           <LoginPage onLogin={handleLogin} />
//         ) : user.role === "Admin" ? (
//           // Admin Panel
//           <div className="app">
//             <Sidebar isSidebar={isSidebar} />
//             <main className="content">
//               <Topbar setIsSidebar={setIsSidebar} />
//               <Routes>
//                 <Route path="/" element={<Dashboard />} />
//                 <Route path="/team" element={<Team />} />
//                 <Route path="/contacts" element={<Contacts />} />
//                 <Route path="/invoices" element={<Invoices />} />
//                 <Route path="/form" element={<Form />} />
//                 <Route path="/bar" element={<Bar />} />
//                 <Route path="/pie" element={<Pie />} />
//                 <Route path="/line" element={<Line />} />
//                 <Route path="/faq" element={<FAQ />} />
//                 <Route path="/calendar" element={<Calendar />} />
//                 <Route path="/geography" element={<Geography />} />
//                 <Route path="/template" element={<Template />} />
//                 <Route path="/invitations" element={<Invitations />} />
//                 <Route path="/birthday" element={<Birthday />} />
//                 <Route
//                   path="/anniversaryTable"
//                   element={<AnniversaryTable />}
//                 />
//                 <Route path="*" element={<Navigate to="/" />} />
//               </Routes>
//             </main>
//           </div>
//         ) : (
//           // User Panel
//           <Routes>
//             <Route
//               path="/anniversaryFrontend"
//               element={<AnniversaryFrontend />}
//             />
//             <Route path="/birthdayFrontend" element={<BirthdayFrontend />} />
//             <Route path="/templateFrontend" element={<TemplateFrontend />} />
//             <Route path="/weddingFrontend" element={<WeddingFrontend />} />

//             <Route path="*" element={<Navigate to="/templateFrontend" />} />
//           </Routes>
//         )}
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import LoginPage from "./scenes/auth/LoginPage"; // Login/Signup page
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Contacts from "./scenes/contacts";
// import Invoices from "./scenes/invoices";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar/calendar";
// import Template from "./scenes/templates/template";
// import TemplateFrontend from "./components/Template/Template";
// import WeddingFrontend from "./components/Wedding/Wedding";
// import AnniversaryFrontend from "./components/Anniversary/anniversary";
// import Invitations from "./scenes/Wedding/Invitations";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
// import BirthdayFrontend from "./components/Birthday/Birthday";
// import Birthday from "./scenes/Birthday/bithday";
// import AnniversaryTable from "./scenes/Anniversary/anniversary";
// import Navbar from "./components/LandingPage/Navbar";
// import Footer from "./components/LandingPage/Footer";
// import About from "./components/About/About";
// import HomePage from "./components/LandingPage/HomePage";
// import ScrollToTop from "./components/ScrollToTop";
// import "./App.css";

// function App() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);
//   const [user, setUser] = useState(null); // User state: null -> not logged in, object -> logged in
//   const navigate = useNavigate();

//   // Handle login functionality
//   const handleLogin = (userData) => {
//     userData.role =
//       userData.email === "avinashmadhukar4@gmail.com" ? "Admin" : "User";
//     setUser(userData);
//   };

//   if (!user) {
//     // Landing Page (Before Login)
//     return (
//       <ThemeProvider theme={theme}>
//         // <CssBaseline />
//         <ScrollToTop />
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/template" element={<Template />} />
//           <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
//         </Routes>
//         <Footer />
//       </ThemeProvider>
//     );
//   }

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {user.role === "Admin" ? (
//           // Admin Panel
//           <div className="app">
//             <Sidebar isSidebar={isSidebar} />
//             <main className="content">
//               <Topbar setIsSidebar={setIsSidebar} />
//               <Routes>
//                 <Route path="/" element={<Dashboard />} />
//                 <Route path="/team" element={<Team />} />
//                 <Route path="/contacts" element={<Contacts />} />
//                 <Route path="/invoices" element={<Invoices />} />
//                 <Route path="/form" element={<Form />} />
//                 <Route path="/bar" element={<Bar />} />
//                 <Route path="/pie" element={<Pie />} />
//                 <Route path="/line" element={<Line />} />
//                 <Route path="/faq" element={<FAQ />} />
//                 <Route path="/calendar" element={<Calendar />} />
//                 <Route path="/geography" element={<Geography />} />
//                 <Route path="/template" element={<Template />} />
//                 <Route path="/invitations" element={<Invitations />} />
//                 <Route path="/birthday" element={<Birthday />} />
//                 <Route
//                   path="/anniversaryTable"
//                   element={<AnniversaryTable />}
//                 />
//                 <Route path="*" element={<Navigate to="/" />} />
//               </Routes>
//             </main>
//           </div>
//         ) : (
//           // User Panel
//           <Routes>
//             <Route
//               path="/anniversaryFrontend"
//               element={<AnniversaryFrontend />}
//             />
//             <Route path="/birthdayFrontend" element={<BirthdayFrontend />} />
//             <Route path="/templateFrontend" element={<TemplateFrontend />} />
//             <Route path="/weddingFrontend" element={<WeddingFrontend />} />

//             <Route path="*" element={<Navigate to="/templateFrontend" />} />
//           </Routes>
//         )}
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import LoginPage from "./scenes/auth/LoginPage"; // Login/Signup page
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Contacts from "./scenes/contacts";
// import Invoices from "./scenes/invoices";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar/calendar";
// import Template from "./scenes/templates/template";
// import TemplateFrontend from "./components/Template/Template";
// import WeddingFrontend from "./components/Wedding/Wedding";
// import AnniversaryFrontend from "./components/Anniversary/anniversary";
// import Invitations from "./scenes/Wedding/Invitations";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
// import BirthdayFrontend from "./components/Birthday/Birthday";
// import Birthday from "./scenes/Birthday/bithday";
// import AnniversaryTable from "./scenes/Anniversary/anniversary";
// import Navbar from "./components/LandingPage/Navbar";
// import Footer from "./components/LandingPage/Footer";
// import About from "./components/About/About";
// import HomePage from "./components/LandingPage/HomePage";
// import ScrollToTop from "./components/ScrollToTop";
// import "./App.css";

// function App() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);
//   const [user, setUser] = useState(null); // User state: null -> not logged in, object -> logged in
//   const navigate = useNavigate();

//   // Handle login functionality
//   const handleLogin = (userData) => {
//     userData.role =
//       userData.email === "avinashmadhukar4@gmail.com" ? "Admin" : "User";
//     setUser(userData);
//   };

//   if (!user) {
//     // Landing Page (Before Login)
//     return (
//       <ThemeProvider theme={theme}>
//         // <CssBaseline />
//         <ScrollToTop />
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/template" element={<Template />} />
//           <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
//         </Routes>
//         <Footer />
//       </ThemeProvider>
//     );
//   }

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {user.role === "Admin" ? (
//           // Admin Panel
//           <div className="app">
//             <Sidebar isSidebar={isSidebar} />
//             <main className="content">
//               <Topbar setIsSidebar={setIsSidebar} />
//               <Routes>
//                 <Route path="/" element={<Dashboard />} />
//                 <Route path="/team" element={<Team />} />
//                 <Route path="/contacts" element={<Contacts />} />
//                 <Route path="/invoices" element={<Invoices />} />
//                 <Route path="/form" element={<Form />} />
//                 <Route path="/bar" element={<Bar />} />
//                 <Route path="/pie" element={<Pie />} />
//                 <Route path="/line" element={<Line />} />
//                 <Route path="/faq" element={<FAQ />} />
//                 <Route path="/calendar" element={<Calendar />} />
//                 <Route path="/geography" element={<Geography />} />
//                 <Route path="/template" element={<Template />} />
//                 <Route path="/invitations" element={<Invitations />} />
//                 <Route path="/birthday" element={<Birthday />} />
//                 <Route
//                   path="/anniversaryTable"
//                   element={<AnniversaryTable />}
//                 />
//                 <Route path="*" element={<Navigate to="/" />} />
//               </Routes>
//             </main>
//           </div>
//         ) : (
//           // User Panel
//           <Routes>
//             <Route
//               path="/anniversaryFrontend"
//               element={<AnniversaryFrontend />}
//             />
//             <Route path="/birthdayFrontend" element={<BirthdayFrontend />} />
//             <Route path="/templateFrontend" element={<TemplateFrontend />} />
//             <Route path="/weddingFrontend" element={<WeddingFrontend />} />

//             <Route path="*" element={<Navigate to="/templateFrontend" />} />
//           </Routes>
//         )}
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
// import LoginPage from "./scenes/auth/LoginPage"; // Login/Signup page
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Template from "./scenes/templates/template";
// import HomePage from "./components/LandingPage/HomePage";
// import Navbar from "./components/LandingPage/Navbar";
// import Footer from "./components/LandingPage/Footer";
// import ScrollToTop from "./components/ScrollToTop";
// import About from "./components/About/About";
// import AnniversaryFrontend from "./components/Anniversary/anniversary";
// import BirthdayFrontend from "./components/Birthday/Birthday";
// import TemplateFrontend from "./components/Template/TemplateCard";
// import TemplateFrontendMid from "./components/Template/TemplateMid";
// import WeddingFrontend from "./components/Wedding/Wedding";
// import Team from "./scenes/team";
// import Contacts from "./scenes/contacts";
// import Invoices from "./scenes/invoices";
// import Form from "./scenes/form";
// import Pie from "./scenes/pie";
// import Bar from "./scenes/bar";
// import Line from "./scenes/line";
// import FAQ from "./scenes/faq";
// import Calendar from "./scenes/calendar/calendar";
// import Geography from "./scenes/geography";
// import Invitations from "./scenes/Wedding/Invitations";
// import Birthday from "./scenes/Birthday/bithday";
// import AnniversaryTable from "./scenes/Anniversary/anniversary";
// import WebPageTemplate from "./components/Template/Template";
// import ContactForm from "./components/ContactForm/contactForm";

// import DashboardSuperAdmin from "./superAdminScences/dashboard";
// import FAQSuperAdmin from "./superAdminScences/faq";
// import GeographySuperAdmin from "./superAdminScences/geography";
// import InvoiceSuperAdmin from "./superAdminScences/invoices";
// import LineSuperAdmin from "./superAdminScences/line";
// import PieSuperAdmin from "./superAdminScences/pie";
// import "./App.css";

// function App() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);
//   const [user, setUser] = useState(null); // User state: null -> not logged in, object -> logged in
//   const navigate = useNavigate();

//   // Handle login functionality
//   const handleLogin = (userData) => {
//     userData.role =
//       userData.email === "avinashmadhukar4@gmail.com" ? "Admin" : "User ";
//     setUser(userData);
//   };

//   if (!user) {
//     // Landing Page (Before Login)
//     return (
//       <ThemeProvider theme={theme}>
//         <ScrollToTop />
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contactForm" element={<ContactForm />} />
//           <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
//           <Route path="/WebtemplatePage" element={<WebPageTemplate />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//         <Footer />
//       </ThemeProvider>
//     );
//   }

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {user.role === "Admin" ? (
//           // Admin Panel
//           <div className="app">
//             <Sidebar isSidebar={isSidebar} />
//             <main className="content">
//               <Topbar setIsSidebar={setIsSidebar} />
//               <Routes>
//                 <Route path="/" element={<Dashboard />} />
//                 <Route path="/team" element={<Team />} />
//                 <Route path="/contacts" element={<Contacts />} />
//                 <Route path="/invoices" element={<Invoices />} />
//                 <Route path="/form" element={<Form />} />
//                 <Route path="/bar" element={<Bar />} />
//                 <Route path="/pie" element={<Pie />} />
//                 <Route path="/line" element={<Line />} />
//                 <Route path="/faq" element={<FAQ />} />
//                 <Route path="/calendar" element={<Calendar />} />
//                 <Route path="/geography" element={<Geography />} />
//                 <Route path="/template" element={<Template />} />
//                 <Route path="/invitations" element={<Invitations />} />
//                 <Route path="/birthday" element={<Birthday />} />
//                 <Route
//                   path="/anniversaryTable"
//                   element={<AnniversaryTable />}
//                 />
//                 <Route path="*" element={<Navigate to="/" />} />
//               </Routes>
//             </main>
//           </div>
//         ) : (
//           // User Panel
//           <Routes>
//             <Route
//               path="/anniversaryFrontend"
//               element={<AnniversaryFrontend />}
//             />
//             <Route path="/birthdayFrontend" element={<BirthdayFrontend />} />
//             <Route path="/templateFrontend" element={<TemplateFrontend />} />
//             <Route path="/weddingFrontend" element={<WeddingFrontend />} />

//             <Route path="*" element={<Navigate to="/templateFrontend" />} />
//           </Routes>
//         )}
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;

import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import LoginPage from "./scenes/auth/LoginPage"; // Login/Signup page
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Template from "./scenes/templates/template";
import HomePage from "./components/LandingPage/HomePage";
import Navbar from "./components/LandingPage/Navbar";
import Footer from "./components/LandingPage/Footer";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About/About";
import AnniversaryFrontend from "./components/Anniversary/anniversary";
import BirthdayFrontend from "./components/Birthday/Birthday";
import TemplateFrontend from "./components/Template/TemplateCard";
import WeddingFrontend from "./components/Wedding/Wedding";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Pie from "./scenes/pie";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar/calendar";
import Geography from "./scenes/geography";
import Invitations from "./scenes/Wedding/Invitations";
import Birthday from "./scenes/Birthday/bithday";
import AnniversaryTable from "./scenes/Anniversary/anniversary";
import WebPageTemplate from "./components/Template/Template";
import ContactForm from "./components/ContactForm/contactForm";
import WeddingFormAdmin from "./scenes/WeddingNewAdmin/HerSecForm";
import WeddingNewFrontend from "./components/WeddingNew/HeroSec";
import WeddingList from "./scenes/WeddingList.jsx/weddingList";

import DashboardSuperAdmin from "./superAdminScences/dashboard";
import FAQSuperAdmin from "./superAdminScences/faq";
import GeographySuperAdmin from "./superAdminScences/geography";
import InvoiceSuperAdmin from "./superAdminScences/invoices";
import LineSuperAdmin from "./superAdminScences/line";
import PieSuperAdmin from "./superAdminScences/pie";
import TopbarSuperAdmin from "./superAdminScences/global/Topbar";
import SidebarSuperAdmin from "./superAdminScences/global/Sidebar";
import SubscriptionTableSuperAdmin from "./superAdminScences/subscription/subscription";
import TeamSuperAdmin from "./superAdminScences/team/index";
import WeddingListSuperAdmin from "./superAdminScences/WeddingList.jsx/weddingListSuperAdmin";
import WeddingBackupDataSuperAdmin from "./superAdminScences/BackupWedding/backupWeddingdata";
import WeddingInterestedData from "./superAdminScences/WeddingInterested/weddingInterested";
import "./App.css";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [user, setUser] = useState(null); // User state: null -> not logged in, object -> logged in
  const navigate = useNavigate();

  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data: ", formData);
  };
  // Handle login functionality
  const handleLogin = (userData) => {
    console.log("Login data:", userData);

    // Check credentials and set role
    if (userData.email === "avinash25di@gmail.com") {
      userData.role = "SuperAdmin";
    } else if (userData.email === "avinashmadhukar4@gmail.com") {
      userData.role = "Admin";
    } else {
      userData.role = "User ";
    }

    setUser(userData);

    // Use the navigate hook to redirect after login
    if (userData.role === "SuperAdmin") {
      navigate("/superadmin-dashboard"); // Redirect to SuperAdmin dashboard
    } else if (userData.role === "Admin") {
      navigate("/admin-dashboard"); // Redirect to Admin dashboard
    } else {
      navigate("/user-dashboard"); // Redirect to User dashboard
    }
  };

  if (!user) {
    // Landing Page (Before Login)
    return (
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactForm" element={<ContactForm />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/WebtemplatePage" element={<WebPageTemplate />} />
          <Route path="/WeddingNewFrontend" element={<WeddingNewFrontend />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    );
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {user.role === "SuperAdmin" ? (
          // Super Admin Panel
          <div className="app">
            <SidebarSuperAdmin isSidebar={isSidebar} />
            <main className="content">
              <TopbarSuperAdmin setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<DashboardSuperAdmin />} />
                <Route path="/faq" element={<FAQSuperAdmin />} />
                <Route path="/geography" element={<GeographySuperAdmin />} />
                <Route path="/invoices" element={<InvoiceSuperAdmin />} />
                <Route path="/line" element={<LineSuperAdmin />} />
                <Route path="/pie" element={<PieSuperAdmin />} />
                <Route
                  path="/subscription"
                  element={<SubscriptionTableSuperAdmin />}
                />
                <Route path="/team" element={<TeamSuperAdmin />} />
                <Route
                  path="/weddingListSuperAdmin"
                  element={<WeddingListSuperAdmin />}
                />
                <Route
                  path="/weddingBackupDataSuperAdmin"
                  element={<WeddingBackupDataSuperAdmin />}
                />
                <Route
                  path="/weddingInterestedData"
                  element={<WeddingInterestedData />}
                />

                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </div>
        ) : user.role === "Admin" ? (
          // Admin Panel
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/template" element={<Template />} />
                <Route path="/invitations" element={<Invitations />} />
                <Route path="/birthday" element={<Birthday />} />
                <Route path="/weddingList" element={<WeddingList />} />
                <Route
                  path="/anniversaryTable"
                  element={<AnniversaryTable />}
                />
                <Route
                  path="/weddingFormAdmin"
                  element={<WeddingFormAdmin onSubmit={handleFormSubmit} />}
                />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </div>
        ) : (
          // User Panel
          <Routes>
            <Route
              path="/anniversaryFrontend"
              element={<AnniversaryFrontend />}
            />
            <Route path="/birthdayFrontend" element={<BirthdayFrontend />} />
            <Route path="/templateFrontend" element={<TemplateFrontend />} />
            <Route path="/weddingFrontend" element={<WeddingFrontend />} />
            <Route path="*" element={<Navigate to="/templateFrontend" />} />
          </Routes>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
