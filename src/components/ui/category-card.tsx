import { ImageCodeSandbox } from "src/assets";

export default function CategoryCard({ name }: { name: string }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-white w-full md:w-[200px] lg:w-[230px] h-[190px]">
      <div className="bg-secondary-dark p-6 rounded-full">
        <img src={ImageCodeSandbox} alt="sand box" />
      </div>
      <div className="font-semibold text-md md:text-xl text-center">{name}</div>
    </div>
  );
}
