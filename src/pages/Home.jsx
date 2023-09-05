import { useState } from 'react';
import { Box, styled} from '@mui/material';
import Sunset from '../assests/images/bagrd.jpg';
import Form from '../components/Form';
import Weather from '../components/Weather';


const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%'
})

const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'Cover',
    borderRadius: '20px 0 0 20px'
})


const Home = () => {
    const [result, setResult] = useState({})
    
    return (
        <Component>
            <Image></Image>
            <Box style={{width: '73%', height: '80%'}}>
                <Form setResult={setResult}/>
                <Weather result={result} />
            </Box>
        </Component>
    )
}

export default Home;