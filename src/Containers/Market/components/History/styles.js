import { useTheme } from "@/Hooks"
import { StyleSheet } from "react-native"
import { useMemo } from "react"

export const useStyles = () => {
    const theme = useTheme()
    return useMemo(()=>{
        const { Fonts, Colors, Layout, Images } = theme
        return StyleSheet.create({
            container: {
                ...Layout.rowHCenter,
                ...Layout.justifyContentBetween,
                // height: '100%'
            },
            text: {
                ...Fonts.titleSmall
            },
            imgNext: Images.next,
        })
    }, [theme])
}