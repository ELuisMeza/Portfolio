export const renderWithStrong = (text: string): string => {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const content = part.replace(/\*\*/g, "");
      return `<strong class="text-neutral-200 font-semibold">${content}</strong>`;
    }
    return `<span>${part}</span>`;
  }).join('');
}
