import { useTheme } from "@/Hooks"
import { StyleSheet } from "react-native"
import { useMemo } from "react"

export const useStyles = () => {
    const theme = useTheme()
    return useMemo(()=>{
        const { Fonts, Colors, Layout, Images } = theme
        return StyleSheet.create({
            head: {
                ...Layout.row,
                ...Layout.justifyContentBetween
            },
            Fonts
        })
    }, [theme])
}