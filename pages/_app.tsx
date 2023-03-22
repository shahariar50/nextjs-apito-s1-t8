import type { AppProps } from "next/app";
import "styles/scss/theme.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
