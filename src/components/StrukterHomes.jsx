import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { ArrowTopRightOnSquareIcon, ChatBubbleLeftRightIcon, ClipboardDocumentListIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, SparklesIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const features = [
  {
    name: "Contextual AI Chatbots.",
    description:
      "Team members can use natural language to inquire about all company-specific information.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Centralized Dashboard.",
    description:
      "Display and maintain all your vacation rental software in one place through their native API's.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "AI Content Creation.",
    description:
      "Automatically generate personalized marketing content optimized to increase revenue and exposure.",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Smart Home Guest App.",
    description:
      "Smart home control app which features an AI Concierge tailored to the property and location.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Unified Communication.",
    description:
      "Pick up guest and contractor communication at any time between multiple team members.",
    icon: UserGroupIcon,
  },
  {
    name: "Personalized Branding.",
    description:
      "White label all Strukter software to your own personal brand to better connect with your clients.",
    icon: SparklesIcon,
  },
];

export default function Feature() {
  return (
    // <div className=" py-24 sm:py-32">
    <div id="mastela-section" className="py-24 sm:pt-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-400">
            Vacation Rental Technology Solutions
          </h2>

          <div className="relative mt-2 w-min whitespace-nowrap text-3xl font-bold tracking-tight text-white sm:mx-auto sm:text-4xl">
            Strukter Homes
            <a href="https://www.strukterhomes.com" target="_blank">
              <ArrowTopRightOnSquareIcon className="absolute -right-16 top-1 h-8 w-8" />
            </a>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Custom-built software for vacation rental management companies to
            scale and automate their businesses using AI.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src="/strukterhomes_mockup.png"
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
