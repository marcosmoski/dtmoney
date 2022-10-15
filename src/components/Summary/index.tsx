import { Container, OutcomeDiv } from "./styles";
import inputImg from '../../assets/input.svg'
import outputImg from '../../assets/output.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() { 
  const {transactions} =  useTransactions();

  const summary = transactions.reduce((acc, transaction) => { 
    if (transaction.type === 'deposit') { 
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else { 
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0, 
    total: 0
  })

  return (
    <Container>

      <div> 
        <header> 
          Income
          <img src={inputImg} alt="Income"></img>
        </header>
        <strong> {
                  new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(summary.deposits)
                 } </strong>
      </div>

      <OutcomeDiv> 
        <header> 
          Outcome
          <img src={outputImg} alt="Outcome"></img>
        </header>
        <strong> {
                  new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(summary.withdraws)
                } 
        </strong>
      </OutcomeDiv>

      <div className="highlight-background"> 
        <header> 
          Total
          <img src={totalImg} alt="Income"></img>
        </header>
        <strong> {
                  new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(summary.total)
                } 
        </strong>
      </div>

    </Container>
  )
}