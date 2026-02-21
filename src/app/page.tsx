import CategorySlider from "@/components/PageComponents/CategorySlider";
import Hero from "@/components/PageComponents/Hero";
import NewDrops from "@/components/PageComponents/NewDrops";

export default function Home() {
  return (
    <div className="container mx-auto px-5 xl:px-0">
      <h1 className="text-5xl md:text-8xl  xl:text-[258px] font-bold font-rubik uppercase leading-tight text-center mt-4 md:mt-6">
        <span className="text-black">DO IT </span>
        <span className=" text-[#4F46E5]">RIGHT</span>
      </h1>
      <Hero/>
      <NewDrops/>
      <CategorySlider/>
    </div>
  );
}
