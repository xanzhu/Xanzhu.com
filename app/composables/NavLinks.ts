export interface NavLink {
  name: string
  url: string
}

export function useNavLinks(...pages: NavLink[]): Ref<NavLink[]> {
  const links = ref<NavLink[]>(pages)

  return links
}
