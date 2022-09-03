import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from "miragejs";
import Modal from 'react-modal'
import { useState } from "react";


createServer({
  routes() {
      this.namespace = 'api'

      this.get('/transactions', () => { 
        return [
          {
           id: 1, 
           title: 'Transaction 1' , 
           amount: 400, 
           type: 'deposit', 
           category: 'Salary', 
           createdAt: new Date()
          },
          {
            id: 2, 
            title: 'Transaction 2' , 
            amount: 200, 
            type: 'withdraw', 
            category: 'Food', 
            createdAt: new Date()
           },
           {
            id: 3, 
            title: 'Transaction 3' , 
            amount: 30000, 
            type: 'deposit', 
            category: 'Salary', 
            createdAt: new Date()
           },
           {
            id: 3, 
            title: 'Transaction 3' , 
            amount: 1000, 
            type: 'withdraw',
            category: 'House', 
            createdAt: new Date()
           }
        ]
      })
  }
})


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal () { 
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal () { 
    setIsNewTransactionModalOpen(false)
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>


      <Dashboard /> 

      <Modal isOpen={isNewTransactionModalOpen} 
               onRequestClose={handleCloseNewTransactionModal}>
      </Modal>

      <GlobalStyle />

    </>    
  );
}