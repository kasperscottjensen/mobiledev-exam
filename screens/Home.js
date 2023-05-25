import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { styles } from '../style/Style'

import { TouchableCard } from '../components/TouchableCard'

const Home = () => {

    const handleCardPress = (region) => {
        console.log(region)
    }

    return (

        <SafeAreaView style={styles.container}>
            <TouchableCard
                imageSource={require('../assets/southasia.png')}
                cardText={'South Asia'}
                onPress={() => handleCardPress('South Asia')}
            />
            <TouchableCard
                imageSource={require('../assets/eastasia.png')}
                cardText={'East Asia'}
                onPress={() => handleCardPress('East Asia')}
            />
            <TouchableCard
                imageSource={require('../assets/greece.jpeg')}
                cardText={'Greece'}
                onPress={() => handleCardPress('Greece')}
            />

            <View style={styles.horizontalCardCenter}>
                <Text style={styles.centerText}>Choose a region</Text>
            </View>

            <TouchableCard
                imageSource={require('../assets/italy.png')}
                cardText={'Italy'}
                onPress={() => handleCardPress('Italy')}
            />
            <TouchableCard
                imageSource={require('../assets/france.jpg')}
                cardText={'France'}
                onPress={() => handleCardPress('France')}
            />
            <TouchableCard
                imageSource={require('../assets/southamerica.jpg')}
                cardText={'South America'}
                onPress={() => handleCardPress('South America')}
            />
        </SafeAreaView>

    )
}

export { Home }
