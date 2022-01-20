import Link from "next/link";

import styles from "./styles.module.css";

export default function Layout({ children, justifyContent = "center" }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link href="/">
          <a>
            tem<strong>crase</strong>?
          </a>
        </Link>
      </header>
      <main className={styles.main} style={{ justifyContent: justifyContent }}>
        <section className={styles.content}>{children}</section>
      </main>
      <footer className={styles.footer}>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link href="/tudo">
                <a>todos os termos</a>
              </Link>
            </li>
            <li>
              <Link href="/ajude">
                <a>ajude a melhorar</a>
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/gabrnunes/tem-crase"
                target="_blank"
                rel="noreferrer noopener"
              >
                código no github
              </a>
            </li>
            <li>
              <a
                href="https://nubank.com.br/pagar/5kho2/YC0361rW2e"
                target="_blank"
                rel="noreferrer noopener"
              >
                me pague um café
              </a>
            </li>
            <li>
              <Link href="/sobre">
                <a>sobre</a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
