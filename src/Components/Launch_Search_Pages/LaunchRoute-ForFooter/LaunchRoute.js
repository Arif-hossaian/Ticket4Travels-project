import { Card, CardContent, TextField, Button } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Autocomplete from '@material-ui/lab/Autocomplete';
import launchBanner from "./images/Launch-Banner-2.png"




const LaunchRoute = () => {

    let history = useHistory();
    const redirect = () => {
        history.push('/launch_search');
    }

    const cityList = [
        { title: 'Dhaka' }
    ];
    const cityList2 = [
        { title: 'Cox Bazar' }
    ];

    const { handleSubmit } = useForm(); // initialise the hook
    const onSubmit = (data) => {
        console.log(data);
        redirect();
    }


    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                    <Card>
                        <CardContent>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mt-4">
                                    <h5>From</h5>
                                    <Autocomplete id="combo-box-demo"
                                        freeSolo
                                        options={cityList}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField required {...params} label="Enter City" variant="outlined" fullWidth />}
                                    />
                                </div>
                                <div className="mt-3">
                                    <h5>To</h5>
                                    <Autocomplete id="combo-box-demo"
                                        freeSolo
                                        options={cityList2}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => <TextField required {...params} label="Enter City" variant="outlined" fullWidth />}
                                    />
                                </div>

                                <div className="row mt-3">
                                    <div className="col-sm-12 col-md-12 col-lg-12 col-12">
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                            <KeyboardDatePicker

                                                variant="inline"
                                                fullWidth
                                                format="MM/dd/yyyy"
                                                margin="normal"
                                                id="date-picker-inline"
                                                label="Date of Journey"
                                                value={selectedDate}
                                                onChange={handleDateChange}

                                            />

                                        </MuiPickersUtilsProvider>
                                    </div>


                                </div>

                                <div>
                                    <Button type="submit" style={{ width: '96%', marginTop: '1rem', backgroundColor: "#30dd89", color: "white" }}>
                                        <FontAwesomeIcon icon={faSearch} color="white" /> Search
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                    <img alt="BusBanner" src={launchBanner} className="img-fluid"></img>
                </div>
            </div>
        </div>
    )
}

export default LaunchRoute
