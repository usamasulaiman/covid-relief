const requirements = [
  "Oxygen",
  "Hospital Beds",
  "Medicines/Injections",
  "Blood",
  "Home Care",
  "Testing",
  "Food / Tiffin",
  "Ambulance",
];

const resourceData = [
  {
    resource: "Oxygen",
    // iconSrc: OxygenIcon,
    subtypes: ["New Cylinder", "Refill", "Concentrator"],
  },
  {
    resource: "Hospital Beds",
    // iconSrc: HospitalIcon,
    subtypes: ["ICU Bed", "Ventilator Bed", "Oxygen Beds", "Non-Oxygen Beds"],
  },
  {
    resource: "Medicines/Injections",
    // iconSrc: MedicineIcon,
    subtypes: ["Remdesivir", "Fabiflu", "Tocilizumab"],
  },
  {
    resource: "Blood",
    // iconSrc: BloodIcon,
    subtypes: ["Plasma", "Blood"],
  },
  {
    resource: "Home Care",
    // iconSrc: HomeIcon,
    subtypes: ["Home ICU Setup", "Nursing Staff"],
  },
  {
    resource: "Testing",
    // iconSrc: TestIcon,
    subtypes: ["Home Testing", "Lab Testing"],
  },
  {
    resource: "Food / Tiffin",
    // iconSrc: FoodIcon,
    subtypes: ["Tiffin Service", "Meal Provider"],
  },
  {
    resource: "Ambulance",
    // iconSrc: AmbulanceIcon,
    subtypes: ["Normal / Advanced Life Support"],
  },
];

export default resourceData;

export { requirements };
