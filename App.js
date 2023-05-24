import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { stackBundle } from './components/StackNavigator'

export default function App() {

	const btnav = createBottomTabNavigator()
	
	return (
		<NavigationContainer>
			<btnav.Navigator
				initialRouteName='home'
			>
				<btnav.Screen
					name={'home'}
					component={stackBundle.StackHome}
					options={{
						tabBarLabel: 'Home'
					}}
				/>
				<btnav.Screen
					name={'browse'}
					component={stackBundle.StackBrowse}
					options={{
						tabBarLabel: 'Browse'
					}}
				/>
				<btnav.Screen
					name={'add'}
					component={stackBundle.StackAdd}
					options={{
						tabBarLabel: 'Add'
					}}
				/>
				<btnav.Screen
					name={'about'}
					component={stackBundle.StackAbout}
					options={{
						tabBarLabel: 'About'
					}}
				/>
			</btnav.Navigator>
		</NavigationContainer>
	)
}
