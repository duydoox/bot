import { StyleSheet } from "react-native";
import { useTheme } from '@/Hooks'

const style = () => {
    const { NavigationTheme, Common, Gutters, Layout, Fonts, Images } = useTheme()
    const { colors } = NavigationTheme
    return StyleSheet.create({
        component: {
            ...Layout.fill,
            ...Layout.alignItemsCenter,
            ...Gutters.largeHPadding,
            backgroundColor: colors.primary
        },
    })
}

export default style