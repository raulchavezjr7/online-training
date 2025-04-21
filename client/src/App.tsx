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
import { Profile } from "./pages/Profile";
import { MyLearning } from "./pages/MyLearning";
import { MyNav } from "./components/MyNav";
import { Footer } from "./components/Footer";
import { AboutUs } from "./pages/AboutUs";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsConditions } from "./pages/TermsConditions";
import { FAQ } from "./pages/FAQ";
import { useAuth } from "react-oidc-context";
import { Loading } from "./pages/Loading";

const ScrollToTop = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  const [course, setCourse] = useState("");
  const { isAuthenticated, isLoading } = useAuth();
  const [ updateGlobalUserData, setUpdateGlobalUserData ] = useState(0);
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<MyNav updateUserData={updateGlobalUserData} />}>
            <Route index element={<Landing />}></Route>
            <Route
              path="home"
              element={
                isLoading ? (
                  <Loading />
                ) : isAuthenticated ? (
                  <Home setCourse={setCourse} />
                ) : (
                  <Navigate to="/" />
                )
              }
            ></Route>
            <Route
              path="my-learning/"
              element={
                isLoading ? (
                  <Loading />
                ) : isAuthenticated ? (
                  <MyLearning propCourse={course} updateUserData={setUpdateGlobalUserData} userDataStatus={updateGlobalUserData}/>
                ) : (
                  <Navigate to="/" />
                )
              }
            ></Route>
            <Route
              path="profile"
              element={
                isLoading ? (
                  <Loading />
                ) : isAuthenticated ? (
                  <Profile />
                ) : (
                  <Navigate to="/" />
                )
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
