import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';

const ButtonStyle1 = ({ onPress }) => {
    const [showCode, setShowCode] = useState(false);

    const handleCopyCode = async () => {
        await Clipboard.setStringAsync(codeToCopy);
        Alert.alert('O código foi copiado para a área de transferência');
    };

    const toggleShowCode = () => {
        setShowCode(!showCode);
    };

    const codeToCopy = `
        import React from 'react';
        import { TouchableOpacity, Text, StyleSheet } from 'react-native';

        const BotaoEstilizado = ({ onPress }) => {
            return (
                <TouchableOpacity style={styles.botao} onPress={onPress}>
                    <Text style={styles.textoBotao}>Click here</Text>
                </TouchableOpacity>
            );
        };

        const styles = StyleSheet.create({
            botao: {
                backgroundColor: '#007bff',
                padding: 10,
                borderRadius: 5,
                alignItems: 'center',
            },
            textoBotao: {
                color: '#fff',
                fontSize: 16,
            },
        });

        export default BotaoEstilizado;
    `;

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.bigButton} onPress={onPress}>
                <Text style={styles.bigButtonText}>Click Here</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.smallButton} onPress={handleCopyCode}>
                <Text style={styles.smallButtonText}>Copy code</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toggleButton} onPress={toggleShowCode}>
                <Text style={styles.toggleButtonText}>
                    {showCode ? 'Hide code' : 'Show code'}
                </Text>
            </TouchableOpacity>
            {showCode && (
                <View style={styles.codeContainer}>
                    <Text style={styles.codeText}>{codeToCopy}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
    },
    bigButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 100,
    },
    bigButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    smallButton: {
        backgroundColor: '#28a745',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    smallButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    toggleButton: {
        backgroundColor: '#17a2b8',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    toggleButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    codeContainer: {
        backgroundColor: '#f8f9fa',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    codeText: {
        fontFamily: 'monospace',
        fontSize: 12,
    },
});

export default ButtonStyle1;