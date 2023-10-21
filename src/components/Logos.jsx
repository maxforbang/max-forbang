export default function Logos() {
  return (
    <div className="py-24 text-slate-400 sm:py-32">
      <div className="mx-auto px-6 lg:px-8">
        <h2 className="text-center text-xs font-semibold uppercase leading-8 tracking-widest">
          Trust in the most modern tech stack available
        </h2>
        <div className="relative mx-auto mt-5 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 mt-5 max-h-12 w-full object-contain lg:col-span-1"
            src="/aws-2.svg"
            alt="AWS Amazon Web Services"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full scale-125 object-contain lg:col-span-1"
            src="/nextjs-2.svg"
            alt="Nextjs"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 mx-auto max-h-6 object-contain lg:col-span-1"
            src="/sanity.svg"
            alt="Sanity CMS"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 mx-auto max-h-8 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/figma-5.svg"
            alt="Figma"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="tailwind-css-wordmark.svg"
            alt="TailwindCSS"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
