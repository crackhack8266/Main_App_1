import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import Goals from '../../common/components/Goals';
import Constants from '../../common/constants';
import StackedBarChart from 'react-native-chart-kit';

const renderGoals = goals => {
  return goals.map(goal => {
    return <Goals key={goal.id} title={goal.title} img={goal.img} />;
  });
};

const NutriDoc = () => {
  const [active, setActive] = useState(2);
  return (
    <View style={styles.parentContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={styles.nutriScore}>
        <View style={styles.internalView}>
          <View style={styles.headingAndSubHeading}>
            <Text style={styles.title}>My NutriScore</Text>
            <Text style={styles.subheading}>
              Avg. Calories Per Meal: 1,821 Kcal
            </Text>
          </View>
          <View style={styles.scoreView}>
            <Text style={styles.scoreText}>7/10</Text>
            <Image
              source={require('../../common/assets/right.png')}
              style={styles.right_arrowImage}
            />
          </View>
        </View>
      </View>

      <View style={styles.filterFood}>
        <TouchableOpacity
          onPress={() => {
            setActive(1);
          }}
          style={
            active === 1 ? styles.activeEatingTimes_all : styles.eatingTimes_all
          }>
          <Text style={active == 1 ? styles.textActive : styles.textNormal}>
            {' '}
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActive(2);
          }}
          style={
            active === 2
              ? styles.activeEatingTimes_breakfast
              : styles.eatingTimes_breakfast
          }>
          <Text style={active == 2 ? styles.textActive : styles.textNormal}>
            {' '}
            Breakfast
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActive(3);
          }}
          style={
            active === 3 ? styles.activeEatingTimes_L_D : styles.eatingTimes_L_D
          }>
          <Text style={active == 3 ? styles.textActive : styles.textNormal}>
            {' '}
            Lunch
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActive(4);
          }}
          style={
            active === 4 ? styles.activeEatingTimes_L_D : styles.eatingTimes_L_D
          }>
          <Text style={active == 4 ? styles.textActive : styles.textNormal}>
            Dinner
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.macroNutrients}>
        <Text style={styles.macroNutrientsTitle}>Macro-Nutrients</Text>
        <Text style={styles.macroNutrientsSubHeading}>
          Distribution of macronutrients you have consumed shown below.
        </Text>

        <Text style={styles.myGoalsTitle}>Am I Achieving My Goals?</Text>
        <View style={styles.overlay}>{renderGoals(Constants.GOALS)}</View>
      </View>
    </View>
  );
};

export default NutriDoc;
