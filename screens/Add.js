import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, View, TouchableOpacity, Text, Keyboard, Image } from 'react-native'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

import { TouchableIcon } from '../components/TouchableIcon'
import { styles } from '../style/Style'

const Add = () => {

    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [guide, setGuide] = useState()
    const [imageUri, setImageUri] = useState()

    const handleSavePress = () => {
        Keyboard.dismiss()
        console.log({ title, body, guide, imageUri })
    }

    const handleCancelPress = () => {
        setTitle()
        setBody()
        setGuide()
        setImageUri()
        Keyboard.dismiss()
    }

    const handleImageSelect = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true
        })
        setImageUri({ uri: result.uri })
    }

    const handleImageCapture = async () => {
		let result = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true
		})
		setImageUri({ uri: result.uri })
    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.addIconsWrapper}>
                <TouchableIcon
                    name={'folder-open'}
                    size={30}
                    text={'Select'}
                    onPress={() => handleImageSelect()}
                />
                <TouchableIcon
                    name={'camera'}
                    size={30}
                    text={'Capture'}
                    onPress={() => handleImageCapture()}
                />
            </View>
            <View style={styles.addImageWrapper}>
                {imageUri && <Image source={{ uri: imageUri.uri }} style={styles.addImage}/>}
            </View>        
            <View style={styles.addTextWrapper}>
                <TextInput
                    placeholder='Link a guide here!'
                    value={guide}
                    onChangeText={(text) => setGuide(text)}
                    style={styles.smallTextInput}
                />
                <TextInput
                    placeholder='What are you even making?'
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                    style={styles.smallTextInput}
                />
                <TextInput
                    placeholder='Sounds yummy! What is in it?'
                    value={body}
                    onChangeText={(text) => setBody(text)}
                    multiline={true}
                    style={styles.bigTextInput}
                />
            </View>
            <View style={styles.addButtonWrapper}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {handleSavePress()}}
                >
                    <Text style={styles.addButtonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.addCancelButton}
                    onPress={() => {handleCancelPress()}}
                >
                    <Text style={styles.addButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export { Add }
