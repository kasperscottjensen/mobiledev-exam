import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    horizontalCard: {
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: .5
    },
    horizontalCardCenter: {
        flex: .7,
        backgroundColor: '#ff6347',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: .5
    },
    centerText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 30
    },
    cardText: {
        position: 'absolute',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 25,
    },
    cardImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    cardOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    aboutTextWrapper: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff6347',
        marginTop: 1
    },
    aboutMapWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 1

    },
    map: {
        width: '100%',
        height: '100%'
    },
    aboutHeader: {
        fontSize: 30,
        color: '#ffffff',
        fontWeight: 'bold',
        paddingBottom: 20
    },
    aboutBody: {
        fontSize: 15,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    addTextWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallTextInput: {
        borderColor: '#ff6347',
        borderWidth: 2,
        borderRadius: 10,
        height: '15%',
        width: '95%',
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        fontSize: 15,
        marginBottom: 10
    }, 
    bigTextInput: {
        borderColor: '#ff6347',
        borderWidth: 2,
        borderRadius: 15,
        height: '40%',
        width: '95%',
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        fontSize: 15
    },
    addButtonWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        flexDirection: 'row'
    },
    addButton: {
        backgroundColor: '#ff6347',
        width: '20%',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2.5,
        borderRadius: 10
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    addCancelButton: {
        backgroundColor: '#999999',
        width: '20%',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2.5,
        borderRadius: 10
    },
    touchableIconText: {
        color: '#ff6347',
        fontSize: 15,
        fontWeight: 'bold'
    },
    addIconsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%'
    },
    touchableIcon: {
        alignItems: 'center',
        marginHorizontal: 15
    },
    addImageWrapper: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    }
})

export { styles }
