import React, {useState} from 'react';
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import {FaEdit} from "react-icons/fa";
import {TextField} from "@mui/material";

const ShipmentsDetail = ({value, updateShipmentData}) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [date, setDate] = useState('');
    const [customer, setCustomer] = useState('');
    const [consignee, setConsignee] = useState('');
    const [trackingNo, setTrackingNo] = useState('');
    const [sStatus, setStatus] = useState('');
    // console.log(consignee)

    const updateStore = () => {
        const updatedValue = {
            orderNo: value.orderNo,
            date: date !== '' ? date : value.date,
            customer: customer !== '' ? customer : value.customer,
            consignee: consignee !== '' ? consignee : value.consignee,
            trackingNo: trackingNo !== '' ? trackingNo : value.trackingNo,
            status: sStatus !== '' ? sStatus : value.status,
        };
        updateShipmentData(updatedValue);
        handleClose()
    };

    return (
        <div>
            <Button sx={{ p: 2, mr: -3, backgroundColor: "#03a9f4"}} variant="contained" onClick={() => {handleClickOpen()}}> <FaEdit/> </Button>
            <Dialog
                fullWidth={true}
                maxWidth="ml"
                open={open}
                onClose={handleClose}
            >
                <Divider sx={{mb: 2, mt: 5 }} />
                <DialogTitle sx={{mb: 2, fontWeight: 'overline', fontSize: '14px', color: 'grey'}}> SHIPMENT DETAILS </DialogTitle>
                <DialogContent>
                    <Box>
                        <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                            <Grid item xs={6}>
                                <Typography variant='subtitle2' sx={{mb: 1}}>orderNo</Typography>
                                <TextField  inputProps={{style: {color: 'grey'}}} sx={{backgroundColor: '#e7e9ea'}} fullWidth defaultValue={value.orderNo}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant='subtitle2' sx={{mb: 1}}>date</Typography>
                                <TextField inputProps={{style: {color: 'grey'}}} sx={{backgroundColor: '#e7e9ea'}} fullWidth onChange={(e) => setDate(e.target.value)} defaultValue={value.date}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant='subtitle2' sx={{mb: 1}}>customer</Typography>
                                <TextField inputProps={{style: {color: 'grey'}}} sx={{backgroundColor: '#e7e9ea'}} fullWidth onChange={(e) => setCustomer(e.target.value)} defaultValue={value.customer}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant='subtitle2' sx={{mb: 1}}>trackingNo</Typography>
                                <TextField inputProps={{style: {color: 'grey'}}} sx={{backgroundColor: '#e7e9ea'}} fullWidth onChange={(e) => setTrackingNo(e.target.value)} defaultValue={value.trackingNo}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant='subtitle2' sx={{mb: 1}}>consignee</Typography>
                                <TextField inputProps={{style: {color: 'grey'}}} sx={{backgroundColor: '#e7e9ea'}} fullWidth onChange={(e) => setConsignee(e.target.value) } defaultValue={value.consignee}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant='subtitle2' sx={{mb: 1}}>status</Typography>
                                <TextField inputProps={{style: {color: 'grey'}}} sx={{backgroundColor: '#e7e9ea'}} fullWidth onChange={(e) => setStatus(e.target.value)} defaultValue={value.status}/>
                            </Grid>
                            <Button onClick={() => updateStore() }> Update store </Button>
                        </Grid>
                    </Box>
                </DialogContent>
                <Divider sx={{ ml: 3, mr: 3, mb: 5, mt: 3 }} />
            </Dialog>
        </div>
    );
};


export default ShipmentsDetail;