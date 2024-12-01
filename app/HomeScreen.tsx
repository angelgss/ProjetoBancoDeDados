// HomeScreen
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '@/src/theme/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen({ navigation }: any) {
  const [consultas, setConsultas] = useState<Date[]>([]);

  // Função para adicionar consultas
  const handleAddConsulta = (consulta: Date) => {
    setConsultas((prev) => [...prev, consulta]);
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho com ícone de usuário */}
      <View style={styles.header}>
        <View style={styles.userIconContainer}>
          <Icon name="account-circle" size={40} color={theme.colors.primary} />
        </View>
        <Text style={styles.title}>Bem-vindo, Paciente</Text>
      </View>

      <Text style={styles.subtitle}>Como podemos ajudá-lo hoje?</Text>

      {/* Botões de navegação */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AgendaScreen', { onConsultaAgendada: handleAddConsulta })}
      >
        <Icon name="event" size={24} color={theme.colors.white} style={styles.icon} />
        <Text style={styles.buttonText}>Marcar uma Consulta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RelatoriosScreen')}
      >
        <Icon name="medical-services" size={24} color={theme.colors.white} style={styles.icon} />
        <Text style={styles.buttonText}>Relatorios</Text>
      </TouchableOpacity>s

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SuaAgendaScreen', { consultas: consultas })}
      >
        <Icon name="history" size={24} color={theme.colors.white} style={styles.icon} />
        <Text style={styles.buttonText}>Sua agenda</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProfileScreen')}
      >
        <Icon name="account-circle" size={24} color={theme.colors.white} style={styles.icon} />
        <Text style={styles.buttonText}>Meu Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
    justifyContent: 'flex-start',
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
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    paddingVertical: 20,
    borderRadius: 20,
    marginVertical: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingLeft: 20,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 17,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 8,
  },
});
