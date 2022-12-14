import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Reports() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello from Reports! 🧾</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'montserrat-bold',
        fontSize: 30
    }
});
