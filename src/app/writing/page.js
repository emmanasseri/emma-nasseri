import Navbar from "@/components/Navbar";
import Image from "next/image";
import OutlineButton from "@/components/OutlineButton";

export default function Writing() {
  return (
    <>
      <Navbar />
      <div style={styles.pageContainer}>
        <h1 style={styles.centeredTitle}>published writing</h1>

        <div style={styles.cardsContainer}>
          <div style={styles.infoSection}>
            <strong>poetry published in kiosk magazine</strong>

            <p>
              kiosk is an award-winning, semi-annual publication featuring the
              university of kansas' premiere student art and literature. founded
              in 1989, kiosk is managed, designed, and published by students.
              this was the 67th edition. while these are my poems, i did not
              have any part in the visual design of the magazine.{" "}
            </p>
            <OutlineButton
              title="view publication"
              link="https://kioskmagazine.cargo.site/Kiosk-67"
            />
          </div>
        </div>
        <div
          style={{
            ...styles.cardsContainer,

            backgroundImage: "url('/images/writing/kiosk_background_3.png')",

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{ position: "relative", width: "40%", paddingBottom: "50%" }}
          >
            <Image
              src="/images/writing/kiosk_self_1.png"
              alt="Description for Accessibility"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div
            style={{ position: "relative", width: "40%", paddingBottom: "50%" }}
          >
            <Image
              src="/images/writing/kiosk_self_2.png"
              alt="Description for Accessibility"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div
          style={{
            ...styles.cardsContainer,

            backgroundImage: "url('/images/writing/kiosk_background_1.png')",

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{ position: "relative", width: "20%", paddingBottom: "50%" }}
          >
            <Image
              src="/images/writing/kiosk_ghost_1.png"
              alt="Description for Accessibility"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div
            style={{ position: "relative", width: "20%", paddingBottom: "50%" }}
          >
            <Image
              src="/images/writing/kiosk_ghost_2.png"
              alt="Description for Accessibility"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div
            style={{ position: "relative", width: "20%", paddingBottom: "50%" }}
          >
            <Image
              src="/images/writing/kiosk_ghost_3.png"
              alt="Description for Accessibility"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div
            style={{ position: "relative", width: "20%", paddingBottom: "50%" }}
          >
            <Image
              src="/images/writing/kiosk_ghost_4.png"
              alt="Description for Accessibility"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div
          style={{
            ...styles.cardsContainer,

            backgroundImage: "url('/images/writing/kiosk_background_2.png')",

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{ position: "relative", width: "40%", paddingBottom: "50%" }}
          >
            <Image
              src="/images/writing/kiosk_silo_1.png"
              alt="Description for Accessibility"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div
            style={{ position: "relative", width: "40%", paddingBottom: "50%" }}
          >
            <Image
              src="/images/writing/kiosk_silo_2.png"
              alt="Description for Accessibility"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div style={styles.cardsContainer}>
          <div style={styles.infoSection}>
            <strong>
              winning sonnets in maria w. faust youth sonnet competition
            </strong>

            <p>
              these sonnets all won the youth category for the national maria w.
              faust sonnet competition.{" "}
            </p>
            <p>2017 - That Little Mirror of Mine </p>
            <p>2018 - The House on 93rd Street </p>
            <p>2019 - Sunday People </p>
            <OutlineButton
              title="view publication"
              link="https://sonnetcontest.org/2019-winners/2019-youth/"
            />
          </div>
        </div>

        <div
          style={{
            ...styles.cardsContainer,

            backgroundImage:
              "linear-gradient(rgba(0, 31, 63, 0.6), rgba(0, 31, 63, 0.6)), url('/images/writing/faust_image_1.jpeg')",

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{ position: "relative", width: "30%", paddingBottom: "50%" }}
          >
            <Image
              src="/images/writing/faust_sonnet_2017.png"
              alt="Description for Accessibility"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div
            style={{ position: "relative", width: "30%", paddingBottom: "50%" }}
          >
            <Image
              src="/images/writing/faust_sonnet_2019.png"
              alt="Description for Accessibility"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div
            style={{ position: "relative", width: "30%", paddingBottom: "50%" }}
          >
            <Image
              src="/images/writing/faust_sonnet_2018.png"
              alt="Description for Accessibility"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  pageContainer: {
    padding: "20px", // Adds some padding to the overall page
    marginBottom: "100px",
    marginLeft: "30px",
    marginRight: "30px",
  },
  centeredTitle: {
    textAlign: "center",
    marginBottom: "20px", // Adds some space below the title
    marginTop: "20px",
  },
  cardsContainer: {
    marginBottom: "40px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap", // Allow items to wrap to the next row
    gap: "30px", // Adds space between each card
    justifyContent: "center", // Center items horizontally
    padding: "15px",
  },
  infoSection: {
    border: "2px solid black",
    borderRadius: "8px",
    padding: "15px 15px",
    backgroundColor: "transparent",
    color: "black",
    outline: "none",
    transition: "0.3s",
    display: "flex",
    width: "80%",
    flexDirection: "column",
    marginTop: "100px",
    alignItems: "center",
  },
};
