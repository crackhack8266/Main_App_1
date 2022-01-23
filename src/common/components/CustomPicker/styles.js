import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  searchView: {
    width: Dimensions.get('window').width - 40,
    marginVertical: 10,
    height: 40,
    borderRadius: 20,
    paddingLeft: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  arrowIcon: {
    marginHorizontal: 10,
    alignSelf: 'flex-end',
  },
  dropdownView: {
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#fff',
    height: 150,
  },
  dropdownItem: {
    marginTop: 10,
    height: 30,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  divider: {
    width: '99%',
    alignItems: 'center',
    height: 1,
    backgroundColor: 'grey',
    marginTop: 9,
  },
  tagsView: {
    alignSelf: 'flex-start',
    backgroundColor: 'grey',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  tagsText: {
    color: 'red',
  },
  closeIcon: {
    height: 10,
    width: 10,
    marginLeft: 10,
  },
});
