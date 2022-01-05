import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import styles from './styles';

const ProgressBarTest = () => {
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Remember to subscribe to Code Palace!</Text>

      <CircularProgress
        radius={90}
        value={85}
        textColor="#222"
        fontSize={20}
        valueSuffix={'%'}
        inActiveStrokeColor={'#2ecc71'}
        inActiveStrokeOpacity={0.2}
        inActiveStrokeWidth={6}
        duration={3000}
        onAnimationComplete={() => setValue(50)}
      />
    </View>
  );
};

export default ProgressBarTest;
