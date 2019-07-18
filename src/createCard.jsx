import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    minWidth: 250,
    margin: 15
  },
  media: {
    backgroundColor: "white",
    minHeight: 250
  }
});

const CreateCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link href={props.telescope.url} target="blank">
          <CardMedia className={classes.media} title={props.telescope.name}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
              }}
            >
              <a href={props.telescope.url} />
              <img border="0" src={props.telescope.img} class="center" />
            </div>
          </CardMedia>
        </Link>
        <Divider variant="middle" />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Link href={props.telescope.url}>{props.telescope.name}</Link>
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardContent>
        <Typography
          gutterBottom
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Price: £{props.telescope.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { CreateCard };
