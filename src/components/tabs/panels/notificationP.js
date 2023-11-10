export default function NotificationP() {

    const className = "peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800";

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
        <div className="overflow-hidden rounded-xl p-6 shadow-lg">
            <form onSubmit={NotificationSettings}>
                {
                    notificationTitle.map((t, i1) => (
                        <div key={i1} className="grid border-b py-6 grid-cols-2">
                            <h2 className="text-lg font-semibold leading-4 text-slate-700">{t.title}</h2>
                            <div className="mt-4 flex items-center justify-end">
                                <div className="flex flex-col gap-3">
                                    {notificationProps.map((p, i2) => (
                                        <label key={i2} htmlFor={`${p.htmlFor}-${i1}-${i2}`} className="relative inline-flex cursor-pointer items-center">
                                            <input type="checkbox" value={p.value} id={`${p.id}-${i1}-${i2}`} className="peer sr-only" disabled={p.disabled} />
                                            <div className={className}></div>
                                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{p.text}</span>
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
    )
}