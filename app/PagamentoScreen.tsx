import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { theme } from '@/src/theme/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PagamentoScreen({ route, navigation }: any) {
    const [metodoPagamento, setMetodoPagamento] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [validadeCartao, setValidadeCartao] = useState('');
    const [cvv, setCvv] = useState('');

    // Detalhes da consulta (passados via navegação)
    const { consulta } = route.params;

    const handlePagamento = () => {
        if (metodoPagamento === 'Cartão' && (!numeroCartao || !validadeCartao || !cvv)) {
            Alert.alert('Erro', 'Preencha todas as informações do cartão.');
            return;
        }

        Alert.alert(
            'Pagamento Realizado',
            'O pagamento foi concluído com sucesso!',
            [{ text: 'OK', onPress: () => navigation.navigate('HomeScreen') }]
        );
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <Text style={styles.title}>Pagamento da Consulta</Text>
            <Text style={styles.subtitle}>
                Confirme os detalhes da consulta e escolha o método de pagamento.
            </Text>

            {/* Detalhes da Consulta */}
            <View style={styles.consultaContainer}>
                <Text style={styles.consultaText}>Profissional: {consulta.nomeprofissional}</Text>
                <Text style={styles.consultaText}>Data: {consulta.data}</Text>
                <Text style={styles.consultaText}>Horário: {consulta.horario}</Text>
                <Text style={styles.consultaText}>Valor: R$ {consulta.valor.toFixed(2)}</Text>
            </View>

            {/* Método de Pagamento */}
            <Text style={styles.sectionTitle}>Escolha o método de pagamento:</Text>
            <View style={styles.paymentOptions}>
                <TouchableOpacity
                    style={[
                        styles.paymentOption,
                        metodoPagamento === 'Pix' && styles.paymentOptionSelected,
                    ]}
                    onPress={() => setMetodoPagamento('Pix')}
                >
                    <Icon name="qr-code" size={24} color={theme.colors.primary} />
                    <Text style={styles.paymentOptionText}>Pix</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.paymentOption,
                        metodoPagamento === 'Cartão' && styles.paymentOptionSelected,
                    ]}
                    onPress={() => setMetodoPagamento('Cartão')}
                >
                    <Icon name="credit-card" size={24} color={theme.colors.primary} />
                    <Text style={styles.paymentOptionText}>Cartão</Text>
                </TouchableOpacity>
            </View>

            {/* Formulário para pagamento com cartão */}
            {metodoPagamento === 'Cartão' && (
                <View style={styles.cardForm}>
                    <TextInput
                        style={styles.input}
                        placeholder="Número do Cartão"
                        value={numeroCartao}
                        onChangeText={setNumeroCartao}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Validade (MM/AA)"
                        value={validadeCartao}
                        onChangeText={setValidadeCartao}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="CVV"
                        value={cvv}
                        onChangeText={setCvv}
                        keyboardType="numeric"
                    />
                </View>
            )}

            {/* Botão de pagamento */}
            <TouchableOpacity style={styles.button} onPress={handlePagamento}>
                <Text style={styles.buttonText}>Finalizar Pagamento</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: theme.colors.textPrimary,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        color: theme.colors.textSecondary,
        marginBottom: 20,
    },
    consultaContainer: {
        marginBottom: 20,
    },
    consultaText: {
        fontSize: 16,
        color: theme.colors.textPrimary,
        marginBottom: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.textPrimary,
        marginBottom: 10,
    },
    paymentOptions: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    paymentOption: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: theme.colors.white,
        borderRadius: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: theme.colors.primary,
    },
    paymentOptionSelected: {
        backgroundColor: theme.colors.primary,
    },
    paymentOptionText: {
        fontSize: 16,
        color: theme.colors.textPrimary,
        marginLeft: 10,
    },
    cardForm: {
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: theme.colors.primary,
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        fontSize: 16,
        color: theme.colors.textPrimary,
    },
    button: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 15,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        color: theme.colors.white,
        fontWeight: 'bold',
    },
});
