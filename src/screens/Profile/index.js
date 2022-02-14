import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  Dimensions,
  FlatList,
  SectionList,
} from 'react-native';
import * as Progress from 'react-native-progress';
import {ProfileDetails} from '../../common/components/ProfileDetails';
import CustomButton from '../../common/components/Button';
import styles from './styles';
import Constants from '../../common/constants/';
import {NutriSections} from '../../common/components/NutriSections';

const ProfileScreen = () => {
  const sections = Constants.NURTITIONALGOALSSECTIONPROPS_SECTIONLIST;
  const renderProfileHeader = () => {
    return (
      <View style={styles.topSectionView}>
        <AntDesign
          name="left"
          size={16}
          color="white"
          style={styles.leftCarreticon}
        />
        <View style={styles.profileHeaderView}>
          <Text style={styles.profileHeaderText}>Profile</Text>
        </View>
        <View style={styles.profileNameOverlayView}>
          <View style={styles.profileImageView}>
            <Image
              source={require('../../common/assets/profilepic.png')}
              style={styles.profileLogo}
            />
          </View>
          <View style={styles.overlay1View}>
            <Text style={styles.profileNameText}>John Doe</Text>
            <Image
              source={require('../../common/assets/left-arrow.png')}
              style={styles.leftArrow}
            />
            <View style={styles.emailIconAndEmailView}>
              <Image
                source={require('../../common/assets/envelope.png')}
                style={styles.envelope}
              />
              <Text style={styles.profileEmailText}>Johndoe@nutrition.com</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderProfileCompleteBar = () => {
    return (
      <View style={styles.profileComplitionDetailView}>
        <Progress.Circle size={30} indeterminate={true} />
        <Text style={styles.incompleteProfileText}>
          Your profile is incomplete
          {'\n'}
          Please take some time to fill it.
        </Text>
        <View style={styles.viewDetails_view}>
          <CustomButton
            button_title={Constants.VIEWDETAILS_TEXT}
            navigator={'null'}
            route={'null'}
            setState={null}
            isNavigation={false}
            height={'30px'}
            width={'93px'}
            bgColor="#fff"
            elevation={2}
            fontSize={'12px'}
            marginVertical={'2px'}
            lineHeight={'15px'}
            letterSpacing={'-0.29px'}
            color="#2f2f2f"
            fontFamily="Merriweather-BoldItalic"
            icon={null}
          />

          <Text style={styles.underlinedText}>Don't show again</Text>
        </View>
      </View>
    );
  };

  const renderProfileDetails_withFullWidth_dottedline = profileDetailsProps => {
    return profileDetailsProps.map(field => {
      return (
        <ProfileDetails
          title={field.title}
          value={field.value}
          key={field.id}
          id={field.id}
        />
      );
    });
  };
  const renderProfileDetails = profileDetailsProps => {
    return (
      //Implement Flatlist or use map()
      <View style={styles.profileDetailsOverlayView}>
        <View style={styles.columns2Row1View}>
          <ProfileDetails title="Age" value="26 Years" id={null} />
          <ProfileDetails title="Sex" value="Male" id={null} />
        </View>

        {renderProfileDetails_withFullWidth_dottedline(profileDetailsProps)}
      </View>
    );
  };

  const renderNutritionalGoals = NURTITIONALGOALSSECTIONPROPS => {
    return (
      <View style={styles.nutritionalGoalsOverlay}>
        <Text style={styles.nutritionalGoalsTitle}>Nutritional Goals</Text>
        <View style={styles.divider}></View>
        {renderNutritionalGoalsSection(NURTITIONALGOALSSECTIONPROPS)}
      </View>
    );
  };

  const renderNutritionalGoalsSection =
    NURTITIONALGOALSSECTIONPROPS_SECTIONLIST => {
      return (
        <SectionList
          sections={sections}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <NutriSections name={item} />;
          }}
          renderSectionHeader={({section}) => {
            return <Text style={styles.sectionTitle}>{section.title}</Text>;
          }}
        />
      );
    };

  /*const renderNutritionalGoalsSection = NURTITIONALGOALSSECTIONPROPS => {
    return (
      <FlatList
        data={NURTITIONALGOALSSECTIONPROPS}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <NutriSections name={item.name} />;
        }}
      />
    );
  };
*/

  /*const renderNutritionalGoalsSection = NURTITIONALGOALSSECTIONPROPS => {
    return NURTITIONALGOALSSECTIONPROPS.map(section => {
      return <NutriSections name={section.name} key={section.id} />;
    });
  };*/

  const screenHeight = Dimensions.get('window').height;
  return (
    <View style={{height: screenHeight, ...styles.parentContainer}}>
      <ScrollView>
        <View style={{height: screenHeight + 420}}>
          <StatusBar barStyle="light-content" backgroundColor={'#4e4e4e'} />
          {renderProfileHeader()}
          {renderProfileCompleteBar()}
          {renderProfileDetails(Constants.profileDetailsProps)}
          {renderNutritionalGoals(Constants.NURTITIONALGOALSSECTIONPROPS)}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
