const players = [
  {
    id: 1,
    name: 'Alfredo M.',
    imagePath: 'assets/images/team/alfredo_m.png',
    beers: 70,
    runs: 80,
    pubs: 70,
    weight: 2,
  },
  {
    id: 2,
    name: 'Andres Pozo',
    imagePath: 'assets/images/team/andres_pozo.png',
    beers: 90,
    runs: 80,
    pubs: 96,
    weight: 2,
  },
  {
    id: 3,
    name: 'Carlitos',
    imagePath: 'assets/images/team/carlitos.png',
    beers: 90,
    runs: 90,
    pubs: 99,
    weight: 1,
  },
  {
    id: 4,
    name: 'Cristian B.',
    imagePath: 'assets/images/team/cristian_b.png',
    beers: 90,
    runs: 90,
    pubs: 90,
    weight: 2,
  },
  {
    id: 5,
    name: 'David Bertholt',
    imagePath: 'assets/images/team/david_bertholt.png',
    beers: 90,
    runs: 90,
    pubs: 99,
    weight: 1,
  },
  {
    id: 6,
    name: 'Diego Freda',
    imagePath: 'assets/images/team/diego_freda.png',
    beers: 70,
    runs: 80,
    pubs: 70,
    weight: 2,
  },
  {
    id: 7,
    name: 'Ema Oviedo',
    imagePath: 'assets/images/team/ema_oviedo.png',
    beers: 80,
    runs: 87,
    pubs: 90,
    weight: 2,
  },
  {
    id: 8,
    name: 'Eneas Forconi',
    imagePath: 'assets/images/team/eneas_forconi.png',
    beers: 70,
    runs: 90,
    pubs: 70,
    weight: 1,
  },
  {
    id: 9,
    name: 'Fede Diaz',
    imagePath: 'assets/images/team/fede_diaz.png',
    beers: 70,
    runs: 88,
    pubs: 70,
    weight: 1,
  },
  {
    id: 10,
    name: 'Fer Jaliff',
    imagePath: 'assets/images/team/fer_jaliff.png',
    beers: 70,
    runs: 90,
    pubs: 70,
    weight: 1,
  },
  {
    id: 11,
    name: 'Fer Marengo',
    imagePath: 'assets/images/team/fer_marengo.png',
    beers: 88,
    runs: 90,
    pubs: 70,
    weight: 1,
  },
  {
    id: 12,
    name: 'Franco Escobar',
    imagePath: 'assets/images/team/franco_escobar.png',
    beers: 70,
    runs: 90,
    pubs: 75,
    weight: 2,
  },
  {
    id: 13,
    name: 'Huaira Gomez',
    imagePath: 'assets/images/team/huaira_gomez.png',
    beers: 80,
    runs: 90,
    pubs: 80,
    weight: 2,
  },
  {
    id: 14,
    name: 'Hugo Chavero',
    imagePath: 'assets/images/team/hugo_chavero.png',
    beers: 70,
    runs: 80,
    pubs: 70,
    weight: 2,
  },
  {
    id: 15,
    name: 'Javier Verblud',
    imagePath: 'assets/images/team/javier_verblud.png',
    beers: 70,
    runs: 80,
    pubs: 70,
    weight: 2,
  },
  {
    id: 16,
    name: 'Juan Cruz Mare',
    imagePath: 'assets/images/team/juan_cruz_mare.png',
    beers: 70,
    runs: 90,
    pubs: 70,
    weight: 1,
  },
  {
    id: 17,
    name: 'Juan Fite',
    imagePath: 'assets/images/team/juan_fite.png',
    beers: 70,
    runs: 90,
    pubs: 70,
    weight: 1,
  },
  {
    id: 18,
    name: 'Juan I. Ponce',
    imagePath: 'assets/images/team/juan_i_ponce.png',
    beers: 70,
    runs: 82,
    pubs: 70,
    weight: 2,
  },
  {
    id: 19,
    name: 'Lucas Godoy',
    imagePath: 'assets/images/team/lucas_godoy.png',
    beers: 90,
    runs: 88,
    pubs: 90,
    weight: 2,
  },
  {
    id: 20,
    name: 'Matias Roson',
    imagePath: 'assets/images/team/matias_roson.png',
    beers: 70,
    runs: 90,
    pubs: 70,
    weight: 1,
  },
  {
    id: 21,
    name: 'Matias',
    imagePath: 'assets/images/team/matias.png',
    beers: 88,
    runs: 92,
    pubs: 88,
    weight: 1,
  },
  {
    id: 22,
    name: 'Miguel M.',
    imagePath: 'assets/images/team/miguel_m.png',
    beers: 70,
    runs: 87,
    pubs: 70,
    weight: 2,
  },
  {
    id: 23,
    name: 'Nacho Mina',
    imagePath: 'assets/images/team/nacho_mina.png',
    beers: 70,
    runs: 96,
    pubs: 70,
    weight: 1,
  },
  {
    id: 24,
    name: 'Nano Molina',
    imagePath: 'assets/images/team/nano_molina.png',
    beers: 95,
    runs: 89,
    pubs: 88,
    weight: 1,
  },
  {
    id: 25,
    name: 'Nestor Medina',
    imagePath: 'assets/images/team/nestor_medina.png',
    beers: 80,
    runs: 80,
    pubs: 70,
    weight: 2,
  },
  {
    id: 26,
    name: 'Santi Gastaldi',
    imagePath: 'assets/images/team/santi_gastaldi.png',
    beers: 70,
    runs: 89,
    pubs: 70,
    weight: 2,
  },
  {
    id: 27,
    name: 'Pablo Castro',
    imagePath: 'assets/images/team/pablo_castro.png',
    beers: 90,
    runs: 92,
    pubs: 80,
    weight: 1,
  },
  {
    id: 28,
    name: 'Pablo Figueroa',
    imagePath: 'assets/images/team/pablo_figueroa.png',
    beers: 70,
    runs: 95,
    pubs: 70,
    weight: 2,
  },
  {
    id: 29,
    name: 'Pedro',
    imagePath: 'assets/images/team/pedro.png',
    beers: 85,
    runs: 89,
    pubs: 80,
    weight: 2,
  },
  {
    id: 30,
    name: 'Quimey',
    imagePath: 'assets/images/team/quimey.png',
    beers: 89,
    runs: 89,
    pubs: 80,
    weight: 1,
  },
  {
    id: 31,
    name: 'Santiago B.',
    imagePath: 'assets/images/team/santiago_b.png',
    beers: 70,
    runs: 89,
    pubs: 70,
    weight: 1,
  },
];

export default players;
