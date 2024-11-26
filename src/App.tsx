import "./App.css";
import { BrowserRouter } from "react-router";
import RouterComponent from "./routes/router";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterComponent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
