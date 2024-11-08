import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import OverviewImage from '../../../assets/images/overview.png';

const HeroCard = () => {
  return (
    <Card sx={{ background: '#FFF3E0' }}>
      <CardContent>
        <Box display={ 'flex' } flexDirection={ 'row' } alignItems={ 'center' } justifyContent={ 'space-around' }>
          <Box>
            <Typography>Olá usuário!</Typography>
            <Typography>Confira as informações de sua casa inteligente!</Typography>
          </Box>
          <img src={ OverviewImage } alt='Visão geral' height={ 180 } />
        </Box>
      </CardContent>
    </Card>
  );
}

export default HeroCard;