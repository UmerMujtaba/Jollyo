// import {useTheme} from '@theme/themeContext';
import React from 'react';
import { View, ViewStyle } from 'react-native';

interface SpacerProps {
    space?: number;
    row?: number;
    showBorder?: boolean;
}

const Spacer: React.FC<SpacerProps> = ({
    space = 0,
    row = 0,
    showBorder = false,
}) => {
    //   const {theme} = useTheme();
    const bottomBorderStyle = showBorder
        ? {
            borderBottomWidth: 1,
            // borderBottomColor: theme.colors.lineStrokeButtonSecondaryDefault,
        }
        : {};

    const spacerStyle: ViewStyle = {
        marginVertical: space,
        marginHorizontal: row,
        ...bottomBorderStyle,
    };

    return React.createElement(View, { style: spacerStyle });
};

export { Spacer };
