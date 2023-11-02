import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Hello, I'm Emma</h1>
        <p>
          Welcome to my personal website! I am a 3rd year student passionate
          about [Your Interests/Skills]. Here you will find my projects,
          experiences, and more about me. Enjoy your stay!
        </p>
      </div>
    </>
  );
}
