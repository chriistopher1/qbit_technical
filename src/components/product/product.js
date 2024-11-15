function Product() {
    return (
      <div className=" flex items-center  bg-[#a75928] max-md:flex-wrap " id="product">
        <img src="/asset/product-image-3.jpg" className="h-auto w-1/2 max-md:w-full" />
        <div className="flex flex-col px-6 py-10 text-center">
          <div className="text-2xl font-bold ">OUR PRODUCT</div>
          <div>
          Our perfumes are crafted with premium ingredients, offering captivating scents that inspire confidence, elegance, and individuality. Perfect for every moment, leaving a lasting impression.
          </div>
        </div>
      </div>
    );
  }
  
  export default Product;