import { Header } from "../../header/Index";
import {MdEmail, MdLock} from 'react-icons/md'
import { Contanier,
  Title,
  TitleLogin,
  SubTitleLogin,
  EsqueciText,
  CriarText,
  Wrapper,
  Column,
  Row,} from './style'
import { Input } from "../../inpunt/index";
import { Button } from "../../button/Index";
import { useNavigate } from "react-router-dom";
import { useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const Login = () => {

  const navigateLogin = useNavigate();

  const HandlesinginLogin =() => {
    navigateLogin("/feed")
  }
  
  const schema = yup
  .object({
    email: yup.string().email( 'email invalido').required('Campo Obrigatorio'),
    password: yup.string().min(5, 'minimo de 5 caracteres').required('Campo Obrigatorio'),
  })
  .required()

  const {control,handleSubmit,formState: { errors, isValid}} = useForm( {
    resolver: yupResolver(schema),
    mode: onchange
  });



  const onSubmit = (data) => console.log(data)

  return (
    <>
      <Header />
        <Contanier>
          <Column>
            <Title>
              A plataforma para você aprender com experts, dominar as principais
              tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
          </Column>

          <Column>
            <Wrapper>
              <TitleLogin>
                Faça seu cadastro!
              </TitleLogin>
              <SubTitleLogin>
              Faça seu login e make the change._
              </SubTitleLogin>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="email" errorMessege={errors?.email?.message} control={control} placeholder="Digite seu e-mail" type='email' LeftIcon={<MdEmail/>} />
                <Input name="password" errorMessege={errors?.password?.message} control={control} placeholder="Digite sua senha" type='password' LeftIcon={<MdLock/>} />
                <Button title='Entrar' variant="secondary" type="submit"/>
              </form>
              <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText>Criar Conta</CriarText>
              </Row>
            </Wrapper>
          </Column>
        </Contanier>
    </>
  );
};

export { Login };
