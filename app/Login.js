import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Input, Button, Text, Icon } from '@rneui/themed';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        // Implement your login logic here
        console.log('Username:', username);
        console.log('Password:', password);

        // Example: Check credentials, authenticate user, etc.
    };

    return (
        <View style={styles.container}>
            <Card containerStyle={styles.card}>
                <Text h4 style={styles.title}>
                    Login
                </Text>
                <Input
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    containerStyle={styles.inputContainer}
                />
                <Input
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    containerStyle={styles.inputContainer}
                    rightIcon={
                        <Icon
                            name={showPassword ? 'eye-off' : 'eye'}
                            type="feather"
                            onPress={togglePasswordVisibility}
                        />
                    }
                />
                <Button title="Login" onPress={handleLogin} buttonStyle={styles.loginButton} />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
    },
    card: {
        width: '80%',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 15,
    },
    loginButton: {
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
});

export default Login;
