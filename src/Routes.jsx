import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
const Masrofat = React.lazy(() => import("./pages/Masrofat/"));
const ProjectOverview = React.lazy(() => import("./pages/ProjectOverview"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<></>}>
      <Router>
        <Routes>
          <Route path="/" element={<ProjectOverview />} />
          <Route path="/overview" element={<ProjectOverview />} />
          <Route path="/masrofat" element={<Masrofat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
