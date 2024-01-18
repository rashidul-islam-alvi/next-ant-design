import Navbar from "@/components/nav-bar";
import SideBar from "@/components/side-bar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="h-screen">
        <SideBar />
      </div>
      <div className="w-full">
        <div>
          <Navbar loggedIn />
        </div>
        <div className="px-10 mt-10">{children}</div>
      </div>
    </div>
  );
}
