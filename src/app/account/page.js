import LayoutF from "@/components/authentication/layoutF";
import VerticalTab from "@/components/tabs/verticalTab";
import { auth } from "@/database/firebase";

export default function Account() {

    const isAuth = () => {
        if (auth.currentUser) {
            return <VerticalTab />
        } else {
            return <LayoutF />
        }
    }

    return isAuth()
}