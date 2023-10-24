import "./styles/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/routes/routes";
import { LangProvider } from "./providers/context/ui/LangProvider";

function App() {

  return (
    <LangProvider>
      <RouterProvider router={router} />
    </LangProvider>
  );
}

export default App;
