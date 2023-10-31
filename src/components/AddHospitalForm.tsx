import { dbConnect } from "@/db/dbConnect";
import Hospital from "@/db/models/Hospital";
import { Box, Paper } from "@mui/material";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function AddHospitalForm() {

    const addHospital = async (addHospitalForm: FormData) => {
        "use server"
        console.log("formdata",addHospitalForm.get("name"))
        const name = addHospitalForm.get("name")
        const address = addHospitalForm.get("address")
        const district = addHospitalForm.get("district")
        const province = addHospitalForm.get("province")
        const postalcode = addHospitalForm.get("postalcode")
        const tel = addHospitalForm.get("tel")
        const picture = addHospitalForm.get("picture")

        try {
            await dbConnect()
            const hospital = await Hospital.create({
                "name": name,
                "address": address,
                "district": district,
                "province": province,
                "postalcode": postalcode,
                "tel": tel,
                "picture": picture
            })
        } catch (error) {
            console.log(error)
        }
        revalidateTag("hospitals")
        redirect("/hospital")

    }
    return (
        < Paper className="w-1/2" elevation={3} sx={{ marginRight: "auto", marginLeft: "auto", marginTop: "30px", marginBottom: "30px" }}>
            <Box sx={{ padding: 5 }}>
                <div className="text-xl text-gray-800">Create Hospital</div>
                <form action={addHospital}>
                    <div className="flex items-center w-full my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="name">Name</label>
                        <input type="text" required id="name" name="name" placeholder="Hospital Name"
                            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="flex items-center w-full my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="address">Address</label>
                        <input type="text" required id="address" name="address" placeholder="Hospital Address"
                            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="flex items-center w-full my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="district">District</label>
                        <input type="text" required id="district" name="district" placeholder="Hospital District"
                            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="flex items-center w-full my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="province">Province</label>
                        <input type="text" required id="province" name="province" placeholder="Hospital Province"
                            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="flex items-center w-full my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="postalcode">Postalcode</label>
                        <input type="text" required id="postalcode" name="postalcode" placeholder="Hospital Postalcode"
                            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="flex items-center w-full my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="tel">Tel</label>
                        <input type="text" required id="tel" name="tel" placeholder="Hospital Tel"
                            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="flex items-center w-full my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="picture">Picture</label>
                        <input type="text" required id="picture" name="picture" placeholder="Hospital Picture URL"
                            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400" />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Add new Hospital</button>
                </form>
            </Box>
        </Paper>
    );
}

