import { useTheme } from "@/Hooks"
import { StyleSheet } from "react-native"
import { useMemo } from "react"

export const useStyles = () => {
    const theme = useTheme()
    return useMemo(()=>{
        const { Fonts, Colors, Layout, Images } = theme
        return StyleSheet.create({
            container: {
                marginBottom: 14,
            },
            statistical: {
                ...Layout.row,
                paddingBottom: 17
            },
            winAndLoss: {
                width: '50%',
                ...Layout.row
            },
            Fonts
        })
    }, [theme])
}