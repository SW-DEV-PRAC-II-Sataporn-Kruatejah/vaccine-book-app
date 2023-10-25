import BookingForm from "@/components/BookingForm";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { Paper, Box } from "@mui/material";

export default async function Booking() {

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt);

    return (
        <main className="flex flex-col items-center m-4">
            <div className="text-xl font-medium"> User Information</div>
            < Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%", marginTop: "30px", marginBottom: "30px" }}>
                <Box sx={{ padding: 5 }}>

                    <div className="text-2xl font-bold">{profile.data.name}</div>
                    <table className="table-auto border-separate border-spacing-2">
                        <tbody>
                            <tr>
                                <td className="p-2 font-semibold">Email</td>
                                <td className="p-2">{profile.data.email}</td>
                            </tr>
                            <tr>
                                <td className="p-2 font-semibold">Tel.</td>
                                <td className="p-2">{profile.data.tel}</td>
                            </tr>
                            <tr>
                                <td className="p-2 font-semibold">Member Since</td>
                                <td className="p-2">{createdAt.toString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
            </Paper>
            <div className="text-xl font-medium"> New Booking</div>
            <div className="bookingform">
                <BookingForm />
            </div>
        </main>
    );
}