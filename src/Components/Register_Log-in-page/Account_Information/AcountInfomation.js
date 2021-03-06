import React from 'react'
import WaveOnly from "../Account_Information/images/wave-only.png"
import RewardPng from "../Account_Information/images/reward.png"
import CustomerCare from "../Account_Information/images/customer-agent.png"
import OnlineBook from "../Account_Information/images/online-booking.png"
import OnlinePaymentt from "../Account_Information/images/online-payment.png"
import validate1 from "../Account_Information/validateInfo1"
import useForm1 from "../Account_Information/useForm1"
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

const AcountInfomation = ({ submitForm1 }) => {

    const { handleChange1, handleSubmit1, values1, errors1 } = useForm1(
        submitForm1,
        validate1
    );

    const classes = useStyles()
    return (
        <div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">

                    <img src={WaveOnly} width="1000" height="500" alt="" className="waveClss_div img-fluid "></img>
                    <div className="container ml-3 under_DIV">
                        <div className="row mt-5">
                            <div className="col-lg-6 col-md-6 col-12 mt-5">
                                <div className="text-left"><img src={RewardPng} width="40px" height="40px" alt="" className="img-fluid"></img></div>
                                <h5 className="text-left">Reward For your booking</h5>
                                <p className="text-left">Earn points for Flight, Hotel and Flight+Hotel booking.Reddem for cheaper travels and deal from various March</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mt-5">
                                <div className="text-left"><img src={CustomerCare} width="40px" height="40px" alt="" className="img-fluid"></img></div>
                                <h5 className="text-left">Extra support after you book</h5>
                                <p className="text-left">Earn points for Flight, Hotel and Flight+Hotel booking.Reddem for cheaper travels and deal from various March</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12 mt-5">
                                <div className="text-left"><img src={OnlineBook} width="40px" height="40px" alt="" className="img-fluid"></img></div>
                                <h5 className="text-left">Reward For your booking</h5>
                                <p className="text-left">Earn points for Flight, Hotel and Flight+Hotel booking.Reddem for cheaper travels and deal from various March</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mt-5">
                                <div className="text-left"><img src={OnlinePaymentt} width="40px" height="40px" alt="" className="img-fluid"></img></div>
                                <h5 className="text-left">Extra support after you book</h5>
                                <p className="text-left">Earn points for Flight, Hotel and Flight+Hotel booking.Reddem for cheaper travels and deal from various March</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-5 VerificationCard
                    _div">
                    <Card className={classes.root}>
                        <CardContent >
                            <Typography variant="h3">Account Information</Typography>
                            <p className="text-left bg-Color mt-5">One more step to become our <span className="acqua_colorDiv">Tickets4travel</span> member. Please enter your Fullname and passowrd to log in</p>

                            <form onSubmit={handleSubmit1} noValidate>
                                <div className="form-group">
                                    <Typography variant="h5" className="text-left">Full Name</Typography>
                                    <TextField
                                        label="Enter your Full Name"
                                        variant="outlined"
                                        type="text"
                                        name="username"
                                        value={values1.username}
                                        onChange={handleChange1}
                                        fullWidth
                                    />
                                    {errors1.username && <p>{errors1.username}</p>}
                                </div>

                                <div className="form-group">
                                    <Typography variant="h5" className="text-left">New Password</Typography>
                                    <TextField
                                        variant="outlined"
                                        type="password"
                                        name="password"
                                        onChange={handleChange1}
                                        value={values1.password}
                                        fullWidth
                                    />
                                    <small class="form-text text-muted text-left">Minimum eight characters, at least one letter and one number.</small>
                                    {errors1.password && <p>{errors1.password}</p>}
                                </div>

                                <div className="form-group">
                                    <Typography variant="h5" className="text-left">Re-type Password</Typography>
                                    <TextField
                                        variant="outlined"
                                        type="password"
                                        name="password2"
                                        onChange={handleChange1}
                                        value={values1.password2}
                                        fullWidth
                                    />
                                    <small class="form-text text-muted text-left">Minimum eight characters, at least one letter and one number.</small>
                                    {errors1.password2 && <p>{errors1.password2}</p>}
                                </div>

                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" />
                                    <label class="form-check-label text-left" for="exampleCheck1">send me about promotions and <span>Tickets4travel's</span> exclusive Discount</label>
                                </div>

                                <CardActions><Button type="submit" variant="contained" color="primary">Done</Button></CardActions>

                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default AcountInfomation
