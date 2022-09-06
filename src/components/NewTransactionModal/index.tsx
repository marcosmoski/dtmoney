import Modal from 'react-modal'
import { Container,TransactionTypeContainer,RadioBox } from './styles';
import closeImg from '../../assets/close.svg'
import inputImg from '../../assets/input.svg'
import outputImg from '../../assets/output.svg'
import { useState } from 'react';


interface NewTransactionModalProps { 
  isOpen: boolean;
  onRequestClose: () => void;
}



export function NewTransactionModal ({isOpen, onRequestClose}: NewTransactionModalProps) { 
  const [type, setType] = useState('deposit')


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
      <Container>
      <h2>New transaction</h2>
        <input placeholder='Title' />
        <input placeholder='Value' type="number"/>
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
        <input placeholder='Category' type="text"/>
        <button type="submit">Save</button>
      </Container>
    </Modal>
  );
}