import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  selectView: {
    width: Dimensions.get('window').width - 40,
    marginVertical: 10,
    height: 'auto',
    borderRadius: 20,
    paddingLeft: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'space-between',
  },

  dropDown: {
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
  selectedText: {backgroundColor: 'red'},
  tagsView: {
    alignSelf: 'flex-start',
    backgroundColor: 'grey',
    padding: 12,
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    width: '30%',
  },
  tagsText: {
    color: 'red',
  },
  multipleSearchView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width - 100,
  },
  iconStyle: {
    marginHorizontal: 15,
  },
  arrowIconRoated: {
    transform: [{rotate: '90deg'}],
  },
  closeIcon: {
    height: 10,
    width: 10,
    marginHorizontal: 5,
  },
  defaultText: {
    marginVertical: 10,
  },
});
