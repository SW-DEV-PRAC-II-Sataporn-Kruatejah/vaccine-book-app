"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import InputLabel from "@mui/material/InputLabel"
import Grid from "@mui/material/Grid"
import FormControl from "@mui/material/FormControl"
import { useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "@/interface";

export default function BookingForm() {

    const [fname, setFname] = useState<string | null>(null)
    const [lname, setLname] = useState<string | null>(null)
    const [id, setId] = useState<string | null>(null)
    const [hospital, setHospital] = useState<string | null>(null)
    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null)

    const dispatch = useDispatch<AppDispatch>()
    const makeBooking = () => {
        if (fname && lname && id && hospital && bookingDate) {
            const item: BookingItem = {
                firstName: fname,
                lastName: lname,
                id: id,
                hospital: hospital,
                bookingDate: dayjs(bookingDate).format("YYYY/MM/DD")
            }
            dispatch(addBooking(item))
        }
    }

    return (
        <div>
            < Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%", marginTop: "30px", marginBottom: "30px" }}>
                <Box sx={{ padding: 5 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                Firstname
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="firstname"
                                name="firstname"
                                label="Firstname"
                                fullWidth
                                size="small"
                                autoComplete="off"
                                variant="outlined"
                                onChange={(e) => { setFname(e.target.value as string) }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                Lastname
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="lastname"
                                name="lastname"
                                label="Lastname"
                                fullWidth
                                size="small"
                                autoComplete="off"
                                variant="outlined"
                                onChange={(e) => { setLname(e.target.value as string) }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                ID Card
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <TextField
                                required
                                id="idcard"
                                name="idcard"
                                label="ID Card"
                                fullWidth
                                size="small"
                                autoComplete="off"
                                variant="outlined"
                                onChange={(e) => { setId(e.target.value as string) }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                Hospital
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="hospital-label">Hospital</InputLabel>
                                <Select
                                    labelId="hospital-label"
                                    id="hospital"
                                    label="hospital"
                                    onChange={(e) => { setHospital(e.target.value as string) }}
                                >
                                    <MenuItem value="Chulalongkorn Hospital">Chulalongkorn Hospital</MenuItem>
                                    <MenuItem value="Rajavithi Hospital"> Rajavithi Hospital</MenuItem>
                                    <MenuItem value="ThammasatUniversity Hospital">ThammasatUniversity Hospital</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                Date
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker label="Date" value={bookingDate} onChange={(value) => { setBookingDate(value) }} />
                                </LocalizationProvider>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <div className="text-right" style={{ paddingTop: 20 }}>
                        <button
                            className="w-40 rounded-md bg-blue-500 hover:bg-blue-600 px-3 py-2 text-white shadow-sm"
                            onClick={makeBooking}
                        >
                            Booking Vaccine
                        </button>
                    </div>

                </Box>
            </Paper >
        </div >
    )
}