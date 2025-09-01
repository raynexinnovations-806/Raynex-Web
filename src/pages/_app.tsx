import Notify from "@/components/shared/Notify";
import AuthContext from "@/context/AuthContext";
import Wrapper from "@/context/Wrapper";
import { persistor, store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthContext>
          <Wrapper>
            <Head>
              {/* Google Ads Script - Replace GA_MEASUREMENT_ID with your actual ID */}
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'GA_MEASUREMENT_ID');
                  `,
                }}
              />
            </Head>
            <Component {...pageProps} />
            <Notify />
          </Wrapper>
        </AuthContext>
      </PersistGate>
    </Provider>
  );
}
