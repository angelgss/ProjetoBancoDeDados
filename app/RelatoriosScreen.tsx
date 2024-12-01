import React from 'react';
import { View, Text, StyleSheet, Alert, FlatList, TouchableOpacity } from 'react-native';
import { theme } from '@/src/theme/theme';

// Dados fictícios para simulação
const relatoriosMock = [
    { id: '1', titulo: 'Relatório de Psicoterapia', descricao: 'Sessão focada em ansiedade.', data: '10/11/2024' },
    { id: '2', titulo: 'Relatório de Consulta', descricao: 'Acompanhamento semanal.', data: '08/11/2024' },
    { id: '3', titulo: 'Relatório de Avaliação', descricao: 'Testes psicológicos realizados.', data: '05/11/2024' },
];

export default function RelatoriosScreen() {
    const visualizarRelatorio = (titulo: string) => {
        Alert.alert('Relatório Selecionado', `Visualizando detalhes do relatório: ${titulo}`);
    };

    const renderRelatorio = ({ item }: { item: any }) => (
        <View style={styles.relatorioCard}>
            <View style={styles.relatorioInfo}>
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Text style={styles.descricao}>{item.descricao}</Text>
                <Text style={styles.data}>Data: {item.data}</Text>
            </View>
            <TouchableOpacity
                style={styles.buttonVisualizar}
                onPress={() => visualizarRelatorio(item.titulo)}
            >
                <Text style={styles.buttonText}>Visualizar</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Relatórios Médicos</Text>
            <Text style={styles.subtitle}>Acompanhe seus relatórios médicos abaixo:</Text>
            <FlatList
                data={relatoriosMock}
                keyExtractor={(item) => item.id}
                renderItem={renderRelatorio}
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
    relatorioCard: {
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
    relatorioInfo: {
        marginBottom: 10,
    },
    titulo: {
        fontSize: 18,
        color: theme.colors.textPrimary,
        fontWeight: 'bold',
    },
    descricao: {
        fontSize: 16,
        color: theme.colors.textSecondary,
        marginTop: 5,
    },
    data: {
        fontSize: 14,
        color: theme.colors.textSecondary,
        marginTop: 5,
    },
    buttonVisualizar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
