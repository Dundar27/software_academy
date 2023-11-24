import { getDatabase, ref, set } from "firebase/database"

export async function getNotificationAPI() {
    const res = await fetch("https://software-academy-94090-default-rtdb.firebaseio.com/notifications.json");

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function setNotificationAPI(type, t, d, iL, f, fT) {

    const db = getDatabase();
    const refRoad = ref(db, "/notifications")

    await set(refRoad,
        JSON.parse(JSON.stringify(
            {
                type,
                title: t,
                description: d,
                isLink: iL,
                forward: f,
                forwardText: fT
            }
        ))
    )
}