import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/footer";

const LandingPage = () => {
  return ( 
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center
      md:justify-center text-center gay-y-8  px-6 flex-1 pb-10 ">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
}
 
export default LandingPage;
