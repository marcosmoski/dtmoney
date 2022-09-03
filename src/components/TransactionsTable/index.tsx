import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable () { 

  useEffect(() => { 
    api.get("http://localhost:3000/api/transactions")
       .then(response => console.log(response.data));
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
          <tr> 
            <td> Desenvolvimento de website </td>
            <td className="deposit"> $12.000 </td>
            <td> Desenvolvimento </td>
            <td> 01/01/2021 </td>
          </tr>
          <tr> 
            <td> Desenvolvimento de website </td>
            <td className="withdraw"> - $12.000 </td>
            <td> Desenvolvimento </td>
            <td> 01/01/2021 </td>
          </tr>
          
        </tbody>
      </table>

    </Container>
  )
}