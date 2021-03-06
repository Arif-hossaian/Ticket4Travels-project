import React from 'react'
import WaveOnly from "../Verification-code_Page/images/wave-only.png"
import RewardPng from "../Verification-code_Page/images/reward.png"
import CustomerCare from "../Verification-code_Page/images/customer-agent.png"
import OnlineBook from "../Verification-code_Page/images/online-booking.png"
import OnlinePaymentt from "../Verification-code_Page/images/online-payment.png"
import "../Verification-code_Page/verificationPage.css"
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardActions, CardContent, Typography, TextField, Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 600,
        [theme.breakpoints.down("md")]: {
            maxWidth: 480
        }
    },
}));



function VerificationPage() {

    let history = useHistory();

    const handleClick = () => {
        history.push("/account_inforamtion");
    }
    const classes = useStyles();

    return (
        <div>
            <div className="">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">

                        <img src={WaveOnly} className="waveClss_div img-fluid" alt=""></img>
                        <div className="container ml-3 under_DIV">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12 mt-5">
                                    <div className="text-left mt-5"><img src={RewardPng} width="40px" height="40px" className="img-fluid" alt=""></img></div>
                                    <h5 className="text-left">Reward For your booking</h5>
                                    <p className="text-left">Earn points for Flight, Hotel and Flight+Hotel booking.Reddem for cheaper travels and deal from various March</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 mt-5">
                                    <div className="text-left"><img src={CustomerCare} width="40px" height="40px" className="img-fluid" alt=""></img></div>
                                    <h5 className="text-left">Extra support after you book</h5>
                                    <p className="text-left">Earn points for Flight, Hotel and Flight+Hotel booking.Reddem for cheaper travels and deal from various March</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="text-left"><img src={OnlineBook} width="40px" height="40px" className="img-fluid" alt=""></img></div>
                                    <h5 className="text-left">Reward For your booking</h5>
                                    <p className="text-left">Earn points for Flight, Hotel and Flight+Hotel booking.Reddem for cheaper travels and deal from various March</p>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="text-left"><img src={OnlinePaymentt} width="40px" height="40px" className="img-fluid" alt=""></img></div>
                                    <h5 className="text-left">Extra support after you book</h5>
                                    <p className="text-left">Earn points for Flight, Hotel and Flight+Hotel booking.Reddem for cheaper travels and deal from various March</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 VerificationCard
                    _div">
                        <Card className={classes.root}>
                            <CardContent >
                                <Typography variant="h2">Account Verification</Typography>
                                <p className="text-left bg-Color mt-5">Verification code has been send to <span className="acqua_colorDiv">name@gmail.com</span> Please insert Verifiaction code to verify</p>
                                <Typography variant="h5" className="text-left mt-4">Verification code</Typography>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <TextField
                                                type="text"
                                                variant="outlined"
                                                required
                                                fullWidth
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <CardActions className="col-lg-12 col-md-12 col-12">
                                            <Button type="submit" variant="contained" onClick={handleClick} color="primary">
                                                Submit
                                            </Button>
                                        </CardActions>

                                    </div>
                                    <p className=" mt-2">Haven't receive the verifivation code? <span className="acqua_colorDiv">Resend</span></p>

                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerificationPage
