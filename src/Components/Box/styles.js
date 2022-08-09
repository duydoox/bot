import { StyleSheet } from "react-native";
import { useMemo } from "react";
import { useTheme } from "@/Hooks";

export const useStyles = () => {
    const theme = useTheme()
    return useMemo(()=>{
        const {Colors} = theme
        return StyleSheet.create({
            container: {
                width: '100%',
                minHeight: 28,
                padding: 10,
                borderWidth: 1,
                borderColor: Colors.inputBorder,
                borderRadius: 5
            }
        })
    }, [theme])
}