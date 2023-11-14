import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AssignorHomeScreen from './screens/AssignorHomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import EarningsDetailsScreen from './screens/EarningsDetailsScreen';
import EarningsScreen from './screens/EarningsScreen';
import GameDetailsScreen from './screens/GameDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import MyGamesScreen from './screens/MyGamesScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfilePayoutInformationScreen from './screens/ProfilePayoutInformationScreen';
import ProfilePersonalInformationScreen from './screens/ProfilePersonalInformationScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          animationEnabled: true,
        }}
      >
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{
            title: 'Dashboard',
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: 'Register',
          }}
        />
        <Stack.Screen
          name="EarningsScreen"
          component={EarningsScreen}
          options={{
            title: 'Earnings',
          }}
        />
        <Stack.Screen
          name="EarningsDetailsScreen"
          component={EarningsDetailsScreen}
          options={{
            title: 'Earnings Details',
          }}
        />
        <Stack.Screen
          name="ProfilePersonalInformationScreen"
          component={ProfilePersonalInformationScreen}
          options={{
            title: 'Profile - Personal information',
          }}
        />
        <Stack.Screen
          name="ProfilePayoutInformationScreen"
          component={ProfilePayoutInformationScreen}
          options={{
            title: 'Profile - Payout information ',
          }}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{
            title: 'Notifications',
          }}
        />
        <Stack.Screen
          name="GameDetailsScreen"
          component={GameDetailsScreen}
          options={{
            title: 'Game Details',
          }}
        />
        <Stack.Screen
          name="MyGamesScreen"
          component={MyGamesScreen}
          options={{
            title: 'My Games',
          }}
        />
        <Stack.Screen
          name="AssignorHomeScreen"
          component={AssignorHomeScreen}
          options={{
            title: '[Assignor]Home',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
