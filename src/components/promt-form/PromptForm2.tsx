"use client";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, TextField } from "@mui/material";
import { log } from "@/lib/shared/Logger";

const schema = z.object({
  prompt: z.string().min(10).max(500),
});

export function PromptForm2({
  onSubmit,
}: {
  onSubmit: (data: string) => void;
}) {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        log(data);
        onSubmit(data.prompt);
      })}
    >
      <Controller
        name="prompt"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            name="prompt"
            label="Analysis Prompt"
            fullWidth
            multiline
            rows={4}
          />
        )}
      />
      <Button type="submit" variant="contained">
        Analyze
      </Button>
    </form>
  );
}
