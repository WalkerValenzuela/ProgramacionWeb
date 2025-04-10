import * as React from 'react';
import './CardUser.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardUser = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div id="cardContainer">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={props.image}
        alt="alt"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Seguidores: <a href={props.urlseguidores} target="_blank" rel="noopener noreferrer">{props.urlseguidores}</a>
        <Button id="Boton" variant="contained" href={props.url} target="_blank">Acceder GitHub</Button>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Mas Informacion:</Typography>
          <Typography paragraph>
          <Stack direction="column" spacing={1}>
  <Typography variant="body2">
    Tipo De Usuario: <a id="adicional" href={props.type} target="_blank" rel="noopener noreferrer">{props.type}</a>
  </Typography>
  <Typography variant="body2">
<a id="adicional" href={props.subscriptions_url} target="_blank" rel="noopener noreferrer">{props.subscriptions_url}</a>
  </Typography>
  <Typography variant="body2">
 <a id="adicional" href={props.repos_url} target="_blank" rel="noopener noreferrer">{props.repos_url}</a>
  </Typography>
  <Typography variant="body2">
              <a id="adicional" href={props.organizations_url} target="_blank" rel="noopener noreferrer">{props.organizations_url}</a>
              </Typography>
             </Stack>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
};

export default CardUser;
