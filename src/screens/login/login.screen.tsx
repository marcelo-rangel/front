import { Container, Grid } from '@mui/material';
import Form from './components/form/form.component';
import { Logo, Wrapper } from './login.styled';
import login from '../../assets/icons/logo.svg';


export function Login(){
    return (
        <>
        <Container>
            <Wrapper container justifyContent={'center'}>
                <Grid xs={3} justifyContent={'center'}>
                    <Grid container justifyContent={'center'}>
                        <Logo src={login} alt={'Netflix Logo'}/>                         
                        <Form />
                    </Grid>
                </Grid>
            </Wrapper>
        </Container>
        
        </>
     )
}

