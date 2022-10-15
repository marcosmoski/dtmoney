import { Container } from "./styles";
import inputImg from '../../assets/input.svg'
import outputImg from '../../assets/output.svg'
import totalImg from '../../assets/total.svg'
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() { 
  const transactionsContextData = useContext(TransactionsContext);
  return (
    <Container>

      <div> 
        <header> 
          Income
          <img src={inputImg} alt="Income"></img>
        </header>
        <strong> $100,00 </strong>
      </div>

      <div> 
        <header> 
          Income
          <img src={outputImg} alt="Income"></img>
        </header>
        <strong> -$100,00 </strong>
      </div>

      <div className="highlight-background"> 
        <header> 
          Total
          <img src={totalImg} alt="Income"></img>
        </header>
        <strong> $0,00 </strong>
      </div>

    </Container>
  )
}