import { type AppType } from "next/app";

import { api } from "cchii/utils/api";

import "cchii/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
