import { Suspense } from "react";
import Loading from "./components/ui/Loading";
import { SkeletonTheme } from "react-loading-skeleton";
import BrowserRouter from "./routes/BrowserRouter";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <Suspense
      fallback={
        <section className=" w-full h-screen flex items-center justify-center">
          <Loading />
        </section>
      }
    >
      <SkeletonTheme baseColor="#8d8d8d" highlightColor="#ccc">
        <BrowserRouter />
      </SkeletonTheme>
    </Suspense>
  );
}

export default App;
