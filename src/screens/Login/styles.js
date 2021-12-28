import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  orText: {
    marginBottom: 12,
    alignSelf: 'center',
    fontWeight: '400',
  },
  registerView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  registerTextBold: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  registerTextNormal: {
    fontSize: 16,
  },
  forgotPassText: {
    fontSize: 16,
    alignSelf: 'flex-end',
    marginRight: 25.3,
    marginVertical: 15,
    textAlign: 'left',
  },
  loginLogo: {
    width: 85,
    height: 85,
    alignSelf: 'center',
    top: 44,
    justifyContent: 'center',
  },
  loginHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 30,
    marginHorizontal: 30,
    alignSelf: 'center',
    letterSpacing: 0.33,
    color: '#1a1a1a',
  },
  parentContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loginBodyOverlay: {
    backgroundColor: 'white',
    height: 580,
    marginHorizontal: 15,
    marginTop: 139,
    alignSelf: 'center',
    borderRadius: 20,
    width: 333.8,
    elevation: 1,
    position: 'absolute',
    top: 30,
  },

  horizontalDivider: {
    width: 330,
    backgroundColor: '#eee',
    top: 76,
    height: 2,
    position: 'absolute',
  },
  loginLogoContainer: {
    backgroundColor: '#4e4e4e',
    borderColor: 'red',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: '100%',
    height: 375.8,
  },
});
