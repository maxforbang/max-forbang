export const scrollToContact = () => {
  const contactSectionElement = document.getElementById("contactSection");
  if (contactSectionElement) {
    contactSectionElement.scrollIntoView({ behavior: "smooth" });
  }
};

export const scrollToFeatures = () => {
  const featuresSectionElement = document.getElementById("mastela-section");
  if (featuresSectionElement) {
    featuresSectionElement.scrollIntoView({ behavior: "smooth" });
  }
};