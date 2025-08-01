import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/act.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";


export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-3xl z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
        Power your brand with intelligent, multilingual communication
        </p>
        <div className="inline-flex gap-1 items-center">
          <Link href='/login'>
            <p>Start Your Journey</p>
          </Link>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">


            <div className="flex items-center space-x-3">  {/* flex for layout, space for gap */}
              <Link href='/'>
                <Image src={Logo} alt="Saas Logo" height={60} width={60} />
              </Link>
              <Link href='/'>
                <h1 className="text-lg font-semibold">Solutions Inc.</h1>
              </Link>
            </div>


            <MenuIcon className="h-8 w-8 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black items-center">
              <h1 >About</h1>
              <h1 >Clients</h1>
              <h1 >Updates</h1>
              <h1 >help</h1>
              <Link href="/login">
                <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                  Start now
                </button>
              </Link>


            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
