"use client";

import DailyChart from "@/components/DailyChart/DailyChart";
import { PromptForm2 } from "@/components/promt-form/PromptForm2";
import { useAIQuery } from "@/lib/client/hooks/useAiQuery";
import { log } from "@/lib/shared/Logger";
import styles from "../styles/page.module.css";

export default function Home() {
  const { mutate: trigger, data: aiData } = useAIQuery();
  log(aiData);

  return (
    <main className={styles.container}>
      <h1>Stock Analysis</h1>
      <p>Enter a stock symbol to get the latest stock data.</p>
      <div className={styles.formContainer}>
        <PromptForm2 onSubmit={trigger} />
      </div>
      <div className={styles.chartContainer}>
        <DailyChart />
      </div>
    </main>
  );
}
