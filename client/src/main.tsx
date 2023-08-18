import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import PharmacyProvider from "./context/PharmacyProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PharmacyProvider>
    <App />
  </PharmacyProvider>
);
