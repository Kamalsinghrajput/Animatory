
import styles from "./App.module.css";
import Chatbox from "./components/Chatbox/chatbox";
import Header from "./components/Header/header";
import Navbar from "./components/navbar/navbar";
// import Chatbox from "./components/ChatBox/chatbox";

function App() {
  console.log(styles)
  return (
    <div className={styles.screen}>
      <Navbar />
      <Header />
      <Chatbox/>
    </div>
  );
}

export default App;
