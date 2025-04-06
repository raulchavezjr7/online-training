import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { ReactNode, useLayoutEffect, useState } from "react";
import { NotFound } from "./pages/NotFound";
import { Landing } from "./pages/Landing";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { TeamDashboard } from "./pages/TeamDashboard";
import { Profile } from "./pages/Profile";
import { MyLearning } from "./pages/MyLearning";
import { MyNav } from "./components/MyNav";
import { Footer } from "./components/Footer";
import { AboutUs } from "./pages/AboutUs";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsConditions } from "./pages/TermsConditions";
import { FAQ } from "./pages/FAQ";

const ScrollToTop = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  const [user, setUser] = useState(-1);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<MyNav user={user} />}>
            <Route index element={<Landing />}></Route>
            <Route
              path="sign-in"
              element={<SignIn setUser={setUser} />}
            ></Route>
            <Route
              path="home"
              element={user === -1 ? <Navigate to="/" /> : <Home />}
            ></Route>
            <Route
              path="my-learning"
              element={
                user === -1 ? <Navigate to="/" /> : <MyLearning />
              }
            ></Route>
            <Route
              path="profile"
              element={user === -1 ? <Navigate to="/" /> : <Profile />}
            ></Route>
            <Route
              path="team-dashboard"
              element={
                user === -1 ? <Navigate to="/" /> : <TeamDashboard />
              }
            ></Route>
            <Route path="about-us" element={<AboutUs />}></Route>
            <Route path="privacy-policy" element={<PrivacyPolicy />}></Route>
            <Route
              path="terms-conditions"
              element={<TermsConditions />}
            ></Route>
            <Route path="faq" element={<FAQ />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </ScrollToTop>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
