import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '@/src/theme/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProfileScreen({ navigation }: any) {
  const handleLogout = () => {
    // Lógica para fazer logout (ex: limpar dados de sessão)
    navigation.navigate('LoginScreen'); // Exemplo de navegação para a tela de login após o logout
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do paciente</Text>

      {/* Botões de navegação com ícones */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditProfileScreen')}>
        <Icon name="edit" size={20} color={theme.colors.white} style={styles.icon} />
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SettingsScreen')}>
        <Icon name="settings" size={20} color={theme.colors.white} style={styles.icon} />
        <Text style={styles.buttonText}>Configurações</Text>
      </TouchableOpacity>

      {/* Botão de logout */}
      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Icon name="logout" size={20} color={theme.colors.white} style={styles.icon} />
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: theme.colors.textPrimary,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, // Espaçamento entre o ícone e o texto
  },
  icon: {
    // Tamanho e espaçamento do ícone
  },
  logoutButton: {
    backgroundColor: theme.colors.primary, // Pode alterar para outra cor mais destacada
  },
});
