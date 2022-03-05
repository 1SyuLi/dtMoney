import { useState } from 'react';
import Modal from 'react-modal';

import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';

import {
    Container,
    TransactionTypeContainer,
    RadioBox
} from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {


    const [type, setType] = useState('deposit');




    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={CloseImg} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar Transação</h2>

                <input
                    type="text"
                    placeholder="Título"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={IncomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={OutcomeImg} alt="Saída" />
                        <span>Saida</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>
    )
}