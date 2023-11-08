"use client";
import { Tab } from "@headlessui/react";
import { Zap, Layout, Settings, User } from "react-feather"

export default function VerticalTab() {

    const className = `outline-none p-3 gap-x-2 inline-flex items-center text-sm text-gray-500 whitespace-nowrap hover:text-blue-600`;

    const tabs = [
        {
            icon: <Layout />,
            text: "Dashboard",
        },
        {
            icon: <Zap />,
            text: "Notifications",
        },
        {
            icon: <User />,
            text: "Profile Settings",
        },
        {
            icon: <Settings />,
            text: "Account Settings",
        },
    ]

    return (
        <Tab.Group>
            <div class="flex flex-wrap p-6">
                <Tab.List className={"flex flex-col space-y-4"}>
                    {tabs.map((tab, index) => (
                        <Tab key={index} className={className}>
                            {tab.icon} {tab.text}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className={"py-3 px-5"}>
                    <Tab.Panel>
                        
                    </Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
            </div>
        </Tab.Group>
    )
}