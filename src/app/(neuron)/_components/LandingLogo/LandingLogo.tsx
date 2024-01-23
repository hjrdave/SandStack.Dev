import Image from "next/image";
import NeuronLogo from "../../../../../public/logo-neuron.webp";
import styles from "./LandingLogo.module.scss";

export default function LandingLogo() {
  return (
    <>
      <div className={`d-flex flex-column align-items-center`}>
        <div>
          <Image
            src={NeuronLogo}
            alt={"Neuron Global State Manager"}
            className={styles.image}
          />
        </div>
        <p className={`mb-0 text-lowercase pt-2 text-center ${styles.title}`}>
          Neuron
        </p>
        <p className={`text-center ${styles.subTitle}`}>Global State Manager</p>
      </div>
    </>
  );
}
