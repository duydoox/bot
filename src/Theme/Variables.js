/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  primary: '#1B1B1B',
  inputBorderLogin: '#fff',
  textLogin: '#fff',
  
  transparent: 'black',
  inputBackground: 'black',
  inputBorder: '#9E9E9E',
  formBorder: '#E9E9E9',
  checkbox: '#2A6FB0',
  background1: '#F3F3F3',
  btnNoActive: '#6C6C6C',
  text: '#000000',
  white: '#fff',

  tabBarFocused: '#858585',
  success: '#28a745',
  error: '#dc3545',
}

export const NavigationColors = {
  primary: Colors.primary,
  card: Colors.white,
  background: Colors.white
}

/**
 * FontSize
 */
export const FontSize = {
  small: 12,
  regular: 14,
  large: 16,
}

/**
 * Metrics Sizes
 */
const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30
const xlarge = large * 2
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
  xlarge
}

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
}
