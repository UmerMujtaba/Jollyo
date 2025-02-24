import RNSketchCanvas from '@sourcetoad/react-native-sketch-canvas';
import React, {useRef, useState} from 'react';
import {Alert, ImageBackground, Text, View} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {images} from '../../../assets/images';
import {isTablet, rfs, rhp, rwp} from '../../../constants/dimensions';
import {Strings} from '../../../constants/strings';
import {styles} from './styles';
import RNFS from 'react-native-fs';
import { TouchableButton } from '../../../components/atoms';
const isPointInPolygon = (point, polygon) => {
  let {x, y} = point;
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
  console.log('🚀 ~ CanvasScreen ~ canvasRef:', canvasRef);

  const shapeCoordinates = [
    {x: 50, y: 50},
    {x: 150, y: 50},
    {x: 100, y: 150},
  ];

  const handleStrokeEnd = path => {
    console.log('🚀 ~ handleStrokeEnd ~ path:', path);
    if (path?.path?.data?.length) {
      const lastPoint = path.path.data[path.path.data.length - 1];
      console.log('🚀 ~ handleStrokeEnd ~ lastPoint:', lastPoint);
      const inside = isPointInPolygon(
        {x: lastPoint.x, y: lastPoint.y},
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

  const handleSave = () => {
    if (canvasRef.current) {
      const filename = 'drawing.png';
      const directoryPath = RNFS.DocumentDirectoryPath;

      const success = true;
      if (success) {
        canvasRef.current.save(directoryPath, filename, 'PNG', 0.9);
      } else {
        Alert.alert('Save Failed', 'Canvas reference is not available');
      }
      const filePath = `${directoryPath}/${filename}`;
      console.log('Saved file path:', filePath);

      Alert.alert('Save Success', `Image saved at ${filePath}`);
    } else {
      Alert.alert('Save Failed', 'Canvas reference is not available');
    }
  };

  return (
    <ImageBackground style={styles.container} source={images.backgroundImage}>
      <Text style={styles.title}>{Strings.drawInside}</Text>

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
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <EntypoIcon
                  name="eraser"
                  color="white"
                  style={{
                    fontSize: isTablet ? rfs(20) : rfs(16),
                    marginTop: isTablet ? rhp(3) : rhp(2),
                    marginHorizontal: isTablet ? rwp(5) : rwp(2),
                  }}
                />
                <Text style={[styles.btnText]}>{Strings.eraser}</Text>
              </View>
            </View>
          </View>
        }
        strokeComponent={color => (
          <View style={[{backgroundColor: color}, styles.strokeColorButton]} />
        )}
        strokeSelectedComponent={(color, index, changed) => {
          return (
            <View
              style={[
                {backgroundColor: color, borderWidth: 2},
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
