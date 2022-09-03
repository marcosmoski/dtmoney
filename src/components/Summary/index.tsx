import { Container } from "./styles";
import inputImg from '../../assets/input.svg'
import outputImg from '../../assets/output.svg'
import totalImg from '../../assets/total.svg'

export function Summary() { 
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