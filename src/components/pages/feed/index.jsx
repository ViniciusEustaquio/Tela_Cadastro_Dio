import { Header } from "../../header/Index";
import { Contanier, Title, TitleHighlight, Column } from "./style";
import {Card} from '../../card/Index' 
import {UserInfo} from '../../UserInfo/'



const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Contanier>
        <Column flex={3}>
        <Title>Feed</Title>
        <Card />
        <Card />
        <Card />
        <Card />
      
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
        <UserInfo percentual={80} nome='Vinicius Eustaquio' image='https://avatars.githubusercontent.com/u/141078824?s=96&v=4'  />
        <UserInfo percentual={75} nome='Vinicius Eustaquio' image='https://avatars.githubusercontent.com/u/141078824?s=96&v=4'  />
        <UserInfo percentual={50} nome='Vinicius Eustaquio' image='https://avatars.githubusercontent.com/u/141078824?s=96&v=4'  />
        <UserInfo percentual={50} nome='Vinicius Eustaquio' image='https://avatars.githubusercontent.com/u/141078824?s=96&v=4'  />
        <UserInfo percentual={45} nome='Vinicius Eustaquio' image='https://avatars.githubusercontent.com/u/141078824?s=96&v=4'  />
        </Column>
      </Contanier>
    </>
  );
};

export { Feed };
