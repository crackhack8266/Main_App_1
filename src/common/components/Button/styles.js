import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  applyFilterView: {
    width: 342,
    height: 50,
    backgroundColor: '#4e4e4e',
    borderRadius: 25,
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonTextForFilter: {
    fontFamily: 'ProximaNova-Bold',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.38,
    alignSelf: 'center',
    color: '#ffffff',
  },

  touchableHighlight: {
    borderRadius: 25,
    height: 50,
    marginHorizontal: 17,
  },
  //The new changes here
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    height: 50,
    marginBottom: 13,
    alignSelf: 'center',
    flexDirection: 'row',
    width: 298,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'left',
    marginVertical: 15,
    lineHeight: 20,
    letterSpacing: -0.38,
  },
  icon: {
    height: 20.2,
    width: 20.2,
    marginRight: 13,
  },
});
