export const COLORS = {
  black: '0, 0%, 0%',                //#000000
  backgroundDark: '230, 33%, 21%',   //#232946
  backgroundLight: '231, 48%, 89%',  //#d4d8f0
  white: '60, 100%, 100%',           //#fffffe
  mediumText: '230, 58%, 82%',       //#b8c1ec
  accent: '351, 60%, 83%',           //#eebbc3
  tertiary: '351, 43%, 70%',         //#d4939d
  stroke: '230, 39%, 12%',           //#121629
}

export const WEIGHTS = {
  normal: 400,
  medium: 500,
  bold: 900,
}

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
}

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
}
