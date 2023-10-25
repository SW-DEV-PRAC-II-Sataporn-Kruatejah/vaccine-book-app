"use client"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { removeBooking } from "@/redux/features/bookSlice";
import { useDispatch } from "react-redux";

export default function MyBooking() {
    const bookingItems = useAppSelector((state) => state.bookSlice.bookingItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <main>
            {
                bookingItems.length != 0 ?
                    <>
                        {bookingItems.map((item) => (
                            <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" >
                                <div className="text-md">Firstname: {item.firstName}</div>
                                <div className="text-md">Lastname: {item.lastName}</div>
                                <div className="text-md">ID: {item.id}</div>
                                <div className="text-md">Hospital: {item.hospital}</div>
                                <div className="text-md">Date: {item.bookingDate}</div>
                            </div>
                        ))
                        }
                        <button
                            className="w-40 rounded-md bg-blue-500 hover:bg-blue-600 mx-5 my-2 px-3 py-2 text-white shadow-sm"
                            onClick={()=>{dispatch(removeBooking())}}
                        >
                            Cancle Vaccine
                        </button>
                    </>
                    :
                    <div className="text-center p-5 text-lg font-medium">No Vaccine Booking</div>
            }

        </main>
    )
}