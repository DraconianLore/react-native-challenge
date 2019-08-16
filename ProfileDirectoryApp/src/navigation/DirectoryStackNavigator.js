import { createStackNavigator } from 'react-navigation';

/**
 * Components
 */
import UsersList from '../components/UsersList';
import UserDetail from '../components/UserDetail';

/**
 * @TODO Task #3 Implement the stack navigator
 */
// ... Your code starts here ...
  const RouteConfigs = {
      UsersList,
      UserDetail
  }
  const StackNavigatorConfig = {
      initialRouteName: "UsersList",
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
    
  }
// ...
  
// ... Your code ends here ...

export default createStackNavigator(RouteConfigs, StackNavigatorConfig);