import { AuthContext } from "@/context/auth"
import Link from "next/link";
import { useContext } from "react"
import { AlertTriangle } from "react-feather";

export default function AccountSP() {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="overflow-hidden rounded-xl p-6 shadow-lg">
                <div className="py-4 border-b">
                    <p className="py-2 text-xl font-semibold">Email Address</p>
                    <div className="flex justify-between">
                        <p className="text-gray-600">Your email address is <strong>{user.email}</strong></p>
                        <button className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">Change</button>
                    </div>
                </div>
                <div className="py-4 border-b">
                    <p className="py-2 text-xl font-semibold">Password</p>
                    <div className="flex items-center">
                        <div className="flex flex-row space-x-2">
                            <label htmlFor="current-password">
                                <span className="text-sm text-gray-500">Current Password</span>
                                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                                    <input type="password" id="current-password" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="***********" />
                                </div>
                            </label>
                            <label htmlFor="new-password">
                                <span className="text-sm text-gray-500">New Password</span>
                                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                                    <input type="password" id="new-password" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="***********" />
                                </div>
                            </label>
                        </div>
                    </div>
                    <p className="mt-4">Can't remember your current password. <Link className="text-sm font-semibold text-blue-600 underline decoration-2" href="/password-reset">Recover Account</Link></p>
                    <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white">Change Password</button>
                </div>

                <div className="py-4">
                    <p className="py-2 text-xl text-red-600 font-semibold flex"><AlertTriangle className="mr-2" />Delete Account</p>
                    <p className="my-2">Make sure you have taken backup of your account in case you ever need to get access to your data. We will completely wipe your data. There is no way to access your account after this action.</p>
                    <button className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2">Continue with deletion</button>
                </div>
            </div>

        </div>
    )
}