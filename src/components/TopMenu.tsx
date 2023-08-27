import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
    return (
        <div className="menucontainer fixed top-0 left-0 right-0 h-20 bg-slate-800 flex justify-start items-center z-30 flex-row-reverse">
            <img src="/img/logo.png" alt="logo" className="logoimg h-full" />
            <TopMenuItem title="Booking" pageRef="/booking" />
        </div>
    );
}
