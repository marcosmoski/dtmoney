import Modal from 'react-modal'
import { useContext, useState } from 'react';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

import closeImg from '../../assets/close.svg'
import inputImg from '../../assets/input.svg'
import outputImg from '../../assets/output.svg'

import { Container,TransactionTypeContainer,RadioBox } from './styles';

interface NewTransactionModalProps { 
  isOpen: boolean;
  onRequestClose: () => void;
}



export function NewTransactionModal ({isOpen, onRequestClose}: NewTransactionModalProps) { 
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit')
  const {createTransaction} = useContext(TransactionsContext);

  async function handleCreateNewTransaction(event: React.FormEvent) { 
    event.preventDefault();

    await createTransaction({
      title, 
      amount, 
      category, 
      type
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }


  return (
    <Modal isOpen={isOpen} 
           onRequestClose={onRequestClose}
           overlayClassName="react-modal-overlay"
           className="react-modal-content">
      <button 
        type='button'
        onClick={onRequestClose}
        className="react-modal-close"
      > 
        <img src={closeImg} alt='Fechar modal'/>
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
      <h2>New transaction</h2>
        <input placeholder='Title' 
               value={title} 
               onChange={event => setTitle(event.target.value)}
        />
        <input placeholder='Value' 
               type="number"
               value={amount}
               onChange={event => setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox type='button'
                    onClick={() => {setType('deposit')}}
                    isActive={type === 'deposit'}
                    activeColor="green">
            <img src={inputImg} alt="Income" />
            <span> Income </span>
          </RadioBox>
          <RadioBox type='button'
                  onClick={() => {setType('withdraw')}}
                  isActive={type === 'withdraw'}
                  activeColor="red">
            <img src={outputImg} alt="Outcome" />
            <span> Outcome </span>
          </RadioBox>
        </TransactionTypeContainer>
        <input placeholder='Category' 
               type="text"
               value={category}
               onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Save</button>
      </Container>
    </Modal>
  );
}