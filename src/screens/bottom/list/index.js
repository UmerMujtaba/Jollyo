import React, {useCallback, useRef, useState} from 'react';
import {Button, ImageBackground, Text, View} from 'react-native';
import Svg, {Polygon} from 'react-native-svg';
import {SketchCanvas} from '@sourcetoad/react-native-sketch-canvas';
import Slider from '@react-native-community/slider';
import {styles} from './styles';
import {debounce} from 'lodash';
import {TouchableButton} from '../../../components/atoms/button';
import {wp} from '../../../constants/dimensions';
import {colors} from '../../../constants/colors';
import {images} from '../../../assets/images';
import {Strings} from '../../../constants/strings';

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

const ListsScreen = () => {
  // const [feedback, setFeedback] = useState('');
  // const [isInside, setIsInside] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [strokeColor, setStrokeColor] = useState('red');
  const canvasRef = useRef(null);

  // const handleStrokeWidthChange = value => {
  //   setStrokeWidth(value);
  // };

  const handleStrokeColorChange = color => {
    setStrokeColor(color);
  };

  const handleSliderChange = useCallback(
    debounce(value => setStrokeWidth(value), 100),
    [],
  );

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
      // setIsInside(inside);
      // setFeedback(inside ? 'Inside the shape!' : 'Outside the shape!');
    } else {
      // setFeedback('Draw something!');
    }
  };
  const handleClear = () => {
    canvasRef.current.clear();
    // setFeedback('');
    // setIsInside(false);
  };

  return (
    <ImageBackground style={styles.container} source={images.backgroundImage}>
      <Text style={styles.title}>{Strings.drawInside}</Text>

      {/* <Svg height="300" width="300" style={styles.svg}>
        <Polygon
          points={shapeCoordinates
            .map(point => `${point.x},${point.y}`)
            .join(' ')}
          fill="none"
          stroke="blue"
          strokeWidth="2"
        />
      </Svg> */}

      <SketchCanvas
        ref={canvasRef}
        style={styles.canvas}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        onStrokeEnd={handleStrokeEnd}
      />

      <Text style={styles.strokeHeading}>Stroke Width: {strokeWidth}</Text>
      <Slider
        minimumValue={0}
        maximumValue={20}
        value={strokeWidth}
        onValueChange={handleSliderChange}
        minimumTrackTintColor={colors.darkOrange}
        maximumTrackTintColor="#000000"
        style={styles.slider}
        thumbTintColor={colors.darkOrange}
        onSlidingComplete={() => console.log(strokeWidth)}
      />

      <View style={styles.btnContainer}>
        <TouchableButton
          btnInside={styles.btnInside}
          btnPropStyle={styles.btnInside}
          title={'Red'}
          onPress={() => handleStrokeColorChange('red')}
        />
        <TouchableButton
          btnInside={styles.btnInside}
          btnPropStyle={styles.btnInside}
          title={'Blue'}
          onPress={() => handleStrokeColorChange('blue')}
        />
        <TouchableButton
          btnInside={styles.btnInside}
          btnPropStyle={styles.btnInside}
          title={'Green'}
          onPress={() => handleStrokeColorChange('green')}
        />
        <TouchableButton
          btnInside={styles.btnInside}
          btnPropStyle={styles.btnInside}
          title={'Clear'}
          onPress={handleClear}
        />
      </View>
    </ImageBackground>
  );
};

export default ListsScreen;
