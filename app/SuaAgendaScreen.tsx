import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { theme } from '@/src/theme/theme';

export default function SuaAgenda() {
    // Dados de exemplo apenas para consultas
    const consultas = [
        { id: '1', profissional: 'Dr. João Silva', dataHora: '10/11/2024 às 15:00' },
        { id: '2', profissional: 'Dra. Maria Oliveira', dataHora: '03/11/2024 às 14:00' },
        { id: '3', profissional: 'Dr. Carlos Santos', dataHora: '01/11/2024 às 10:30' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Histórico de Consultas</Text>
            <Text style={styles.subtitle}>Confira suas consultas realizadas:</Text>

            <FlatList
                data={consultas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>{item.profissional}</Text>
                        <Text style={styles.cardDetail}>Data e horário: {item.dataHora}</Text>
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
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
        fontWeight: 'bold',
        color: theme.colors.textPrimary,
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: theme.colors.textSecondary,
        textAlign: 'center',
        marginBottom: 20,
    },
    listContainer: {
        paddingBottom: 20,
    },
    card: {
        backgroundColor: theme.colors.white,
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.primary,
        marginBottom: 5,
    },
    cardDetail: {
        fontSize: 16,
        color: theme.colors.textPrimary,
    },
});
