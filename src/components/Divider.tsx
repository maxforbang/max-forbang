export default function Divider({ text }: { text: string }) {
  return (
    <div className="relative mt-24 mb-12 w-full">
      <div className="relative flex justify-center items-center gap-6">
        <div className="w-full border-t h-0" />
        <span className="whitespace-nowrap px-3 text-2xl tracking-widest leading-6">
          {text}
        </span>
        <div className="w-full border-t h-0" />
      </div>
    </div>
  );
}
