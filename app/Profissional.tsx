import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { theme } from '@/src/theme/theme';

const profissionais = [
    { id: '1', name: 'Dr. João Humberto', specialty: 'Psicólogo' },
    { id: '2', name: 'Dra. Jonas Maria', specialty: 'Psiquiatra' },
    { id: '3', name: 'Dra Nataly', specialty: 'Psicologa' },
    { id: '4', name: 'Dr. Breno', specialty: 'Psicologa' },
    { id: '5', name: 'Dr. helio', specialty: 'psicologo' },
    { id: '6', name: 'Dr. Andre', specialty: 'Psicologo' },
    { id: '7', name: 'Dr Lysandre', specialty: 'psicologo' },
];

export default function ProfissionalScreen({ navigation }: any) {
    const handleSelect = (profissional: any) => {
        Alert.alert('Profissional Selecionado', `Você escolheu ${profissional.name}.`);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha um profissional</Text>
            <FlatList
                data={profissionais}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => handleSelect(item)}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.specialty}>{item.specialty}</Text>
                    </TouchableOpacity>
                )}
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
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.textPrimary,
        marginBottom: 20,
    },
    card: {
        backgroundColor: theme.colors.white,
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.textPrimary,
    },
    specialty: {
        fontSize: 14,
        color: theme.colors.textSecondary,
    },
});
