import React from "react";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";
import "../styles/Bankdetails.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
  Box,
  Divider,
} from "@mui/material";

// const banks = [
//   {
//     value: "SBI",
//   },
//   {
//     value: "HDFC",
//   },
//   {
//     value: "ICICI",
//   },
//   {
//     value: "JPY",
//   },
// ];

export default function BankDetails() {
  return (
    <>
      <div className="bg-color">
        <Navbar />
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <section className="bankdetails">
              <Grid container direction="row" spacing={3} className="gridbank">
                <Grid item xs="12">
                  <Card className="gridbank">
                    <CardHeader>Bank Details</CardHeader>
                    <CardContent>
                      <Grid container>
                        <Grid container sx={{ margin: "10px" }}>
                          <Grid item xs="6">
                            <Typography sx={{ fontSize: 18, paddingTop: 2 }}>
                              Bank Name
                            </Typography>
                          </Grid>

                          <Grid item xs="6">

                          <TextField
                              required
                              id="outlined-required"
                              label="Required"
                              fullWidth
                            />
                            
                          </Grid>
                        </Grid>
                        <Divider />{" "}
                        <Grid container sx={{ margin: "10px" }}>
                          <Grid item xs="6">
                            <Typography sx={{ fontSize: 18, paddingTop: 2 }}>
                              Account Number
                            </Typography>
                          </Grid>

                          <Grid item xs="6">
                            <TextField
                              required
                              id="outlined-required"
                              label="Required"
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                        <Divider />{" "}
                        
                      </Grid>
                      <Grid container>
                        <Grid container sx={{ margin: "10px" }}>
                          <Grid item xs="6">
                            <Typography sx={{ fontSize: 18, paddingTop: 2 }}>
                              Bank Branch
                            </Typography>
                          </Grid>

                          <Grid item xs="6">
                            <TextField
                              required
                              id="outlined-required"
                              label="Required"
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                        <Divider />{" "}
                        <Grid container sx={{ margin: "10px" }}>
                          <Grid item xs="6">
                            <Typography sx={{ fontSize: 18, paddingTop: 2 }}>
                              Account Type
                            </Typography>
                          </Grid>

                          <Grid item xs="6">
                            <TextField
                              required
                              id="outlined-required"
                              label="Required"
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                        <Divider />{" "}
                        <Grid container sx={{ margin: "10px" }}>
                          <Grid item xs="6">
                            <Typography sx={{ fontSize: 18, paddingTop: 2 }}>
                              SWIFT Code
                            </Typography>
                          </Grid>

                          <Grid item xs="6">
                            <TextField
                              required
                              id="outlined-required"
                              label="Required"
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                        <Grid container sx={{ margin: "10px" }}>
                          <Grid item xs="6">
                            <Typography sx={{ fontSize: 18, paddingTop: 2 }}>
                               Balance
                            </Typography>
                          </Grid>

                          <Grid item xs="6">
                            <TextField
                              required
                              id="outlined-required"
                              label="Required"
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>{" "}
              </Grid>{" "}
            </section>
          </Box>
        </Box>
      </div>
    </>
  );
}
