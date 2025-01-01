import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Strings } from "../../constants/strings";
import { rfs, rhp } from "../../constants/dimensions";
import fonts from "../../constants/fonts";
import { colors } from "../../constants/colors";


export const HeadingText = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{Strings.appName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        marginTop:rhp(60),
    },
    heading: {
        fontSize: rfs(80),
        fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
        color: colors.headingColor
    }
})