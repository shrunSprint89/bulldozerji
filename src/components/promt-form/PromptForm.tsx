import { useForm } from "react-hook-form";

export default function PromptForm({
  onSubmit,
}: {
  onSubmit: (data: string) => void;
}) {
  const { register, handleSubmit } = useForm();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data.prompt);
      })}
    >
      <input
        {...register("prompt", { required: true })}
        placeholder="Enter your prompt"
      />
      <button type="submit">Analyze</button>
    </form>
  );
}
