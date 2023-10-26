import { Outlet, useNavigation } from "react-router-dom";
import {
  Header,
  Navbar,
  Loading,
  Footer,
  CartButton,
  CartSidebar,
} from "../components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const HomeLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation); shows whether the state is "idle" or "loading"\
  // state will go from idle -> loading -> idle when pages load
  const isPageLoading = navigation.state === "loading";

  const [isHidden, setIsHidden] = useState(false);
  const { isOpen } = useSelector((state) => state.sidebarState);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const scrollThreshold = 300;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        //currentScrollY > lastScrollY  is checking whether is scrolling down.
        // If yes, hide the navbar
        //If currentScrollY is greater than lastScrollY, user is scrolling down.
        //If currentScrollY is less than lastScrollY, user is scrolling up.
        //If the current scroll position is greater (i.e., lower on the page) than the last scroll position, it means the user is scrolling downward.
        setIsHidden(true);
      } else {
        // Scrolling up, show the navbar
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };
    //After making this comparison, lastScrollY is updated to match currentScrollY at the end of the handleScroll function, so it now stores the previous scroll position for the next scroll event.

    window.addEventListener("scroll", handleScroll);
    // to invoke handleScroll function

    return () => {
      // Clean up the event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        className={`fixed transition-transform duration-500 ease-in-out ${
          isHidden ? " -translate-y-full" : "translate-y-0"
        }  min-w-full ${isOpen ? "z-50" : "z-[1000]"} opacity-95 shadow-md`}
      >
        <Header />
        <Navbar />
      </section>

      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="pt-28">
          <Outlet />
          <CartButton />
          <CartSidebar />
        </section>
      )}

      <Footer />
    </>
  );
};
export default HomeLayout;
