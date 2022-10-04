import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import { LoginPage, ResetPasswordPage } from "../pages";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
