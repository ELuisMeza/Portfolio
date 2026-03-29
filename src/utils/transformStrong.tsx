export const renderWithStrong = (
  text: string,
  strongClass = "text-neutral-200 font-semibold",
): string => {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts
    .map((part) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const content = part.replace(/\*\*/g, "");
        return `<strong class="${strongClass}">${content}</strong>`;
      }
      return `<span>${part}</span>`;
    })
    .join("");
};
