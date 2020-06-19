import * as React from 'react';

import Welcome from './pages/welcome';
import Sign from './pages/sign';
import Home from './pages/home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="/" component={Welcome}
                    options={{
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: '#181F3D',
                        },
                    }}
                />

                <Stack.Screen name="Sign" component={Sign}
                    options={{
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: '#181F3D'
                        }
                    }}
                />

                <Stack.Screen name="Home" component={Home}
                    options={{
                        title: 'Home',
                        headerLeft: false,
                        headerStyle: {
                            backgroundColor: '#181F3D',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}