import { useTheme } from "@/Hooks";
import { StyleSheet } from "react-native";

export const styles = () => {
    const { Fonts, Colors, Layout } = useTheme()
    return StyleSheet.create({
        footer: {
            borderWidth: 1,
            borderColor: Colors.formBorder,
            padding: 10,
            marginTop: 20
        },
        box: {
            marginTop: 15,
            ...Layout.row
        },
        text: {
            ...Fonts.textRegular
        },
        btn: {
            backgroundColor: '#D9D9D9',
            borderRadius: 5,
            marginLeft: 30,
            height: 38,
            width: 110,
            overflow: 'hidden',
            ...Layout.rowCenter,
        }
    })
}