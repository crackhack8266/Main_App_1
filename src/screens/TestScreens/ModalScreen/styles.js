import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  popup: {
    width: '50%',
    height: '7%',
    backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  popupText: {
    alignSelf: 'center',
  },
  listStyle: {
    backgroundColor: '#fff',
    height: '20%',
    width: '60%',
    marginTop: '5%',
    alignSelf: 'center',
  },
  leftSwipeContainer: {
    marginTop: '4%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: 'black',
    width: '100%',
  },
  stylingPopupText: {fontSize: 20, marginRight: '15%'},
  checkMarkImageStyle: {width: 40, height: 40, resizeMode: 'contain'},
  slidingPopupStyle: {
    flexDirection: 'column',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  popupViewStyle: {
    width: '60%',
    height: 'auto',
  },

  slidingViewStyle: {width: '100%', height: 'auto', paddingBottom: '5%'},
  fullScreenViewStyle: {width: '100%', height: '100%'},
  textInput: {borderColor: 'black', borderWidth: 1},
  leftSwipeText: {color: 'red', alignSelf: 'center', marginVertical: '3%'},
  leftSwipe: {backgroundColor: 'black', height: '100%', width: '90%'},
});
