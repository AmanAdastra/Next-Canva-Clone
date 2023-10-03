import TopNavbar from "@/src/components/NavbarComponent/TopNavbar";
import HeroHeading from "@/src/components/HeroSection/HeroHeading";
import CarousalComponent from "@/src/components/CarousalComponent/CarousalComponent";
export default function Home() {
  return (
    <>
      <TopNavbar />
      <div className="h-[100vh]  mt-16 min-w-0">
        <HeroHeading />
        <CarousalComponent/>
      </div>
      <div className="h-[100vh] bg-green-300"></div>
    </>
  );
}
