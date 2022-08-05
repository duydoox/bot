import { useTheme } from "@/Hooks";
import { StyleSheet } from "react-native";

export const styles = () => {
    const { Fonts, Colors, Layout } = useTheme()
    return StyleSheet.create({
        container: {
            paddingHorizontal: 15,
            flex: 1
            // backgroundColor: 'red'
        },
        form: {
            borderRadius: 10,
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: Colors.formBorder
        },
        // buttonUpdate: {
        //     color: 'white',
        //     fontSize: 14,
        //     backgroundColor: Colors.primary,
        //     borderRadius: 5,
        //     width: 159,
        //     height: 28,
        //     fontWeight: 'normal'
        // },
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
            backgroundColor: 'red',
        },
        // boxUpdate: {
        //     borderTopWidth: 1,
        //     borderTopColor: Colors.formBorder,
        //     padding: 9,
        //     ...Layout.center,
        // },
        footer: {
            borderWidth: 1,
            borderColor: Colors.formBorder,
            padding: 10,
            marginTop: 20
        }
    })
}