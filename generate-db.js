// import fs from 'fs';

// const categories = [
//   { id: 1, name: "Men's Clothing", slug: "mens-clothing", imgId: "1490578474895-699cd4e2cf59" },
//   { id: 2, name: "Women's Clothing", slug: "womens-clothing", imgId: "1483985988355-763728e1935b" },
//   { id: 3, name: "Jewelry", slug: "jewelry", imgId: "1515562141207-7a88fb7ce338" },
//   { id: 4, name: "Electronics", slug: "electronics", imgId: "1498049794561-7780e7231661" },
//   { id: 5, name: "Footwear", slug: "footwear", imgId: "1542291026-7eec264c27ff" },
//   { id: 6, name: "Bags & Accessories", slug: "bags-accessories", imgId: "1584917865442-de89df76afd3" },
//   { id: 7, name: "Beauty & Personal Care", slug: "beauty-personal-care", imgId: "1522337360788-8b13dee7a37e" },
//   { id: 8, name: "Home & Living", slug: "home-living", imgId: "1616046229478-9901c5536a45" }
// ];

// const subCategories = {
//   "Men's Clothing": ["Shirts", "T-Shirts", "Jeans", "Jackets", "Trousers"],
//   "Women's Clothing": ["Dresses", "Tops", "Jeans", "Skirts", "Trousers"],
//   "Jewelry": ["Necklaces", "Earrings", "Rings", "Bracelets"],
//   "Electronics": ["Smartphones", "Laptops", "Tablets", "Headphones", "Accessories"],
//   "Footwear": ["Sneakers", "Casual Shoes", "Running Shoes", "Formal Shoes", "Sandals"],
//   "Bags & Accessories": ["Handbags", "Backpacks", "Wallets", "Sunglasses", "Belts"],
//   "Beauty & Personal Care": ["Skincare", "Makeup", "Fragrances", "Hair Care", "Body Care"],
//   "Home & Living": ["Furniture", "Home Decor", "Lighting", "Storage", "Kitchen"]
// };

// const brands = ["Aster", "Nova", "Vivid", "North & Co.", "LuxeLine", "UrbanStyle", "HomeCraft"];

// const products = [];
// let globalProductId = 1;

// categories.forEach((cat) => {
//   const subs = subCategories[cat.name];

//   for (let i = 1; i <= 30; i++) {
//     const sub = subs[i % subs.length];
//     const brand = brands[i % brands.length];
//     const price = +(Math.random() * 200 + 15).toFixed(2);
//     const discount = [10, 15, 20, 25, 30][i % 5];
//     const oldPrice = +(price * (1 + discount / 100)).toFixed(2);

//     const imgUrl = `https://picsum.photos/seed/${cat.slug}-${i}/800/800`;

//     products.push({
//       id: globalProductId,
//       title: `${brand} ${sub.slice(0, -1) || sub} Edition ${i}`,
//       category: cat.name,
//       subCategory: sub,
//       brand: brand,
//       price: price,
//       oldPrice: oldPrice,
//       discount: discount,
//       rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
//       reviews: Math.floor(Math.random() * 500) + 20,
//       stock: Math.floor(Math.random() * 80) + 10,
//       description: `High quality ${sub.toLowerCase()} designed for daily style and durability.`,
//       image: imgUrl,
//       images: [imgUrl],
//       featured: i <= 5,
//       bestRated: Math.random() > 0.6,
//       deal: discount >= 20,
//       tags: [sub.toLowerCase(), cat.name.toLowerCase()]
//     });

//     globalProductId++;
//   }
// });

// const dbData = {
//   categories: categories.map(c => ({
//     id: c.id,
//     name: c.name,
//     slug: c.slug,
//     image: `https://images.unsplash.com/photo-${c.imgId}?auto=format&fit=crop&w=800&q=80`
//   })),
//   products,
//   users: [],
//   cart: [],
//   wishlist: [],
//   orders: [],
//   addresses: []
// };

// fs.writeFileSync('db.json', JSON.stringify(dbData, null, 2));
// console.log(`Successfully generated db.json with ${products.length} products!`);