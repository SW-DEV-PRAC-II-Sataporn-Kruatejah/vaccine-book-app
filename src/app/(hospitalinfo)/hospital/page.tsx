import getHospitals from "@/libs/getHospitals"
import HospitalCatalog from "@/components/HospitalCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import AddHospitalForm from "@/components/AddHospitalForm"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function Hospital() {

    const hospitals = await getHospitals()

    // const session = await getServerSession(authOptions)
    // if (!session || !session.user.token) return null

    // const profile = await getUserProfile(session.user.token)

    return (
        <main className="text-center p-5">
            {/* <Suspense fallback={<p>Loading...<LinearProgress /></p>}> */}
                <HospitalCatalog hospitalJson={hospitals} />
            {/* {
                (profile.data.role == "admin") ?
                    <AddHospitalForm /> : null
            } */}
            {/* </Suspense> */}
        </main>
    )
}