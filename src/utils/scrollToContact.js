export const scrollToContact = () => {
  const contactSectionElement = document.getElementById("contactSection");
  if (contactSectionElement) {
    contactSectionElement.scrollIntoView({ behavior: "smooth" });
  }
};
