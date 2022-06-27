import "bootstrap/dist/css/bootstrap.min.css";
import MainContext from "../context/MainContext";
import { Navbar, Footer } from "../components";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <MainContext>
      <Head>
        <meta name="description" content="Simple ecommerce website example." />
      </Head>
      <Layout>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </MainContext>
  );
}

export default MyApp;
