export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Round Neck Plain',
    image: '/1 round neck - front.png',
    description:
      'High-quality plain round neck T-shirts, perfect for daily wear or corporate gifting. Available in various colors and sizes.',
    shortDescription: 'Classic plain round neck t-shirts.',
    price: 180,
  },
  {
    id: 2,
    name: 'Round Neck Custom',
    image: '/3 R.Neck- front emobroidery.png',
    description:
      'Customized round neck T-shirts with your company logo or event designs. Choose from high-quality printing or embroidery options.',
    shortDescription: 'Customized round neck t-shirts for your brand.',
    price: 250,
  },
  {
    id: 3,
    name: 'Polo Plain',
    image: '/5 polo plain.png',
    description:
      'Premium classic polo T-shirts for a professional look. Ideal for office wear and corporate uniforms.',
    shortDescription: 'Elegant plain polo t-shirts.',
    price: 350,
  },
  {
    id: 4,
    name: 'Polo Custom',
    image: '/7 polo front embroidery.jpeg',
    description:
      'Professional polo T-shirts customized with high-end embroidery or premium printing. Perfect for reflecting your brand excellence.',
    shortDescription: 'Customized polo t-shirts for corporate identity.',
    price: 450,
  },
]

export default products
