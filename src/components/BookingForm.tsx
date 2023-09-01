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


export default function BookingForm() {
    return (

        < Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%", marginTop: "30px",marginBottom: "30px"  }}>
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
                            >
                                <MenuItem value="CUH">Chulalongkorn Hospital</MenuItem>
                                <MenuItem value="RVH"> Rajavithi Hospital</MenuItem>
                                <MenuItem value="TUH">ThammasatUniversity Hospital</MenuItem>
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
                                <DatePicker label="Date" />
                            </LocalizationProvider>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </Paper >
    )
}