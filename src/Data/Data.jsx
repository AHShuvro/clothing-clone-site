const collections = [
    {
        image1: "https://source.unsplash.com/800x1026/?tshirt",
        image2: "https://source.unsplash.com/800x1026/?tshirt,2",
        brand: "Nike",
        title: "Casual T-Shirt",
        price: 19.99,
        productType: "T-Shirt",
        gender: "Men"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?jeans",
        image2: "https://source.unsplash.com/800x1026/?jeans,2",
        brand: "Levi's",
        title: "Denim Jeans",
        price: 49.99,
        productType: "Jeans",
        gender: "Men"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?leatherjacket",
        image2: "https://source.unsplash.com/800x1026/?leatherjacket,2",
        brand: "Zara",
        title: "Leather Jacket",
        price: 89.99,
        productType: "Jacket",
        gender: "Men"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?sneakers",
        image2: "https://source.unsplash.com/800x1026/?sneakers,2",
        brand: "Adidas",
        title: "Sneakers",
        price: 59.99,
        productType: "Shoes",
        gender: "Men"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?sweater",
        image2: "https://source.unsplash.com/800x1026/?sweater,2",
        brand: "Uniqlo",
        title: "Wool Sweater",
        price: 69.99,
        productType: "Sweater",
        gender: "Men"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?shirt",
        image2: "https://source.unsplash.com/800x1026/?shirt,2",
        brand: "Tommy Hilfiger",
        title: "Formal Shirt",
        price: 29.99,
        productType: "Shirt",
        gender: "Men"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?chinos",
        image2: "https://source.unsplash.com/800x1026/?chinos,2",
        brand: "Gap",
        title: "Chinos",
        price: 34.99,
        productType: "Pants",
        gender: "Men"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?jacket",
        image2: "https://source.unsplash.com/800x1026/?jacket,2",
        brand: "North Face",
        title: "Sports Jacket",
        price: 74.99,
        productType: "Jacket",
        gender: "Men"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?boots",
        image2: "https://source.unsplash.com/800x1026/?boots,2",
        brand: "Dr. Martens",
        title: "Ankle Boots",
        price: 99.99,
        productType: "Boots",
        gender: "Men"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?scarf",
        image2: "https://source.unsplash.com/800x1026/?scarf,2",
        brand: "Gucci",
        title: "Silk Scarf",
        price: 149.99,
        productType: "Scarf",
        gender: "Women"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?handbag",
        image2: "https://source.unsplash.com/800x1026/?handbag,2",
        brand: "Prada",
        title: "Leather Handbag",
        price: 199.99,
        productType: "Bag",
        gender: "Women"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?sunglasses",
        image2: "https://source.unsplash.com/800x1026/?sunglasses,2",
        brand: "Ray-Ban",
        title: "Aviator Sunglasses",
        price: 129.99,
        productType: "Accessories",
        gender: "Unisex"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?coat",
        image2: "https://source.unsplash.com/800x1026/?coat,2",
        brand: "Burberry",
        title: "Trench Coat",
        price: 299.99,
        productType: "Coat",
        gender: "Women"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?fleecejacket",
        image2: "https://source.unsplash.com/800x1026/?fleecejacket,2",
        brand: "Patagonia",
        title: "Fleece Jacket",
        price: 89.99,
        productType: "Jacket",
        gender: "Men"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?hikingboots",
        image2: "https://source.unsplash.com/800x1026/?hikingboots,2",
        brand: "Columbia",
        title: "Hiking Boots",
        price: 99.99,
        productType: "Boots",
        gender: "Men"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?suit",
        image2: "https://source.unsplash.com/800x1026/?suit,2",
        brand: "Calvin Klein",
        title: "Slim Fit Suit",
        price: 299.99,
        productType: "Suit",
        gender: "Men"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?lingerie",
        image2: "https://source.unsplash.com/800x1026/?lingerie,2",
        brand: "Victoria's Secret",
        title: "Lingerie Set",
        price: 59.99,
        productType: "Lingerie",
        gender: "Women"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?runningshorts",
        image2: "https://source.unsplash.com/800x1026/?runningshorts,2",
        brand: "Under Armour",
        title: "Running Shorts",
        price: 24.99,
        productType: "Shorts",
        gender: "Men"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?hoodie",
        image2: "https://source.unsplash.com/800x1026/?hoodie,2",
        brand: "Reebok",
        title: "Training Hoodie",
        price: 49.99,
        productType: "Hoodie",
        gender: "Men"
    },
    {
        image1: "https://source.unsplash.com/800x1026/?hoodie",
        image2: "https://source.unsplash.com/800x1026/?hoodie,2",
        brand: "Reebok",
        title: "Training Hoodie",
        price: 49.99,
        productType: "Hoodie",
        gender: "Men"
    }
];

export { collections };
