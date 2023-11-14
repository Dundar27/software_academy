import Link from "next/link";
import { CheckCircle, XCircle } from "react-feather";

export default function SuccessfulAlert({
    title = "Successfully updated.",
    description = "You have successfully updated your email preferences.",
    isLink = true,
    forward = "/",
    forwardText = "Go Home"
}) {

    return (
        <div className="flex justify-between bg-teal-50 border-t-2 border-l-2 border-teal-500 rounded-lg my-4 p-4 hover:shadow-md" role="alert">
            <div className="flex items-center">
                <div className="flex-shrink-0 text-teal-800">
                    <CheckCircle />
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
            <button onClick={(e) => e.currentTarget.parentElement.remove()} className="flex-shrink-0 text-teal-600" type="button">
                <XCircle />
            </button>
        </div>
    )
}