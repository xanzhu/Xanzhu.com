// International Date Detection
export function formatDate(string: string) {
  const { locale } = useI18n();
  const options: Object = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(string).toLocaleDateString(locale.value, options);
  return date;
}
