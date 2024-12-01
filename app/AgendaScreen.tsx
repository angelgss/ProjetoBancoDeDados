import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Alert, FlatList,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { theme } from '@/src/theme/theme';

export default function AgendaScreen({ navigation }: any) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState(false);
  const [agendamentos, setAgendamentos] = useState<Date[]>([]);

  const showMode = (currentMode: 'date' | 'time') => {
    setShow(true);
    setMode(currentMode);
  };

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(false);
    if (selectedDate && selectedDate > new Date()) {
      setDate(selectedDate);
    } else {
      Alert.alert('Data inválida', 'Escolha uma data e horário futuros.');
    }
  };

  const handleConfirm = () => {
    const horarioJaAgendado = agendamentos.some(
      (agendamento) => agendamento.toLocaleString() === date.toLocaleString()
    );

    if (horarioJaAgendado) {
      Alert.alert('Erro', 'Este horário já está agendado.');
    } else {
      setAgendamentos([...agendamentos, date]);
      Alert.alert('Agendamento Confirmado', `Data e Hora: ${date.toLocaleString()}`);
    }
  };

  const renderAgendamento = ({ item }: { item: Date }) => (
    <View style={styles.agendamentoItem}>
      <Text style={styles.agendamentoText}>{item.toLocaleString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agende sua consulta</Text>

      <View style={styles.dateContainer}>
        <Text style={styles.label}>Escolha a Data:</Text>
        <TouchableOpacity style={styles.dateButton} onPress={() => showMode('date')}>
          <Text style={styles.buttonText}>Data: {date.toLocaleDateString()}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.label}>Escolha a Hora:</Text>
        <TouchableOpacity style={styles.dateButton} onPress={() => showMode('time')}>
          <Text style={styles.buttonText}>
            Hora: {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </TouchableOpacity>
      </View>

      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          display="spinner"
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirmar Agendamento</Text>
      </TouchableOpacity>

      <FlatList
        data={agendamentos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderAgendamento}
        ListHeaderComponent={<Text style={styles.agendamentosHeader}>Seus Agendamentos</Text>}
        style={styles.agendamentosList}
      />

      <TouchableOpacity
        style={[styles.button]}
        onPress={() =>
          navigation.navigate('ProfissionalScreen', { agendamento: date.toLocaleString() })
        }
      >
        <Text style={styles.buttonText}>Escolher Profissional</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button]}
        onPress={() =>
          navigation.navigate('PagamentoScreen', { consulta: { profissional: 'Nome do Profissional', data: date.toLocaleDateString(), horario: date.toLocaleTimeString(), valor: 50.0 } })
        }
      >
        <Text style={styles.buttonText}>Realizar Pagamento</Text>
      </TouchableOpacity>
    </View>
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
    marginBottom: 20,
    textAlign: 'center',
  },
  dateContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    color: theme.colors.textSecondary,
    marginBottom: 5,
    fontWeight: '600',
  },
  dateButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: 20,
    marginVertical: 10,
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    paddingVertical: 15,
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
  agendamentosList: {
    marginTop: 20,
  },
  agendamentosHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: theme.colors.textPrimary,
  },
  agendamentoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.textSecondary,
  },
  agendamentoText: {
    fontSize: 16,
    color: theme.colors.textPrimary,
  },
});