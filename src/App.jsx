import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/home/home";
import Navbar from "./components/Navbar/navbar";
import Chatbox from "./components/Chatbox/chatbox";
import AnimeDetails from "./pages/AnimeDetails/AnimeDetails";
function App() {
  return (
    <div className={styles.screen}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
      </Routes>
      <Chatbox />
    </div>
  );
}

export default App;
