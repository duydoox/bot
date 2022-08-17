import { useTheme } from "@/Hooks"
import { StyleSheet } from "react-native"
import { useMemo } from "react"

export const useStyles = () => {
    const theme = useTheme()
    return useMemo(()=>{
        const { Images, Colors } = theme
        return StyleSheet.create({
            marketCap: {
                color: Colors.textLoss,
                marginLeft: 3
            },
            Images
        })
    }, [theme])
}