import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleUp,
  faBagShopping,
  faBars,
  faEnvelope,
  faHeart,
  faHome,
  faLocationDot,
  faMagnifyingGlass,
  faPhone,
  faRocket,
  faShare,
  faShip,
  faStar,
  faStarHalfStroke,
  faTableCellsLarge,
  faTicket,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createContext, useContext, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";
import logo from "../public/assets/logo/logo.svg";
import categoryImg1 from "../public/assets/electronics-banner-1.jpg";
import categoryImg2 from "../public/assets/mens-banner.jpg";
import categoryImg3 from "../public/assets/womens-banner.jpg";
import categoryImg4 from "../public/assets/electronics-banner-2.jpg";
import sliderBannerImg1 from "../public/assets/banner-1.jpg";
import sliderBannerImg2 from "../public/assets/banner-2.jpg";
import sliderBannerImg3 from "../public/assets/banner-3.jpg";
import categoryBannerImg1 from "../public/assets/icons/dress.svg";
import categoryBannerImg2 from "../public/assets/icons/coat.svg";
import categoryBannerImg3 from "../public/assets/icons/glasses.svg";
import categoryBannerImg4 from "../public/assets/icons/shorts.svg";
import categoryBannerImg5 from "../public/assets/icons/tee.svg";
import categoryBannerImg6 from "../public/assets/icons/jacket.svg";
import categoryBannerImg7 from "../public/assets/icons/watch.svg";
import categoryBannerImg8 from "../public/assets/icons/hat.svg";
import sideOneImg1 from "../public/assets/icons/shoes.svg";
import sideOneImg2 from "../public/assets/icons/jewelry.svg";
import sideOneImg3 from "../public/assets/icons/perfume.svg";
import sideOneImg4 from "../public/assets/icons/cosmetics.svg";
import sideOneImg5 from "../public/assets/icons/bag.svg";
import sideTwoImg1 from "../public/assets/products/1.jpg";
import sideTwoImg2 from "../public/assets/products/2.jpg";
import sideTwoImg3 from "../public/assets/products/3.jpg";
import sideTwoImg4 from "../public/assets/products/4.jpg";
import sectionOneImg1 from "../public/assets/products/clothes-1.jpg";
import sectionOneImg2 from "../public/assets/products/clothes-2.jpg";
import sectionOneImg3 from "../public/assets/products/clothes-3.jpg";
import sectionOneImg4 from "../public/assets/products/shirt-1.jpg";
import sectionOneImg5 from "../public/assets/products/jacket-5.jpg";
import sectionOneImg6 from "../public/assets/products/jacket-1.jpg";
import sectionOneImg7 from "../public/assets/products/jacket-4.jpg";
import sectionOneImg8 from "../public/assets/products/shorts-1.jpg";
import sectionOneImg9 from "../public/assets/products/sports-1.jpg";
import sectionOneImg10 from "../public/assets/products/sports-2.jpg";
import sectionOneImg11 from "../public/assets/products/party-wear-1.jpg";
import sectionOneImg12 from "../public/assets/products/sports-3.jpg";
import sectionOneImg13 from "../public/assets/products/sports-6.jpg";
import sectionOneImg14 from "../public/assets/products/shoe-3.jpg";
import sectionOneImg15 from "../public/assets/products/shoe-1.jpg";
import sectionOneImg16 from "../public/assets/products/shoe-2.jpg";
import sectionOneImg17 from "../public/assets/products/watch-3.jpg";
import sectionOneImg18 from "../public/assets/products/jewellery-3.jpg";
import sectionOneImg19 from "../public/assets/products/perfume.jpg";
import sectionOneImg20 from "../public/assets/products/belt.jpg";
import sectionOneImg21 from "../public/assets/products/jewellery-2.jpg";
import sectionOneImg22 from "../public/assets/products/watch-1.jpg";
import sectionOneImg23 from "../public/assets/products/shampoo.jpg";
import sectionOneImg24 from "../public/assets/products/jewellery-1.jpg";
import sectionOne2Card1Img1 from "../public/assets/products/jacket-3.jpg";
import sectionOne2Card2Img2 from "../public/assets/products/shirt-2.jpg";
import sectionOne2Card3Img2 from "../public/assets/products/jacket-6.jpg";
import sectionOne2Card4Img2 from "../public/assets/products/clothes-4.jpg";
import sectionOne2Card5Img2 from "../public/assets/products/shoe-2_1.jpg";
import sectionOne2Card6Img2 from "../public/assets/products/watch-4.jpg";
import sectionOne2Card7Img2 from "../public/assets/products/watch-2.jpg";
import sectionOne2Card8Img2 from "../public/assets/products/party-wear-2.jpg";
import sectionOne2Card9Img2 from "../public/assets/products/jacket-2.jpg";
import sectionOne2Card10Img2 from "../public/assets/products/sports-4.jpg";
import sectionOne2Card11Img2 from "../public/assets/products/shoe-1_1.jpg";
import sectionOne2Card12Img2 from "../public/assets/products/shorts-2.jpg";
import sectionTwoQuotesImg from "../public/assets/icons/quotes.svg";
import sectionTwoAvatarImg from "../public/assets/testimonial-1.jpg";
import sectionTwoBannerImg from "../public/assets/cta-banner.jpg";
import sectionThreeImg1 from "../public/assets/blog-1.jpg";
import sectionThreeImg2 from "../public/assets/blog-2.jpg";
import sectionThreeImg3 from "../public/assets/blog-3.jpg";
import sectionThreeImg4 from "../public/assets/blog-4.jpg";
import footerImg from "../public/assets/payment.png";
import modalImg from "../public/assets/newsletter.png";
const mainMenuContextApi = createContext();
const mainModalContextApi = createContext();
function App() {
  const [isMainMenu, setIsMainMenu] = useState(false);
  const [isCategoryMenu, setIsCategoryMenu] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const sideOneData = [
    {
      img: categoryBannerImg1,
      title: "clothes",
    },
    {
      img: sideOneImg1,
      title: "foot wear",
    },
    {
      img: sideOneImg2,
      title: "jewelry",
    },
    {
      img: sideOneImg3,
      title: "perfume",
    },
    {
      img: sideOneImg4,
      title: "cosmetics",
    },
    {
      img: categoryBannerImg3,
      title: "glasses",
    },
    {
      img: sideOneImg5,
      title: "bags",
    },
  ].map((e, i) => {
    return (
      <div
        key={i}
        onClick={(element) => {
          const arrChildren = [];
          for (
            let i = 0;
            i < element.currentTarget.parentElement.children.length;
            i++
          ) {
            if (
              element.currentTarget.parentElement.children[
                i
              ].classList.contains("category-item")
            ) {
              arrChildren.push(element.currentTarget.parentElement.children[i]);
            }
          }
          arrChildren.forEach((item) => {
            if (item == element.currentTarget) {
              if (item.lastChild.textContent === "+") {
                item.lastChild.textContent = "-";
                item.classList.add("show-item");
              } else {
                item.lastChild.textContent = "+";
                item.classList.remove("show-item");
              }
            } else {
              item.lastChild.textContent = "+";
              item.classList.remove("show-item");
            }
          });
        }}
        className="category-item flex items-center gap-2 mb-3 cursor-pointer"
      >
        <img src={e.img} alt="" className="w-[20px]" />
        <p className="font-bold text-sm flex-1 text-main-gray">{e.title}</p>
        <span className="text-lg text-main-gray">+</span>
      </div>
    );
  });
  const sideTwoData = [
    {
      img: sideTwoImg1,
      title: "baby fabric shoes",
      stars: [faStar, faStar, faStar, faStar, faStar],
      price: ["$5.00", "$4.00"],
    },
    {
      img: sideTwoImg2,
      title: "men's hoodies t-shirt",
      stars: [faStar, faStar, faStar, faStar, faStarHalfStroke],
      price: ["$17.00", "$7.00"],
    },
    {
      img: sideTwoImg3,
      title: "girls t-shirt",
      stars: [faStar, faStar, faStar, faStar, faStarHalfStroke],
      price: ["$5.00", "$3.00"],
    },
    {
      img: sideTwoImg4,
      title: "woolen hat for men",
      stars: [faStar, faStar, faStar, faStar, faStar],
      price: ["$15.00", "$12.00"],
    },
  ].map((e, i) => {
    return (
      <div
        key={i}
        className="flex items-center gap-3 mb-3 cursor-pointer capitalize"
      >
        <img src={e.img} alt="" className="w-[50px]" />
        <div className="flex-1">
          <p className="font-bold text-[12px] text-main-gray">{e.title}</p>
          <div>
            {e.stars.map((e, i) => {
              return (
                <FontAwesomeIcon
                  key={i}
                  icon={e}
                  className="text-yellow-600 text-[12px]"
                />
              );
            })}
          </div>
          <div>
            <span className="font-bold text-main-gray mr-2 line-through text-[12px]">
              {e.price[0]}
            </span>
            <span className="font-bold text-[12px]">{e.price[1]}</span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <TopBar />
      <NavBar />
      <CategoryBar />
      <BannerSlider />
      <CategoryBanner />
      <mainMenuContextApi.Provider
        value={{
          isMainMenu,
          setIsMainMenu,
          sideOneData,
          sideTwoData,
          isCategoryMenu,
          setIsCategoryMenu,
        }}
      >
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Footer />
        <MenuBar />
        <MainMenu />
        <CategoryMenu />
      </mainMenuContextApi.Provider>
      <mainModalContextApi.Provider value={{ isModal, setIsModal }}>
        <Modal />
      </mainModalContextApi.Provider>
      <ScrollToTop />
    </>
  );
}

export default App;
const TopBar = () => {
  return (
    <div className="border-b-2 border-b-black/25 max-sm:hidden">
      <div className="container mx-auto p-1.5 flex justify-between gap-2 items-center">
        <div className="flex gap-2 max-sm:hidden">
          <FontAwesomeIcon
            icon={faFacebook}
            className="cursor-pointer bg-gray-300 p-1 rounded-sm duration-300 hover:text-white hover:bg-main-pink"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="cursor-pointer bg-gray-300 p-1 rounded-sm duration-300 hover:text-white hover:bg-main-pink"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="cursor-pointer bg-gray-300 p-1 rounded-sm duration-300 hover:text-white hover:bg-main-pink"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="cursor-pointer bg-gray-300 p-1 rounded-sm duration-300 hover:text-white hover:bg-main-pink"
          />
        </div>
        <p className="text-main-gray text-sm font-bold flex-1 text-center">
          Free Shipping This Week Order Over - $55
        </p>
        <div>
          <select className="mr-2.5 text-sm text-main-gray font-bold cursor-pointer">
            <option>USD $</option>
            <option>EUR €</option>
          </select>
          <select className="text-sm text-main-gray font-bold cursor-pointer">
            <option>ENGLISH</option>
            <option>ESPANOL</option>
            <option>FRANCIS</option>
          </select>
        </div>
      </div>
    </div>
  );
};
const NavBar = () => {
  return (
    <div className="border-b-2 border-b-black/25">
      <div className="container mx-auto px-1.5 py-4 flex max-sm:flex-wrap justify-between gap-5 items-center">
        <img src={logo} alt="" className="w-28 max-sm:mx-auto" />
        <div className="sm:flex-1 flex items-center relative max-sm:w-full">
          <input
            type="text"
            name=""
            id="nav-search"
            placeholder="Enter Your Product Name..."
            className="flex-1 border-2 p-2 border-black/10 rounded-full outline-none placeholder:text-main-gray placeholder:text-sm placeholder:duration-300 focus:placeholder:opacity-0 focus:border-black"
          />
          <label
            htmlFor="nav-search"
            className="absolute right-4 cursor-pointer"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </label>
        </div>
        <div className="flex gap-5 max-md:hidden">
          <FontAwesomeIcon
            icon={faUser}
            className="text-main-gray text-2xl cursor-pointer hover:text-main-pink duration-300"
          />
          <div className="relative">
            <span className="text-white bg-main-pink w-5 h-5 block rounded-full text-center items-center text-sm absolute top-[-12px] right-[-7px]">
              0
            </span>
            <FontAwesomeIcon
              icon={faHeart}
              className="text-main-gray text-2xl cursor-pointer hover:text-main-pink duration-300"
            />
          </div>
          <div className="relative">
            <span className="text-white bg-main-pink w-5 h-5 block rounded-full text-center items-center text-sm absolute top-[-12px] right-[-7px]">
              0
            </span>
            <FontAwesomeIcon
              icon={faBagShopping}
              className="text-main-gray text-2xl cursor-pointer hover:text-main-pink duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const CategoryBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="container mx-auto px-1.5 py-4 flex justify-center max-md:hidden">
      <div className="category-bar w-fit flex gap-10 relative z-20">
        <div>
          <p>home</p>
        </div>
        <div>
          <p
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            categories
          </p>
          <motion.div
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute w-full bg-white left-0 top-full p-5 border-[1px] border-black/25 rounded-sm hidden grid-cols-4 gap-10 shadow-lg`}
          >
            <div className="">
              <h1 className="border-b-[1px] border-black/25 pb-1.5 mb-1.5 capitalize font-extrabold text-sm tracking-widest">
                electronics
              </h1>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                desktop
              </p>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                laptop
              </p>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                camera
              </p>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                tablet
              </p>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                headphone
              </p>
              <div className="w-fit overflow-hidden rounded-sm">
                <img
                  src={categoryImg1}
                  alt=""
                  className="overflow-hidden rounded-sm cursor-pointer duration-300 hover:scale-[1.1]"
                />
              </div>
            </div>
            <div className="">
              <h1 className="border-b-[1px] border-black/25 pb-1.5 mb-1.5 capitalize font-extrabold text-sm tracking-widest">
                men's
              </h1>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                formal
              </p>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                casual
              </p>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                sports
              </p>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                jacket
              </p>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                sunglasses
              </p>
              <div className="w-fit overflow-hidden rounded-sm">
                <img
                  src={categoryImg2}
                  alt=""
                  className="overflow-hidden rounded-sm cursor-pointer duration-300 hover:scale-[1.1]"
                />
              </div>
            </div>
            <div className="">
              <h1 className="border-b-[1px] border-black/25 pb-1.5 mb-1.5 capitalize font-extrabold text-sm tracking-widest">
                women's
              </h1>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                formal
              </p>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                casual
              </p>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                perfume
              </p>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                cosmetics
              </p>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                bags
              </p>
              <div className="w-fit overflow-hidden rounded-sm">
                <img
                  src={categoryImg3}
                  alt=""
                  className="overflow-hidden rounded-sm cursor-pointer duration-300 hover:scale-[1.1]"
                />
              </div>
            </div>
            <div className="">
              <h1 className="border-b-[1px] border-black/25 pb-1.5 mb-1.5 capitalize font-extrabold text-sm tracking-widest">
                electronics
              </h1>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                smart watch
              </p>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                smart tv
              </p>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                keyboard
              </p>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                mouse
              </p>
              <p className="text-main-gray font-bold duration-300 hover:text-main-pink mb-2 cursor-pointer text-sm">
                microphone
              </p>
              <div className="w-fit overflow-hidden rounded-sm">
                <img
                  src={categoryImg4}
                  alt=""
                  className="overflow-hidden rounded-sm cursor-pointer duration-300 hover:scale-[1.1]"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <div className="relative">
          <p
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            men's
          </p>
          <motion.div
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-[1px] border-black/25 rounded-sm absolute top-full left-0 w-[150px] p-4 shadow-lg hidden bg-white"
          >
            <p className="text-sm font-bold text-main-gray duration-300 hover:text-main-pink cursor-pointer mb-2">
              shirt
            </p>
            <p className="text-sm font-bold text-main-gray duration-300 hover:text-main-pink cursor-pointer mb-2">
              shoes & jeans
            </p>
            <p className="text-sm font-bold text-main-gray duration-300 hover:text-main-pink cursor-pointer mb-2">
              safety shoes
            </p>
            <p className="text-sm font-bold text-main-gray duration-300 hover:text-main-pink cursor-pointer mb-2">
              wallet
            </p>
          </motion.div>
        </div>
        <div className="relative">
          <p
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            women's
          </p>
          <motion.div
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-[1px] border-black/25 rounded-sm absolute top-full left-0 w-[150px] p-4 shadow-lg hidden bg-white"
          >
            <p className="text-sm font-bold text-main-gray duration-300 hover:text-main-pink cursor-pointer mb-2">
              dress & frock
            </p>
            <p className="text-sm font-bold text-main-gray duration-300 hover:text-main-pink cursor-pointer mb-2">
              earrings
            </p>
            <p className="text-sm font-bold text-main-gray duration-300 hover:text-main-pink cursor-pointer mb-2">
              necklace
            </p>
            <p className="text-sm font-bold text-main-gray duration-300 hover:text-main-pink cursor-pointer mb-2">
              makeup kit
            </p>
          </motion.div>
        </div>
        <div className="relative">
          <p
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            jewelry
          </p>
          <motion.div
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-[1px] border-black/25 rounded-sm absolute top-full left-0 w-[150px] p-4 shadow-lg hidden bg-white"
          >
            <p className="text-sm font-bold text-main-gray duration-300 hover:text-main-pink cursor-pointer mb-2">
              earrings
            </p>
            <p className="text-sm font-bold text-main-gray duration-300 hover:text-main-pink cursor-pointer mb-2">
              couple rings
            </p>
            <p className="text-sm font-bold text-main-gray duration-300 hover:text-main-pink cursor-pointer mb-2">
              necklace
            </p>
            <p className="text-sm font-bold text-main-gray duration-300 hover:text-main-pink cursor-pointer mb-2">
              bracelets
            </p>
          </motion.div>
        </div>
        <div className="relative">
          <p
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            perfume
          </p>
          <motion.div
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-[1px] border-black/25 rounded-sm absolute top-full left-0 w-[150px] p-4 shadow-lg hidden bg-white"
          >
            <p className="text-sm font-bold text-main-gray duration-300 hover:text-main-pink cursor-pointer mb-2">
              clothes perfume
            </p>
            <p className="text-sm font-bold text-main-gray duration-300 hover:text-main-pink cursor-pointer mb-2">
              deodorant
            </p>
            <p className="text-sm font-bold text-main-gray duration-300 hover:text-main-pink cursor-pointer mb-2">
              flower fragrance
            </p>
            <p className="text-sm font-bold text-main-gray duration-300 hover:text-main-pink cursor-pointer mb-2">
              air freshener
            </p>
          </motion.div>
        </div>
        <div>
          <p>blog</p>
        </div>
        <div>
          <p>hot offers</p>
        </div>
      </div>
    </div>
  );
};
const BannerSlider = () => {
  return (
    <div className="container mx-auto overflow-x-auto overflow-y-hidden flex gap-5 items-center rounded-sm snap-x snap-mandatory">
      <div className="min-w-full aspect-square max-h-[450px] snap-center relative">
        <img
          src={sliderBannerImg1}
          className="object-cover w-full h-full overflow-hidden rounded-sm"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-[50px]">
          <h1 className="text-4xl text-main-pink font-bold mb-5">
            Trending item
          </h1>
          <p className="text-4xl font-bold">
            Women's latest <br />
            fashion sale
          </p>
          <p className="text-main-gray font-bold text-xl my-3">
            starting at $ <span className="text-3xl text-black">20</span>.00
          </p>
          <button className="uppercase bg-main-pink text-white font-bold cursor-pointer duration-300 hover:bg-black rounded-sm p-1.5">
            shop now
          </button>
        </div>
      </div>
      <div className="min-w-full aspect-square max-h-[450px] snap-center relative">
        <img
          src={sliderBannerImg2}
          className="object-cover w-full h-full overflow-hidden rounded-sm"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-[50px]">
          <h1 className="text-4xl text-main-pink font-bold mb-5">
            Trending accessories
          </h1>
          <p className="text-4xl font-bold">
            Modern <br />
            sunglasses
          </p>
          <p className="text-main-gray font-bold text-xl my-3">
            starting at $ <span className="text-3xl text-black">15</span>.00
          </p>
          <button className="uppercase bg-main-pink text-white font-bold cursor-pointer duration-300 hover:bg-black rounded-sm p-1.5">
            shop now
          </button>
        </div>
      </div>
      <div className="min-w-full aspect-square max-h-[450px] snap-center relative">
        <img
          src={sliderBannerImg3}
          className="object-cover w-full h-full overflow-hidden rounded-sm"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-[50px]">
          <h1 className="text-4xl text-main-pink font-bold mb-5">Sale Offer</h1>
          <p className="text-4xl font-bold">
            New fashion <br />
            summer sale
          </p>
          <p className="text-main-gray font-bold text-xl my-3">
            starting at $ <span className="text-3xl text-black">29</span>.99
          </p>
          <button className="uppercase bg-main-pink text-white font-bold cursor-pointer duration-300 hover:bg-black rounded-sm p-1.5">
            shop now
          </button>
        </div>
      </div>
    </div>
  );
};
const CategoryBanner = () => {
  const categoryBannerData = [
    {
      img: categoryBannerImg1,
      title: "dress & frock",
      show: "show all",
      count: 53,
    },
    {
      img: categoryBannerImg2,
      title: "winter wear",
      show: "show all",
      count: 58,
    },
    {
      img: categoryBannerImg3,
      title: "glasses & lens",
      show: "show all",
      count: 68,
    },
    {
      img: categoryBannerImg4,
      title: "shorts & jeans",
      show: "show all",
      count: 84,
    },
    {
      img: categoryBannerImg5,
      title: "t-shirts",
      show: "show all",
      count: 35,
    },
    {
      img: categoryBannerImg6,
      title: "jacket",
      show: "show all",
      count: 16,
    },
    {
      img: categoryBannerImg7,
      title: "watch",
      show: "show all",
      count: 27,
    },
    {
      img: categoryBannerImg8,
      title: "hat & caps",
      show: "show all",
      count: 39,
    },
  ].map((e, i) => {
    return (
      <div
        key={i}
        className="min-w-full md:min-w-1/2 lg:min-w-1/4 flex items-center gap-4 p-2 border-[1px] border-black/25 rounded-sm snap-start"
      >
        <img src={e.img} alt="" className="w-[30px]" />
        <div className="relative flex-1">
          <p className="font-extrabold text-[12px] uppercase mb-2">{e.title}</p>
          <p className="font-extrabold text-main-pink text-[12px] uppercase cursor-pointer">
            {e.show}
          </p>
          <span className="absolute right-0 top-0 text-[12px] font-bold">{`(${e.count})`}</span>
        </div>
      </div>
    );
  });
  return (
    <div className="container mx-auto my-10 flex gap-2 overflow-x-auto overflow-y-hidden snap-x snap-mandatory">
      {categoryBannerData}
    </div>
  );
};
const SectionOne = () => {
  const { sideOneData, sideTwoData } = useContext(mainMenuContextApi);
  const sectionOneData = [
    {
      img: sectionOneImg1,
      desc: "Relaxed Short full Sleeve T-Shirt",
      title: "Clothes",
      price: ["$45.00", "$12.00"],
    },
    {
      img: sectionOneImg2,
      desc: "Girls pnk Embro design Top",
      title: "Clothes",
      price: ["$61.00", "$00.00"],
    },
    {
      img: sectionOneImg3,
      desc: "Black Floral Wrap Midi Skirt",
      title: "Clothes",
      price: ["$76.00", "$25.00"],
    },
    {
      img: sectionOneImg4,
      desc: "Pure Garment Dyed Cotton Shirt",
      title: "Mens Fashion",
      price: ["$68.00", "$31.00"],
    },

    {
      img: sectionOneImg5,
      desc: "MEN Yarn Fleece Full-Zip Jacket",
      title: "Winter wear",
      price: ["$61.00", "$11.00"],
    },
    {
      img: sectionOneImg6,
      desc: "Mens Winter Leathers Jackets",
      title: "Winter wear",
      price: ["$32.00", "$20.00"],
    },
    {
      img: sectionOneImg7,
      desc: "Mens Winter Leathers Jackets",
      title: "Jackets",
      price: ["$50.00", "$25.00"],
    },
    {
      img: sectionOneImg8,
      desc: "Better Basics French Terry Sweatshorts",
      title: "Shorts",
      price: ["$20.00", "$10.00"],
    },

    {
      img: sectionOneImg9,
      desc: "Running & Trekking Shoes - White",
      title: "Sports",
      price: ["$49.00", "$15.00"],
    },
    {
      img: sectionOneImg10,
      desc: "Trekking & Running Shoes - black",
      title: "Sports",
      price: ["$78.00", "$36.00"],
    },
    {
      img: sectionOneImg11,
      desc: "Womens Party Wear Shoes",
      title: "Party wear",
      price: ["$94.00", "$42.00"],
    },
    {
      img: sectionOneImg12,
      desc: "Sports Claw Women's Shoes",
      title: "Sports",
      price: ["$54.00", "$65.00"],
    },

    {
      img: sectionOneImg13,
      desc: "Air Trekking Shoes - white",
      title: "Sports",
      price: ["$52.00", "$55.00"],
    },
    {
      img: sectionOneImg14,
      desc: "Boot With Suede Detail",
      title: "boots",
      price: ["$20.00", "$30.00"],
    },
    {
      img: sectionOneImg15,
      desc: "Men's Leather Formal Wear shoes",
      title: "formal",
      price: ["$56.00", "$78.00"],
    },
    {
      img: sectionOneImg16,
      desc: "Casual Men's Brown shoes",
      title: "Casual",
      price: ["$50.00", "$55.00"],
    },

    {
      img: sectionOneImg17,
      desc: "Pocket Watch Leather Pouch",
      title: "Watches",
      price: ["$50.00", "$34.00"],
    },
    {
      img: sectionOneImg18,
      desc: "Silver Deer Heart Necklace",
      title: "Jewellery",
      price: ["$84.00", "$30.00"],
    },
    {
      img: sectionOneImg19,
      desc: "Titan 100 Ml Womens Perfume",
      title: "Perfume",
      price: ["$42.00", "$10.00"],
    },
    {
      img: sectionOneImg20,
      desc: "Men's Leather Reversible Belt",
      title: "Belt",
      price: ["$24.00", "$10.00"],
    },

    {
      img: sectionOneImg21,
      desc: "platinum Zircon Classic Ring",
      title: "jewellery",
      price: ["$62.00", "$65.00"],
    },
    {
      img: sectionOneImg22,
      desc: "Smart watche Vital Plus",
      title: "Watches",
      price: ["$56.00", "$78.00"],
    },
    {
      img: sectionOneImg23,
      desc: "shampoo conditioner packs",
      title: "cosmetics",
      price: ["$20.00", "$30.00"],
    },
    {
      img: sectionOneImg24,
      desc: "Rose Gold Peacock Earrings",
      title: "jewellery",
      price: ["$20.00", "$30.00"],
    },
  ].map((e, i) => {
    return (
      <div key={i} className="flex gap-2 items-center cursor-pointer mb-7">
        <img src={e.img} alt="" className="w-[50px]" />
        <div>
          <p className="text-sm font-bold">{e.desc.slice(0, 20)}...</p>
          <p className="text-sm font-bold text-main-gray duration-300 hover:text-main-pink my-1">
            {e.title}
          </p>
          <div>
            <span className="text-sm font-bold text-main-pink mr-2">
              {e.price[0]}
            </span>
            <span className="text-sm font-bold text-main-gray line-through">
              {e.price[1]}
            </span>
          </div>
        </div>
      </div>
    );
  });
  const sectionOneData2 = [
    {
      img1: sectionOne2Card1Img1,
      img2: sectionOneImg7,
      isSale: true,
      salePrice: "15%",
      title: "jacket",
      desc: "Mens Winter Leathers Jackets",
      rate: [
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <i className="fa-regular fa-star text-[12px]"></i>,
        <i className="fa-regular fa-star text-[12px]"></i>,
      ],
      price: ["$48.00", "$75.00"],
    },
    {
      img1: sectionOneImg4,
      img2: sectionOne2Card2Img2,
      isSale: true,
      salePrice: "sale",
      title: "shirt",
      desc: "Pure Garment Dyed Cotton Shirt",
      rate: [
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <i className="fa-regular fa-star text-[12px]"></i>,
        <i className="fa-regular fa-star text-[12px]"></i>,
      ],
      price: ["$45.00", "$56.00"],
    },
    {
      img1: sectionOneImg5,
      img2: sectionOne2Card3Img2,
      isSale: false,
      salePrice: "",
      title: "jacket",
      desc: "MEN Yarn Fleece Full-Zip Jacket",
      rate: [
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <i className="fa-regular fa-star text-[12px]"></i>,
        <i className="fa-regular fa-star text-[12px]"></i>,
      ],
      price: ["$58.00", "$65.00"],
    },
    {
      img1: sectionOneImg3,
      img2: sectionOne2Card4Img2,
      isSale: true,
      salePrice: "new",
      title: "skirt",
      desc: "Black Floral Wrap Midi Skirt",
      rate: [
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
      ],
      price: ["$25.00", "$35.00"],
    },

    {
      img1: sectionOneImg16,
      img2: sectionOne2Card5Img2,
      isSale: false,
      salePrice: "",
      title: "casual",
      desc: "Casual Men's Brown shoes",
      rate: [
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
      ],
      price: ["$99.00", "$105.00"],
    },
    {
      img1: sectionOneImg17,
      img2: sectionOne2Card6Img2,
      isSale: true,
      salePrice: "sale",
      title: "watches",
      desc: "Pocket Watch Leather Pouch",
      rate: [
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <i className="fa-regular fa-star text-[12px]"></i>,
        <i className="fa-regular fa-star text-[12px]"></i>,
      ],
      price: ["$150.00", "$170.00"],
    },
    {
      img1: sectionOneImg22,
      img2: sectionOne2Card7Img2,
      isSale: false,
      salePrice: "",
      title: "watches",
      desc: "Smart watche Vital Plus",
      rate: [
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <i className="fa-regular fa-star text-[12px]"></i>,
      ],
      price: ["$100.00", "$120.00"],
    },
    {
      img1: sectionOneImg11,
      img2: sectionOne2Card8Img2,
      isSale: true,
      salePrice: "sale",
      title: "party wear",
      desc: "Womens Party Wear Shoes",
      rate: [
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <i className="fa-regular fa-star text-[12px]"></i>,
        <i className="fa-regular fa-star text-[12px]"></i>,
      ],
      price: ["$25.00", "$30.00"],
    },

    {
      img1: sectionOneImg6,
      img2: sectionOne2Card9Img2,
      isSale: false,
      salePrice: "",
      title: "jacket",
      desc: "Mens Winter Leathers Jackets",
      rate: [
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <i className="fa-regular fa-star text-[12px]"></i>,
      ],
      price: ["$99.00", "$105.00"],
    },
    {
      img1: sectionOneImg10,
      img2: sectionOne2Card10Img2,
      isSale: true,
      salePrice: "sale",
      title: "sports",
      desc: "Trekking & Running Shoes - black",
      rate: [
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <i className="fa-regular fa-star text-[12px]"></i>,
        <i className="fa-regular fa-star text-[12px]"></i>,
      ],
      price: ["$58.00", "$64.00"],
    },
    {
      img1: sectionOneImg15,
      img2: sectionOne2Card11Img2,
      isSale: false,
      salePrice: "",
      title: "formal",
      desc: "Men's Leather Formal Wear shoes",
      rate: [
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <i className="fa-regular fa-star text-[12px]"></i>,
      ],
      price: ["$50.00", "$65.00"],
    },
    {
      img1: sectionOneImg8,
      img2: sectionOne2Card12Img2,
      isSale: true,
      salePrice: "sale",
      title: "shorts",
      desc: "Better Basics French Terry Sweatshorts",
      rate: [
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-600 text-[12px]"
        />,
        <i className="fa-regular fa-star text-[12px]"></i>,
        <i className="fa-regular fa-star text-[12px]"></i>,
      ],
      price: ["$78.00", "$85.00"],
    },
  ].map((e, i) => {
    return (
      <div
        onMouseEnter={(element) => {
          element.currentTarget.children[0].children[0].src = e.img2;
        }}
        onMouseLeave={(element) => {
          element.currentTarget.children[0].children[0].src = e.img1;
        }}
        key={i}
        className="product-card border-[1px] border-black/25 rounded-sm p-4 shadow-md cursor-pointer relative overflow-hidden"
      >
        <div className="product-image overflow-hidden mb-3">
          <img
            src={e.img1}
            alt=""
            className="max-w-[70%] object-contain mx-auto duration-200"
          />
        </div>
        <div>
          <h1 className="text-sm text-main-pink capitalize">{e.title}</h1>
          <p className="text-[12px] text-main-gray capitalize font-bold tracking-widest my-0.5">
            {e.desc}
          </p>
          <div className="flex gap-1 my-0.5">
            {e.rate.map((star, index) => {
              return <span key={index}>{star}</span>;
            })}
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-main-pink font-bold">{e.price[0]}</span>
            <span className="text-sm line-through text-main-gray">
              {e.price[1]}
            </span>
          </div>
        </div>
        {e.isSale && (
          <span
            className={`text-white font-extrabold text-[12px] w-24 pr-3 h-8 text-center content-center block uppercase absolute top-0 -left-6 rotate-[-45deg] ${
              e.salePrice === "sale"
                ? "bg-black"
                : e.salePrice === "new"
                ? "bg-main-pink"
                : "bg-green-600"
            }`}
          >
            {e.salePrice}
          </span>
        )}
        <div className="product-features flex flex-col gap-2.5 p-4 absolute top-0 -right-full text-sm text-black duration-200">
          <i className="fa-regular fa-heart bg-gray-100 rounded-sm duration-300 hover:bg-black hover:text-white p-2"></i>
          <i className="fa-regular fa-eye bg-gray-100 rounded-sm duration-300 hover:bg-black hover:text-white p-2"></i>
          <i className="fa-solid fa-repeat bg-gray-100 rounded-sm duration-300 hover:bg-black hover:text-white p-2"></i>
          <i className="fa-solid fa-lock bg-gray-100 rounded-sm duration-300 hover:bg-black hover:text-white p-2"></i>
        </div>
      </div>
    );
  });
  return (
    <div className="container mx-auto px-1.5 my-10 grid md:grid-cols-4 md:gap-5 ">
      <div className="max-md:hidden md:col-span-1 relative">
        <div className="sticky top-5">
          <div className="p-3 border-[1px] border-black/25 rounded-sm overflow-hidden shadow-md">
            <h1 className="font-bold text-sm uppercase mb-5">categories</h1>
            {sideOneData[0]}
            <div className="duration-300 h-0 overflow-hidden opacity-0">
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">shirts</p>
                <p className="text-sm">300</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">shorts & jeans</p>
                <p className="text-sm">60</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">jacket</p>
                <p className="text-sm">50</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">dress & frock</p>
                <p className="text-sm">87</p>
              </div>
            </div>
            {sideOneData[1]}
            <div className="duration-300 h-0 overflow-hidden opacity-0">
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">sports</p>
                <p className="text-sm">45</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">formal</p>
                <p className="text-sm">75</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">casual</p>
                <p className="text-sm">35</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">safety shoes</p>
                <p className="text-sm">26</p>
              </div>
            </div>
            {sideOneData[2]}
            <div className="duration-300 h-0 overflow-hidden opacity-0">
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">earrings</p>
                <p className="text-sm">46</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">couple rings</p>
                <p className="text-sm">73</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">necklace</p>
                <p className="text-sm">61</p>
              </div>
            </div>
            {sideOneData[3]}
            <div className="duration-300 h-0 overflow-hidden opacity-0">
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">clothes perfume</p>
                <p className="text-sm">12 pcs</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">deodorant</p>
                <p className="text-sm">60 pcs</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">jacket</p>
                <p className="text-sm">50 pcs</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">dress & frock</p>
                <p className="text-sm">87 pcs</p>
              </div>
            </div>
            {sideOneData[4]}
            <div className="duration-300 h-0 overflow-hidden opacity-0">
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">shampoo</p>
                <p className="text-sm">68</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">sunscreen</p>
                <p className="text-sm">46</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">body wash</p>
                <p className="text-sm">79</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">makeup kit</p>
                <p className="text-sm">23</p>
              </div>
            </div>
            {sideOneData[5]}
            <div className="duration-300 h-0 overflow-hidden opacity-0">
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">sunglasses</p>
                <p className="text-sm">50</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">lenses</p>
                <p className="text-sm">48</p>
              </div>
            </div>
            {sideOneData[6]}
            <div className="duration-300 h-0 overflow-hidden opacity-0">
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">shopping bag</p>
                <p className="text-sm">62</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">gym backpack</p>
                <p className="text-sm">35</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">purse</p>
                <p className="text-sm">80</p>
              </div>
              <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                <p className="text-sm">wallet</p>
                <p className="text-sm">75</p>
              </div>
            </div>
          </div>
          <div className="p-3 border-[1px] border-black/25 rounded-sm mt-5 shadow-xl">
            <h1 className="font-bold text-sm uppercase mb-5">best sellers</h1>
            {sideTwoData}
          </div>
        </div>
      </div>
      <div className="md:col-span-3 overflow-hidden">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <h1 className="border-b-[1px] border-black/25 capitalize font-bold text-sm tracking-widest pb-2 mb-5">
              new arrivals
            </h1>
            <div className="flex overflow-y-hidden overflow-x-auto snap-x snap-mandatory">
              <div className="min-w-full snap-start">
                {sectionOneData[0]}
                {sectionOneData[1]}
                {sectionOneData[2]}
                {sectionOneData[3]}
              </div>
              <div className="min-w-full snap-start">
                {sectionOneData[4]}
                {sectionOneData[5]}
                {sectionOneData[6]}
                {sectionOneData[7]}
              </div>
            </div>
          </div>
          <div>
            <h1 className="border-b-[1px] border-black/25 capitalize font-bold text-sm tracking-widest pb-2 mb-5">
              trending
            </h1>
            <div className="flex overflow-y-hidden overflow-x-auto snap-x snap-mandatory">
              <div className="min-w-full snap-start">
                {sectionOneData[8]}
                {sectionOneData[9]}
                {sectionOneData[10]}
                {sectionOneData[11]}
              </div>
              <div className="min-w-full snap-start">
                {sectionOneData[12]}
                {sectionOneData[13]}
                {sectionOneData[14]}
                {sectionOneData[15]}
              </div>
            </div>
          </div>
          <div>
            <h1 className="border-b-[1px] border-black/25 capitalize font-bold text-sm tracking-widest pb-2 mb-5">
              top rated
            </h1>
            <div className="flex overflow-y-hidden overflow-x-auto snap-x snap-mandatory">
              <div className="min-w-full snap-start">
                {sectionOneData[16]}
                {sectionOneData[17]}
                {sectionOneData[18]}
                {sectionOneData[19]}
              </div>
              <div className="min-w-full snap-start">
                {sectionOneData[20]}
                {sectionOneData[21]}
                {sectionOneData[22]}
                {sectionOneData[23]}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <h1 className="font-bold border-b-[1px] border-black/25 pb-2 capitalize text-sm tracking-widest mb-5">
            Deal of the day
          </h1>
          <div className="flex gap-5 overflow-x-scroll snap-x snap-mandatory">
            <div className="min-w-full border-[1px] border-black/25 p-5 rounded-sm grid md:grid-cols-2 gap-5 snap-start">
              <div className="grid place-content-center place-items-center">
                <img src={sectionOneImg23} className="w-[80%] object-cover" />
              </div>
              <div>
                <div className="flex gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-600" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-600" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-600" />
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <p className="mt-3 font-bold uppercase text-sm">
                  shampoo, conditioner & facewash packs
                </p>
                <p className="text-main-gray text-sm font-bold my-3">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                  sit amet consectetur Lorem ipsum dolor
                </p>
                <div className="flex gap-3">
                  <span className="text-main-pink font-extrabold text-lg">
                    $150
                  </span>
                  <span className="text-main-gray font-extrabold line-through text-lg">
                    $200
                  </span>
                </div>
                <button className="uppercase bg-main-pink text-white font-bold cursor-pointer duration-300 hover:bg-black rounded-sm p-2 mt-3">
                  add to cart
                </button>
                <div className="flex gap-3 justify-between mt-3 uppercase text-[12px] text-main-gray font-bold">
                  <p>
                    already sold: <span className="text-black">20</span>
                  </p>
                  <p>
                    available: <span className="text-black">40</span>
                  </p>
                </div>
                <div className="h-[8px] bg-main-gray/50 rounded-full mt-3">
                  <span className="block h-full bg-main-pink rounded-full w-[25%]"></span>
                </div>
                <p className="mt-3 uppercase text-[12px] text-black font-bold">
                  Hurry Up! Offer ends in:
                </p>
                <div className="flex gap-2 mt-3 justify-center">
                  <div className="flex flex-col items-center h-[60px] w-[60px] bg-main-gray/30 rounded-lg uppercase font-bold text-[12px] gap-2 justify-center">
                    <span>360</span>
                    <span>days</span>
                  </div>
                  <div className="flex flex-col items-center h-[60px] w-[60px] bg-main-gray/30 rounded-lg uppercase font-bold text-[12px] gap-2 justify-center">
                    <span>24</span>
                    <span>hours</span>
                  </div>
                  <div className="flex flex-col items-center h-[60px] w-[60px] bg-main-gray/30 rounded-lg uppercase font-bold text-[12px] gap-2 justify-center">
                    <span>59</span>
                    <span>min</span>
                  </div>
                  <div className="flex flex-col items-center h-[60px] w-[60px] bg-main-gray/30 rounded-lg uppercase font-bold text-[12px] gap-2 justify-center">
                    <span>00</span>
                    <span>sec</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-w-full border-[1px] border-black/25 p-5 rounded-sm grid md:grid-cols-2 gap-5 snap-start">
              <div className="grid place-content-center place-items-center">
                <img src={sectionOneImg24} className="w-[80%] object-cover" />
              </div>
              <div>
                <div className="flex gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-600" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-600" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-600" />
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <p className="mt-3 font-bold uppercase text-sm">
                  Rose Gold diamonds Earring
                </p>
                <p className="text-main-gray text-sm font-bold my-3">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                  sit amet consectetur Lorem ipsum dolor
                </p>
                <div className="flex gap-3">
                  <span className="text-main-pink font-extrabold text-lg">
                    $1990.00
                  </span>
                  <span className="text-main-gray font-extrabold line-through text-lg">
                    $2000.00
                  </span>
                </div>
                <button className="uppercase bg-main-pink text-white font-bold cursor-pointer duration-300 hover:bg-black rounded-sm p-2 mt-3">
                  add to cart
                </button>
                <div className="flex gap-3 justify-between mt-3 uppercase text-[12px] text-main-gray font-bold">
                  <p>
                    already sold: <span className="text-black">15</span>
                  </p>
                  <p>
                    available: <span className="text-black">40</span>
                  </p>
                </div>
                <div className="h-[8px] bg-main-gray/50 rounded-full mt-3">
                  <span className="block h-full bg-main-pink rounded-full w-[25%]"></span>
                </div>
                <p className="mt-3 uppercase text-[12px] text-black font-bold">
                  Hurry Up! Offer ends in:
                </p>
                <div className="flex gap-2 mt-3 justify-center">
                  <div className="flex flex-col items-center h-[60px] w-[60px] bg-main-gray/30 rounded-lg uppercase font-bold text-[12px] gap-2 justify-center">
                    <span>360</span>
                    <span>days</span>
                  </div>
                  <div className="flex flex-col items-center h-[60px] w-[60px] bg-main-gray/30 rounded-lg uppercase font-bold text-[12px] gap-2 justify-center">
                    <span>24</span>
                    <span>hours</span>
                  </div>
                  <div className="flex flex-col items-center h-[60px] w-[60px] bg-main-gray/30 rounded-lg uppercase font-bold text-[12px] gap-2 justify-center">
                    <span>59</span>
                    <span>min</span>
                  </div>
                  <div className="flex flex-col items-center h-[60px] w-[60px] bg-main-gray/30 rounded-lg uppercase font-bold text-[12px] gap-2 justify-center">
                    <span>00</span>
                    <span>sec</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <h1 className="font-bold border-b-[1px] border-black/25 pb-2 capitalize text-sm tracking-widest mb-5">
            new products
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {sectionOneData2}
          </div>
        </div>
      </div>
    </div>
  );
};
const SectionTwo = () => {
  return (
    <div className="container mx-auto grid gap-5 sm:grid-cols-4 md:grid-cols-4">
      <div className="md:col-span-1 sm:col-span-1 p-2 text-center">
        <h1 className="font-bold border-b-[1px] border-black/25 pb-2 capitalize text-sm tracking-widest text-start mb-5">
          testimonials
        </h1>
        <img
          src={sectionTwoAvatarImg}
          alt=""
          className="w-[100px] rounded-full mx-auto mb-3"
        />
        <h1 className="font-bold text-lg uppercase text-main-gray">Alan Doe</h1>
        <p className="text-sm font-bold">CEO & Founder Invision</p>
        <img
          src={sectionTwoQuotesImg}
          alt=""
          className="mx-auto w-[40px] my-3"
        />
        <p className="text-main-gray text-balance">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
          amet.
        </p>
      </div>
      <div
        className="md:col-span-2 sm:col-span-3 bg-cover relative min-h-[300px] rounded-sm overflow-hidden"
        style={{ backgroundImage: `url(${sectionTwoBannerImg})` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-white/75 p-5 rounded-sm cursor-pointer">
          <span className="text-white bg-black font-bold p-2 rounded-sm mb-3 block uppercase text-sm">
            25% discount
          </span>
          <p className="text-2xl font-extrabold uppercase">summer</p>
          <p className="text-2xl font-extrabold uppercase -mt-1"> collection</p>
          <p className="font-bold text-sm text-main-gray uppercase my-3">
            starting @ $10
          </p>
          <span className="uppercase text-sm font-extrabold tracking-widest">
            shop now
          </span>
        </div>
      </div>
      <div className="sm:col-span-4 md:col-span-1 p-2">
        <h1 className="font-bold border-b-[1px] border-black/25 pb-2 capitalize text-sm tracking-widest text-start mb-5">
          Our Services
        </h1>
        <div>
          <div className="flex gap-7 flex-wrap max-md:justify-center md:flex-col">
            <div className="flex gap-3 items-center max-md:flex-col">
              <FontAwesomeIcon
                icon={faShip}
                className="text-4xl text-main-pink "
              />
              <div>
                <p className="font-bold capitalize max-md:text-center">
                  worldwide delivery
                </p>
                <p className="text-[12px] text-main-gray capitalize max-md:text-center">
                  for order over $100
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center max-md:flex-col">
              <FontAwesomeIcon
                icon={faRocket}
                className="text-4xl text-main-pink "
              />
              <div>
                <p className="font-bold capitalize max-md:text-center">
                  next day delivery
                </p>
                <p className="text-[12px] text-main-gray capitalize max-md:text-center">
                  uk orders only
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center max-md:flex-col">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-4xl text-main-pink "
              />
              <div>
                <p className="font-bold capitalize max-md:text-center">
                  best online support
                </p>
                <p className="text-[12px] text-main-gray capitalize max-md:text-center">
                  hours: 8am - 11pm
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center max-md:flex-col">
              <FontAwesomeIcon
                icon={faShare}
                className="text-4xl text-main-pink "
              />
              <div>
                <p className="font-bold capitalize max-md:text-center">
                  return policy
                </p>
                <p className="text-[12px] text-main-gray capitalize max-md:text-center">
                  tasy & free return
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center max-md:flex-col">
              <FontAwesomeIcon
                icon={faTicket}
                className="text-4xl text-main-pink "
              />
              <div>
                <p className="font-bold capitalize max-md:text-center">
                  30% money back
                </p>
                <p className="text-[12px] text-main-gray capitalize max-md:text-center">
                  for order over $100
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SectionThree = () => {
  const sectionThreeData = [
    {
      img: sectionThreeImg1,
      title: "fashion",
      desc: "Clothes Retail KPIs 2021 Guide for Clothes Executives.",
      date: "by mr admin / apr 06, 2022",
    },
    {
      img: sectionThreeImg2,
      title: "Clothes",
      desc: "Curbside fashion Trends: How to Win the Pickup Battle.",
      date: "by mr robin / jan 18, 2022",
    },
    {
      img: sectionThreeImg3,
      title: "Shoes",
      desc: "EBT vendors: Claim Your Share of SNAP Online Revenue.",
      date: "by mr Selsa / fab 10, 2022",
    },
    {
      img: sectionThreeImg4,
      title: "Electronics",
      desc: "Curbside fashion Trends: How to Win the Pickup Battle.",
      date: "by mr Pawar / mar 15, 2022",
    },
  ].map((e, i) => {
    return (
      <div
        key={i}
        className="max-sm:min-w-full sm:min-w-1/2 lg:min-w-auto p-5 cursor-pointer snap-start"
      >
        <img
          src={e.img}
          alt=""
          className="max-w-full overflow-hidden rounded-md mb-3"
        />
        <h1 className="font-bold text-main-pink capitalize">{e.title}</h1>
        <p className="text-sm text-main-gray font-bold my-1 capitalize duration-300 hover:text-main-pink">
          {e.desc}
        </p>
        <p className="text-sm text-main-gray/75 capitalize font-bold">
          {e.date}
        </p>
      </div>
    );
  });
  return (
    <div className="container mx-auto my-7">
      <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory">
        {sectionThreeData}
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="pt-10 pb-20 bg-main-black">
      <div className="container mx-auto px-2">
        <h1 className="text-main-pink text-lg font-extrabold mb-5 uppercase">
          Brand directory
        </h1>
        <div className="flex gap-2 items-center">
          <p className="text-white/75 font-bold">Fashion:</p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              T-shirt |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Shirts |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              shorts & jeans |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              jacket |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              dress & frock |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              innerwear |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              hosiery |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              T-shirt
            </span>
          </div>
        </div>
        <div className="flex gap-2 my-5 items-center">
          <p className="text-white/75 font-bold">footwear:</p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              sport |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              formal |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Boots |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              casual |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              cowboy shoes |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              safety shoes |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Party wear shoes |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Branded |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Firstcopy |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Long shoes
            </span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-white/75 font-bold">jewellery:</p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Necklace |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Earrings |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Couple rings |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Pendants |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Crystal |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Bangles |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              bracelets |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              nosepin |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              chain |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Earrings |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Couple rings
            </span>
          </div>
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="text-white/75 font-bold">cosmetics:</p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Shampoo |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Bodywash |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Facewash |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              makeup kit |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              liner |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              lipstick |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              prefume |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              Body soap |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              scrub |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              hair gel |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              hair colors |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              hair dye |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              sunscreen |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              skin loson |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              liner |
            </span>
            <span className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm">
              lipstick
            </span>
          </div>
        </div>
      </div>
      <hr className="my-10 text-white/40" />
      <div className="container mx-auto px-2 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div className="">
          <h1 className="mb-1 uppercase font-extrabold text-sm text-white">
            Popular Categories
          </h1>
          <span className="bg-main-pink w-1/4 h-1 block mb-4"></span>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            fashion
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            Electronic
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            Cosmetic
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            Health
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            Watches
          </p>
        </div>
        <div className="">
          <h1 className="mb-1 uppercase font-extrabold text-sm text-white">
            Products
          </h1>
          <span className="bg-main-pink w-1/4 h-1 block mb-4"></span>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            Prices drop
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            New products
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            Best sales
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            Contact us
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            Sitemap
          </p>
        </div>
        <div className="">
          <h1 className="mb-1 uppercase font-extrabold text-sm text-white">
            Our Company
          </h1>
          <span className="bg-main-pink w-1/4 h-1 block mb-4"></span>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            Delivery
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            Legal Notice
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            Terms and conditions
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            About us
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            Secure payment
          </p>
        </div>
        <div className="">
          <h1 className="mb-1 uppercase font-extrabold text-sm text-white">
            Services
          </h1>
          <span className="bg-main-pink w-1/4 h-1 block mb-4"></span>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            Prices drop
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            New products
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            Best sales
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            Contact us
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            Sitemap
          </p>
        </div>
        <div className="">
          <h1 className="mb-1 uppercase font-extrabold text-sm text-white">
            Contact
          </h1>
          <span className="bg-main-pink w-1/4 h-1 block mb-4"></span>
          <p className="text-white/50 duration-300 hover:text-main-pink text-sm capitalize">
            <FontAwesomeIcon icon={faLocationDot} className="text-lg" /> 419
            State 414 Rte Beaver Dams, New York(NY), 14812, USA
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize my-5">
            <FontAwesomeIcon icon={faPhone} className="text-lg" /> (607)
            936-8058
          </p>
          <p className="text-white/50 duration-300 hover:text-main-pink cursor-pointer text-sm capitalize">
            <FontAwesomeIcon icon={faEnvelope} className="text-lg" />{" "}
            example@gmail.com
          </p>
        </div>
      </div>
      <hr className="my-10 text-white/40" />
      <div className="">
        <div className="container mx-auto px-2">
          <img src={footerImg} alt="" className="w-[200px] mx-auto mb-3" />
          <p className="font-bold text-white/50 text-center">
            Copyright © Anon all rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
const MenuBar = () => {
  const { setIsMainMenu, setIsCategoryMenu } = useContext(mainMenuContextApi);
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 flex gap-10 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] p-5 pb-3 bg-white rounded-tl-xl rounded-tr-xl md:hidden">
      <FontAwesomeIcon
        icon={faBars}
        className="text-black text-2xl cursor-pointer"
        onClick={() => setIsMainMenu(true)}
      />
      <div className="w-fit h-fit relative">
        <span className="text-white bg-main-pink absolute top-[-12px] right-[-12px] w-5 h-5 rounded-full text-center content-center text-sm">
          0
        </span>
        <FontAwesomeIcon
          icon={faBagShopping}
          className="text-black text-2xl cursor-pointer"
        />
      </div>
      <FontAwesomeIcon
        icon={faHome}
        className="text-black text-2xl cursor-pointer"
      />
      <div className="w-fit h-fit relative">
        <span className="text-white bg-main-pink absolute top-[-12px] right-[-12px] w-5 h-5 rounded-full text-center content-center text-sm">
          0
        </span>
        <FontAwesomeIcon
          icon={faHeart}
          className="text-black text-2xl cursor-pointer"
        />
      </div>
      <FontAwesomeIcon
        icon={faTableCellsLarge}
        className="text-black text-2xl cursor-pointer"
        onClick={() => setIsCategoryMenu(true)}
      />
    </div>
  );
};
const MainMenu = () => {
  const { isMainMenu, setIsMainMenu } = useContext(mainMenuContextApi);
  const mainMenuData = [
    {
      title: "home",
    },
    {
      title: "men's",
    },
    {
      title: "women's",
    },
    {
      title: "jewelry",
    },
    {
      title: "perfume",
    },
    {
      title: "blog",
    },
    {
      title: "hot offers",
    },
  ].map((e, i) => {
    return (
      <div
        key={i}
        onClick={(element) => {
          if (i !== 0 && i !== 5 && i !== 6) {
            const arrChildren = [];
            for (
              let i = 0;
              i < element.currentTarget.parentElement.children.length;
              i++
            ) {
              if (
                element.currentTarget.parentElement.children[
                  i
                ].classList.contains("category-item")
              ) {
                arrChildren.push(
                  element.currentTarget.parentElement.children[i]
                );
              }
            }
            arrChildren.forEach((item) => {
              if (item == element.currentTarget) {
                if (item.lastChild.textContent === "+") {
                  item.lastChild.textContent = "-";
                  item.classList.add("show-item");
                } else {
                  item.lastChild.textContent = "+";
                  item.classList.remove("show-item");
                }
              } else {
                item.lastChild.textContent = "+";
                item.classList.remove("show-item");
              }
            });
          }
        }}
        className={`${
          i !== 0 && i !== 5 && i !== 6 && "category-item"
        } flex items-center gap-2 mb-3 cursor-pointer`}
      >
        <p className="font-extrabold text-[12px] flex-1 text-main-gray uppercase">
          {e.title}
        </p>
        {i !== 0 && i !== 5 && i !== 6 && (
          <span className="text-lg text-main-gray">+</span>
        )}
      </div>
    );
  });
  return (
    <>
      <AnimatePresence>
        {isMainMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed w-full h-full bg-black/50 top-0 left-0 z-40"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="bg-white p-5 h-full w-[300px]"
            >
              <div className="flex justify-between mb-5">
                <h1 className="text-main-pink font-bold">Menu</h1>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="cursor-pointer duration-300 hover:text-main-pink"
                  onClick={() => setIsMainMenu(false)}
                />
              </div>
              {mainMenuData[0]}
              {mainMenuData[1]}
              <div className="duration-300 h-0 overflow-hidden opacity-0 space-y-2">
                <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                  <p className="text-sm">shirts</p>
                </div>
                <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                  <p className="text-sm">shorts & jeans</p>
                </div>
                <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                  <p className="text-sm">safety shoes</p>
                </div>
                <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                  <p className="text-sm">wallet</p>
                </div>
              </div>
              {mainMenuData[2]}
              <div className="duration-300 h-0 overflow-hidden opacity-0 space-y-2">
                <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                  <p className="text-sm">dress & frock</p>
                </div>
                <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                  <p className="text-sm">earrings</p>
                </div>
                <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                  <p className="text-sm">necklace</p>
                </div>
                <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                  <p className="text-sm">makeup kit</p>
                </div>
              </div>
              {mainMenuData[3]}
              <div className="duration-300 h-0 overflow-hidden opacity-0 space-y-2">
                <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                  <p className="text-sm">earrings</p>
                </div>
                <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                  <p className="text-sm">couple rings</p>
                </div>
                <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                  <p className="text-sm">necklace</p>
                </div>
                <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                  <p className="text-sm">bracelets</p>
                </div>
              </div>
              {mainMenuData[4]}
              <div className="duration-300 h-0 overflow-hidden opacity-0 space-y-2">
                <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                  <p className="text-sm">clothes perfume</p>
                </div>
                <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                  <p className="text-sm">deodorant</p>
                </div>
                <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                  <p className="text-sm">flower fragrance</p>
                </div>
                <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                  <p className="text-sm">air freshener</p>
                </div>
              </div>
              {mainMenuData[5]}
              {mainMenuData[6]}
              <select className="mr-2.5 text-sm text-main-gray font-bold cursor-pointer block w-full mb-3 mt-5">
                <option>USD $</option>
                <option>EUR €</option>
              </select>
              <select className="text-sm text-main-gray font-bold cursor-pointer block w-full mb-5">
                <option>ENGLISH</option>
                <option>ESPANOL</option>
                <option>FRANCIS</option>
              </select>
              <div className="flex gap-2 justify-center max-sm:hidden">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="cursor-pointer bg-gray-300 p-1 rounded-sm duration-300 hover:text-white hover:bg-main-pink"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="cursor-pointer bg-gray-300 p-1 rounded-sm duration-300 hover:text-white hover:bg-main-pink"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="cursor-pointer bg-gray-300 p-1 rounded-sm duration-300 hover:text-white hover:bg-main-pink"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="cursor-pointer bg-gray-300 p-1 rounded-sm duration-300 hover:text-white hover:bg-main-pink"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
const CategoryMenu = () => {
  const { sideOneData, sideTwoData, isCategoryMenu, setIsCategoryMenu } =
    useContext(mainMenuContextApi);
  return (
    <>
      <AnimatePresence>
        {isCategoryMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed w-full h-full bg-black/50 top-0 left-0 z-40"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="bg-white p-5 h-full w-[300px] overflow-y-auto"
            >
              <div className="flex justify-between mb-5">
                <h1 className="text-main-pink font-bold">Category</h1>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="cursor-pointer duration-300 hover:text-main-pink"
                  onClick={() => setIsCategoryMenu(false)}
                />
              </div>
              <div className="mb-5">
                {sideOneData[0]}
                <div className="duration-300 h-0 overflow-hidden opacity-0">
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">shirts</p>
                    <p className="text-sm">300</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">shorts & jeans</p>
                    <p className="text-sm">60</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">jacket</p>
                    <p className="text-sm">50</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">dress & frock</p>
                    <p className="text-sm">87</p>
                  </div>
                </div>
                {sideOneData[1]}
                <div className="duration-300 h-0 overflow-hidden opacity-0">
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">sports</p>
                    <p className="text-sm">45</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">formal</p>
                    <p className="text-sm">75</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">casual</p>
                    <p className="text-sm">35</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">safety shoes</p>
                    <p className="text-sm">26</p>
                  </div>
                </div>
                {sideOneData[2]}
                <div className="duration-300 h-0 overflow-hidden opacity-0">
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">earrings</p>
                    <p className="text-sm">46</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">couple rings</p>
                    <p className="text-sm">73</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">necklace</p>
                    <p className="text-sm">61</p>
                  </div>
                </div>
                {sideOneData[3]}
                <div className="duration-300 h-0 overflow-hidden opacity-0">
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">clothes perfume</p>
                    <p className="text-sm">12 pcs</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">deodorant</p>
                    <p className="text-sm">60 pcs</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">jacket</p>
                    <p className="text-sm">50 pcs</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">dress & frock</p>
                    <p className="text-sm">87 pcs</p>
                  </div>
                </div>
                {sideOneData[4]}
                <div className="duration-300 h-0 overflow-hidden opacity-0">
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">shampoo</p>
                    <p className="text-sm">68</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">sunscreen</p>
                    <p className="text-sm">46</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">body wash</p>
                    <p className="text-sm">79</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">makeup kit</p>
                    <p className="text-sm">23</p>
                  </div>
                </div>
                {sideOneData[5]}
                <div className="duration-300 h-0 overflow-hidden opacity-0">
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">sunglasses</p>
                    <p className="text-sm">50</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">lenses</p>
                    <p className="text-sm">48</p>
                  </div>
                </div>
                {sideOneData[6]}
                <div className="duration-300 h-0 overflow-hidden opacity-0">
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">shopping bag</p>
                    <p className="text-sm">62</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">gym backpack</p>
                    <p className="text-sm">35</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">purse</p>
                    <p className="text-sm">80</p>
                  </div>
                  <div className="flex justify-between text-main-gray duration-300 hover:text-black cursor-pointer capitalize">
                    <p className="text-sm">wallet</p>
                    <p className="text-sm">75</p>
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="font-bold text-sm uppercase mb-5">
                  best sellers
                </h1>
                {sideTwoData}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
const Modal = () => {
  const { isModal, setIsModal } = useContext(mainModalContextApi);
  useEffect(() => {
    setTimeout(() => {
      setIsModal(true);
    }, 3000);
  }, [setIsModal]);
  return (
    <>
      <AnimatePresence>
        {isModal && (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 grid place-items-center p-3"
          >
            <motion.div
              initial={{ scale: 0 }}
              exit={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="sm:grid sm:grid-cols-2 bg-white rounded-lg overflow-hidden relative"
            >
              <div className="max-sm:hidden">
                <img src={modalImg} alt="" className="w-[350px]" />
              </div>
              <div className="p-2 content-center">
                <h1 className="font-bold text-2xl text-center">
                  Subscribe Newsletter.
                </h1>
                <p className="my-3 text-center text-main-gray text-sm max-w-[250px] mx-auto">
                  Subscribe the{" "}
                  <span className="text-black font-bold">Anon</span> to get
                  latest products and discount update.
                </p>
                <form action="" className="flex justify-center gap-2 flex-wrap">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="p-2 rounded-lg outline-0 border-[1px] border-black/50 block placeholder:text-sm placeholder:duration-300 focus:placeholder:opacity-0 w-full"
                  />
                  <input
                    type="submit"
                    value="subscribe"
                    className="bg-black text-white font-bold text-[12px] p-2 rounded-lg uppercase duration-300 hover:bg-main-pink cursor-pointer"
                  />
                </form>
              </div>
              <FontAwesomeIcon
                icon={faXmark}
                className="absolute top-0 right-0 text-md cursor-pointer duration-300 text-white bg-black hover:bg-main-pink p-2 rounded-bl-xl"
                onClick={() => setIsModal(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
const ScrollToTop = () => {
  const [isScrollToTop, setIsScrollToTop] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setIsScrollToTop(true);
    } else {
      setIsScrollToTop(false);
    }
  });
  return (
    <>
      <AnimatePresence>
        {isScrollToTop && (
          <motion.div
            initial={{ x: "100%" }}
            exit={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-2 max-md:bottom-16 right-2 text-xl cursor-pointer hover:bg-main-pink bg-black w-[40px] h-[40px] rounded-full text-white text-center content-center"
          >
            <FontAwesomeIcon icon={faAngleUp} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
