import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { MarketplaceProvider } from './contexts/MarketplaceContext';

function App() {

  return (
    <BrowserRouter>
      <MarketplaceProvider>
        <AppRoutes />
      </MarketplaceProvider>
    </BrowserRouter>
  )
}

export default App
