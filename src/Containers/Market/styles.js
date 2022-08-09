import { useTheme } from "@/Hooks"
import { StyleSheet } from "react-native"
import { useMemo } from "react"

export const useStyles = () => {
    const theme = useTheme()
    return useMemo(()=>{
        const { Images, Colors } = theme
        return StyleSheet.create({
            container: {
                paddingBottom: 20,
                // marginBottom: 20
            },
            marketCap: {
                color: Colors.textLoss
            },
            Images
        })
    }, [theme])
}