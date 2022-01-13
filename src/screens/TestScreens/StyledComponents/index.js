import React from 'react';
import {Container} from './styles';
import {View, Text} from 'react-native';

const StyledComponents = () => {
  return (
    <View>
      <Container bgColor="red" height={'150px'} marginLeft={'10px'} />
      <Container bgColor="green" height={'50px'} marginLeft={'10px'} />
      <Container bgColor="blue" height={'200px'} marginLeft={'0px'} />
      <Text> Hello Shail</Text>
    </View>
  );
};

export default StyledComponents;
