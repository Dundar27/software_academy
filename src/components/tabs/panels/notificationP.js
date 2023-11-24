"use client"
import { getNotificationAPI, /* setNotificationAPI */ } from "@/app/api/notification/route";
import ErrorAlert from "@/components/alerts/errorA";
import InfoAlert from "@/components/alerts/infoA";
import SuccessfulAlert from "@/components/alerts/successfulA";

export default async function NotificationP() {

    const data = await getNotificationAPI();

    const getNotification = (type = "default", t = "Error", d = "Data could not be retrieved", i = false, f = "/contact", ft = "Contact") => {

        if (type === "Successful") {
            return (<SuccessfulAlert title={t} description={d} isLink={i} forward={f} forwardText={ft} />)
        } else if (type === "Error") {
            return (<ErrorAlert title={t} description={d} isLink={i} forward={f} forwardText={ft} />)
        } else {
            return (<InfoAlert title={t} description={d} isLink={i} forward={f} forwardText={ft} />)
        }

    }

    /* const SubmitEvent = async () => {
        const type = document.getElementById("type").ariaValueText;
        const t = document.getElementById("t").ariaValueText;
        const d = document.getElementById("d").ariaValueText;
        const iL = document.getElementById("iL").ariaValueText;
        const f = document.getElementById("f").ariaValueText;
        const fT = document.getElementById("fT").ariaValueText;

        await setNotificationAPI(type, t, d, iL, f, fT)
    } */

    return (
        <div>
            {Object.values(data).map((n, i) => (
                <div key={i}>
                    {getNotification(n?.type, n?.title, n?.description, n?.isLink, n?.forward, n?.forwardText)}
                </div>
            ))}

            {/* <form method="POST" className="flex p-2 bg-gray-100 gap-2" onSubmit={SubmitEvent}>
                <input type="text" className="outline-none p-1" placeholder="Type" name="type" id="type" />
                <input type="text" className="outline-none p-1" placeholder="Title" name="title" id="t" />
                <input type="text" className="outline-none p-1" placeholder="Description" name="description" id="d" />
                <input type="text" className="outline-none p-1" placeholder="isLink" name="isLink" id="iL" />
                <input type="text" className="outline-none p-1" placeholder="forward" name="forward" id="f" />
                <input type="text" className="outline-none p-1" placeholder="forwardText" name="forwardText" id="fT" />
                <input type="submit" className="p-1 bg-green-600 text-white hover:bg-green-800 cursor-pointer" />
            </form> */}
        </div>
    )
}