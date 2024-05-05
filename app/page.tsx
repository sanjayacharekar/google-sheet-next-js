import Form from "./component/Form";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection/>
      <Form />
      <h1>hello</h1>
    </main>
  );
}
