
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image src="/traditional-tackle-logo.png" alt="Traditional Tackle" width={100} height={100} />
          <h1 className="text-2xl font-bold">Traditional Tackle</h1>
        </div>
        <nav className="space-x-6">
          <a href="#">Shop</a>
          <a href="#">Accessories</a>
          <a href="#">Apparel</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="relative h-[70vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/stock/hero-fishing.jpg')" }}>
        <div className="bg-black bg-opacity-70 p-10 rounded-xl text-center">
          <Image src="/traditional-tackle-logo.png" alt="Traditional Tackle Logo" width={120} height={120} className="mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white">Built for Anglers. Powered by Passion.</h2>
          <p className="text-white mt-2 text-lg">Premium tackle, custom lures, and gear made for every kind of adventure.</p>
          <button className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded">Start Fishing</button>
        </div>
      </section>

      <section className="py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Rods', 'Reels', 'Apparel'].map(category => (
          <div key={category} className="overflow-hidden shadow-lg rounded">
            <Image src={`/stock/${category.toLowerCase()}.jpg`} alt={category} width={600} height={400} className="w-full h-64 object-cover" />
            <div className="text-center py-4">
              <h3 className="text-xl font-semibold">Fishing {category}</h3>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Explore</button>
            </div>
          </div>
        ))}
      </section>

      <section id="about" className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">About Traditional Tackle</h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          At Traditional Tackle, we believe fishing is more than just a hobby — it's a way of life. We're a family-owned business dedicated to providing top-tier tackle, rubber worms, handmade lures, and apparel to fishing lovers of all levels.
        </p>
        <p className="max-w-2xl mx-auto text-lg">
          Our mission is simple: provide reliable, high-quality products backed by expert service and an unwavering love for the sport.
        </p>
      </section>

      <section className="bg-white py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Secure Payments</h2>
        <p className="max-w-xl mx-auto text-lg mb-6">We support secure online transactions through Stripe and PayPal. Shop confidently with encrypted checkout.</p>
        <div className="flex justify-center space-x-4">
          <Image src="/stock/payment-stripe.png" alt="Stripe" width={100} height={60} />
          <Image src="/stock/payment-paypal.png" alt="PayPal" width={100} height={60} />
        </div>
      </section>

      <footer className="bg-black text-white py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold mb-2">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Stay Connected</h4>
            <input type="email" placeholder="Email address" className="mt-2 p-2 w-full rounded" />
            <button className="mt-2 w-full px-4 py-2 bg-yellow-400 text-black rounded">Subscribe</button>
          </div>
        </div>
        <div className="text-center mt-6">© 2025 Traditional Tackle. All rights reserved.</div>
      </footer>
    </div>
  );
}
