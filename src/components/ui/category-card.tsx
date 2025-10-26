import { ImageCodeSandbox } from "src/assets";

export default function CategoryCard({ name }: { name: string }) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 bg-white hover:shadow-md p-4 sm:p-6 border border-gray-100 hover:rounded-2xl transition-shadow duration-200">
      <div className="flex justify-center items-center bg-secondary-dark p-4 sm:p-6 rounded-full w-16 sm:w-20 h-16 sm:h-20">
        <img src={ImageCodeSandbox} alt="sandbox" className="w-8 sm:w-10" />
      </div>
      <div className="font-medium text-gray-800 text-sm sm:text-base md:text-lg text-center">
        {name}
      </div>
    </div>
  );
}
