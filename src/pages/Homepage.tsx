import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid, Typography, useTheme } from "@mui/material";
import axios from "axios";
import ProjectsList from "../components/ProjectsList";

type AboutMeInfo = {
  name: string;
  email: string;
  text: string;
};

function AboutMe() {
  const [info, setInfo] = useState<AboutMeInfo>();
  const theme = useTheme();

  useEffect(() => {
    axios.get("https://localhost:5001/api/aboutme").then((response) => {
      setInfo(response.data);
    });
  }, []);

  return (
    <Card
      sx={{
        width: "100%",
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <CardContent>
        <Typography variant="subtitle1" component="div">
          {info?.name}
        </Typography>
        <Typography variant="body1" component="div">
          {info?.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Homepage() {
  useEffect(() => {
    document.title = "Homepage :: Andrii Lytvyn";
  }, []);

  return (
    <div>
      <Grid spacing={2} justifyContent="center" direction="column" container>
        <Grid item>
          <Typography gutterBottom variant="h5" component="div" align="center">
            About me
          </Typography>
          <AboutMe />
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Projects
          </Typography>
          <ProjectsList />
        </Grid>
      </Grid>
    </div>
  );
}
