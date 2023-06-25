import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./style.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className={styles.heading}>
        Hello World, and welcome to the about Us Page
      </h1>
    </main>
  );
}
