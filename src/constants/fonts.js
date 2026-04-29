import {Platform} from 'react-native';

export default {
  SF_PRO_TEXT: {
    ...Platform.select({
      ios: {
        montserrat: {
          Regular: 'Montserrat-Regular',
        },
        // BasisGrotesque: {
        //   Bold: 'BasisGrotesque-Bold',
        //   Light: 'BasisGrotesque-Light',
        //   Regular: 'BasisGrotesque-Regular',
        //   Medium: 'BasisGrotesque-Medium',
        //   Black: 'BasisGrotesque-Black',
        //   BlackItalic: 'BasisGrotesque-BlackItalic',
        //   BoldItalic: 'BasisGrotesque-BoldItalic',
        //   Italic: 'BasisGrotesque-Italic',
        //   MediumItalic: 'BasisGrotesque-MediumItalic',
        // },
        Fredoka: {
          Bold: 'Fredoka-Bold',
          Light: 'Fredoka-Light',
          Regular: 'Fredoka-Regular',
          Medium: 'Fredoka-Medium',
          CondensedBold:'Fredoka_Condensed-Bold',
          CondensedLight:'Fredoka_Condensed-Light',
          CondensedMedium:'Fredoka_Condensed-Medium',
          CondensedRegular:'Fredoka_Condensed-Regular',
          CondensedSemiBold:'Fredoka_Condensed-SemiBold',
          ExpandedBold:'Fredoka_Expanded-Bold',
          ExpandedLight:'Fredoka_Expanded-Light',
          ExpandedMedium:'Fredoka_Expanded-Medium',
          ExpandedRegular:'Fredoka_Expanded-Regular',
          CondensedSemiBold:'Fredoka_Condensed-SemiBold',
        },
        // PlusJakartaSans: {
        //   Bold: 'PlusJakartaSans-Bold',
        //   Light: 'PlusJakartaSans-Light',
        //   Regular: 'PlusJakartaSans-Regular',
        //   Medium: 'PlusJakartaSans-Medium',
        //   BoldItalic: 'PlusJakartaSans-BoldItalic',
        //   Italic: 'PlusJakartaSans-Italic',
        //   MediumItalic: 'PlusJakartaSans-MediumItalic',
        //   SemiBold: 'PlusJakartaSans-SemiBold',
        //   ExtraBold: 'PlusJakartaSans-ExtraBold',
        // },

        inter: {
          Black: 'Inter-Black',
          Bold: 'Inter-Bold',
          ExtraBold: 'Inter-ExtraBold',
          Light: 'Inter-Light',
          Medium: 'Inter-Medium',
          Regular: 'Inter-Regular',
          SemiBold: 'Inter-SemiBold',
          Thin: 'Inter-Thin',
        },
      },
      android: {
        montserrat: {
          Regular: 'Montserrat-Regular',
        },
        // BasisGrotesque: {
        //   Bold: 'BasisGrotesque-Bold',
        //   Light: 'BasisGrotesque-Light',
        //   Regular: 'BasisGrotesque-Regular',
        //   Medium: 'BasisGrotesque-Medium',
        //   Black: 'BasisGrotesque-Black',
        //   BlackItalic: 'BasisGrotesque-BlackItalic',
        //   BoldItalic: 'BasisGrotesque-BoldItalic',
        //   Italic: 'BasisGrotesque-Italic',
        //   MediumItalic: 'BasisGrotesque-MediumItalic',
        // },
        Fredoka: {
          Bold: 'Fredoka-Bold',
          Light: 'Fredoka-Light',
          Regular: 'Fredoka-Regular',
          Medium: 'Fredoka-Medium',
          CondensedBold:'Fredoka_Condensed-Bold',
          CondensedLight:'Fredoka_Condensed-Light',
          CondensedMedium:'Fredoka_Condensed-Medium',
          CondensedRegular:'Fredoka_Condensed-Regular',
          CondensedSemiBold:'Fredoka_Condensed-SemiBold',
          ExpandedBold:'Fredoka_Expanded-Bold',
          ExpandedLight:'Fredoka_Expanded-Light',
          ExpandedMedium:'Fredoka_Expanded-Medium',
          ExpandedRegular:'Fredoka_Expanded-Regular',
          CondensedSemiBold:'Fredoka_Condensed-SemiBold',
        },
        // PlusJakartaSans: {
        //   Bold: 'PlusJakartaSans-Bold',
        //   Light: 'PlusJakartaSans-Light',
        //   Regular: 'PlusJakartaSans-Regular',
        //   Medium: 'PlusJakartaSans-Medium',
        //   BoldItalic: 'PlusJakartaSans-BoldItalic',
        //   Italic: 'PlusJakartaSans-Italic',
        //   MediumItalic: 'PlusJakartaSans-MediumItalic',
        //   SemiBold: 'PlusJakartaSans-SemiBold',
        //   ExtraBold: 'PlusJakartaSans-ExtraBold',
        // },
        inter: {
          Black: 'Inter-Black',
          Bold: 'Inter-Bold',
          ExtraBold: 'Inter-ExtraBold',
          Light: 'Inter-Light',
          Medium: 'Inter-Medium',
          Regular: 'Inter-Regular',
          SemiBold: 'Inter-SemiBold',
          Thin: 'Inter-Thin',
        },
      },
    }),
  },
};

export const fontWeight = weight => {
  let size = weight;
  return size;
};
