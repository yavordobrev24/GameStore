import {
  faFutbol,
  faGun,
  faHandFist,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

async function getGames() {
  const res = await fetch("http://localhost:8000/games");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const games = await getGames();

  return (
    <main className="main-section overflow-hidden flex-1">
      <section className="slider shadow-lg">
        <img
          className="slider-item"
          src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000012332/ac4d1fc9824876ce756406f0525d50c57ded4b2a666f6dfe40a6ac5c3563fad9"
          alt=""
        />
        <img
          className="slider-item"
          src="https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Update-Aquatic_1280x768.jpg"
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
      <section className="flex flex-col items-center py-[2rem] main-section">
        <h3 className="text-4xl font-bold">New</h3>
        <ul className="flex gap-10 mt-10 flex-wrap">
          {Object.entries(games)
            .slice(-4)
            .map(([key, value]: any) => (
              <li className="card" key={key}>
                <Link href={`/games/${key}`}>
                  <div className="img-holder">
                    <img src={value.imageUrl} alt={value.name} />
                  </div>
                  <div className="text-center">
                    <p>{value.name}</p>
                    <p className="font-bold">${value.price}</p>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </section>
      <section className="flex flex-col main-section py-[2rem] items-center">
        <h3 className="text-4xl font-bold">Categories</h3>
        <div className="icon-cards flex flex-wrap gap-10 mt-11">
          <Link href="/games/action">
            <FontAwesomeIcon icon={faGun} />
            Action
          </Link>
          <Link href="/games/sport">
            <FontAwesomeIcon icon={faFutbol} />
            Sport
          </Link>
          <Link href="/games/adventure">
            <FontAwesomeIcon icon={faMap} />
            Adventure
          </Link>
          <Link href="/games/fighting">
            <FontAwesomeIcon icon={faHandFist} />
            Fighting
          </Link>
        </div>
      </section>
    </main>
  );
}
