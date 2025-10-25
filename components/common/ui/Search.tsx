import Button from "./Button";

export default function SearchBar() {
  return (
    <div className="bg-white w-full flex rounded-lg flex text-xs">
      <input type="text" className="border-none flex-1 px-4" placeholder="Search by job title......................" />
      <Button>Search</Button>
    </div>
  );
}
