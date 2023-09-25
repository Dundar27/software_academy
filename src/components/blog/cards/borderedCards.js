import Image from "next/image";
import Link from "next/link";

export default function BorderedCards () {
    return(
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <!-- Card --> */}
        <Link
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <Image
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
              width={300}
              height={300}
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Announcing a free plan for small teams
            </h3>
            <p className="mt-5 text-gray-600">
              At Wake, our mission has always been focused on bringing openness.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            <Image
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Image Description"
              width={300}
              height={300}
            />
            <div>
              <h5 className="text-sm text-gray-800">
                By Lauren Waller
              </h5>
            </div>
          </div>
        </Link>
        {/*  <!-- End Card --> */}
        {/* <!-- Card --> */}
        <Link
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <Image
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
              width={300}
              height={300}
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Announcing a free plan for small teams
            </h3>
            <p className="mt-5 text-gray-600">
              At Wake, our mission has always been focused on bringing openness.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            <Image
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Image Description"
              width={300}
              height={300}
            />
            <div>
              <h5 className="text-sm text-gray-800">
                By Lauren Waller
              </h5>
            </div>
          </div>
        </Link>
        {/*  <!-- End Card --> */}
        {/* <!-- Card --> */}
        <Link
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <Image
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
              width={300}
              height={300}
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Announcing a free plan for small teams
            </h3>
            <p className="mt-5 text-gray-600">
              At Wake, our mission has always been focused on bringing openness.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            <Image
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Image Description"
              width={300}
              height={300}
            />
            <div>
              <h5 className="text-sm text-gray-800">
                By Lauren Waller
              </h5>
            </div>
          </div>
        </Link>
        {/*  <!-- End Card --> */}
      </div>
    )
}