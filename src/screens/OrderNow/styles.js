import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    width: '100%',
    height: 77.8,
    backgroundColor: '#4e4e4e',
  },
  headerHeading: {
    flexDirection: 'row',
  },
  rightArrowImage: {
    width: 7.1,
    height: 12.1,
    marginLeft: 20,
    marginTop: 14.5,
  },
  headerHeadingTitle: {
    fontFamily: 'Merriweather-Regular',
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: -0.27,
    color: '#ffffff',
    marginLeft: 25.9,
    marginTop: 7.5,
  },
  filterImage: {
    width: 15.9,
    height: 16.3,
    marginLeft: 103.3,
    marginTop: 15.3,
  },
  sortImage: {
    width: 20.2,
    height: 16.3,
    marginLeft: 17.7,
    marginTop: 15.4,
  },
  searchBarOverlay: {
    width: 343,
    height: 43,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 48,
    position: 'absolute',
    top: 53,
  },
});
