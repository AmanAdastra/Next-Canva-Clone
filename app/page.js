import TopNavbar from "@/src/components/NavbarComponent/TopNavbar";
import HeroHeading from "@/src/components/HeroSection/HeroHeading";
import CarousalComponent from "@/src/components/CarousalComponent/CarousalComponent";
import CTAComponent from "@/src/components/CTAComponent/CTAComponent";
export default function Home() {
  return (
    <>
      <TopNavbar />
      <div className="h-[50vh] mt-16">
        <HeroHeading />
        <CarousalComponent/>
      </div>
      <CTAComponent/>
    </>
  );
}
