import { defineConfig } from "vite";
import react from "@vitejs/react-refresh"; // или @vitejs/plugin-react в зависимости от твоей версии
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // 👈 ОБЯЗАТЕЛЬНО ДОБАВЬ ЭТУ СТРОКУ (слэши с двух сторон важны!)
});
