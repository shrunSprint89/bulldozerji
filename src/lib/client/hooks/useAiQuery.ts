import { log } from "@/lib/shared/Logger";
import { useMutation } from "@tanstack/react-query";

export function useAIQuery() {
  return useMutation({
    mutationFn: async (prompt: string) => {
      log(prompt);
      const res = await fetch("/api/ai", {
        method: "POST",
        body: JSON.stringify({ prompt }),
      });
      log(res.json());
      return res.json();
    },
  });
}
