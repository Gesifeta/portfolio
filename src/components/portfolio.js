import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./header";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "2rem",
    marginTop: "2rem",
    rowGap: "2rem",
    margin: "auto",
    textAlign: "left",
    backgroundColor: "#DDDDDD",
  },
  projectHead: {
    ...theme.typograph,
    marginTop: "solid",
    marginLeft: "solid",
    color: "Green",
    paddingBottom: "1rem",
    borderTop: "solid",
  },
}));

function Portfolio() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className="container">
        <Grid
          container
          width="80%"
          direction="column"
          className={classes.container}
        >
          <Grid item container sm={12} md={6} spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography className={classes.projectHead} variant="h5">
                Minibanking App
              </Typography>
              <div className="miniBanking">Mini Banking</div>
            </Grid>
            <Grid container item xs={12} sm={12} md={6} className="link">
              <Typography>
                This is a full stack project integreting back-end and front-end.
                The project replacates banking systems where users can register,
                open account, transfer funds, deposit , enquiry balances .
                Authentication and autherization is also implemented.
              </Typography>
              <a
                href="https://gemechugesifeta.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                See the project?
              </a>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                style={{
                  textDecoration: "underline",
                  marginTop: "1rem",
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                Languages and framework employed:
              </Typography>
              <ul>
                <li>HTML,CSS, and MUI</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>ReactJS</li>
                <li>NodeJS/express</li>
<<<<<<< HEAD
                <li>REST API</li>
=======
 <li>REST API</li>
>>>>>>> d8662943d64641b53bdf3c2605dbe90c14cf7b6c
                <li>MongoDB Compass</li>
                <li>Docker for containerization, and heroku for deployment</li>
              </ul>
            </Grid>
          </Grid>
          <Grid item container sm={12} md={12} spacing={2}>
            <Grid item xs={12} md={12}>
              <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h5" className={classes.projectHead}>
                  CountryInformation App
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <div className="countryInfo">Country Information</div>
              </Grid>
              <h5>
                Users can search of country, and look for basic informations
                like region, population size, and languages
              </h5>
              <Grid item xs={12} md={12}>
                <Typography
                  variant="h5"
                  style={{
                    textDecoration: "underline",
                    marginTop: "1rem",
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  Languages and framework employed:
                </Typography>
                <ul>
                  <li>HTML,CSS, SASS, and Bootstrap</li>
                  <li>Javascript</li>
                  <li>Typescript</li>
                  <li>ReactJS, Redux</li>
                  <li>React-Redux</li>
                  <li>Public API from https://restcountries.com </li>
                </ul>
                <a
                  href="https://gemechucountryinfo.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  See the project?
                </a>
              </Grid>
            </Grid>
            <Grid item container sm={12} md={6}>
              <Grid item xs={12} sm={12} md={12}></Grid>
              <Grid item xs={12} md={12}>
                <Typography variant="h5" className={classes.projectHead}>
                  RandomUser App
                </Typography>
                <div className="randomUser">Random Users</div>
                <Grid item xs={12} md={12}>
                  <Typography
                    variant="h5"
                    style={{
                      textDecoration: "underline",
                      marginTop: "1rem",
                      color: "green",
                      fontWeight: "bold",
                    }}
                  >
                    Languages and framework employed:
                  </Typography>
                  <ul>
                    <li>HTML,CSS</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>Public API from https://randomsuser.me </li>
                  </ul>
                  <a
                    href="https://randomsuser.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See the project?
                  </a>
                </Grid>
              </Grid>
            </Grid>

            <Grid item container sm={12} md={6}>
              <Grid item xs={12} md={12}>
                <Typography variant="h5" className={classes.projectHead}>
                  Todo App
                </Typography>
                <div className="todoList">Todo App</div>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography
                  variant="h5"
                  style={{
                    textDecoration: "underline",
                    marginTop: "1rem",
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  Languages and framework employed:
                </Typography>
                <ul>
                  <li>HTML,CSS</li>
                  <li>Javascript</li>
                  <li>ReactJS</li>
                </ul>
                <a
                  href="https://todoitemapplication.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  See the project?
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Portfolio;
