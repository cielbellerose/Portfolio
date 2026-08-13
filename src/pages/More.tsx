import Carousel from "../components/Carousel/Carousel";
import bodegaBay from "../assets/adventures/BodegaBay.jpg";
import katoomba from "../assets/adventures/Katoomba.jpg";
import kearsarge from "../assets/adventures/Kearsarge.jpg";
import malaga from "../assets/adventures/Málaga.jpg";
import skye from "../assets/adventures/Skye.jpg";
import sydney from "../assets/adventures/Sydney.jpg";
import amsterdam from "../assets/adventures/Amsterdam.jpg";
import boston from "../assets/adventures/Boston.jpg";
import carterNotch from "../assets/adventures/CarterNotch.jpg";
import edinburgh from "../assets/adventures/Edinburgh.jpg";
import howth from "../assets/adventures/howth.jpg";
import littleton from "../assets/adventures/littleton.jpg";

const slides = [
  { imageUrl: carterNotch, caption: "Carter Notch, NH" },
  { imageUrl: katoomba, caption: "Blue Mountains, Australia" },
  { imageUrl: kearsarge, caption: "Mt. Kearsarge, NH" },
  { imageUrl: malaga, caption: "Málaga, Spain" },
  { imageUrl: skye, caption: "Isle of Skye, Scotland" },
  { imageUrl: sydney, caption: "Bundeena, Australia" },
  { imageUrl: boston, caption: "Boston, MA" },
  { imageUrl: edinburgh, caption: "Edinburgh, Scotland" },
  { imageUrl: howth, caption: "Howth, Ireland" },
  { imageUrl: bodegaBay, caption: "Bodega Bay, CA" },
  { imageUrl: amsterdam, caption: "Amsterdam, Netherlands" },
  { imageUrl: littleton, caption: "Littleton, NH" },
];

function More() {
  return (
    <section className="outline-debug-border mt-5 box-border flex min-h-60 w-full flex-1 flex-col py-5 outline-1 outline-dashed">
      <div className="py-2 text-lg font-bold">Current Adventures</div>
      <Carousel slides={slides} />
    </section>
  );
}

export default More;
