import {Image} from 'react-native';
import React from 'react';

const Constants = {
  LOGINBUTTONTEXT: 'login',
  LOGINWITHFACEBOOKBUTTONTEXT: 'login with facebook',
  TOUCHABLEHIGHLIGHT: 'Touchable Highlight Example',
  VIEWDETAILS_TEXT: 'View Details',
  PASSWORDFIELDIDENTIFICATIONSTRING: 'password',
  EMAILFIELDIDENTIFICATIONSTRING: 'email ID',
  COLUMN2ROW1IDENTIFICATIONSTRING1: 'age',
  COLUMN2ROW1IDENTIFICATIONSTRING2: 'sex',
  DISTANCETEXT: 'Distance',
  APPLYFILTER: 'Apply Filter',
  FILTERTITLE: 'Filter By',
  HEADERTITLE: 'Find Your Meals',
  SEARCHTEXT: 'search meal',
  DROPDOWN_TEXT: 'select a nutrient',
  DEFAULT_DROPDOWN_TEXT: 'Select an Item / Items',
  DROPDOWN_ICON_CONTAINER_STYLE: {
    left: 70,
  },
  TEXT_STYLE: {
    right: 40,
  },
  NUTRITIONAL_VALUES_DROP_DOWN: [
    {id: 1, label: 'Item 1', value: 'item 1'},
    {id: 2, label: 'Item 2', value: 'item 2'},
    {id: 3, label: 'Item 3', value: 'item 3'},
    {id: 4, label: 'Item 4', value: 'item 4'},
    {id: 5, label: 'Item 5', value: 'item 5'},
    {id: 6, label: 'Item 6', value: 'item 6'},
    {id: 7, label: 'Item 7', value: 'item 7'},
    {id: 8, label: 'Item 8', value: 'item 8'},
    {id: 9, label: 'Item 9', value: 'item 9'},
    {id: 10, label: 'Item 10', value: 'item 10'},
    {id: 11, label: 'Item 11', value: 'item 11'},
    {id: 12, label: 'Item 12', value: 'item 12'},
  ],

  STATUS_DROP_DOWN: [
    {
      icon: () => (
        <Image
          source={require('../assets/yellow.png')}
          style={{width: 36.2, height: 29.9}}
        />
      ),
      label: 'Medium',
      value: 'medium',
    },
    {
      label: 'Hard',
      value: 'hard',
      icon: () => (
        <Image
          source={require('../assets/yellow.png')}
          style={{width: 36.2, height: 29.9}}
        />
      ),
    },
    {
      label: 'Normal',
      value: 'normal',
      icon: () => (
        <Image
          source={require('../assets/yellow.png')}
          style={{width: 36.2, height: 29.9}}
        />
      ),
    },
  ],
  profileDetailsProps: [
    {
      id: 1,
      title: 'Height',
      value: '5.4 ft/inches',
    },
    {
      id: 2,
      title: 'Current Weight',
      value: '250 Lbs',
    },
    {
      id: 3,
      title: 'Weight Goals',
      value: 'Target 140 Lbs',
    },
    {
      id: 4,
      title: 'Physical Activity Level',
      value: 'Moderate exercise (3-5 days per week)',
    },
    {
      id: 5,
      title: 'Dietary Restrictions',
      value: 'Diabetic',
    },
  ],
  NURTITIONALGOALSSECTIONPROPS: [
    {
      id: 1,
      name: 'Nutrients',
    },
    {
      id: 2,
      name: 'Food Sources',
    },
  ],
  NURTITIONALGOALSSECTIONPROPS_SECTIONLIST: [
    {
      id: 1,
      title: 'Nutrients',
      data: ['Nutrient A', 'Nutrient B', 'Nutrient C'],
    },
    {
      id: 2,
      title: 'Food Sources',
      data: ['Food Source A', 'Food Source B', 'Food Source C'],
    },
  ],
  LISTOFMEALS_PROPS: [
    {
      id: 1,
      src: 'green',
    },
    {
      id: 2,
      src: 'yellow',
    },
    {
      id: 3,
      src: 'red',
    },
    {
      id: 4,
      src: 'green',
    },
    {
      id: 5,
      src: 'yellow',
    },
    {
      id: 6,
      src: 'red',
    },
  ],
  GOALS: [
    {
      id: 1,
      title: 'Carbohydrates',
      img: 'checkmark',
    },
    {
      id: 2,
      title: 'Fats',
      img: 'equivalent',
    },
    {
      id: 3,
      title: 'Proteins',
      img: 'close',
    },
  ],
};
export default Constants;
