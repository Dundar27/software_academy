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