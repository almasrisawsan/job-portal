export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="flex justify-center font-semibold text-xl md:text-2xl lg:text-3xl">
      {title}
    </h2>
  );
}
