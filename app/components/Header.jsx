import Button from "./Button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 w-full fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">JobsPortal</h1>
        <Button variant="primary" size="md">
          Post a job
        </Button>
      </div>
    </header>
  );
}
