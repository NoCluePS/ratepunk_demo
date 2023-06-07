import { Header } from "@/components/Header/Header";
import styles from "./page.module.scss";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { AppDownload } from '@/components/AppDownload/AppDownload';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className={styles.content}>
      <Header />
      <HeroSection />
      <AppDownload />
      <Footer />
    </main>
  );
}
