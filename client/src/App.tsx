import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Landing } from "./pages/Landing";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { AdminTraining } from "./pages/AdminTraining";
import { Profile } from "./pages/Profile";
import { Courses } from "./pages/Courses";
import { MyLearning } from "./pages/MyLearning";
import { MyNav } from "./pages/MyNav";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyNav />}>
          <Route index element={<Landing />}></Route>
          <Route path="sign-in" element={<SignIn />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="my-learning" element={<MyLearning />}></Route>
          <Route path="courses" element={<Courses />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="admin" element={<AdminTraining />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
