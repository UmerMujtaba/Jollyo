import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import RNSketchCanvas from '@sourcetoad/react-native-sketch-canvas';
import React, { useRef, useState } from 'react';
import { Alert, ImageBackground, Text, View } from 'react-native';
import Share from 'react-native-share';
import { captureRef } from 'react-native-view-shot';
import { images } from '../../../assets/images';
import { TouchableButton } from '../../../components/atoms';
import { hp, isTablet, rhp, rwp, wp } from '../../../constants/dimensions';
import { Strings } from '../../../constants/strings';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
const isPointInPolygon = (point, polygon) => {
  let { x, y } = point;
  let isInside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x,
      yi = polygon[i].y;
    const xj = polygon[j].x,
      yj = polygon[j].y;

    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) isInside = !isInside;
  }

  return isInside;
};

const CanvasScreen = () => {
  const [strokeWidth, setStrokeWidth] = useState(4);
  const canvasRef = useRef(null);
  const viewShotRef = useRef(null);

  const shapeCoordinates = [
    { x: 50, y: 50 },
    { x: 150, y: 50 },
    { x: 100, y: 150 },
  ];

  const handleStrokeEnd = path => {
    if (path?.path?.data?.length) {
      const lastPoint = path.path.data[path.path.data.length - 1];
      console.log('🚀 ~ handleStrokeEnd ~ lastPoint:', lastPoint);
      const inside = isPointInPolygon(
        { x: lastPoint.x, y: lastPoint.y },
        shapeCoordinates,
      );
      console.log('🚀 ~ handleStrokeEnd ~ inside:', inside);
    } else {
      // setFeedback('Draw something!');
    }
  };

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const handleClear = () => {
    canvasRef.current.clear();
  };

  //  const handleSave = async ()=> {
  //     if (canvasRef.current) {
  //       const filename = 'drawing.png';
  //       const directoryPath = RNFS.DocumentDirectoryPath;
  //       console.log('🚀 ~ handleSave ~ directoryPath:', directoryPath);

  //       const success = true;
  //       if (success) {
  //         const saveResult = canvasRef.current.save(
  //           directoryPath,
  //           filename,
  //           'PNG',
  //           0.9,
  //         );
  //         console.log('🚀 ~ handleSave ~ saveResult:', saveResult);
  //       } else {
  //         Alert.alert('Save Failed', 'Canvas reference is not available');
  //       }
  //       const filePath = `${directoryPath}/${filename}`;

  //       console.log('Saved file path:', filePath);

  //       Alert.alert('Save Success', `Image saved at ${filePath}`);
  //     } else {
  //       Alert.alert('Save Failed', 'Canvas reference is not available');
  //     }
  //   };

  const handleSave = async () => {
    try {
      // 1. Capture the specific View containing the canvas
      const uri = await captureRef(viewShotRef, {
        format: 'png',
        quality: 0.9,
      });

      // 2. Open Share Sheet (Allows "Save to Gallery", "WhatsApp", etc.)
      const shareOptions = {
        title: 'Share/Save Drawing',
        url: uri,
        type: 'image/png',
        failOnCancel: false,
      };

      await Share.open(shareOptions);
    } catch (error) {
      if (error.message !== 'User did not share') {
        Alert.alert('Error', 'Could not save drawing');
        console.log('Save Error:', error);
      }
    }
  };

  return (
    <ImageBackground style={styles.container} source={images.backgroundImage}>
      <Text style={styles.title}>{Strings.drawInside}</Text>

      <View ref={viewShotRef} collapsable={false} style={styles.canvasWrapper}>
        <RNSketchCanvas
          ref={canvasRef}
          canvasStyle={styles.canvas}
          onStrokeEnd={handleStrokeEnd}
          defaultStrokeIndex={0}
          defaultStrokeWidth={5}
          undoComponent={null}
          clearComponent={null}
          eraseComponent={
            <View style={[styles.btnStyle]}>
              <View style={[styles.btnStyle, styles.insideBtnStyle]}>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'center' }}
                >
                  <MaterialDesignIcons
                    name="eraser"
                    color="white"
                    style={{
                      fontSize: wp(4),
                      marginTop: hp(0.5),
                      marginHorizontal: isTablet ? rwp(5) : rwp(2),
                    }}
                  />
                  <Text style={[styles.btnText]}>{Strings.eraser}</Text>
                </View>
              </View>
            </View>
          }
          strokeComponent={color => (
            <View
              style={[{ backgroundColor: color }, styles.strokeColorButton]}
            />
          )}
          strokeSelectedComponent={(color, index, changed) => {
            return (
              <View
                style={[
                  { backgroundColor: color, borderWidth: 2 },
                  styles.strokeColorButton,
                ]}
              />
            );
          }}
          saveComponent={null}
          strokeWidthComponent={strokeWidth => {
            console.log('🚀 ~ CanvasScreen ~ w:', strokeWidth);
            return (
              <View style={styles.strokeWidthButton}>
                <View
                  style={{
                    backgroundColor: 'white',
                    marginHorizontal: 2.5,
                    width: Math.sqrt(strokeWidth / 3) * 10,
                    height: Math.sqrt(strokeWidth / 3) * 10,
                    borderRadius: (Math.sqrt(strokeWidth / 3) * 10) / 2,
                  }}
                />
              </View>
            );
          }}
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableButton
          btnInside={styles.btnInside}
          btnPropStyle={styles.btnInside}
          title={'Undo'}
          onPress={handleUndo}
        />

        <TouchableButton
          btnInside={styles.btnInside}
          btnPropStyle={styles.btnInside}
          title={'Clear'}
          onPress={handleClear}
        />

        <TouchableButton
          btnInside={styles.btnInside}
          btnPropStyle={styles.btnInside}
          title={'Save'}
          onPress={handleSave}
        />
      </View>
    </ImageBackground>
  );
};

export default CanvasScreen;
{
  /* <SketchCanvas
        ref={canvasRef}
        style={styles.canvas}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        onStrokeEnd={handleStrokeEnd}
      /> */
}

{
  /* <Slider
        minimumValue={0}
        maximumValue={20}
        value={strokeWidth}
        onValueChange={handleSliderChange}
        minimumTrackTintColor={colors.darkOrange}
        maximumTrackTintColor="#000000"
        style={styles.slider}
        thumbTintColor={colors.darkOrange}
        onSlidingComplete={() => console.log(strokeWidth)}
      /> */
}
// const handleSliderChange = useCallback(
//   debounce(value => setStrokeWidth(value), 100),
//   [],
// );
