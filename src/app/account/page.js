"use client";
import LayoutF from "@/components/authentication/layoutF";
import VerticalTab from "@/components/tabs/verticalTab";
import { AuthContext } from "@/context/auth";
import { useContext } from "react";

export default function Account() {

    let { user } = useContext(AuthContext);

    const isAuth = () => {
        if (user) {
            return <VerticalTab />
        } else {
            return <LayoutF url="/account" />
        }
    }

    return isAuth()
}