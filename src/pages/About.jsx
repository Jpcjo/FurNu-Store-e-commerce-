import hero1 from "../assets/hero5.jpg";
import hero2 from "../assets/hero6.jpg";
import hero3 from "../assets/hero7.jpg";
import hero4 from "../assets/hero8.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []); // Run this effect once when the component mounts

  return (
    <>
      <section className=" flex flex-col align-element py-16 lg:py-28 lg:flex-row items-center justify-center lg:gap-20">
        <div>
          <h1 className="max-w-xs text-3xl pb-6 font-bold leading-none tracking-tight lg:text-5xl lg:pb-0 ">
            A little bit something about us ?
          </h1>
          {/* <div className="stats  bg-gray-200 shadow">
            <div className="stat">
              <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
                REALLY.
              </div>
            </div>
          </div> */}
        </div>
        <div>
          <p className="text-lg leading-8 max-w-2xl mx-auto">
            Launched in 2018, FurNU:: is now the leading voice in design
            retailing in Australia. Our philosophy centres on offering
            impeccable design, client experience and service. Featuring
            collections curated to meet the specific needs of design lovers and
            the broader requirements of the architecture and interiors industry,
            with endless design scope for all areas.
          </p>
        </div>
      </section>

      <div className="carousel h-[34rem] w-screen shadow-md">
        <div id="slide1" className="carousel-item relative  ">
          <Link to="/products">
            <img
              src={hero1}
              className="w-screen h-full object-cover object-center"
            />
          </Link>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative  ">
          <Link to="/products">
            <img
              src={hero2}
              className="w-screen h-full object-cover object-center"
            />
          </Link>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative  ">
          <Link to="/products">
            <img
              src={hero3}
              className="w-screen h-full object-cover object-bottom"
            />
          </Link>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative  ">
          <Link to="/products">
            <img
              src={hero4}
              className="w-screen h-full object-cover object-center"
            />
          </Link>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <section className="align-element mx-4 my-12 sm:m-20">
        <p className="text-3xl font-bold pb-8">FAQS</p>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What makes us different?
          </div>
          <div className="collapse-content">
            <p>
              Extensive design knowledge and the highest level of service is
              core to the Space experience, whether you are in Brisbane,
              Melbourne, Sydney, Singapore or Kuala Lumpur. Our teams of skilled
              consultants are passionate about design and know each brand
              intimately, providing clients with dedicated design advice across
              residential and corporate projects.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What are your opening hours?
          </div>
          <div className="collapse-content">
            <p>We open from 10am - 6pm, Tuesday to Sunday.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do I track my delivery?
          </div>
          <div className="collapse-content">
            <p>
              Our delivery windows are all-day windows however you should
              receive a text message on the day of the delivery from our
              transport provider with a shorter 4 hour time window. Our delivery
              drivers will call you 30 - 60 minutes prior to arrival so ensure
              you have your mobile on you and switched on throughout the day.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is your Returns policy?
          </div>
          <div className="collapse-content">
            <p>
              It's important to us that you're happy with purchase. If you're
              not totally satisfied, or simply just change your mind, you can
              return your products within 14 days. We will give you a full
              refund of the price of the goods that are returned with proof of
              purchase and, if possible, the packaging. We will refund you by
              the same method as your original payment for products. You can
              return any product, even if you assembled it, as long as it's in
              unused and resale-able condition. If the returns criteria are not
              fully met, we may refuse the return or offer an exchange or gift
              card.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Is my product under warranty?
          </div>
          <div className="collapse-content">
            <p>
              Extended guarantees are applicable for product ranges such as
              kitchens, appliances, bathrooms and more. Please see our
              Guarantees page for all our extended guarantees. For all items not
              covered under an extended guarantee, our customer support team can
              assess your item and the issue you are experiencing. Simply visit
              us in store or contact us with your proof of purchase and the
              issue you are experiencing.
            </p>
          </div>
        </div>
      </section>

      {/* <ContactForm /> */}
    </>
  );
};
export default About;
