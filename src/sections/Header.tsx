import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";


export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-3xl z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Boostez vos revenus et améliorez l'image de votre marque
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Commencez votre expérience</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
         

<div className="flex items-center space-x-3">  {/* flex for layout, space for gap */}
  <Image src={Logo} alt="Saas Logo" height={40} width={40} />
  <a href="#" className="text-lg font-semibold">Services</a>
</div>

            
            <MenuIcon className="h-8 w-8 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black items-center">
              <a href="/">À propos de nous</a>
              {/* <a href="#"></a> */}
              <a href="#">Clients</a>
              <a href="#">Updates</a>
             
              <a href="#">Aide</a>
              <Link href="/login">
  <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
    Inscrivez-vous
  </button>
</Link>

              
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
