/* import ErrorAlert from "@/components/alerts/errorA";
import InfoAlert from "@/components/alerts/infoA";
import SuccessfulAlert from "@/components/alerts/successfulA"; */

export async function NotificationAPI() {
    const res = await fetch("https://software-academy-94090-default-rtdb.firebaseio.com/notifications.json");

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

/* export default async function getNotification() {
    const data = await NotificationAPI();

    const component = (condition, t, d, i, f, ft) => {

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
                    {component(n.type, n.title, n.description, n.isLink, n.forward, n.forwardText)}
                </div>
            ))}
        </div>
    )
} */