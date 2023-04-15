import React from 'react';
import './ShipmentsTable.css';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Button from "@mui/material/Button";
import { FaTimes } from 'react-icons/fa';
import ShipmentsDetail from "./ShipmentsDetail";


const ShipmentsTable = ({ shipmentsData, onDelete, updateShipmentData}) => {

    let oneItem = shipmentsData[0];
    let heads = [...Object.keys(oneItem)];

    const handleDelete = (shipmentsDataItemToDelete) => {
        let elementToRemove = shipmentsDataItemToDelete;
        let updatedShipmentsData = shipmentsData.filter( element => element !== elementToRemove)
        onDelete(updatedShipmentsData);
    }

    return (
            <TableContainer>
                <Table>
                        <TableHead>
                            <TableRow sx={{backgroundColor: '#EEF5F9'}}>
                                {heads.map((head) => (
                                    <TableCell key={head} sx={{fontWeight: 'bold'}}>{head.toUpperCase()}</TableCell>
                                    )
                                )}
                                <TableCell/>
                                <TableCell/>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {shipmentsData.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell align="left">{item.orderNo}</TableCell>
                                    <TableCell align="left">{item.date}</TableCell>
                                    <TableCell align="left">{item.customer}</TableCell>
                                    <TableCell align="left">{item.trackingNo}</TableCell>
                                    <TableCell align="left">{item.status}</TableCell>
                                    <TableCell align="left">{item.consignee}</TableCell>
                                    <TableCell><ShipmentsDetail value={item} updateShipmentData={updateShipmentData}/></TableCell>
                                    <TableCell><Button sx={{ p: 2}} variant="contained" color="error" onClick={() => handleDelete(item)}><FaTimes/></Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                </Table>
            </TableContainer>
    );
};


export default ShipmentsTable;