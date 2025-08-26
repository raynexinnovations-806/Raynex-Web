import Notify from "@/components/shared/Notify";
import AuthContext from "@/context/AuthContext";
import Wrapper from "@/context/Wrapper";
import { persistor, store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthContext>
          <Wrapper>
            <Component {...pageProps} />
            <Notify />
          </Wrapper>
        </AuthContext>
      </PersistGate>
    </Provider>
  );
}
