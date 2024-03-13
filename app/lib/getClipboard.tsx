type getClipboard = {
  text: string;
  error: string;
};

export const readClipboard = async (): Promise<getClipboard> => {
  try {
    const text = await navigator.clipboard.readText();
    return { text: text, error: "" };
  } catch (error) {
    console.error("Failed to read text from clipboard:", error);
    return { text: "", error: "Failed to read text from clipboard:" };
  }
};
