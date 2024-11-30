import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '@/src/theme/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HomeProScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            {/* Cabeçalho com ícone de usuário */}
            <View style={styles.header}>
                <View style={styles.userIconContainer}>
                    <Icon name="person" size={40} color={theme.colors.primary} />
                </View>
                <Text style={styles.title}>Olá, Dr. tananana</Text>
            </View>

            <Text style={styles.subtitle}>O que você deseja fazer hoje?</Text>

            {/* Botões de navegação */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('GerenciarConsultasScreen')}
            >
                <Icon name="calendar-today" size={24} color={theme.colors.white} style={styles.icon} />
                <Text style={styles.buttonText}>Gerenciar Consultas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('DisponibilidadeScreen')}
            >
                <Icon name="schedule" size={24} color={theme.colors.white} style={styles.icon} />
                <Text style={styles.buttonText}>Definir Horários</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('PerfilProfissionalScreen')}
            >
                <Icon name="settings" size={24} color={theme.colors.white} style={styles.icon} />
                <Text style={styles.buttonText}>Ajustar Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('RelatoriosScreen')}
            >
                <Icon name="bar-chart" size={24} color={theme.colors.white} style={styles.icon} />
                <Text style={styles.buttonText}>Relatórios</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('FinanceiroScreen')}
            >
                <Icon name="attach-money" size={24} color={theme.colors.white} style={styles.icon} />
                <Text style={styles.buttonText}>Financeiro</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 20,
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    userIconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: theme.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        color: theme.colors.textPrimary,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: theme.colors.textSecondary,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: theme.colors.primary,
        paddingVertical: 15,
        borderRadius: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    icon: {
        marginRight: 10,
    },
});
