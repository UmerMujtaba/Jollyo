import React, { useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { rfs, rhp, rwp } from "../../constants/dimensions";
import fonts from "../../constants/fonts";
import { colors } from "../../constants/colors";

const OtpField = () => {
    const [otpCode, setOtpCode] = useState(null);
    const CELL_COUNT = 4;
    const [value, setValue] = useState('');
    const [results, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

    return (
        <View style={styles.otpContainer}>
            <CodeField
                ref={ref}
                {...results}
                caretHidden={false}
                value={value}
                onChangeText={text => {
                    setValue(text);
                    setOtpCode(text);
                }}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                autoComplete={Platform.select({
                    android: 'sms-otp',
                    default: 'one-time-code',
                })}
                testID="my-code-input"
                renderCell={({ index, symbol, isFocused }) => (
                    <View
                        style={[
                            styles.cell,
                            isFocused && styles.focusedCell,
                        ]}
                        key={index}
                        onLayout={getCellOnLayoutHandler(index)}
                    >
                        <Text style={styles.cellText}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    otpContainer: {
        marginTop: rhp(24),
        paddingHorizontal: 10,

    },
    codeFieldRoot: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cell: {
        width: rwp(65),
        height: rhp(50),
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
        marginRight: rwp(8),
    },
    focusedCell: {
        borderBottomColor: colors.headingColor,
    },
    cellText: {
        color: colors.blacK,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(28),
    },
});

export default OtpField;
