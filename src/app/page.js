import Navbar from "@/components/Navbar";
import Image from "next/image";
import ContactForm from "@/components/contactForm";
import Link from "next/link";
import OutlineCard from "@/components/OutlineCard";
import { color } from "framer-motion";
export default function Home() {
  return (
    <>
      <Navbar />
      <div id="about" style={styles.stackContainer}>
        <div style={styles.headingContainer}>
          <Image
            src="/images/signature.png"
            alt="Description for Accessibility"
            width={800}
            height={200}
            style={styles.signatureImage}
          />
          <p style={styles.aboutText}>
            I am an <strong>artist</strong> & <strong>web3 developer. </strong>
          </p>

          {/* <div style={styles.imageContainer}>
            <Image
              src="/images/profile_pic.jpeg" // replace with your image path
              alt="Profile Picture"
              width={250} // adjust as needed
              height={250} // adjust as needed
              style={styles.profileImage}
            />
          </div> */}
        </div>
        {/* <div style={styles.lineArtContainer}>
          <Image
            src="/images/campusLineArt.jpeg"
            alt="Description for Accessibility"
            width={800}
            height={200}
          />
        </div> */}

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
        <div style={styles.csContainer} id="coding" textAlign="center">
          <h1 style={styles.centeredTitle}>I like to code!</h1>
          <div style={styles.githubChart}>
            <img
              src="http://ghchart.rshah.org/409ba5/emmanasseri"
              alt="emmanasseri's Github chart"
            />
          </div>

          <h2 style={styles.centeredTitle}>here are a few of my projects.</h2>
          <div style={styles.cardsContainer}>
            <OutlineCard
              title="Spencer Collaboration"
              description="an art project involving blockchain"
              imagePath="/images/cs/spencerImage.png" // Path to your image
              alt="image of the website" // Alt text for the image
              link="https://github.com/KU-Blockchain/spencer-museum-collaboration"
            />
            <OutlineCard
              title="Blockchain Attendance Tracker"
              description="a student focused attendance tool"
              imagePath="/images/cs/attendThisImage.png" // Path to your image
              alt="image of the website" // Alt text for the image
              link="https://attendthis.on.fleek.co/"
            />
            <OutlineCard
              title="This website"
              description="built from scratch with React and Next.js"
              imagePath="/images/cs/thissite.png" // Path to your image
              alt="image of the website" // Alt text for the image
              link="https://github.com/emmanasseri/portfolio-site"
            />
            <OutlineCard
              title="Blockchain Jeopardy site"
              description="a Jeopardy inspired trivia board for blockchain education"
              imagePath="/images/cs/blockchainJeopardy.png" // Path to your image
              alt="image of the website" // Alt text for the image
              link="https://blockchain-jeopardy.vercel.app/"
            />
          </div>
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
  headingContainer: {
    display: "flex",
    flexDirection: "column", // Stack items vertically
    justifyContent: "center",
    backgroundImage: "url('/images/sunset-clouds.jpg')", // Reference the image in the public folder
    backgroundSize: "cover", // Ensure the image covers the entire container
    backgroundPosition: "center", // Center the background image
    backgroundRepeat: "no-repeat", // Prevent the image from repeating
    minHeight: "100vh", // Ensure the div takes up the full viewport height
    width: "100%", // Ensure it spans the full width
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
    fontSize: "36px", // adjust font size as needed
    fontColor: "white", // adjust text color as needed
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
  signatureImage: {
    width: "100%", // Make it responsive
    maxWidth: "800px", // Set maximum width for larger screens
    height: "auto", // Maintain aspect ratio
  },
  "@media (max-width: 768px)": {
    signatureImage: {
      maxWidth: "90%", // Shrink to 90% of the container on smaller screens
    },
    aboutText: {
      fontSize: "24px", // Reduce font size on smaller screens
    },
  },
  linkButton: { margin: "20px" },
  githubLogo: {
    margin: "50px",
  },
  githubChart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "70px",
  },
  "githubChart img": {
    width: "auto",
    height: "auto", // Default sizes for larger screens
  },
  "@media (max-width: 768px)": {
    githubChart: {
      marginBottom: "30px", // Adjust margin for smaller screens
    },
    "githubChart img": {
      width: "50px", // Scale down to 50px width on small screens
      height: "50px", // Scale down to 50px height on small screens
    },
  },
  csContainer: {
    padding: "20px",
    width: "100%",
    height: "auto",
  },
  centeredTitle: {
    textAlign: "center",
    marginBottom: "20px", // Adds some space below the title
    marginTop: "20px",
    fontSize: "xl",
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap", // Allow items to wrap to the next row
    gap: "20px", // Adds space between each card
    justifyContent: "center", // Center items horizontally
    alignItems: "center", // Center items vertically
  },
};
