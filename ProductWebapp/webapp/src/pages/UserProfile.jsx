import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import "../styles/Userprofile.css";
import RightSideNav from "../components/RightSideNav";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Userprofile() {
  const [data, SetData] = useState([]);
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`http://localhost:8080/user-service/users/verify`, {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      })
      .then((res) => {
        // console.log(res.data);
        SetData(res.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }, []);
  console.log(data.emailId);
  return (
    <div className="bg-color">
      <Navbar />
      <Box sx={{ display: "flex"}}>
        <Sidenav />
        <RightSideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <section className="user">
            <Grid container direction="row" spacing={10}>
              <Grid item xs="6">
                <Card sx={{ padding: "6vh" }}>
                  <CardMedia
                    component="img"
                    image="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    sx={{
                      maxWidth: "170px",
                      margin: "0px auto",
                      borderRadius: "100%",
                      borderColor: "grey.500 ",
                    }}
                  />
                  <CardContent>
                    <Grid container sx={{ margin: "1%" }}>
                      <Grid item xs="9">
                        <Typography
                          variant="h5"
                          sx={{ fontFamily: "sans-serif" }}
                        >
                          Name
                        </Typography>
                      </Grid>
                      <Grid item xs="3">
                        <Typography
                          variant="h6"
                          sx={{ fontFamily: "sans-serif", textAlign: "left" }}
                        >
                          {data.nameOfTheUser}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container sx={{ margin: "1%" }}>
                      <Grid item xs="9">
                        <Typography
                          variant="h5"
                          sx={{ fontFamily: "sans-serif" }}
                        >
                          Email
                        </Typography>
                      </Grid>
                      <Grid item xs="3">
                        <Typography
                          variant="h6"
                          sx={{ fontFamily: "sans-serif", textAlign: "left" }}
                        >
                          {data.emailId}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container sx={{ margin: "1%" }}>
                      <Grid item xs="9">
                        <Typography
                          variant="h5"
                          sx={{ fontFamily: "sans-serif" }}
                        >
                          Password
                        </Typography>
                      </Grid>
                      <Grid item xs="3">
                        <Typography
                          variant="h6"
                          sx={{ fontFamily: "sans-serif", textAlign: "left" }}
                        >
                          {data.password}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container sx={{ margin: "1%" }}>
                      <Grid item xs="9">
                        <Typography
                          variant="h5"
                          sx={{ fontFamily: "sans-serif" }}
                        >
                          Phone
                        </Typography>
                      </Grid>
                      <Grid item xs="3">
                        <Typography
                          variant="h6"
                          sx={{ fontFamily: "sans-serif", textAlign: "left" }}
                        >
                          {data.mobileNumber}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container sx={{ margin: "1%" }}>
                      <Grid item xs="9">
                        <Typography
                          variant="h5"
                          sx={{ fontFamily: "sans-serif" }}
                        >
                          Location
                        </Typography>
                      </Grid>
                      <Grid item xs="3">
                        <Typography
                          variant="h6"
                          sx={{ fontFamily: "sans-serif", textAlign: "left" }}
                        >
                          {data.location}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Box
                      m={1}
                      display="flex"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Button
                        onClick={() => navigate("/bank-details")}
                        variant="contained"
                        sx={{
                          height: 40,
                          backgroundColor: "#005555",
                          ":hover": {
                            color: "white",
                            backgroundColor: "#005555",
                          },
                          margin: "3vh auto",
                        }}
                      >
                        Check Balance
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </section>
        </Box>
        <RightSideNav />
      </Box>
    </div>
  );
}
