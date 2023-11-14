import Link from "next/link";
import { AlertCircle, XCircle } from "react-feather";

export default function InfoAlert({ title = "Info updated.", description = "You have info updated your email preferences.", isLink = true, forward = "/", forwardText = "Go Home" }) {

    return (
        <div className="flex justify-between bg-blue-50 border-t-2 border-l-2 border-blue-500 rounded-lg my-4 p-4 hover:shadow-md" role="alert">
            <div className="flex items-center">
                <div className="flex-shrink-0 text-blue-800">
                    <AlertCircle />
                </div>
                <div className="ml-5 ms-3">
                    <h3 className="text-gray-800 font-semibold">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600">
                        {description} {isLink ? <Link className="text-blue-400 underline underline-offset-2" href={forward}>{forwardText}</Link> : null}
                    </p>
                </div>
            </div>
            <button onClick={(e) => e.currentTarget.parentElement.remove()} className="flex-shrink-0 text-blue-600" type="button">
                <XCircle />
            </button>
        </div>
    )
}