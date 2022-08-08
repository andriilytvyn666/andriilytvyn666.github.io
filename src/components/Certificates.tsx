import React from "react";

import {
  Stack,
  Typography,
  Grid,
  IconButton,
  Button,
  Paper,
} from "@mui/material";

import FileDownloadIcon from "@mui/icons-material/FileDownload";

import Store from "../Store.json";

export default function Certificates() {
  return (
    <Grid direction="column" justifyContent="center" spacing={2} container>
      {Store.certificates.map((value) => (
        <Grid key={value.name} item>
          <Paper variant="outlined">
            <Paper elevation={1} sx={{ py: "1em", px: "1.5em" }}>
              <Grid container direction="row" alignItems="center" spacing={2}>
                <Grid item>
                  <Button
                    href={`certificates/${value.file}`}
                    variant="contained"
                  >
                    View
                  </Button>
                </Grid>
                <Grid item sx={{ display: { xs: "none", md: "block" } }}>
                  <IconButton href={`certificates/${value.file}`} download>
                    <FileDownloadIcon />
                  </IconButton>
                </Grid>
                <Grid item xs>
                  <Stack direction="column">
                    <Typography>{value.name}</Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{
                        display: {
                          xs: "inline-block",
                          md: "none",
                        },
                      }}
                    >
                      {`${value.source}`}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{
                        display: {
                          xs: "inline-block",
                          md: "none",
                        },
                      }}
                    >
                      {`${value.totalTime}`}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{
                        display: {
                          xs: "none",
                          md: "inline-block",
                        },
                      }}
                    >
                      {`${value.source}  •  ${value.totalTime}`}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item>{value.year}</Grid>
              </Grid>
            </Paper>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
