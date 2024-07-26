import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import AnimeDetails from "./pages/AnimeDetails/animeDetails";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import animeData from "./components/Header/animeData";
import mangaData from "./components/MangaHeader/mangaData";

function App() {
  return (
    <div className={styles.screen}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Header animeData={animeData} animeIdentifier="anime" />}
        />
        <Route path="/:category/:id" element={<AnimeDetails />} />

        <Route
          path="/manga"
          element={<Header animeData={mangaData} animeIdentifier="manga" />}
        />
      </Routes>

      {/* <Chatbox /> */}
    </div>
  );
}

export default App;
