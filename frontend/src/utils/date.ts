export function formatDateToFrench(ISOStringDate: string) {
  const date = new Date(ISOStringDate);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "short",
    // day: "numeric",
  });
}
