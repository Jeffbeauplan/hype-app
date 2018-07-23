import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class SignUpForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SignUpForm</Text>
            </View>
        );
    }
}
export default SignUpForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});