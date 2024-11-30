import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { theme } from '@/src/theme/theme';

export default function HistoricoScreen() {
    // Dados de exemplo para os históricos
    const historicos = [
        { id: '1', tipo: 'Consulta', detalhe: 'Psicoterapia - 10/11/2024 às 15:00' },
        { id: '2', tipo: 'Pagamento', detalhe: 'R$ 50,00 - Pago em 08/11/2024' },
        { id: '3', tipo: 'Consulta', detalhe: 'Psicoterapia - 03/11/2024 às 14:00' },
        { id: '4', tipo: 'Pagamento', detalhe: 'R$ 50,00 - Pago em 01/11/2024' },
        { id: '5', tipo: 'Agendamento', detalhe: 'Psicoterapia marcada para 15/11/2024 às 10:00' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Históricos</Text>
            <Text style={styles.subtitle}>Veja seus registros recentes:</Text>

            <FlatList
                data={historicos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>{item.tipo}</Text>
                        <Text style={styles.cardDetail}>{item.detalhe}</Text>
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
