import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';

import { theme } from '@/src/theme/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';

// Dados fictícios para simulação
const receitasMock = [
    { id: '1', medicamento: 'um', dosagem: '500mg', data: '10/11/2024' },
    { id: '2', medicamento: 'dois', dosagem: '600mg', data: '08/11/2024' },
    { id: '3', medicamento: 'tres', dosagem: '20mg', data: '05/11/2024' },
];

export default function ReceitasScreen() {
    const enviarParaFarmacia = (medicamento: string) => {
        Alert.alert(
            'Receita Enviada',
            `A receita de ${medicamento} foi enviada para a farmácia com sucesso.`
        );
    };

    const renderReceita = ({ item }: { item: any }) => (
        <View style={styles.receitaCard}>
            <View style={styles.receitaInfo}>
                <Text style={styles.medicamento}>{item.medicamento}</Text>
                <Text style={styles.dosagem}>Dosagem: {item.dosagem}</Text>
                <Text style={styles.data}>Data: {item.data}</Text>
            </View>
            <TouchableOpacity
                style={styles.buttonEnviar}
                onPress={() => enviarParaFarmacia(item.medicamento)}
            >
                <Icon name="local-shipping" size={20} color={theme.colors.white} />
                <Text style={styles.buttonText}>Enviar para Farmácia</Text>
            </TouchableOpacity>
        </View>
    );

    return (
         <View style={styles.container}>
            <Text style={styles.title}>Receitas Médicas</Text>
            <Text style={styles.subtitle}>
                Veja suas receitas médicas. Clique em "Enviar para Farmácia" para iniciar.
            </Text>
            <FlatList
                data={receitasMock}
                keyExtractor={(item) => item.id}
                renderItem={renderReceita}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 20,
    },
    title: {
        fontSize: 28,
        color: theme.colors.textPrimary,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: theme.colors.textSecondary,
        textAlign: 'center',
        marginBottom: 20,
    },
    list: {
        paddingBottom: 10,
    },
    receitaCard: {
        backgroundColor: theme.colors.white,
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    receitaInfo: {
        marginBottom: 10,
    },
    medicamento: {
        fontSize: 18,
        color: theme.colors.textPrimary,
        fontWeight: 'bold',
    },
    dosagem: {
        fontSize: 16,
        color: theme.colors.textSecondary,
    },
    data: {
        fontSize: 14,
        color: theme.colors.textSecondary,
        marginTop: 5,
    },
    buttonEnviar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: 16,
        marginLeft: 8,
        fontWeight: 'bold',
    },
});