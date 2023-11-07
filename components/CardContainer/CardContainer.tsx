import { Grid } from '@mui/material';
import HomeCard from './components/HomeCard';
import styles from './CardContainer.module.scss';

const CardContainer = ({ cardData }) => {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      className={styles.container}
    >
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <HomeCard
            title={card.title}
            description={card.description}
            link={card.link}
            isExternal={card.isExternal}
            version={card.version}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardContainer;
