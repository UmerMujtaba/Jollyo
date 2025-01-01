import React from "react";
import { View, Text, StyleSheet } from "react-native";
import OtpField from "../atoms/otpFields";
import fonts from "../../constants/fonts";
import { rfs, rhp } from "../../constants/dimensions";
import { colors } from "../../constants/colors";
import { Strings } from "../../constants/strings";

const OtpFieldContainer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>
                {Strings.enterOtp}
            </Text>
            <OtpField />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: rhp(20)
    },
    headingText: {
        fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
        fontSize: rfs(20),
        color: colors.headingColor,
    }
})
export default OtpFieldContainer