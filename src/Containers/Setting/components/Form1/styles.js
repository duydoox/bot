import { useTheme } from "@/Hooks";
import { StyleSheet } from "react-native";

export const styles = () => {
    const { Fonts, Colors, Layout } = useTheme()
    return StyleSheet.create({
        form: {
            borderRadius: 10,
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: Colors.formBorder
        },
        buttonUpdate: {
            color: 'white',
            fontSize: 14,
            backgroundColor: Colors.primary,
            borderRadius: 5,
            width: 180,
            height: 35,
            fontWeight: 'normal'
        },
        text: {
            ...Fonts.textRegular
        },
        header: {
            ...Layout.rowCenter,
        },
        textButton: {
            ...Fonts.titleLarge,
            color: Colors.white,
        },
        buttonHeader: {
            backgroundColor: Colors.btnNoActive,
            paddingVertical: 6,
            paddingHorizontal: 1,
            width: '50%',
            flexDirection: 'row'
        },
        buttonHeaderContent: {
            width: '100%',
            paddingLeft: 8,
        },
        buttonActive:{
            backgroundColor: Colors.primary,
        },
        bodyForm: {
            padding: 8,
        },
        boxUpdate: {
            borderTopWidth: 1,
            // marginTop: 20,
            borderTopColor: Colors.formBorder,
            padding: 9,
            ...Layout.center,
        },
        boxInput: {
            marginBottom: 10
        },
        input: {
            backgroundColor: '#fff',
            height: 40,
            borderColor: Colors.inputBorder,
            color: Colors.text
        },
        unit: {
            height: '100%',
            width: 38,
            borderLeftWidth: 1,
            ...Layout.center,
            borderLeftColor: Colors.inputBorder,
        },
        connectBiance: {
            marginBottom: 10,
            ...Layout.rowHCenter
        },
        API: {
            backgroundColor: Colors.background1,
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
        }
    })
}