// // SkeletonItem.js
// import React from 'react';
// import {View} from 'react-native';
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
// import {colors} from '../../constants/colors';
// import {rhp, rwp} from '../../constants/dimensions';
// import {styles} from './styles';

// export const SkeletonItem = ({isEven}) => {
//   return (
//     <View style={styles.container}>
//       <SkeletonPlaceholder backgroundColor="#fff0e6" highlightColor="#ba9ae5">
//         <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
//           {isEven ? (
//             <>
//               <SkeletonPlaceholder.Item
//                 width={rwp(280)}
//                 height={rhp(160)}
//                 borderRadius={8}
//                 marginBottom={rhp(10)}
//               />
//               <SkeletonPlaceholder.Item marginLeft={10}>
//                 <SkeletonPlaceholder.Item
//                   borderRadius={8}
//                   width={rwp(100)}
//                   height={rhp(20)}
//                   transform={[{rotate: '90deg'}]}
//                   backgroundColor={'red'}
//                   highlightColor={colors.backgroundClr}
//                 />
//               </SkeletonPlaceholder.Item>
//             </>
//           ) : (
//             <>
//               <SkeletonPlaceholder.Item marginLeft={rhp(20)}>
//                 <SkeletonPlaceholder.Item
//                   borderRadius={8}
//                   width={100}
//                   height={20}
//                   transform={[{rotate: '90deg'}]}
//                 />
//               </SkeletonPlaceholder.Item>
//               <SkeletonPlaceholder.Item
//                 width={rwp(248)}
//                 height={rhp(160)}
//                 borderRadius={8}
//                 marginLeft={rhp(10)}
//                 marginBottom={rhp(10)}
//               />
//             </>
//           )}
//         </SkeletonPlaceholder.Item>
//       </SkeletonPlaceholder>
//     </View>
//   );
// };

// export default SkeletonItem;
