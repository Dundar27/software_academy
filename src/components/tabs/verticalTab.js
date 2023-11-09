"use client";
import { Tab } from "@headlessui/react";
import { Zap, Settings, User } from "react-feather"

export default function VerticalTab() {

    const className = `outline-none p-3 gap-x-2 inline-flex items-center text-sm text-gray-500 whitespace-nowrap hover:text-blue-600`;

    const tabs = [
        {
            icon: <Zap className="mr-5"/>,
            text: "Notifications",
        },
        {
            icon: <User className="mr-5"/>,
            text: "Profile Settings",
        },
        {
            icon: <Settings className="mr-5"/>,
            text: "Account Settings",
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
                    <Tab.Panel>Content 1</Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
            </div>
        </Tab.Group>
    )
}