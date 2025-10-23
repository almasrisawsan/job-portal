import Button from "./Button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 w-full fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">JobsPortal</h1>
        <div className="flex gap-2 items-center">
          <h2 className="text-primary text-sm font-medium">Dashboard</h2>
          <Button className="rounded-md" size="md">
            Post a job
          </Button>
        </div>
      </div>
    </header>
  );
}
