/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ FontSize, Colors }) {
  return StyleSheet.create({
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.text,
    },
    textRegular: {
      fontSize: FontSize.regular,
      color: Colors.text,
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.text,
    },
    
    titleSmall: {
      fontSize: FontSize.small,
      fontWeight: 'bold',
      color: Colors.primary,
    },
    titleRegular: {
      fontSize: FontSize.regular,
      fontWeight: 'bold',
      color: Colors.primary,
    },
    titleLarge: {
      fontSize: FontSize.large,
      fontWeight: 'bold',
      color: Colors.primary,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
//
    textProfit: {
      fontSize: FontSize.small,
      color: Colors.textProfit
    },
    textLoss: {
      fontSize: FontSize.small,
      color: Colors.textLoss
    },
    titleProfit: {
      fontSize: FontSize.small,
      color: Colors.textProfit,
      fontWeight: 'bold'
    },
    titleLoss: {
      fontSize: FontSize.small,
      color: Colors.textLoss,
      fontWeight: 'bold'
    },
    titleBet: {
      fontSize: FontSize.small,
      color: Colors.titleBet,
      fontWeight: 'bold'
    }
  })
}
