import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center gap-4 w-full h-full text-center overflow-hidden py-8 ">
        <h1 className="text-4xl font-bold">Welcome to the Tesla Store</h1>
        <p className="text-lg text-center">
          The best place to buy a Tesla vehicle, solar panels, and solar roof
          tiles.
        </p>
        <Carousel />
      </div>
    </main>
  );
}
