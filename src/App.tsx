import { Routes, Route } from "react-router-dom";
import AdminNavigator from "./modules/admins/routes";
import { FC } from "react";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TeacherNavigator from "./modules/Teachers/routes";
import LandingPage from "./page/landingpage";

const App: FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="admin/*" element={<AdminNavigator />} />
          <Route path="teacher/*" element={<TeacherNavigator />} />
          {/* <Route path="parent/*" element={<TeacherNavigator />} /> */}
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
