export interface Commodity {
  name: string;
  image: string;
  imageAlt: string;
  description: string;
}

export const commodities: Commodity[] = [
  {
    name: 'Maize',
    image: '/commodities/photos/maize.webp',
    imageAlt: 'White maize cob and kernels',
    description:
      'A staple grain used for food and feed. We coordinate maize sourcing to match buyer requirements for volume, quality, packaging, and delivery.',
  },
  {
    name: 'Soybeans',
    image: '/commodities/photos/soybeans.webp',
    imageAlt: 'Soybeans displayed in a bowl',
    description:
      'A versatile oilseed used in food products and animal feed. Supply can be arranged to meet agreed specifications, order volumes, and delivery schedules.',
  },
  {
    name: 'Groundnuts',
    image: '/commodities/photos/groundnuts.webp',
    imageAlt: 'Harvested groundnuts held in the field',
    description:
      'A widely used food and oilseed crop. We help coordinate groundnut supply against buyer requirements for grade, quantity, packaging, and destination.',
  },
  {
    name: 'Pigeon Peas',
    image: '/commodities/photos/pigeon-peas.webp',
    imageAlt: 'Dried pigeon peas in a wooden bowl',
    description:
      'A protein-rich pulse cultivated across the region. Orders can be coordinated to align with requested quality, volume, packaging, and timing.',
  },
  {
    name: 'Rice',
    image: '/commodities/photos/rice.jpg',
    imageAlt: 'Close-up of white rice grains',
    description:
      'A staple cereal supplied for food markets and institutional procurement. We coordinate sourcing according to agreed product specifications and delivery needs.',
  },
];
