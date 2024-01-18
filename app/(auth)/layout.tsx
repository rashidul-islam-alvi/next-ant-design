import Navbar from "@/components/nav-bar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="h-[9vh]">
        <Navbar />
      </div>
      <div className="flex justify-center items-center h-[91vh]">
        {children}
      </div>
    </div>
  );
}
