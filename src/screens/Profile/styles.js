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
  },
  profileComplitionDetailView: {
    width: 384,
    height: 65,
    borderRadius: 10,
    backgroundColor: '#a94446',
    position: 'absolute',
    top: 150,
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
    height: 515,
    top: 233,
    borderRadius: 15,
    width: 343,
    elevation: 1,
    position: 'absolute',
    marginLeft: 20,
  },
  profileEmailText: {
    marginLeft: 7.8,
    fontSize: 12,
    fontStyle: 'italic',
  },
  emailIconAndEmailView: {
    flexDirection: 'row',
    marginTop: 5.5,
    alignItems: 'center',
  },
  overlay1View: {
    alignSelf: 'center',
    marginLeft: 5,
  },
  profileNameText: {
    width: 73,
    height: 20,
    fontSize: 16,
    fontWeight: 'bold',
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
    top: 65,
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
    height: 128,
    paddingTop: 7,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    borderBottomRightRadius: 20,
  },

  // Last Section: Nutritional Overlay
  nutritionalGoalsOverlay: {
    backgroundColor: 'white',
    height: 171,
    top: 765,
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
    fontWeight: 'bold',
    marginBottom: 7,
    color: '#252122',
  },

  divider: {
    backgroundColor: '#f2efef',
    marginTop: 8,
    width: '100%',
    height: 1,
  },
  childOfNutritionalGoals: {
    backgroundColor: '#f9b7b8',
    marginTop: 15,
    height: 40,
    width: 311,
    borderRadius: 5,
    marginHorizontal: 13,
  },
});
