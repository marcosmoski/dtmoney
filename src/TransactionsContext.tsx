import {createContext, ReactNode, useEffect, useState} from 'react'
import { api } from './services/api';


interface TrasactionProps { 
  id: number,
  title: string, 
  type: string, 
  amount: number, 
  category: string, 
  createdAt: string
}

type TransactionInput = Omit<TrasactionProps, 'id' | 'createdAt'>

// TransactionInput = Pick<TrasactionProps, 'title' | 'type' | 'amount' | 'category'>

interface TransactionsProviderProps { 
  children: ReactNode;
}

interface TransactionContextData { 
  transactions: TrasactionProps[],
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider(props: TransactionsProviderProps) { 
  const { children } = props;
  const [transactions, setTransactions] = useState<TrasactionProps[]>([]);

  useEffect(() => { 
    api.get("http://localhost:3000/api/transactions")
    .then(response => setTransactions(response.data.transactions));
  }, [])

  async function createTransaction(transactionInput: TransactionInput) { 
    const responseApi = await api.post("/transactions", { ...transactionInput, createdAt: new Date() });
    const { transaction } = responseApi.data;
    setTransactions([
      ...transactions,
      transaction
    ]);
  }

  return (
    <TransactionsContext.Provider value={{
      transactions,
      createTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}