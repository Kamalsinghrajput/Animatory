import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { BiCategoryAlt } from "react-icons/bi";
import { SiMyanimelist } from "react-icons/si";
import { FaAutoprefixer, FaFireAlt } from "react-icons/fa";
import images from "../../constants/images";
import { useState, useEffect } from "react";

const URL = `https://api.jikan.moe/v4/anime`;

function Navbar() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [menuStatus, setMenuStatus] = useState(false);

  function menuHandler(e) {
    setMenuStatus(false);
  }
  useEffect(() => {
    const body = document.querySelector("body");
    body.addEventListener("click", menuHandler);
    return () => {
      body.removeEventListener("click", menuHandler);
    };
  }, [menuStatus]);

  const handleChange = async (e) => {
    setLoading(true);
    setInput(e.target.value);
    try {
      const response = await fetch(`${URL}?q=${input}`);
      const { data } = await response.json();
      setData(data);
      setMenuStatus(true);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const processChange = debounce((e) => handleChange(e));

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftPanel}>
        <div>
          <img className={styles.logo} src={images.logo} alt="" />
        </div>

        <ul className={styles.navList}>
          {[
            {
              title: "Anime",
              icon: <FaAutoprefixer />,
              href: "/",
            },
            {
              title: "Manga",
              icon: <SiMyanimelist />,
              href: "/manga",
            },
          ].map(({ title, icon, href }, index) => {
            return (
              <li key={index}>
                <Link className={styles.navLink} to={href}>
                  {icon}
                  <span>{title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.searchBar}>
          <input
            className={styles.input}
            placeholder="Search..."
            // value={input}
            onChange={processChange}
          />
          {menuStatus ? (
            <div onClick={menuHandler} className={styles.searchResults}>
              {data?.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className={styles.link}
                    to={`/anime/${item.mal_id}`}
                  >
                    <div className={styles.searchImage}>
                      <div className={styles.titleName}> {item.title}</div>
                      <div>
                        <img
                          className={styles.animeImage}
                          src={item.images.jpg.small_image_url}
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
