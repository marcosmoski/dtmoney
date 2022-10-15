import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer, Model } from "miragejs";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

createServer({

  models: {
    transaction: Model
  },

  seeds(server) { 
    server.db.loadData({
      transactions: [
        {
          id: 1, 
          title: "freelance", 
          type: "deposit",
          category: "dev",
          amount: 6000, 
          createdAt: new Date("2021-02-12 09:00:00")
        },
        {
          id: 2, 
          title: "aluguel", 
          type: "withdraw",
          category: "home",
          amount: 1500, 
          createdAt: new Date("2021-02-13 09:00:00")
        }
      ]
    })
  },

  routes() {
      this.namespace = 'api'

      this.get('/transactions', () => { 
        return this.schema.all('transaction')
      })

      this.post('/transactions', (schema, request) => { 
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data);
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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard /> 

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal} 
      />
      

      <GlobalStyle />

    </TransactionsProvider>
  );
}