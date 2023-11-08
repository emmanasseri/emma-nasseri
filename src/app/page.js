import Navbar from "@/components/Navbar";
import Image from "next/image";
import ContactForm from "@/components/contactForm";
import Link from "next/link";
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
              I am a student at the university of kansas studying{" "}
              <strong>computer science</strong> & <strong>visual arts.</strong>
            </p>
          </div>
          <div style={styles.imageContainer}>
            <Image
              src="/images/profile_pic.jpeg" // replace with your image path
              alt="Profile Picture"
              width={250} // adjust as needed
              height={250} // adjust as needed
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

        <div>
          <Link href="https://github.com/emmanasseri" style={styles.linkButton}>
            <Image src="/images/icons/githubLogo.png" width="70" height="70" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/emma-nasseri/"
            style={styles.linkButton}
          >
            <Image src="/images/icons/linkedin.png" width="70" height="70" />
          </Link>
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
    marginBottom: "50px",
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
  lineArtContainer: {
    marginBottom: "50px",
  },
  imageContainer: {
    borderRadius: "50%",
    overflow: "hidden",
    width: "300px", // match width of the Image
    height: "300px", // match height of the Image
    display: "flex", // ensures that the Image is centered inside the container
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    borderRadius: "50%", // this will make the image circular
  },
  linkButton: { margin: "20px" },
};
