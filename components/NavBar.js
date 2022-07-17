import Nav from "./Nav";
import Logo from "./Logo";
import ButtonMasuk from "./ButtonMasuk"

export default function NavBar() {
   return (
    <div>
    <div className="items-center justify-between flex mx-auto w-full bg-default text-white fixed text-center z-20">
        <Logo />
        <Nav />
        <ButtonMasuk />
    </div>
   </div>
   )
}