export type DropdownProps = {
  value: string
  options: Array<{
    value: string
    label: string
  }>
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
