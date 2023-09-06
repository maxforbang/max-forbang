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
    name: "3D Product Showcase.",
    description:
      "Spotlights product features with a sales page designed specifically to inform and engage.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Job Listings Display.",
    description:
      "Streamlines the hiring process with an integrated careers platform directly on the site.",
    icon: LockClosedIcon,
  },
  {
    name: "Integrated Newsletter.",
    description:
      "Boosts audience engagement with an actively-updated newsletter display.",
    icon: ArrowPathIcon,
  },
  {
    name: "Blog Platform.",
    description:
      "Features a seamless blog interface, tailored for readers and optimized for publishers.",
    icon: FingerPrintIcon,
  },
  {
    name: "Optimized Performance.",
    description:
      "Enables lightning-fast load times with a global CDN and serverless functions.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Educational Section.",
    description: `Interactive "What is VSAT?" page informs visitors who are unfamiliar with the industry.`,
    icon: ServerIcon,
  },
];

export default function Feature() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-400">
            VSAT Solutions
          </h2>
          <div className="relative mt-2 text-3xl font-bold mx-auto w-min whitespace-nowrap tracking-tight text-white sm:text-4xl">
            Steely
            <a href="https://steely.cc" target="_blank">
              <ArrowTopRightOnSquareIcon className="h-8 w-8 absolute top-1 -right-16" />
            </a>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Strategic marketing on corporate websites attracts better talent and
            is a business card for potential entreprise clients & partnerships.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="/steely-mockups.png"
            alt="App screenshot"
            className="rounded-xl shadow-2xl"
            width={2432}
            height={1442}
          />
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
