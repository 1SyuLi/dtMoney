import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';


interface TransacionProps {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string,
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContex = createContext<TransacionProps[]>([]);

export function TransacitonsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransacionProps[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);


    return (
        <TransactionsContex.Provider value={transactions}>
            {children}
        </TransactionsContex.Provider>
    )

}