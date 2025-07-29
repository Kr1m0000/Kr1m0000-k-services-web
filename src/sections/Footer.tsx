import Image from "next/image";
import logo from "@/assets/act.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
      <div className="inline-flex items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white before:w-10 before:h-10">
  <Image src={logo} height={30} alt="SaaS logo" className="relative z-10 mt-1" />
</div>

        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
        <a href="#">About</a>
              {/* <a href="#"></a> */}
              <a href="#">Clients</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2025 AICloudTranslation Solutions Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
