import "../../../css/style.css";
import Footer from "../Footer";
import ProductCart from "../ProductCart";
import ProductCartHeader from "../ProductCartHeader";

const ProductCartPage = () => {
    // const params = new URLSearchParams(window.location.pathname);
    return (
        <>
            <ProductCartHeader />

            <ProductCart />

            <Footer />
        </>
    );
};
export default ProductCartPage;
