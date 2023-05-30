import { Pressable, Image, Text } from 'react-native'
import { styles} from '../style/Style'

const PressableListItem = ({ image, text, onPress }) => {

    return (

        <Pressable
            style={styles.listItem}
            onPress={onPress}
        >
            <Image
                style={styles.listItemImage}
                source={{ uri: image }}
            />
            <Text style={styles.listItemText}>{text}</Text>
        </Pressable>

    )
}

export { PressableListItem }
