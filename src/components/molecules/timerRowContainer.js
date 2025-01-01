import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Timer from '../atoms/timer';  // Timer component
import { rfs, rhp, wp } from '../../constants/dimensions';
import fonts from '../../constants/fonts';
import { colors } from '../../constants/colors';

const TimerContainer = () => {
    const [resetKey, setResetKey] = useState(0);  

    const handleResendCode = () => {
        setResetKey(prevKey => prevKey + 1); 
    };
    return (
        <View style={styles.container}>
            <Timer key={resetKey} />  
            <TouchableOpacity onPress={handleResendCode}>
                <Text style={styles.resendTxt}>Resend Code</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: rhp(20),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
    },
    resendTxt: {
        fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
        fontSize: rfs(16),
        color: colors.headingColor,
        textDecorationLine: 'underline',
    },
});

export default TimerContainer;
