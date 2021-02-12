import { theme } from '../theme/theme';

type BackgroundType = () => string

const gradientLinear: BackgroundType = () => (`linear-gradient(-45deg, ${theme.colors?.background}, ${theme.colors?.pale}, ${theme.colors?.background})`)
const gradientRadial: BackgroundType = () => (`radial-gradient(${theme.colors?.white}, ${theme.colors?.background})`)

export { gradientLinear, gradientRadial }
