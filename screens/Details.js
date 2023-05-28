import { SafeAreaView } from 'react-native-safe-area-context'

import { styles } from '../style/Style'
import { DetailedView } from '../components/DetailedView'

const Details = ({ route }) => {

    const { item } = route.params

    return (
        
        <SafeAreaView style={styles.container}>
            <DetailedView
                imageUrl={item.imageUrl}
                title={item.title}
                body={item.body}
                guide={item.guide}
                region={item.region ? item.region : 'Home made'}
            />
        </SafeAreaView>

    )
}

export { Details }
