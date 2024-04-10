import { Header } from "../../header/Index";
import { Contanier, Title, TitleHeigthLight, TextContent } from "./style";
import Banner from "../../../img/banner.png";
import {Button} from '../../button/Index'
import { useNavigate } from "react-router-dom";





const Home = () => {
  
  const navigate = useNavigate();

const HandleClickHome = () =>{
  navigate("/login")
}

  return (
    <>
      <Header />
      <Contanier>
        <div>
          <Title>
            <TitleHeigthLight>
              Implemente <br />
            </TitleHeigthLight>
            o seu futuro global agora
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button title='Começar agora' variant="secondary" onClick={HandleClickHome}/>

        </div>
        <div>
          <img src={Banner} alt="imagem principal" />
        </div>

      </Contanier>
    </>
  );
};

export { Home };
