import { NotificationAPI } from "@/app/api/notification/route";
import ErrorAlert from "@/components/alerts/errorA";
import InfoAlert from "@/components/alerts/infoA";
import SuccessfulAlert from "@/components/alerts/successfulA";

export default async function NotificationP() {

    const data = await NotificationAPI();

    const getNotification = (condition, t, d, i, f, ft) => {

        if (condition === "Successful") {
            return (<SuccessfulAlert title={t} description={d} isLink={i} forward={f} forwardText={ft} />)
        } else if (condition === "Error") {
            return (<ErrorAlert title={t} description={d} isLink={i} forward={f} forwardText={ft} />)
        } else {
            return (<InfoAlert title={t} description={d} isLink={i} forward={f} forwardText={ft} />)
        }

    }

    return (
        <div>
            {data.map((n, i) => (
                <div key={i}>
                    {getNotification(n.type, n.title, n.description, n.isLink, n.forward, n.forwardText)}
                </div>
            ))}
        </div>
    )
}