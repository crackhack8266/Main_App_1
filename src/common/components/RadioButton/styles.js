import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  radioButtonView: {flexDirection: 'row', marginTop: 10},
  radioCheckedLabel: {
    fontFamily: 'ProximaNova-Semibold',
    fontSize: 16,
    lineHeight: 28,
    letterSpacing: -0.24,
    color: '#232222',
  },
  yesNoText: {
    marginLeft: 10,
    alignSelf: 'center',
    marginRight: 25,
  },
  radioUncheckedLabel: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 16,
    lineHeight: 28,
    letterSpacing: -0.24,
  },
});
