import Link from "next/link";

import styles from "./Logo.module.scss";

function Logo() {
  return (
    <Link href="/">
      <div className={styles.logoContainer}>
        <img alt="Logo" src="/images/wtfit-logo.png" />
      </div>
    </Link>
  );
}

export default Logo;
