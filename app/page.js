import TopNavbar from "@/src/components/NavbarComponent/TopNavbar";
import HeroHeading from "@/src/components/HeroSection/HeroHeading";
export default function Home() {
  return (
    <>
      <TopNavbar />
      <div className="h-[100vh]  mt-16">
        <HeroHeading />
      </div>
      <div className="h-[100vh] bg-green-300"></div>
    </>
  );
}
