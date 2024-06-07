import {
  faFutbol,
  faGun,
  faHandFist,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Newest from "./components/newest";

export default async function Home() {
  return (
    <main className="overflow-hidden flex-1">
      <section className="slider shadow-md">
        <img
          className="slider-item"
          src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000012332/ac4d1fc9824876ce756406f0525d50c57ded4b2a666f6dfe40a6ac5c3563fad9"
          alt=""
        />
        <img
          className="slider-item"
          src="https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg"
          alt=""
        />
        <img
          className="slider-item"
          src="https://image.api.playstation.com/vulcan/ap/rnd/202203/0911/VIB0SeEj9vT6DTv7P4thJLZi.jpg"
          alt=""
        />
        <img
          className="slider-item"
          src="https://image.api.playstation.com/vulcan/ap/rnd/202311/2015/45ab1e741439ba2e06782cfc09cd4e57467d436c5b84bc79.jpg"
          alt=""
        />
      </section>
      <section className="flex flex-col main-section py-[2rem] items-center">
        <h3 className="text-4xl font-bold">Categories</h3>
        <div className="icon-cards flex flex-wrap gap-10 mt-11">
          <Link href="/games?category=Action">
            <FontAwesomeIcon icon={faGun} />
            Action
          </Link>
          <Link href="/games?category=Sport">
            <FontAwesomeIcon icon={faFutbol} />
            Sport
          </Link>
          <Link href="/games?category=Adventure">
            <FontAwesomeIcon icon={faMap} />
            Adventure
          </Link>
          <Link href="/games?category=Fighting">
            <FontAwesomeIcon icon={faHandFist} />
            Fighting
          </Link>
        </div>
      </section>
      <Newest />
    </main>
  );
}
