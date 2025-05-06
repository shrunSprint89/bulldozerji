export const log = (message: unknown, level: string = "info"): void => {
  if (message instanceof Error) {
    message = message.message;
  }
  if (typeof message !== "string") {
    message = JSON.stringify(message);
  }
  switch (level) {
    case "info":
      console.log(`[INFO] ${message}`);
      break;
    case "warn":
      console.warn(`[WARN] ${message}`);
      break;
    case "error":
      console.error(`[ERROR] ${message}`);
      break;
    default:
      console.log(`[INFO] ${message}`);
  }
};
