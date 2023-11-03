const product = [
  {
    brand: 'MAJIK',
    id: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png',
    price: 288,
    rating: '3.4',
    title: 'Wide Bowknot Hat',
  },
  {
    brand: 'MAJIK',
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png',
    price: 395,
    rating: '4.1',
    title: 'Plain Round Neck T-shirt',
  },
  {
    brand: 'Scott International',
    id: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png',
    price: 498,
    rating: '3.8',
    title: 'Cotton Hoodie',
  },
  {
    brand: 'LEVIS',
    id: 4,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jacket.png',
    price: 2500,
    rating: '4.3',
    title: "Men's Waistcoat",
  },
  {
    brand: 'LEVIS',
    id: 5,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jeans-pants.png',
    price: 1469,
    rating: '3.1',
    title: 'Slim Fit Jeans',
  },
  {
    brand: 'LEVIS',
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-modren-net.png',
    price: 974,
    rating: '3.8',
    title: 'Miss Chase Bodycon Dress',
  },
  {
    brand: 'Libas',
    id: 7,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-punjabi.png',
    price: 1869,
    rating: '4.4',
    title: 'Zari Design Kurta',
  },
  {
    brand: 'LEVIS',
    id: 8,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-purple-jacket.png',
    price: 2599,
    rating: '4.2',
    title: 'Slim Fit Blazer',
  },
  {
    brand: 'Mufti',
    id: 9,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-short-sleeves-shirt.png',
    price: 1017,
    rating: '4',
    title: 'Animal Printed Shirt',
  },
  {
    brand: 'Ahalyaa',
    id: 10,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-side-sareee.png',
    price: 419,
    rating: '3.8',
    title: 'Polyester Saree',
  },
  {
    brand: 'Monte Carlo',
    id: 11,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-sim-jacket.png',
    price: 2796,
    rating: '4.4',
    title: 'Warm Up Jacket',
  },
  {
    brand: 'Vero Moda',
    id: 12,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-simple-formal.png',
    price: 3039,
    rating: '3.2',
    title: 'Wrap Dress',
  },
  {
    brand: 'MansiCollections',
    id: 13,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-stylish-sweater.png',
    price: 996,
    rating: '3.2',
    title: 'Knit Cream Sweater',
  },
  {
    brand: 'Saadgi',
    id: 14,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-white-punjabi.png',
    price: 2172,
    rating: '3.2',
    title: 'Sheer Anarkali',
  },
  {
    brand: 'STREET 9',
    id: 15,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-blue-fork.png',
    price: 1799,
    rating: '3.2',
    title: 'Embellished Maxi Dress',
  },
  {
    brand: 'Manyavar',
    id: 16,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png',
    price: 62990,
    rating: '3.2',
    title: 'Embroidered Net Gown',
  },
  {
    brand: 'Fastrack',
    id: 25,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-casual-watch.png',
    price: 1850,
    rating: '4.2',
    title: "Analog Men's Watch",
  },
  {
    brand: 'Indian Art Villa',
    id: 26,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-copper-kettle.png',
    price: 1685,
    rating: '3.8',
    title: 'Tea Kettle Pot',
  },
  {
    brand: 'Kitchen Expert',
    id: 27,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-kettle.png',
    price: 399,
    rating: '4.3',
    title: 'Aluminium 4 Cup Tea Kettle',
  },
  {
    brand: 'Sketchfab',
    id: 28,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-medium-tripod.png',
    price: 390,
    rating: '4.2',
    title: 'Tripod Stand',
  },
  {
    brand: 'Nova',
    id: 29,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-nova-trimmer.png',
    price: 398,
    rating: '4.5',
    title: 'Beard Trimmer',
  },
  {
    brand: 'Mufti',
    id: 9,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-short-sleeves-shirt.png',
    price: 699,
    rating: '4',
    title: 'Animal Printed Shirt',
  },
  {
    brand: 'Everin',
    id: 37,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-extract.png',
    price: 788,
    rating: '4.1',
    title: 'Chilli Extract Sauce',
  },
];

export default product;
