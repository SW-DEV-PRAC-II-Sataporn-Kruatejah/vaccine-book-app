'use client'
import React from "react";

export default function InteractiveCard({ children }: { children: React.ReactNode }) {
    function onCardMouseAction(event: React.SyntheticEvent) {
        if (event.type == 'mouseover') {
            event.currentTarget.classList.remove("shadow-md","bg-white")
            event.currentTarget.classList.add("shadow-xl","bg-neutral-200")
        }
        else {
            event.currentTarget.classList.remove("shadow-xl","bg-neutral-200")
            event.currentTarget.classList.add("shadow-md","bg-white")
        }
    }

    return (
        <div className="card group bg-white w-80 h-72 shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 m-6"
            onMouseOver={(e) => onCardMouseAction(e)}
            onMouseOut={(e) => onCardMouseAction(e)}
        >
            {children}
        </div>
    );
}
