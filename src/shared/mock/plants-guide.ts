import type { Plant } from "@/shared/types/plant";

export const mockPlants: Plant[] = [
  {
    id: 1,
    common_name: "Aloe Vera",
    scientific_name: "Aloe barbadensis",
    family_common_name: "Succulent",
    default_image: {
      medium_url:
        "https://upload.wikimedia.org/wikipedia/commons/c/c5/Aloe_vera_fleur.JPG",
    },
    specifications: {
      watering: "Low",
      light: ["Full Sun", "Partial Shade"],
    },
    main_species: {
      description:
        "Aloe Vera is a succulent plant species known for its medicinal properties and easy care.",
    },
  },
  {
    id: 2,
    common_name: "Golden Pothos",
    scientific_name: "Epipremnum aureum",
    family_common_name: "Araceae",
    default_image: {
      medium_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/34/Devil%27s_Ivy.jpg",
    },
    specifications: {
      watering: "Medium",
      light: ["Indirect Light", "Low Light"],
    },
    main_species: {
      description:
        "Golden Pothos is a hardy indoor vine that tolerates low light and irregular watering.",
    },
  },
  {
    id: 3,
    common_name: "Snake Plant",
    scientific_name: "Sansevieria trifasciata",
    family_common_name: "Asparagaceae",
    default_image: {
      medium_url:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Sansevieria_trifasciata.jpg",
    },
    specifications: {
      watering: "Low",
      light: ["Indirect Light", "Low Light"],
    },
    main_species: {
      description:
        "Snake Plant is a tough indoor plant known for air-purifying qualities and low maintenance.",
    },
  },
  {
    id: 4,
    common_name: "Peace Lily",
    scientific_name: "Spathiphyllum wallisii",
    family_common_name: "Araceae",
    default_image: {
      medium_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Spathiphyllum_cochlearispathum_RTBG.jpg",
    },
    specifications: {
      watering: "Medium",
      light: ["Indirect Light"],
    },
    main_species: {
      description:
        "Peace Lily produces elegant white flowers and thrives in moderate indoor conditions.",
    },
  },
  {
    id: 5,
    common_name: "Spider Plant",
    scientific_name: "Chlorophytum comosum",
    family_common_name: "Asparagaceae",
    default_image: {
      medium_url:
        "https://upload.wikimedia.org/wikipedia/commons/1/10/Chlorophytum_comosum_01.jpg",
    },
    specifications: {
      watering: "Medium",
      light: ["Indirect Light"],
    },
    main_species: {
      description:
        "Spider Plant is a popular hanging plant, easy to propagate and tolerant of low care.",
    },
  },
  {
    id: 6,
    common_name: "Fiddle Leaf Fig",
    scientific_name: "Ficus lyrata",
    family_common_name: "Moraceae",
    default_image: {
      medium_url:
        "https://upload.wikimedia.org/wikipedia/commons/e/e0/Ficus_lyrata_2.jpg",
    },
    specifications: {
      watering: "Medium",
      light: ["Bright Indirect Light"],
    },
    main_species: {
      description:
        "Fiddle Leaf Fig is a trendy indoor plant with large leaves, needs bright filtered light.",
    },
  },
  {
    id: 7,
    common_name: "Rubber Plant",
    scientific_name: "Ficus elastica",
    family_common_name: "Moraceae",
    default_image: {
      medium_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/3d/Ficus_elastica_Rubber_Plant.jpg",
    },
    specifications: {
      watering: "Medium",
      light: ["Bright Indirect Light", "Partial Shade"],
    },
    main_species: {
      description:
        "Rubber Plant is a robust indoor tree with glossy leaves, prefers indirect sunlight.",
    },
  },
  {
    id: 8,
    common_name: "ZZ Plant",
    scientific_name: "Zamioculcas zamiifolia",
    family_common_name: "Araceae",
    default_image: {
      medium_url:
        "https://upload.wikimedia.org/wikipedia/commons/b/bc/Zamioculcas_zamiifolia_02.jpg",
    },
    specifications: {
      watering: "Low",
      light: ["Low Light", "Indirect Light"],
    },
    main_species: {
      description:
        "ZZ Plant is extremely low maintenance and can survive in dim indoor conditions.",
    },
  },
  {
    id: 9,
    common_name: "Boston Fern",
    scientific_name: "Nephrolepis exaltata",
    family_common_name: "Nephrolepidaceae",
    default_image: {
      medium_url:
        "https://upload.wikimedia.org/wikipedia/commons/3/37/Nephrolepis_exaltata.jpg",
    },
    specifications: {
      watering: "High",
      light: ["Indirect Light"],
    },
    main_species: {
      description:
        "Boston Fern is a classic lush plant, prefers high humidity and indirect light.",
    },
  },
  {
    id: 10,
    common_name: "Jade Plant",
    scientific_name: "Crassula ovata",
    family_common_name: "Crassulaceae",
    default_image: {
      medium_url:
        "https://upload.wikimedia.org/wikipedia/commons/e/e5/Crassula_ovata_01.jpg",
    },
    specifications: {
      watering: "Low",
      light: ["Full Sun", "Partial Shade"],
    },
    main_species: {
      description:
        "Jade Plant is a succulent with thick leaves, very drought-tolerant and easy to care for.",
    },
  },
];
