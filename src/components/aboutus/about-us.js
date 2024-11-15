function AboutUs() {
  return (
    <div className="m-auto my-16 px-8 w-2/3 flex justify-center gap-7 max-md:flex-wrap max-md:w-full items-center" id="aboutus">
       <img src="/logo/logoReal.png" className="max-h-24"/>
      <div className="flex flex-col max-md:text-center">
        <h2 className="text-2xl text-yellow-400">ABOUT US</h2>
        <div className="text-xl">
        At Seraph, we create fragrances that tell your story. Every scent is crafted from the finest ingredients to inspire confidence, elegance, and individuality. Our perfumes are designed to enhance each moment, leaving a lasting impression wherever you go. Discover your essence with Seraph fragrance for every feeling.{" "}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
