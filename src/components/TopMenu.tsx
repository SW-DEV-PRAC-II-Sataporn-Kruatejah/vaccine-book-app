import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function TopMenu() {

    const session = await getServerSession(authOptions)

    return (

        <div className="menucontainer fixed top-0 left-0 right-0 h-20 bg-slate-800 z-30 flex justify-between">
            <div className="flex justify-start items-center z-30 flex-row h-full">
                {
                    session ?
                        <TopMenuItem title={`Sign-Out of ${session.user?.name}`} pageRef="/api/auth/signout" />
                        : <TopMenuItem title={`Sign-In`} pageRef="/api/auth/signin" />
                }
                <TopMenuItem title="My Booking" pageRef="/mybooking" />

            </div>
            <div className="flex justify-start items-center z-30 flex-row-reverse h-full">

                <img src="/img/logo.png" alt="logo" className="logoimg h-full" />
                <TopMenuItem title="Booking" pageRef="/booking" />
            </div>
        </div>
    );
}
