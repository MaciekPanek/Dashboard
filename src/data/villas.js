import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/villa-images/`;

export const villas = [
  {
    name: "Agatha",
    capacity: 5,
    price: 750,
    image: imageUrl + "villa-1.jpeg",
    description:
      "Villa Agatha, a charming retreat named after its timeless beauty, welcomes up to 5 guests with open arms. Tucked away in a serene corner, this cozy haven exudes a rustic charm that perfectly complements its surroundings. Step inside, and you'll find a spacious living area adorned with warm, earthy tones and traditional decor. The bedrooms are designed for ultimate comfort, promising restful nights. Outside, a private garden and a quaint terrace provide a space for relaxation and enjoying the peaceful ambiance. If you're seeking a place to escape from the hustle and bustle, Villa Agatha is the perfect choice for a tranquil and rejuvenating vacation.",
  },
  {
    name: "Isabelle",
    capacity: 7,
    price: 1200,
    image: imageUrl + "villa-2.jpeg",
    description:
      "Elegance and opulence define Villa Isabelle, a luxurious retreat capable of accommodating up to 7 guests. This splendid villa stands as a sanctuary of grandeur and style. From the moment you enter, you'll be captivated by the tasteful and modern design, with spacious rooms and upscale amenities. The living area is a masterpiece of comfort and sophistication, ideal for both relaxation and entertaining. The bedrooms offer a sumptuous escape with plush furnishings and large windows to let in the natural beauty of the surroundings. Outside, a private pool and a meticulously landscaped garden provide a picturesque setting for leisure and alfresco dining. Villa Isabelle promises a vacation of pure luxury and indulgence.",
  },
  {
    name: "Eleanor",
    capacity: 8,
    price: 850,
    image: imageUrl + "villa-3.jpeg",
    description:
      "Villa Eleanor, a welcoming retreat for up to 8 guests, is where comfort and style harmoniously coexist. The villa's contemporary design and well-thought-out layout ensure a memorable escape. The open-plan living area is designed for relaxation and conviviality, with plush seating and abundant natural light. The bedrooms are spacious and thoughtfully decorated, offering a serene place to unwind after a day of exploration. Step outside onto the sun-drenched terrace and admire the surrounding beauty, or take a dip in the private pool to cool off in the warm sun. Villa Eleanor is the perfect choice for those seeking a vacation that blends modern comfort with the tranquility of the Mediterranean.",
  },
  {
    name: "Clara",
    capacity: 6,
    price: 950,
    image: imageUrl + "villa-4.jpeg",
    description:
      "Villa Clara, a delightful haven for up to 6 guests, boasts an inviting atmosphere that strikes the perfect balance between comfort and elegance. The villa's picturesque location and well-appointed interiors create an ambiance that is both cozy and refined. The open-concept living and dining area is bathed in natural light, making it a welcoming space for relaxation and socializing. The bedrooms are beautifully furnished and provide a peaceful sanctuary for a good night's sleep. Outdoors, the lush garden and shaded terrace invite you to bask in the gentle Mediterranean breeze. Villa Clara is a superb choice for a tranquil getaway where every detail is designed to enhance your stay.",
  },
  {
    name: "Sophia",
    capacity: 4,
    price: 1100,
    image: imageUrl + "villa-5.jpeg",
    description:
      "Villa Sophia, a chic and refined retreat for up to 4 guests, is the epitome of sophistication and style. From the moment you step inside, you'll be enveloped by an atmosphere of contemporary elegance. The living space features designer furnishings and a minimalist aesthetic, creating a serene ambiance. The bedrooms are spacious and exquisitely appointed, ensuring a restful stay. Step outside to the beautifully landscaped garden and take in the scenic beauty of the surroundings. Villa Sophia is a delightful choice for those seeking a peaceful and stylish vacation in the heart of the Mediterranean.",
  },
  {
    name: "Olivia",
    capacity: 9,
    price: 750,
    image: imageUrl + "villa-1.jpeg",
    description:
      "Villa Olivia, a spacious retreat for up to 9 guests, offers an idyllic escape for those who appreciate room to roam. The villa's vast living areas, both indoors and outdoors, create a sense of openness and freedom. The interior design is modern and comfortable, with a large, well-equipped kitchen and a cozy lounge area. The bedrooms are roomy and well-appointed, ensuring a good night's sleep for everyone. Outside, a private garden with a swimming pool and sun loungers beckons for relaxation and fun in the sun. Villa Olivia promises an unforgettable vacation where spacious luxury meets the beauty of the Mediterranean landscape.",
  },
  {
    name: "Emily",
    capacity: 10,
    price: 1100,
    image: imageUrl + "villa-2.jpeg",
    description:
      "Villa Emily, a grandiose estate for up to 10 guests, is a testament to opulence and space. This retreat combines elegance with modern comfort to ensure a lavish getaway. The grand living and dining areas are designed for both relaxation and entertaining, with sumptuous furnishings and exquisite decor. The bedrooms are generously sized and offer a luxurious retreat for a restful night's sleep. Outdoors, a large private pool and a beautifully landscaped garden create an oasis for leisure and alfresco dining. Villa Emily is the ultimate choice for those seeking a vacation filled with luxury, comfort, and style.",
  },
  {
    name: "Amelia",
    capacity: 5,
    price: 900,
    image: imageUrl + "villa-3.jpeg",
    description:
      "Villa Amelia, a charming abode for up to 5 guests, is the perfect choice for those seeking a cozy and inviting escape. The villa's interiors are designed for comfort and simplicity, with a warm and welcoming atmosphere. The bedrooms are beautifully furnished and create a serene environment for a peaceful night's sleep. Outside, the private garden and terrace provide a space to relax and enjoy the tranquility of the Mediterranean surroundings. Villa Amelia is the ideal retreat for a laid-back vacation away from the hustle and bustle.",
  },
  {
    name: "Ava",
    capacity: 7,
    price: 1200,
    image: imageUrl + "villa-4.jpeg",
    description:
      "Villa Ava, a haven of luxury and leisure for up to 7 guests, promises an unforgettable vacation filled with opulence and relaxation. The villa's upscale amenities and breathtaking views set the stage for an extraordinary getaway. The spacious living area features elegant furnishings and an open layout, making it perfect for relaxation and entertainment. The bedrooms are luxurious and tastefully decorated, offering a restful haven after a day of adventure. Outside, the private pool and extensive terrace provide an oasis for basking in the sun and taking in the panoramic vistas. Villa Ava is the ultimate choice for a vacation that combines elegance and natural beauty.",
  },
  {
    name: "Charlotte",
    capacity: 8,
    price: 1400,
    image: imageUrl + "villa-5.jpeg",
    description:
      "Villa Charlotte is a regal retreat accommodating up to 8 guests. Its lavish design and splendid location make it the perfect choice for those seeking the utmost in luxury. The grand living space is adorned with opulent furnishings and boasts a palatial ambiance, ideal for both relaxation and entertaining. The bedrooms are generously sized and offer a sumptuous sanctuary for a restful night's sleep. Step outside onto the expansive terrace and enjoy the panoramic views, or take a dip in the private pool to cool off in the Mediterranean sun. Villa Charlotte promises a vacation of pure extravagance and indulgence.",
  },
];

export default villas;
