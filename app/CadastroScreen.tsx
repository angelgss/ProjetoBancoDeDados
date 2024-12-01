import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { theme } from '@/src/theme/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CadastroScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [crp, setCRP] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [tipo, setTipo] = useState<'Paciente' | 'Profissional'>('Paciente');

  const handleSubmit = () => {
    if (
      name &&
      email &&
      senha &&
      telefone &&
      (tipo === 'Paciente' ? dataNascimento : crp)
    ) {
      Alert.alert(
        'Cadastro Realizado',
        `Cadastro como ${tipo} realizado com sucesso!`
      );
      if (tipo === 'Paciente') {
        navigation.navigate('HomeScreen'); // Redireciona para a tela do Paciente
      } else {
        navigation.navigate('HomeProScreen'); // Redireciona para a tela do Profissional
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
      <Text style={styles.title}>Cadastro</Text>

      {/* Botões de seleção de tipo */}
      <View style={styles.tipoContainer}>
        <TouchableOpacity
          style={[
            styles.tipoButton,
            tipo === 'Paciente' && styles.tipoButtonActive,
          ]}
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
          style={[
            styles.tipoButton,
            tipo === 'Profissional' && styles.tipoButtonActive,
          ]}
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

      {/* Campos comuns */}
      <View style={styles.inputContainer}>
        <Icon name="person" size={20} color={theme.colors.primary} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={name}
          onChangeText={setName}
          placeholderTextColor={theme.colors.textSecondary}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color={theme.colors.primary} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor={theme.colors.textSecondary}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color={theme.colors.primary} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
          placeholderTextColor={theme.colors.textSecondary}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color={theme.colors.primary} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
          placeholderTextColor={theme.colors.textSecondary}
        />
      </View>

      {/* Campos específicos */}
      {tipo === 'Paciente' ? (
        <View style={styles.inputContainer}>
          <Icon name="calendar-today" size={20} color={theme.colors.primary} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Data de Nascimento"
            value={dataNascimento}
            onChangeText={setDataNascimento}
            keyboardType="numeric"
            placeholderTextColor={theme.colors.textSecondary}
          />
        </View>
      ) : (
        <View style={styles.inputContainer}>
          <Icon name="work" size={20} color={theme.colors.primary} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="CRP (Conselho regional de Psicologia)"
            value={crp}
            onChangeText={setCRP}
            placeholderTextColor={theme.colors.textSecondary}
          />
        </View>
      )}

      {/* Botão de Cadastro */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Link para voltar */}
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
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
    color: theme.colors.textPrimary,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  tipoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: theme.colors.primary,
    borderWidth: 3,
    borderRadius: 20,
    marginBottom: 18,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.white,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    color: theme.colors.textPrimary,
  },
  icon: {
    marginRight: 8,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 25,
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
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
