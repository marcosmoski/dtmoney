import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface TrasactionProps { 
  id: number,
  title: string, 
  type: string, 
  amount: number, 
  category: string, 
  createdAt: string
}

export function TransactionsTable () { 
  const [transactions, setTransactions] = useState<TrasactionProps[]>([]);

  useEffect(() => { 
    api.get("http://localhost:3000/api/transactions")
       .then(response => setTransactions(response.data.transactions));
  }, [])


 
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody> 
          
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}> 
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            );
          })}
          
        </tbody>
      </table>

    </Container>
  )
}