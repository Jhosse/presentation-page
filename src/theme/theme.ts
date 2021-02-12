import { Theme } from 'theme-ui'
import { typography } from './typography'
import { globalStyles } from './globalStyles'

export const theme: Theme = {
  colors: {
    text: '#272625',
    background: '#EAE7DC',
    // primary: '',
    // secondary: '',
    // accent: '',
    // muted: '',
    black: '#1E1C1D',
    grey: '#8E8D8A',
    white: '#FFF',
    pale: '#FAF3E6'
  },
  ...typography,
  lineHeights: {
    normal: 1.5,
    medium: 1.4,
  },
  styles: {
    root: globalStyles,
  }
}
