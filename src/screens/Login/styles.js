import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  orText: {
    marginVertical: 13,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'ProximaNova-Regular',
    marginLeft: 154.2,
    marginRight: 153.6,
  },
  registerView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 24,
  },
  registerTextBold: {
    fontSize: 16,
    fontFamily: 'ProximaNova-Bold',
    marginLeft: 5,
  },
  registerTextNormal: {
    fontSize: 16,
    fontFamily: 'ProximaNova-Regular',
  },
  forgotPassText: {
    fontSize: 16,
    alignSelf: 'flex-end',
    marginRight: 25.3,
    marginTop: 21.4,
    marginBottom: 21.6,
    textAlign: 'left',
    fontFamily: 'ProximaNova-Regular',
  },
  loginLogo: {
    width: 85,
    height: 85,
    alignSelf: 'center',
    marginTop: 34,
    justifyContent: 'center',
  },
  loginHeader: {
    fontSize: 21,
    fontFamily: 'ProximaNova-Bold',
    marginLeft: 136.7,
    marginRight: 143.1,
    textAlign: 'left',
    marginBottom: 16.5,
    marginTop: 30.2,
    lineHeight: 28,
    alignSelf: 'center',
    color: '#1a1a1a',
  },
  parentContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loginBodyOverlay: {
    backgroundColor: 'white',
    height: 555.8, //555.8
    marginTop: 154.8,
    marginHorizontal: 21,
    alignSelf: 'center',
    borderRadius: 25,
    width: 333.8,
    elevation: 1,
    position: 'absolute',
    top: 30,
  },

  horizontalDivider: {
    width: 333.8,
    backgroundColor: '#eee',
    height: 1,
  },
  loginLogoContainer: {
    backgroundColor: '#4e4e4e',
    borderColor: 'red',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    width: '100%',
    height: 360.8,
  },
});
