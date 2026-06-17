import { createRoot } from "react-dom/client";
import "./index.scss"; // Общие глобальные стили (обнуление, шрифты)
import App from "./App.jsx";
import "./i18n/index"

createRoot(document.getElementById("root")).render(<App />);
