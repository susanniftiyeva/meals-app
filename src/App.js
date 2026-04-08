import "./App.scss";  
import AppRoutes from "./pages/Route";
import { FavoriteProvider } from "./context/FavoriteContext";

function App() {
  return (
    <FavoriteProvider>
      <AppRoutes />
    </FavoriteProvider>
  );
}

export default App;