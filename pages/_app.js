import Footer from "@/components/templates/footer/Footer";
import Header from "@/components/templates/header/Header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <style jsx>{``}</style>
        </>
    );
}
