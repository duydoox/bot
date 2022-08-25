import { useTheme } from "@/Hooks"
import { StyleSheet } from "react-native"
import { useMemo } from "react"

export const useStyles = () => {
    const theme = useTheme()
    return useMemo(() => {
        const { Fonts, Colors, Layout, Images } = theme
        return StyleSheet.create({
            container: {
                marginBottom: 36,
            },
            title: {
                ...Layout.rowHCenter,
                paddingLeft: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#D9D9D9'
            },
            titleButton: {
                // fontWeight: 'bold',
                paddingVertical: 6,
                paddingHorizontal: 18,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5
            },
            headlist: {
                paddingHorizontal: 12,
                paddingVertical: 9,
                justifyContent: 'space-around',
                ...Layout.rowHCenter,
                backgroundColor: '#D9D9D9'
            },
            item: {
                paddingHorizontal: 12,
                paddingVertical: 12,
                justifyContent: 'space-around',
                ...Layout.row,
                borderBottomWidth: 1,
                borderBottomColor: '#D9D9D9'
            },
            name: {
                flex: 1,
            },
            purchasePrice: {
                flex: 1,
                textAlign: 'right',
            },
            price: {
                flex: 1,
                textAlign: 'right',
                marginRight: 20,
            },
            profitAndLoss: {
                flex: 1,
            },
            time: {
                flex: 1.4,
            },
            priceAll: {
                color: '#fff',
                backgroundColor: Colors.primary
            },
            Fonts,
            Layout
        })
    }, [theme])
}