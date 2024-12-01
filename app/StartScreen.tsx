    import React from 'react';
    import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
    import { theme } from '@/src/theme/theme';

    export default function StartScreen({ navigation }: any) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Bem-vindo ao SAAP</Text>

                <Image source={require('../assets/images/saap6.png')} style={styles.image} />

                <Text style={styles.subtitle}>
                    Sistema de Atendimento e Apoio Psicológico. Aqui você encontra ajuda e suporte com facilidade.
                </Text>

                

                <TouchableOpacity style={[styles.button, styles.buttonSpacing]} onPress={() => navigation.navigate('CadastroScreen')}>
                    <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity>

            </View>
        );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            padding: 25,
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            fontSize: 30,
            color: theme.colors.textPrimary,
            fontWeight: 'bold',
            marginBottom: 80,
            textAlign: 'left',
        },
        subtitle: {
            fontSize: 16,
            color: theme.colors.textSecondary,
            marginBottom: 80,
            textAlign: 'center',
        },
        image: {
            width: 300,
            height: 200,
            marginBottom: 80,
        },
        buttonSpacing: {
            marginBottom: 20, // Ajuste conforme a necessidade
        },
        button: {
            backgroundColor: theme.colors.primary,
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 25,
            alignItems: 'center',
        },
        buttonText: {
            color: theme.colors.white,
            fontSize: 18,
            fontWeight: 'bold',
        },
    });
