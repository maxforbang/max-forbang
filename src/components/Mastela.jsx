import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Instant Booking & Payment.",
    description:
      "Provides seamless date searches and immediate payment options connected to Stripe.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Intuitive Blog Integration.",
    description:
      "Supplies SEO-optimized content through an easy-to-use, built-in blog platform.",
    icon: LockClosedIcon,
  },
  {
    name: "Automated Keycodes.",
    description:
      "Automatically generates digital keypad codes for guests upon booking.",
    icon: FingerPrintIcon,
  },
  {
    name: "Dynamic Admin Controls.",
    description:
      "Allows managers to manage guests and bookings with a custom owner dashboard.",
    icon: ArrowPathIcon,
  },
  {
    name: "Interactive Maps.",
    description:
      "Enables guests to explore surroundings and plan trips with precision for each property.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Secure & Streamlined.",
    description:
      "Encrypts all transactions, communication, and data storage, keeping information protected.",
    icon: ServerIcon,
  },
];

export default function Feature() {
  return (
    // <div className=" py-24 sm:py-32">
    <div id='mastela-section' className="py-24 sm:pt-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-400">
            Vacation Rentals
          </h2>

          <div className="relative mt-2 w-min whitespace-nowrap text-3xl font-bold tracking-tight text-white sm:mx-auto sm:text-4xl">
            Mastela Vacations
            <a href="https://mastelavacations.com" target="_blank">
              <ArrowTopRightOnSquareIcon className="absolute -right-16 top-1 h-8 w-8" />
            </a>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Using SEO to redirect potential guests to vacation homes cuts out
            the middle man and lessens reliance on sites like AirBnB.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="/mastela_mockup.png"
            alt="App screenshot"
            className=" rounded-xl shadow-2xl"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            {/* <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" /> */}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-sky-500"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
