import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Writing() {
  return (
    <>
      <Navbar />
      <h1 style={styles.centeredTitle}>published writing</h1>

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
    </>
  );
}

const styles = {
  pageContainer: {
    padding: "20px", // Adds some padding to the overall page
    marginBottom: "100px",
    marginLeft: "20px",
    marginRight: "20px",
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
    width: "60%",
    flexDirection: "column",
    marginTop: "100px",
  },
};
