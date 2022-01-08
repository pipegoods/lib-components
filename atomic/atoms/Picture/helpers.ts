export const getWidth = (width: string | number): string =>
  typeof width === 'number' ? `${width}px` : width
