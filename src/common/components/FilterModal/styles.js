import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  innerModalView: {
    backgroundColor: '#ffffff',
    height: 690,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  outerModalView: {
    backgroundColor: '#000000aa',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  horizontalDivider: {
    width: '100%',
    backgroundColor: '#f2efef',
    marginTop: 17.7,
    height: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerDivider: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#e0e2e5',
    width: 35,
    marginTop: 11.3,
  },
  filterByText: {
    marginTop: 15.8,
    fontFamily: 'ProximaNova-Bold',
    fontSize: 18,
    lineHeight: 22,
    color: '#1c1c1c',
  },
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
  dropdownStyle: {
    backgroundColor: '#f9f8f8',
    borderColor: '#ecebf1',
    marginTop: 12.6,
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
});