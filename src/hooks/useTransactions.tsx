import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';


interface TransacionProps {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string,
}

type TransactionInput = Omit<TransacionProps, 'id' | 'createdAt'>

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: TransacionProps[],
    createTransaction: (transaction: TransactionInput) => Promise<void>,
}

const TransactionsContex = createContext<TransactionsContextData>({} as TransactionsContextData);


export function TransacitonsProvider({ children }: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<TransacionProps[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {

        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        });

        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction,
        ])
    }


    return (
        <TransactionsContex.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContex.Provider>
    )
}


export function useTransactions() {

    const contex = useContext(TransactionsContex);

    return contex;
}