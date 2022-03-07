import { useContext } from 'react';
import {
    Container
} from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContex } from '../../TransactionsContex';

export function Summary() {

    const transactions = useContext(TransactionsContex);
    console.log(transactions);


    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>

                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>

                <strong>- R$500,00</strong>
            </div>

            <div className='totalCard'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>

                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}