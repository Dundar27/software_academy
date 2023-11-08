import { auth } from "@/database/firebase";
import { signOut } from "firebase/auth";
import { AlertCircle, LogOut } from "react-feather";

export default function SignOut({ mShow, setMShow }) {
    return (

        <div style={mShow ? { display: "block" } : { display: "none" }} className="w-full h-full fixed top-60 start-0 z-[60] overflow-x-hidden overflow-y-hidden">
            <div className="max-w-sm mx-auto">
                <div className="relative flex flex-col bg-white shadow-2xl shadow-gray-700 rounded-lg">
                    <div className="p-6 text-center overflow-y-auto">
                        {/* <!-- Icon --> */}
                        <span className="text-yellow-600">
                        <AlertCircle />
                        </span>
                        {/* <!-- End Icon --> */}

                        <h3 className="mb-2 text-2xl font-bold text-yellow-600">
                            Logout
                        </h3>
                        <p className="text-gray-500">
                            Are you sure you would like to logout of your WTA account?
                        </p>

                        <div className="mt-6 grid gap-y-2">
                            <button
                                onClick={() => signOut(auth).then(() => { setMShow(false) }).catch((e) => { console.log(e) })}
                                className="py-2.5 px-4 w-full inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                            >
                                <LogOut /> Logout
                            </button>
                            <button
                                type="button"
                                onClick={() => setMShow(false)}
                                className="py-2.5 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}