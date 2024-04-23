import Filters from '@/components/Product/Filters'
import ProductCard from '@/components/Product/ProductCard'
import Products from '@/components/Product/Products'
// import "@/components/Home/Social/Social.css";
import Inspiration from '@/components/Home/Social/Inspiration';

const SpcPage = () => {
    const productsArr = [
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        { frontImage: "assets/images/products/Group 28396.png", onHoverImage: "assets/images/products/Group 28395.png", title: "Pure oak honey", description: "VINYL | CRIO | AVHBU40360" },
        // Adjust paths as necessary for additional products
    ];
    return (
        <>
            <div className="pe-5 ps-3">
                <div className="row">
                    {/* Filters */}
                    <div className="col-md-2 ">
                        <Filters
                            hide='hidethis'
                        />
                    </div>
                    <div className="col-md-10">
                        <div className="row align-items-center">

                            {/* Search Bar and Options */}
                        </div>
                        <div className="row row-cols-md-3 row-cols-sm-3 row-cols-xs-1 row-cols-lg-3 row-cols-xl-5">
                            {productsArr.map((product, index) => (
                                <div key={index} className="col-6 mb-4">
                                    <ProductCard
                                        frontImage={product.frontImage}
                                        onHoverImage={product.onHoverImage}
                                        title={product.title}
                                        description={product.description}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <Inspiration />
            </div>
        </>
    )
}

export default SpcPage