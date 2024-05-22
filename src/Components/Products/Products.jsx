import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const products = [
    {
      id: "1",
      name: "Bravo Sunglasses",
      image: "https://i.ibb.co/HqdNzzv/a7117ef381c3fe3731b33eb93009a85f-1.png",
      price: 100,
    },
    {
      id: "2",
      name: "Vincent Chase",
      image: "https://i.ibb.co/Kbtj2Wv/7942e670c9ceed022616375693c16d44.png",
      price: 120,
    },
    {
      id: "3",
      name: "John Jacobs",
      image: "https://i.ibb.co/v4QMp8Z/b5a26083e25e7f6b66a00744b0bcc8be.png",
      price: 100,
    },
    {
      id: "4",
      name: "Tommy Hilfiger",
      image: "https://i.ibb.co/JjX0Z7N/72110fc6951f7e011754b81397f0352a-1.png",
      price: 130,
    },
    {
      id: "5",
      name: "Ray Ban",
      image: "https://i.ibb.co/JjX0Z7N/72110fc6951f7e011754b81397f0352a-1.png",
      price: 149,
    },
    {
      id: "6",
      name: "Occhiali",
      image: "https://i.ibb.co/HqdNzzv/a7117ef381c3fe3731b33eb93009a85f-1.png",
      price: 110,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-32">
      <h1 className="text-2xl font-semibold text-[#383838]">Our Products</h1>
      <div className="flex gap-5 flex-col md:flex-row justify-between items-center text-[#383838] ">
        <p>
          Experience crystal clear vision and elevated style with our <br />{" "}
          premium collection of eyeglasses.
        </p>
        <div>
          <button className="px-8 py-3 ">Latest </button>
          <button className="px-8 py-3 border-2 rounded-lg border-[#383838]">
            Special{" "}
          </button>
          <button className="px-8 py-3 ">Best sell</button>
        </div>
      </div>
      {/* Card Section */}
      <div className="grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
