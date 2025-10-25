import { ImageCodesandbox } from "assets";
export default function CategoryCard({ name }: { name: string }) {
  return (
    <div className="bg-white w-full md:w-[200px] lg:w-[230px] h-[190px] flex flex-col justify-center items-center gap-4">
      <div className="bg-secondary-dark p-6 rounded-full">
        <img src={ImageCodesandbox} alt="sand box" />
      </div>
      <div className="font-semibold md:text-xl text-md text-center">{name}</div>
    </div>
  );
}
