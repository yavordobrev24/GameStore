import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden flex-1">
      <section className="slider shadow-lg">
        <img
          className="slider-item"
          src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000012332/ac4d1fc9824876ce756406f0525d50c57ded4b2a666f6dfe40a6ac5c3563fad9"
          alt=""
        />
        <img
          className="slider-item"
          src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70070000016597/4dc8ab1f09ced6fb2953b2caedd978c1f23df33b62305bcf3140308962073d57"
          alt=""
        />
        <img
          className="slider-item"
          src="https://assets.xboxservices.com/assets/0b/17/0b179504-412d-4af7-9e00-3e3d92633577.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg"
          alt=""
        />
        <img
          className="slider-item"
          src="https://cdn.alza.cz/Foto/ImgGalery/Image/ea-sports-fc-24-cover_1.jpg"
          alt=""
        />
      </section>
      <section className="flex flex-col items-center px-[10rem] py-[2rem]">
        <h3 className="text-4xl font-bold self-start">New</h3>
        <ul className="flex gap-10 mt-10">
          <li className="card">
            <Link href="">
              <div className="img-holder">
                <img
                  src="https://image.api.playstation.com/vulcan/ap/rnd/202308/0312/aff71a0ced271048f5079b1fcf715bcb45110efc13e9704a.png"
                  alt=""
                />
              </div>
              <div className="text-center">
                <p>Tekken 8</p>
                <p className="font-bold">$59.99</p>
              </div>
            </Link>
          </li>
          <li className="card">
            <Link href="">
              <div className="img-holder">
                <img
                  src="https://image.api.playstation.com/vulcan/ap/rnd/202310/0214/b449973c0d7f4afc176aa1debb996b472718ce0f4175e02b.png"
                  alt=""
                />
              </div>
              <div className="text-center">
                <p>FIFA 24</p>
                <p className="font-bold">$49.99</p>
              </div>
            </Link>
          </li>
          <li className="card">
            <Link href="">
              <div className="img-holder">
                <img
                  src="https://image.api.playstation.com/vulcan/ap/rnd/202312/0606/38d36a1367cfd91ed3fed52510c7569a9c8bf5da3f66a1e6.png"
                  alt=""
                />
              </div>
              <div className="text-center">
                <p>Rise of the Ronin</p>
                <p className="font-bold">$69.99</p>
              </div>
            </Link>
          </li>
          <li className="card">
            <Link href="">
              <div className="img-holder">
                <img
                  src="https://m.media-amazon.com/images/I/8140Oo7VT7L._AC_UF1000,1000_QL80_.jpg"
                  alt=""
                />
              </div>
              <div className="text-center">
                <p>NBA 2K24</p>
                <p className="font-bold">$21.99</p>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
