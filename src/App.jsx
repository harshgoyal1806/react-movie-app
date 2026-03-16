import { MovieProvider } from "./context/MovieContext";
import AppContent from "./AppContent";

const App = () => {
  return (
    <MovieProvider>
      <AppContent />
    </MovieProvider>
  );
};

export default App;
