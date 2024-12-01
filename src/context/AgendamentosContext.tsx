

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Agendamento = {
  date: any;
  profissional: string;
  data: string;
  horario: string;
};

type AgendamentosContextType = {
  agendamentos: Agendamento[];
  adicionarAgendamento: (novoAgendamento: Agendamento) => void;
};

const AgendamentosContext = createContext<AgendamentosContextType | undefined>(undefined);

export const AgendamentosProvider = ({ children }: { children: ReactNode }) => {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

  const adicionarAgendamento = (novoAgendamento: Agendamento) => {
    setAgendamentos((prev) => [...prev, novoAgendamento]); // Garantindo que `novoAgendamento` seja do tipo `Agendamento`
  };

  return (
    <AgendamentosContext.Provider value={{ agendamentos, adicionarAgendamento }}>
      {children}
    </AgendamentosContext.Provider>
  );
};

export const useAgendamentos = () => {
  const context = useContext(AgendamentosContext);
  if (!context) {
    throw new Error('useAgendamentos deve ser usado dentro de um AgendamentosProvider');
  }
  return context;
};

