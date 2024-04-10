
import {Contanier, Row, Wrapper, BuscarInputContanier, Menu, MenuRight, Inpunt, UsePicture} from './Style'
import {Button} from '../button/Index'
import Logo from '../../img/logo-dio.png'




const Header = ({autenticado}) => {
  return (
 <Wrapper>
    <Contanier>
    <Row>
            <img src={Logo} alt='Logo da Dio' />
            {(autenticado) ? (
                <>
                <BuscarInputContanier>
                    <Inpunt placeholder='Buscar..... '/>
                </BuscarInputContanier>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>

                </>
            ) : null};
        </Row>
        <Row>
          
          {autenticado ? (

                    <UsePicture src='https://avatars.githubusercontent.com/u/141078824?s=96&v=4' />
          ) : (
            <>
            
            
            <MenuRight href=''>Home</MenuRight>
            <Button title="Entrar" />
            <Button title="Cadastrar" />
            
            </>
          )}  
            
        </Row>
    </Contanier>
 </Wrapper>
  )
};

export { Header };
