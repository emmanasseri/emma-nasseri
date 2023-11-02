import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="about">
        <h1>nice to meet you, i'm emma!</h1>
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
