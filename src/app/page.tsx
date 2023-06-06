import { Header } from "@/components/Header/Header";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.content}>
      <Header />
    </main>
  );
}
