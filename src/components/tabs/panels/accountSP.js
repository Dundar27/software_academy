import { AuthContext } from "@/context/auth"
import Link from "next/link";
import { useContext } from "react"
import { AlertTriangle } from "react-feather";

export default function AccountSP() {

    const { user } = useContext(AuthContext);

    const notificationProps = [
        {
            htmlFor: "push",
            value: "",
            id: "push",
            text: "Push",
            disabled: true,
            checked: false
        },
        {
            htmlFor: "email",
            value: "",
            id: "email",
            text: "Email",
            disabled: false,
            checked: true
        },
        {
            htmlFor: "sms",
            value: "",
            id: "sms",
            text: "Sms",
            disabled: true,
            checked: false
        }

    ]

    const notificationTitle = [
        { title: "Messages" }, { title: "Reminders" }, { title: "Updates" }
    ]

    const NotificationSettings = (e) => {
        e.preventDefault();


        let i = 0;
        let n = 0;
        while (i < 9) {
            i++;
            if (e.target[i].checked) {
                n = i;

                /*
                    n = 0 => messages -> push
                    n = 1 => messages -> email
                    n = 2 => messages -> sms
                    n = 3 => reminders -> push
                    n = 4 => reminders -> email
                    n = 5 => reminders -> sms
                    n = 6 => updates -> push
                    n = 7 => updates -> email
                    n = 8 => updates -> sms
                */
                console.log(n);

                continue;
            }
        }


    }


    return (
        <div>
            <div className="overflow-hidden rounded-xl p-6 shadow-lg">
                <div className="py-4 border-b-2 border-blue-500">
                    <h2 className="py-2 text-xl font-semibold">Notification Settings</h2>
                </div>
                <form onSubmit={NotificationSettings}>
                    {
                        notificationTitle.map((t, i1) => (
                            <div key={i1} className="grid border-b py-6 grid-cols-2">
                                <h2 className="text-lg font-semibold leading-4 text-slate-700">{t.title}</h2>
                                <div className="mt-4 flex items-center justify-end">
                                    <div className="flex flex-col gap-3">
                                        {notificationProps.map((p, i2) => (
                                            <label key={i2} htmlFor={`${p.htmlFor}-${i1}-${i2}`} className="inline-flex cursor-pointer items-center">
                                                <input type="checkbox" value={p.value} id={`${p.id}-${i1}-${i2}`} className="peer" disabled={p.disabled} defaultChecked/>
                                                <span className="ml-3 text-sm font-medium text-gray-900">{p.text}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <input type="submit" value={"Save"} className="bg-gray-50 my-2 px-4 py-3 rounded-xl text-blue-600 cursor-pointer hover:bg-gray-200 hover:text-blue-800" />
                </form>
            </div>
            <div className="my-8 overflow-hidden rounded-xl p-6 shadow-lg">
                <div className="py-4 border-b-2 border-blue-500">
                    <h2 className="py-2 text-xl font-semibold">Account Settings</h2>
                </div>
                <div className="py-4 border-b">
                    <h2 className="py-2 text-xl font-semibold">Email Address</h2>
                    <div className="flex justify-between">
                        <p className="text-gray-600">Your email address is <strong>{user.email}</strong></p>
                        <button type="button" className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">Change</button>
                    </div>
                </div>
                <div className="py-4 border-b">
                    <h2 className="py-2 text-xl font-semibold">Password</h2>
                    <div className="flex items-center">
                        <form className="flex flex-row space-x-2">
                            <label htmlFor="current-password">
                                <span className="text-sm text-gray-500">Current Password</span>
                                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                                    <input
                                        pattern="[a-zA-Z0-9.]{8,24}"
                                        minLength={8}
                                        maxLength={24}
                                        required
                                        type="password"
                                        id="current-password"
                                        className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                        placeholder="***********"
                                    />
                                </div>
                            </label>
                            <label htmlFor="new-password">
                                <span className="text-sm text-gray-500">New Password</span>
                                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                                    <input
                                        pattern="[a-zA-Z0-9.]{8,24}"
                                        minLength={8}
                                        maxLength={24}
                                        required
                                        type="password"
                                        id="new-password"
                                        className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                        placeholder="***********"
                                    />
                                </div>
                            </label>
                            <input type="submit" className="mt-6 rounded-lg bg-blue-600 p-2 text-white cursor-pointer hover:bg-blue-700 focus:ring-2 focus:ring-blue-400" value={"Change Password"} />
                        </form>
                    </div>
                    <p className="mt-4">Can't remember your current password. <Link className="text-sm font-semibold text-blue-600 underline decoration-2" href="/password-reset">Recover Account</Link></p>
                </div>

                <div className="py-4">
                    <h2 className="py-2 text-xl text-red-600 font-semibold flex">
                        <AlertTriangle className="mr-2" />Delete Account
                    </h2>
                    <p className="my-2">
                        Make sure you have taken backup of your account in case you ever need to get access to your data. We will completely wipe your data. There is no way to access your account after this action.
                    </p>
                    <button type="button" className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2"
                    >Continue with deletion
                    </button>
                </div>
            </div>

        </div>
    )
}