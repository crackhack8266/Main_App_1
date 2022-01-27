import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  tagView: {
    alignSelf: 'flex-start',
    padding: 12,
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  tagIcon: {
    width: 10,
    height: 10,
    marginLeft: 10,
  },
  tagText: {
    color: 'blue',
  },
  selectedItemView: {
    backgroundColor: 'black',
    color: 'red',
  },
});
