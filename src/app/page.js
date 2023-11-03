import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="about">
        <Image
          src="/images/signature.png"
          alt="Description for Accessibility"
          width={500}
          height={100}
        />
        <p>
          i am a student at the university of kansas studying computer science
          and visual arts.
        </p>
      </div>
      <div id="contact">
        <h1>Contact Me</h1>
        <p>You can reach me at: [your_email@example.com]</p>
      </div>
    </>
  );
}
