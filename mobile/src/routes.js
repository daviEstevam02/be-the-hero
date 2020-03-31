import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();

import Incidents from './pages/incidents';
import Detail from './pages/details';

export default function Routes(){
    return(
        <NavigationContainer>

            <AppStack.Navigator>
                <AppStack.Screen component={Incidents} />
                <AppStack.Screen component={Detail} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}