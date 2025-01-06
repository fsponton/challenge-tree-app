import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotificationProvider } from "./contexts/NotificactionContext";
import { TreePage } from "./pages/TreePage/TreePage";
import { MainPage } from "./pages/MainPage";

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/treePage" element={<TreePage />} />
        </Routes>
      </Router>
    </NotificationProvider>
  );
};

export default App;