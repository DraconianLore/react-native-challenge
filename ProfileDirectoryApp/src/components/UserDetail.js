import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class UsersList extends Component {
  render() {

    /**
     * @TODO Implement UI
     * 
     * `UserDetail` (component) is called from an onPress event on the 
     *  UsersList TouchableOpacity for that given user.
     * 
     * To that `navigate` route, we pass the user object, which
     *  is referenced here as `User`.
     * 
     */
    const User = this.props.navigation.getParam('user', null);
    console.log('USER is:', User);
    
    return (
      <View style={Styles.detailPage}>

        {/* Your code starts here ... */}
        <View style={Styles.topSection}>
          <Image style={{width: 100, height: 100}}
          source={require('../assets/bioconc-logo.png')}
          />
          <Text style={Styles.userName}>{User.name}</Text>
        </View>
        <View style={Styles.userInfo}>
          <Text style={Styles.bold}>
            Email:
          </Text>
          <Text style={Styles.normal}>
            {User.email}
          </Text>
          <Text style={Styles.bold}>
            Phone:
          </Text>
          <Text style={Styles.normal}>
            {User.phone}
          </Text>
          <Text style={Styles.bold}>
            Website:
          </Text>
          <Text style={Styles.normal}>
            {User.website}
          </Text>
        </View>

        {/* ... */}

        {/* Your code ends here ... */}

      </View>
    );
  };
};

const Styles = StyleSheet.create({
  detailPage: {
    flex:1,
    justifyContent: "center"
  },
  topSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  userName: {
    fontSize: 24
  },
  userInfo: {
    flex: 1,
    paddingHorizontal: "10%"
  },
  bold: {
    fontWeight: "700",
    padding: 5
  },
  normal: {
    padding: 5
  }
});
