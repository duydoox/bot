import { useTheme } from "@/Hooks"
import { StyleSheet } from "react-native"
import { useMemo } from "react"

export const useStyles = () => {
    const theme = useTheme()
    return useMemo(() => {
        const { Fonts, Colors, Layout, Images } = theme
        return StyleSheet.create({
            container: {
                // marginBottom: 36,
            },
            head: {
                ...Layout.row,
                ...Layout.justifyContentAround,
                paddingVertical: 9,
                borderWidth: 1,
                borderColor: Colors.primary
            },
            item: {
                ...Layout.row,
                ...Layout.justifyContentAround,
                paddingVertical: 14,
                borderWidth: 1,
                borderColor: '#D9D9D9'
            },
            status: {
                flex: 1,
                paddingLeft: 10,
            },
            time: {
                flex: 1.8,
                paddingLeft: 10,
                justifyContent: 'center'
            },
            reason: {
                flex: 2,
                paddingLeft: 10
            },
            statusItem: {
                ...Layout.rowHCenter
            },
            Fonts
        })
    }, [theme])
}