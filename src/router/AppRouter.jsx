import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingFallback from "@components/LoadingFallback/LoadingFallback";

const MainPage = lazy(() => import("@pages/MainPage/MainPage"));
const ComponentDetail = lazy(() =>
  import("@pages/ComponentDetail/ComponentDetail")
);
const NotFoundPage = lazy(() => import("@pages/NotFoundPage/NotFoundPage"));

function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/component/:slug" element={<ComponentDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
