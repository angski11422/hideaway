import Hero from "./components/hero";
import Styleguide from "./components/styleguide";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Styleguide />
        {/* <h1>Hideaway Bar and Grill </h1>
        <Hero /> */}
      </div>
    </main>
  );
}
