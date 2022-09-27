import configureStore, { wrapper } from "../redux/store/store";
import useLayout from "../utils/useLayout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
function MyApp({ Component, pageProps }) {
  const Layout = useLayout();
  const { store, persistor } = configureStore();

  return (
    // <Layout>
    //   <Component {...pageProps} />
    // </Layout>

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

// export default MyApp;
export default wrapper.withRedux(MyApp);
