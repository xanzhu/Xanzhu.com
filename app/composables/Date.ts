// International Date Detection
export function formatDate(string: string) {
  const { locale } = useI18n()
  const options: object = { day: 'numeric', month: 'short', year: 'numeric' }
  const date = new Date(string).toLocaleDateString(locale.value, options)
  return date
}
