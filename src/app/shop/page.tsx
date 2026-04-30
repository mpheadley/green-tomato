import Image from "next/image";

export const metadata = {
  title: "GT Merchandise | The Green Tomato",
  description:
    "Official merchandise from The Green Tomato, Calhoun County's most trusted news source since recently. T-shirts, totes, and more.",
};

const FOURTHWALL_BASE = "https://thegreentomato.fourthwall.com";

const products = [
  {
    id: "raptor-run-tee",
    name: "Raptor Run Survivor Tee",
    price: "$24.99",
    description:
      "Limited edition commemorative tee from the 2026 Anniston Raptor Run 5K. Vintage distressed design. Participation medals are pending.",
    image: "/images/merch/raptor-run-tee-mockup.webp",
    href: `${FOURTHWALL_BASE}/products/raptor-run-survivor-tee`,
    badge: "NEW",
    sizes: "S · M · L · XL · 2XL",
  },
  {
    id: "netscape-tee",
    name: "Official Font of Anniston Tee",
    price: "$24.99",
    description:
      "Commemorating the ongoing debate. Heather gray. Because some things deserve documentation.",
    image: "/images/merch/netscape-tee-mockup.webp",
    href: `${FOURTHWALL_BASE}/products/official-font-tee`,
    badge: null,
    sizes: "S · M · L · XL · 2XL",
  },
  {
    id: "gt-tee",
    name: "Green Tomato Staff Tee",
    price: "$22.99",
    description:
      "Blackletter masthead. Pixel tomato. 'Calhoun County’s Most Trusted News Source Since Recently.' Wear it with the confidence of a man who has filed a story.",
    image: "/images/merch/gt-tee-flat.webp",
    href: `${FOURTHWALL_BASE}/products/green-tomato-staff-tee`,
    badge: "BEST SELLER",
    sizes: "S · M · L · XL · 2XL",
  },
  {
    id: "model-city-tee",
    name: "Model City Civic Seal Tee",
    price: "$22.99",
    description:
      "Anniston, Alabama. Founding Year. Status Under Review. Official seal graphic. Wear it proudly or ironically — we cannot tell the difference from here.",
    image: "/images/merch/model-city-tee-flat.webp",
    href: `${FOURTHWALL_BASE}/products/model-city-civic-seal-tee`,
    badge: null,
    sizes: "S · M · L · XL · 2XL",
  },
];

export default function ShopPage() {
  return (
    <>
      <div className="gt-section-header">★ GT Merchandise ★</div>

      <div className="shop-notice">
        <strong>Official Green Tomato Merchandise — Coming Soon.</strong> The
        store is currently being stocked. Check back shortly. The Green Tomato
        is not responsible for the anticipation this page has generated.
      </div>

      <div className="shop-grid">
        {products.map((product) => (
          <div key={product.id} className="shop-card">
            {product.badge && (
              <div className="shop-badge">{product.badge}</div>
            )}
            <div className="shop-card-image">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="shop-product-img"
                unoptimized
              />
            </div>
            <div className="shop-card-body">
              <h2 className="shop-product-name">{product.name}</h2>
              <p className="shop-product-price">{product.price}</p>
              <p className="shop-product-desc">{product.description}</p>
              <p className="shop-product-sizes">{product.sizes}</p>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shop-buy-btn"
              style={{ opacity: 0.5, cursor: "default", pointerEvents: "none" }}
              >
                ▶ Coming Soon
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="shop-footer-note">
        <p>
          <strong>Custom orders?</strong> Contact the Bureau Chief at{" "}
          <a href="mailto:buford@thegreentomato.news">
            buford@thegreentomato.news
          </a>
          . Response time: when we get to it.
        </p>
        <p>
          All designs are original works of The Green Tomato. Any resemblance to
          actual civic institutions is purely satirical.
        </p>
      </div>
    </>
  );
}
