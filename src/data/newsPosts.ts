export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  badge: string;
  location: string;
  image: string;
  /** Paragraphs — wrap text in [[...]] to render it as a styled inline reference. */
  body: string[];
};

export const newsPosts: NewsPost[] = [
  {
    slug: "sar-160-million-contract",
    title: "Nesma Infrastructure & Technology Signs a Contract Valued at Over SAR 160 Million",
    date: "MAR 12, 2026",
    badge: "NEWS",
    location: "Riyadh, Saudi Arabia",
    image: "/images/s-1.png",
    body: [
      "We are proud to announce that [[Nesma Infrastructure & Technology]] has signed a new contract valued at over SAR 160 million, reinforcing our position as a trusted delivery partner for critical infrastructure across the Kingdom.",
      "The scope covers design, procurement, and construction work that will expand regional power transmission capacity, supporting growing demand across commercial and industrial sectors.",
      "At NIT, we remain committed to delivering projects that strengthen the Kingdom's infrastructure backbone while upholding the highest standards of safety, quality, and execution.",
    ],
  },
  {
    slug: "sec-jubail-contract",
    title: "Nesma Infrastructure & Technology Signs New Contract with the SEC in Jubail, valued at over SAR 500 Million",
    date: "FEB 28, 2026",
    badge: "ANNOUNCEMENT",
    location: "Riyadh, Saudi Arabia",
    image: "/images/s-2.png",
    body: [
      "[[Nesma Infrastructure & Technology]] has signed a new contract with the Saudi Electricity Company (SEC) in Jubail, valued at over SAR 500 million, further expanding our footprint in the Eastern Province.",
      "The project will deliver new substation and transmission infrastructure designed to support the region's industrial growth and long-term energy security.",
      "This award reflects the continued confidence our partners place in NIT's ability to deliver complex energy infrastructure on time and to the highest technical standards.",
    ],
  },
  {
    slug: "saudi-electricity-company-contract",
    title: "Nesma Infrastructure & Technology Signs New Contract with the Saudi Electricity Company",
    date: "JAN 15, 2026",
    badge: "INSIGHTS",
    location: "Riyadh, Saudi Arabia",
    image: "/images/s3.png",
    body: [
      "[[Nesma Infrastructure & Technology]] has signed a new contract with the Saudi Electricity Company, extending our long-standing partnership in delivering national power infrastructure.",
      "The agreement covers engineering, procurement, and construction services across multiple substation sites, reinforcing grid reliability for communities and industry alike.",
      "We look forward to building on this partnership as the Kingdom continues to scale its energy infrastructure in line with Vision 2030.",
    ],
  },
  {
    slug: "national-grid-sa-contract",
    title: "New contract with the National Grid SA",
    date: "MAR 12, 2026",
    badge: "NEWS",
    location: "Riyadh, Saudi Arabia",
    image: "/images/b3.png",
    body: [
      "[[Nesma Infrastructure & Technology]] has been awarded a new contract with the National Grid SA, covering critical upgrades to transmission infrastructure across the network.",
      "The work will improve grid resilience and capacity, supporting the Kingdom's growing energy demand across residential, commercial, and industrial sectors.",
      "This award builds on NIT's track record of delivering large-scale energy infrastructure projects safely, efficiently, and to the highest quality standards.",
    ],
  },
  {
    slug: "china-saudi-economic-cooperation-forum-2026",
    title: "The China–Saudi Economic Cooperation Forum 2026",
    date: "FEB 28, 2026",
    badge: "ANNOUNCEMENT",
    location: "Riyadh, Saudi Arabia",
    image: "/images/blog2.png",
    body: [
      "[[Nesma Infrastructure & Technology]] participated in the China–Saudi Economic Cooperation Forum 2026, joining industry and government leaders to explore new avenues for bilateral investment and technology exchange.",
      "Discussions centered on infrastructure, energy, and digital transformation — sectors where NIT continues to play an active role in delivering the Kingdom's national priorities.",
      "We remain committed to building strategic partnerships that bring world-class technology and expertise to Saudi Arabia's infrastructure sector.",
    ],
  },
  {
    slug: "international-alignment-forum-vision-2030",
    title: "The International Alignment Forum on Saudi Vision 2030",
    date: "JAN 15, 2026",
    badge: "INSIGHTS",
    location: "Riyadh, Saudi Arabia",
    image: "/images/blog3.png",
    body: [
      "We are proud at [[Nesma Infrastructure & Technology]] to have participated in the International Alignment Forum on Saudi Vision 2030, where Eng. [[Rayan Alamoudi]], Executive Manager of Strategy & Business Development, delivered a keynote speech on transforming ambitious visions into tangible achievements through execution and strategic partnerships.",
      "Saudi Arabia's Vision 2030 is not merely a strategic direction — it is a national transformation program driven by technology, investment, and innovation. Through key sectors such as smart cities, energy sustainability, advanced manufacturing, and the digital economy, the Kingdom is actively building a competitive and sustainable future.",
      "At NIT, we remain committed to supporting this transformation through resilient infrastructure, advanced technological solutions, and long-term partnerships that create real impact on the ground.",
    ],
  },
];

export function getNewsPost(slug: string) {
  return newsPosts.find((post) => post.slug === slug);
}
