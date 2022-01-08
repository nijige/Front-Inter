import {Wrapper,Background,InputContainer,ButtonContainer} from './styles';
import background from '../../assets/images/background-login.jpg';
import Card from '../../components/Card';
import logoInter from '../../assets/images/Inter-orange.png';
import Button from '../Button';
import { Link } from 'react-router-dom';

const SignIn = () => {

    return (

        <Wrapper>
            <Background image={background}/>
          <Card width= "403px">
              <img src={logoInter} width={172} height={61} alt="logo inter" />

          <InputContainer>
          <input placeholder='EMAIL' />
          <input placeholder='SENHA' type= "password"/>

          </InputContainer>

          <ButtonContainer>
              <Button type="button"> Entrar</Button>
              <p>Ainda não é cadastrado? <Link to="/signup"> Cadastre-se</Link></p>
          </ButtonContainer>
          </Card>
        </Wrapper>
    )
}

export default SignIn;