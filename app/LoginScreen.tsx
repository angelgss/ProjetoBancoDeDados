import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { theme } from '@/src/theme/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tipo, setTipo] = useState<'Paciente' | 'Profissional'>('Paciente'); // Define o tipo padrão

  const handleLogin = () => {
    if (email && password) {
      // Valida e redireciona com base no tipo
      if (tipo === 'Paciente') {
        navigation.navigate('HomeScreen'); // Redireciona para tela do Paciente
      } else if (tipo === 'Profissional') {
        navigation.navigate('HomeProScreen'); // Redireciona para tela do Profissional
      }
    } else {
      Alert.alert('Erro', 'Preencha todos os campos corretamente.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Login</Text>

      {/* Campo Email */}
      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color={theme.colors.primary} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="E-mail:"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor={theme.colors.textSecondary}
        />
      </View>

      {/* Campo Senha */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color={theme.colors.primary} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Senha:"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholderTextColor={theme.colors.textSecondary}
        />
      </View>
       
      {/* Botões para escolher o tipo de usuário */}
      <View style={styles.tipoContainer}>
        <TouchableOpacity
          style={[styles.tipoButton, tipo === 'Paciente' && styles.tipoButtonActive]}
          onPress={() => setTipo('Paciente')}
        >
          <Text
            style={[
              styles.tipoButtonText,
              tipo === 'Paciente' && styles.tipoButtonTextActive,
            ]}
          >
            Paciente
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tipoButton, tipo === 'Profissional' && styles.tipoButtonActive]}
          onPress={() => setTipo('Profissional')}
        >
          <Text
            style={[
              styles.tipoButtonText,
              tipo === 'Profissional' && styles.tipoButtonTextActive,
            ]}
          >
            Profissional
          </Text>
        </TouchableOpacity>
      </View>

      {/* Botão de Login */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Link para cadastro */}
      <TouchableOpacity onPress={() => navigation.navigate('CadastroScreen')}>
        <Text style={styles.linkText}>Não tem uma conta? Cadastre-se</Text>
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
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: theme.colors.textPrimary,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    paddingVertical: 8,
    marginBottom: 18,
    borderColor: theme.colors.primary,
    borderWidth: 3,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    color: theme.colors.textPrimary,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: theme.colors.primary,
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  icon: {
    marginRight: 8,
  },
  tipoContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  tipoButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
  },
  tipoButtonActive: {
    backgroundColor: theme.colors.primary,
  },
  tipoButtonText: {
    fontSize: 16,
    color: theme.colors.primary,
  },
  tipoButtonTextActive: {
    color: theme.colors.white,
  },
});