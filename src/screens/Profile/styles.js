import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  profileHeaderView: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  incompleteProfileText: {
    color: '#ffffff',
    marginLeft: 69,
    lineHeight: 16.7,
    fontSize: 12,
    fontFamily: 'Merriweather-Regular',
  },
  profileComplitionDetailView: {
    width: '100%',
    height: 65,
    borderRadius: 10,
    backgroundColor: '#a94446',
    elevation: 5,
    position: 'absolute',
    top: 136,
    marginTop: 16.2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  columns2Row1View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 30,
  },
  profileDetailsOverlayView: {
    backgroundColor: 'white',
    height: 452,
    top: 200,
    borderRadius: 15,
    width: 343,
    paddingBottom: 33.6,
    elevation: 1,
    position: 'absolute',
    marginLeft: 20,
  },
  profileEmailText: {
    marginLeft: 8.8,
    fontSize: 12,
    color: '#121229',
    fontFamily: 'Merriweather-LightItalic',
  },
  emailIconAndEmailView: {
    flexDirection: 'row',
    marginTop: 8.5,
    alignItems: 'center',
  },
  overlay1View: {
    alignSelf: 'center',
  },
  envelope: {
    width: 13.2,
    height: 10.4,
  },
  profileNameText: {
    width: 73,
    height: 20,
    fontSize: 16,
    fontFamily: 'Merriweather-Bold',
    color: '#121229',
  },
  profileLogo: {
    height: 60,
    width: 60,
    marginHorizontal: 10,
  },
  profileImageView: {
    alignSelf: 'center',
  },
  profileNameOverlayView: {
    backgroundColor: 'white',
    height: 86.8,
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    width: 339,
    elevation: 1,
    position: 'absolute',
    marginLeft: 22,
    top: 35,
  },
  leftCarreticon: {
    marginLeft: 17,
    top: 5,
  },
  profileHeaderText: {
    color: '#ffffff',
    fontSize: 18,
    marginRight: 70,
  },
  parentContainer: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  topSectionView: {
    backgroundColor: '#4e4e4e',
    width: '100%',
    height: 158,
    borderBottomStartRadius: 20,
    flexDirection: 'row',
    borderBottomEndRadius: 20,
  },

  // Last Section: Nutritional Overlay
  nutritionalGoalsOverlay: {
    backgroundColor: 'white',
    height: 571, //171
    top: 666,
    borderRadius: 15,
    width: 343,
    elevation: 1,
    position: 'absolute',
    marginHorizontal: 20,
  },

  nutritionalGoalsTitle: {
    marginHorizontal: 13,
    marginVertical: 15,
    fontSize: 16,
    fontWeight: '900',
    fontFamily: 'Merriweather-Bold',
    marginTop: 16,
    marginLeft: 20,
    marginBottom: 12.9,
    color: '#252122',
  },

  divider: {
    backgroundColor: '#f2efef',
    width: '100%',
    height: 1,
  },
  childOfNutritionalGoals: {
    backgroundColor: '#fff2f2',
    marginTop: 12.1,
    height: 40,
    borderColor: '#f9b7b8',
    borderWidth: 1,
    width: 311,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 17,
  },
  nurtitionalLists: {
    marginLeft: 17.2,
    fontFamily: 'Merriweather-Regular',
    fontSize: 14,
    color: '#2f2f2f',
  },
  rightCircle: {
    marginRight: 14,
  },
});
