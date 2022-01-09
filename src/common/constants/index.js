import {Image} from 'react-native';
import React from 'react';

const Constants = {
  LOGINBUTTONTEXT: 'login',
  LOGINWITHFACEBOOKBUTTONTEXT: 'login with facebook',
  TOUCHABLEHIGHLIGHT: 'Touchable Highlight Example',
  PASSWORDFIELDIDENTIFICATIONSTRING: 'password',
  EMAILFIELDIDENTIFICATIONSTRING: 'email ID',
  COLUMN2ROW1IDENTIFICATIONSTRING1: 'age',
  COLUMN2ROW1IDENTIFICATIONSTRING2: 'sex',
  APPLYFILTER: 'Apply Filter',
  HEADERTITLE: 'Find Your Meals',
  SEARCHTEXT: 'search meal',
  DROPDOWN1: [
    {label: 'Item 1', value: 'item_1'},
    {label: 'Item 2', value: 'item_2'},
    {label: 'Item 3', value: 'item_3'},
  ],
  DROPDOWN2: [
    {
      label: 'Medium',
      value: 'medium',
      icon: () => (
        <Image
          source={require('../assets/yellow.png')}
          style={{width: 36.2, height: 29.9}}
        />
      ),
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
