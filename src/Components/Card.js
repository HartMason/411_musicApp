import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CustomCard(props) {
  const { component: Component, setState, state, } = props;

  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h4" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2">
          {props.body}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Component state={ state } setState={setState} />
      
        
      </CardActions>
    </Card>
  );
}

