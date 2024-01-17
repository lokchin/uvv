//App.js
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/Pages/Login';
import Register from './src/Pages/Registro';
import ForgotPassword from './src/Pages/EsqueciSenha';
import RPGlist from './src/Pages/Lista';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name= "Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name= "ForgotPassword" component={ForgotPassword} options={{headerShown: false}}/>
        <Stack.Screen name= "RPGlist" component={RPGlist}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}