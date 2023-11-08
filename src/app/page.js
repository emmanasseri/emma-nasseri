import Navbar from "@/components/Navbar";
import Image from "next/image";
import ContactForm from "@/components/contactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="about" style={styles.stackContainer}>
        <div style={styles.rowContainer}>
          <div>
            <Image
              src="/images/signature.png"
              alt="Description for Accessibility"
              width={500}
              height={100}
            />
            <p style={styles.aboutText}>
              I am a student at the university of kansas studying computer
              science and visual arts.
            </p>
          </div>
          <div style={styles.imageContainer}>
            <Image
              src="/images/profile_pic.jpeg" // replace with your image path
              alt="Profile Picture"
              width={300} // adjust as needed
              height={300} // adjust as needed
              style={styles.profileImage}
            />
          </div>
        </div>
        <div style={styles.lineArtContainer}>
          <Image
            src="/images/campusLineArt.jpeg"
            alt="Description for Accessibility"
            width={800}
            height={200}
          />
        </div>
      </div>
    </>
  );
}

const styles = {
  stackContainer: {
    display: "flex",
    flexDirection: "column", // Stack items vertically
    alignItems: "center",
    justifyContent: "center", // This centers the stackContainer items on the cross-axis (horizontally, since it's a column)
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row", // Lay out items horizontally
    alignItems: "center", // Align items vertically in the center
    justifyContent: "flex-start", // Align items to the start of the container
    flexWrap: "wrap", // Allow items to wrap to next line on small screens
    marginBottom: "20px", // Add some space below this container
  },
  aboutText: {
    margin: "20px", // adjust spacing as needed
  },
  imageContainer: {
    borderRadius: "50%",
    overflow: "hidden",
    width: "400px", // match width of the Image
    height: "400px", // match height of the Image
    display: "flex", // ensures that the Image is centered inside the container
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    borderRadius: "50%", // this will make the image circular
  },
};
