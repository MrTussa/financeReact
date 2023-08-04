import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Main } from "./Pages";
import { Layout } from "./components";
function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Main />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
