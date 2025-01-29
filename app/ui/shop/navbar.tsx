import NavLinks from "@/app/ui/shop/nav-links";

export default function NavBar() {
  return (
    <div className="grid grid-cols-3 border-b border-b-black bg-gray-300 h-full">
      <div></div>
      <div className=" flex justify-center items-center gap-4">
        <NavLinks />
      </div>
      <div className=" flex justify-center items-center gap-4">
        <button>Account</button>
        <button>Cart</button>
      </div>
    </div>
  );
}
