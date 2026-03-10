import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import { AuthProvider } from "./context/AuthContext";
import MainLayout from "./components/layout/MainLayout";

import NotFound from "./pages/NotFound";
import { APP_ROUTES } from "./appConstant";
import { Spinner } from "./components/spinner/Spinner";
import { RouteGuard } from "./components/layout/RouteGuards";

const App: React.FC = () => {
  return (
    <GlobalContextProvider>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route element={<MainLayout />}>
                {APP_ROUTES.map(({ path, Component, routeType }) => (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <RouteGuard routeType={routeType}>
                        <Component />
                      </RouteGuard>
                    }
                  />
                ))}
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </GlobalContextProvider>
  );
};

export default App;
