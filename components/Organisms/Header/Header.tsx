import { useEffect, useState } from "react";

import styles from "./Header.module.scss";

import * as Molecules from "@/components/Molecules";

function Header() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust opacity based on scroll position (0.5 minimum)
      const newOpacity = Math.max(1 - scrollY / 300, 0.95);

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.headerWrapper}
      style={{ opacity, position: "sticky", top: 0, zIndex: 9 }}
    >
      <div className={styles.headerContainer}>
        <div className={styles.leftContainer}>
          {/* <Molecules.Navbar />
          <Molecules.Breadcrumb /> */}
        </div>
        <div className={styles.rightContainer}>
          <Molecules.Logo />
        </div>
      </div>
    </div>
  );
}

export default Header;
