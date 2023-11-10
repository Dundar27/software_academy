"use client";
import { Tab } from "@headlessui/react";
import { Zap, Settings, User } from "react-feather"
import AccountSP from "./panels/accountSP";
import NotificationP from "./panels/notificationP";

export default function VerticalTab() {

    const className = `outline-none p-3 gap-x-2 inline-flex items-center text-sm text-gray-500 whitespace-nowrap hover:text-blue-600`;

    const tabs = [
        {
            i: 0,
            icon: <Zap className="mr-5" />,
            text: "Notifications",
            hash: "notifications"
        },
        {
            i: 1,
            icon: <User className="mr-5" />,
            text: "Profile Settings",
            hash: "profile-settings"
        },
        {
            i: 2,
            icon: <Settings className="mr-5" />,
            text: "Account Settings",
            hash: "account-settings"
        },
    ]

    return (
        <Tab.Group>
            <div className="flex flex-wrap p-6">
                <Tab.List className={"basis-1/6 flex flex-col space-y-4"}>
                    {tabs.map((tab, index) => (
                        <Tab key={index} className={className}>
                            {tab.icon} {tab.text}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className={"basis-5/6 py-3 px-5"}>
                    <Tab.Panel>
                        <NotificationP />
                    </Tab.Panel>
                    <Tab.Panel>
                        Content 2
                    </Tab.Panel>
                    <Tab.Panel>
                        <AccountSP />
                    </Tab.Panel>
                </Tab.Panels>
            </div>
        </Tab.Group>
    )
}