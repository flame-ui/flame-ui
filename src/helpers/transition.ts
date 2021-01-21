export const transition = (prop: string, d: number, timing = 'ease-in-out'): string => {
  return `
    transition-property: ${prop};
    transition-duration: ${d}s;
    transition-timing-function: ${timing};
  `
}
