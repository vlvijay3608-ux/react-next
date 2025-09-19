import { SetStateAction, useEffect , useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {TableContainer , Paper , Table , TableHead , TableRow , TableCell , TableBody , Button,  } from "@mui/material";

import { getUser } from "../data/http.service";
import type { Users } from "../shared/models/User.model";

const Grid = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [usersData , setUserData] = useState<Users[]>([]);

    useEffect(() => {
        getUser().then((data: SetStateAction<Users[]>) => setUserData(data));
    },[]);
    
    const onViewClick =  (user: Users) => {
        dispatch(setUserName(user));
        navigate('/view');
    };

    return(
        <>
    
        <section className="flex justify-center items-center">
            <TableContainer component={Paper} className=" w-[90%] border border-blue-700 rounded-md p-5 m-5 ">
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Phone</TableCell>
                        <TableCell align="center">Website</TableCell>
                    </TableRow>
                    </TableHead>
                        <TableBody>
                            {
                                usersData.map((data, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell align="center">{data.name}</TableCell>
                                            <TableCell align="center">{data.email}</TableCell>
                                            <TableCell align="center">{data.phone}</TableCell>
                                            <TableCell align="center">{data.website}</TableCell>
                                            <TableCell align="center" className="flex flex-row justify-center items-center gap-5">
                                                <Button variant="outlined" onClick={() => onViewClick(data)}>View</Button>
                                                <Button variant="outlined">Update</Button>
                                                <Button variant="outlined">Delete</Button>
                                            </TableCell>
                                            </TableRow>)
                                })
                            }
                        </TableBody>
                </Table>
            </TableContainer>
        </section>
        </>
    )
};

export default Grid;

function setUserName(user: Users): any {
    throw new Error("Function not implemented.");
}
