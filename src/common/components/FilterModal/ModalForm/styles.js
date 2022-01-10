import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  form: {
    marginHorizontal: 18,
    marginVertical: 20.5,
  },
  fieldTitle: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 16,
    lineHeight: 28,
    letterSpacing: -0.24,
    color: '#232222',
  },

  fromToPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fromStyle: {
    flexDirection: 'row',
  },
  fromToText: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: -0.21,
  },
  inputMilesView: {
    backgroundColor: '#f9f8f8',
    borderColor: '#ecebf1',
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  miles: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 14,
    letterSpacing: 16,
    letterSpacing: -0.21,
    color: '#a2a2a2',
    alignSelf: 'center',
  },
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
