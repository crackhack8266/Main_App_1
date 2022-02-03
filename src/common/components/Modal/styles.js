import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalView: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    alignItems: 'center',
    overflow: 'hidden',
  },

  popupView: {
    width: '60%',
    height: 'auto',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
  },

  popupView2: {
    width: '100%',
    height: 'auto',
    paddingBottom: '20%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: '#fff',
    elevation: 5,
  },

  popupView3: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: '#fff',
    elevation: 5,
  },
  popupView4: {
    height: 'auto',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
  },

  popupHeaderView: {
    flexDirection: 'column',
    overflow: 'hidden',
  },
  popupTitle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  popupContent: {
    alignSelf: 'flex-start',
    marginHorizontal: '3.5%',
    marginTop: '4%',
    marginBottom: '5%',
    fontSize: 16,
    color: '#CECECE',
  },
  closeIcon: {
    height: 15,
    width: 15,
    marginLeft: 15,
    marginTop: 15,
  },

  popupCloseButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonTextStyle: {
    borderRightColor: '#ddd',
    borderTopColor: '#ddd',
    borderRightWidth: 1,
    borderTopWidth: 1,
    flex: 0.5,
    textAlign: 'center',
    paddingTop: '2%',
    marginBottom: 5,
  },
});
