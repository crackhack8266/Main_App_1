import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {View, Text, Image, StatusBar} from 'react-native';
import {ProfileDetails} from '../../common/components/ProfileDetails';
import {CustomButton} from '../../common/components/Button';
import styles from './styles';

const ProfileScreen = () => {
  const profileDetailsProps = [
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
  ];
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
            <View style={styles.emailIconAndEmailView}>
              <FontAwesome name="envelope" size={12} color="grey" />
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
        <Text style={styles.incompleteProfileText}>
          Your profile is incomplete
          {'\n'}
          Please take some time to fill it.
        </Text>

        <CustomButton title="View Details" />
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
        />
      );
    });
  };
  const renderProfileDetails = profileDetailsProps => {
    return (
      //Implement Flatlist or use map()
      <View style={styles.profileDetailsOverlayView}>
        <View style={styles.columns2Row1View}>
          <ProfileDetails title="Age" value="26 Years" />
          <ProfileDetails title="Sex" value="Male" />
        </View>

        {renderProfileDetails_withFullWidth_dottedline(profileDetailsProps)}
      </View>
    );
  };

  return (
    <View style={styles.parentContainer}>
      <StatusBar barStyle="light-content" backgroundColor={'#4e4e4e'} />
      {renderProfileHeader()}
      {renderProfileCompleteBar()}
      {renderProfileDetails(profileDetailsProps)}
    </View>
  );
};

export default ProfileScreen;
