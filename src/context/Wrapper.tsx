import { theme } from "@/theme";
import { Box, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Hanken_Grotesk } from "next/font/google";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "./AuthContext";
import CustomButton from "@/components/shared/CustomButton";
import ContactBar from "@/components/contactbar";
import Navbar from "@/components/navbar";

const hankenGrotesk = Hanken_Grotesk({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  preload: true,
});

const Wrapper = ({ children }: any) => {
  // const scrollRef = useRef<HTMLDivElement>(null);
  const [isNavbarExtended, setIsNavbarExtended] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollRef } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!scrollRef) return;
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollTop;
        if (scrollPosition > 49) {
          setIsScrolled(true);
        } else if (scrollPosition == 0) {
          setIsScrolled(false);
        }
      }
    };

    const attachScrollListener = () => {
      const scrollElement = scrollRef.current;
      if (scrollElement) {
        scrollElement.addEventListener("scroll", handleScroll);
      }
    };

    // Attach the listener immediately if the ref is available
    attachScrollListener();

    // Also set up a small delay to try attaching again, in case the ref wasn't ready
    const timeoutId = setTimeout(attachScrollListener, 100);

    return () => {
      clearTimeout(timeoutId);
      const scrollElement = scrollRef.current;
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Scroll to top of the custom scroll container on route change
  useEffect(() => {
    const handleRouteChange = () => {
      if (scrollRef && scrollRef.current) {
        try {
          scrollRef.current.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
        } catch (e) {
          // fallback
          scrollRef.current.scrollTop = 0;
        }
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, scrollRef]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <div
              className={`${hankenGrotesk?.className} flex flex-col items-center overflow-y-hidden relative`}
              style={{
                height: "100dvh",
                overflowY: "auto",
              }}
              ref={scrollRef}
            >
              <div className="w-full ">
                <ContactBar />
              </div>
              <div
                className={`w-full z-40 navbar flex items-center flex-col`}
                style={{
                  position: "sticky",
                  top: "0",
                  backgroundColor:
                    isScrolled || isNavbarExtended ? "white" : "",
                }}
              >
                {/* <div className="w-full flex justify-center"> */}
                <Navbar
                  isNavbarExtended={isNavbarExtended}
                  setIsNavbarExtended={setIsNavbarExtended}
                  isScrolled={isScrolled}
                />
              </div>
              {children}
            </div>
          </ThemeProvider>
        </StyledEngineProvider>
      </PersistGate>
    </Provider>
  );
};

export default Wrapper;
