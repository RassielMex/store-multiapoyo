import "./App.css";
import { BrowserRouter } from "react-router";
import RouterComponent from "./routes/router";

function App() {
  return (
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  );
}

export default App;
