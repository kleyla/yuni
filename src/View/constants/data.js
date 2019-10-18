const categories = [
  {
    id: "plants",
    name: "Plants",
    tags: ["products", "inspirations"],
    count: 147,
    image: require("../assets/icons/plants.png")
  },
  {
    id: "seeds",
    name: "Seeds",
    tags: ["products", "shop"],
    count: 16,
    image: require("../assets/icons/seeds.png")
  },
  {
    id: "flowers",
    name: "Flowers",
    tags: ["products", "inspirations"],
    count: 68,
    image: require("../assets/icons/flowers.png")
  },
  {
    id: "sprayers",
    name: "Sprayers",
    tags: ["products", "shop"],
    count: 17,
    image: require("../assets/icons/sprayers.png")
  },
  {
    id: "pots",
    name: "Pots",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/pots.png")
  },
  {
    id: "fertilizers",
    name: "fertilizers",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/fertilizers.png")
  }
];

const products = [
  {
    id: 1,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      // require("../assets/images/plants_1.png"),
      // require("../assets/images/plants_2.png"),
      // require("../assets/images/plants_3.png"),
      // require("../assets/images/plants_1.png"),
      // require("../assets/images/plants_2.png"),
      // require("../assets/images/plants_3.png")
    ]
  },
  {
    id: 2,
    name: "Chamarras abrigadoras",
    description: "Mejpres invkvrkn hnrjfecvjikm",
    tags: ["chamarra", "products", "varon"],
    images: [
      require("./../assets/images/products/chamarra001.jpg"),
      require("./../assets/images/products/chamarra002.jpeg")
    ]
  },
  {
    id: 3,
    name: "Poleras",
    description: "Mejpres invkvrkn hnrjfecvjikm",
    tags: ["polera", "varon", "products"],
    images: [
      require("./../assets/images/products/polera01.jpeg"),
      require("./../assets/images/products/polera02.jpg"),
      require("./../assets/images/products/poleraM.jpg")
    ]
  },
  {
    id: 4,
    name: "Chamarras ajustadas",
    description: "Mejpres invkvrkn hnrjfecvjikm",
    tags: ["chamarra", "mujer", "products"],
    images: [
      require("./../assets/images/products/chamarra01.jpg"),
      require("./../assets/images/products/chamarra02.jpg"),
      require("./../assets/images/products/chamarra03.jpg")
    ]
  },
  {
    id: 5,
    name: "Saco girly",
    description: "Mejpres invkvrkn hnrjfecvjikm",
    tags: ["saco", "chamarra", "products"],
    images: [
      require("./../assets/images/products/saco01.jpg"),
      require("./../assets/images/products/saco02.jpg")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png")
];

const profile = {
  username: "react-ui-kit",
  location: "Europe",
  email: "contact@react-ui-kit.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

const comentarios = [
  {
    id: 1,
    name: 'Karen',
    image: require("../assets/images/people/joy.jpg"),
    dato: 'Este producto es muy bueno',
    fecha: '08-10-2019'
  },
  {
    id: 2,
    name: 'Jose',
    image: require("../assets/images/people/jose.jpg"),
    dato: 'Este producto es muy bueno niden kmvjm vvjmkedv sdmkr jmkvrjvrik  vnkrip nck inkvc nik',
    fecha: '08-10-2019'
  },
  {
    id: 3,
    name: 'Karen',
    image: require("../assets/images/people/joy.jpg"),
    dato: 'Este producto es muy bueno',
    fecha: '08-10-2019'
  },
  {
    id: 4,
    name: 'Karen',
    image: require("../assets/images/people/joy.jpg"),
    dato: 'Este producto es muy bueno',
    fecha: '08-10-2019'
  },
  {
    id: 5,
    name: 'Karen',
    image: require("../assets/images/people/joy.jpg"),
    dato: 'Este producto es muy bueno',
    fecha: '08-10-2019'
  },
  {
    id: 6,
    name: 'Karen',
    image: require("../assets/images/people/joy.jpg"),
    dato: 'Este producto es muy bueno',
    fecha: '08-10-2019'
  },
  {
    id: 7,
    name: 'Karen',
    image: require("../assets/images/people/joy.jpg"),
    dato: 'Este producto es muy bueno',
    fecha: '08-10-2019'
  },
  {
    id: 8,
    name: 'Karen',
    image: require("../assets/images/people/joy.jpg"),
    dato: 'Este producto es muy bueno',
    fecha: '08-10-2019'
  },
  {
    id: 9,
    name: 'Karen',
    image: require("../assets/images/people/joy.jpg"),
    dato: 'Este producto es muy bueno',
    fecha: '08-10-2019'
  },
  {
    id: 10,
    name: 'Karen',
    image: require("../assets/images/people/joy.jpg"),
    dato: 'Este producto es muy bueno',
    fecha: '08-10-2019'
  },
  {
    id: 11,
    name: 'Ley',
    image: require("../assets/images/people/joy.jpg"),
    dato: 'Este producto es muy bueno bueno bueno bueno',
    fecha: '08-10-2019'
  },
]

export { categories, explore, products, profile, comentarios };
