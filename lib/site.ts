export const WHATSAPP = "2348138273533";
export const links = {
  store: "https://flutterwave.com/store/cravingsbyijay",
  instagram: "https://instagram.com/cravingsbyijay",
  facebook: "https://facebook.com/cravingsbyijay",
  tiktok: "https://www.tiktok.com/@cravingsbyijay",
  youtube: "https://www.youtube.com/channel/UCYyEbQE4I5KTIULQI4aPG9A",
};

export type MenuItem = { title: string; text: string; wide?: boolean };
export const menu: MenuItem[] = [
  { title: "Wedding cakes", text: "Made to match your wedding style. Tell us your date and theme." },
  { title: "Birthday cakes", text: "Custom designs for kids and adults, in the theme you choose." },
  { title: "Bento cakes", text: "Small, decorated cakes that make a neat personal gift." },
  { title: "Cupcakes", text: "Individual cakes for parties, offices and treats." },
  { title: "Meat pie", text: "Fresh meat pies for events, offices and everyday cravings." },
  { title: "Egg roll", text: "Classic Nigerian egg rolls, made fresh." },
  { title: "Donuts", text: "Soft donuts, ready for pickup or delivery." },
  { title: "Buns", text: "Freshly baked buns for snacking and events." },
  { title: "Chicken shawarma", text: "Freshly made chicken shawarma, ready for pickup, takeout or delivery." },
  { title: "Gift bags and boxes", text: "Cakes and treats packed in a gift bag or box, ready to give. Tell us the occasion and who it is for.", wide: true },
];

export const orderOptions = [
  "Wedding cake", "Birthday cake", "Bento cake", "Cupcakes",
  "Meat pie", "Donuts", "Egg roll", "Buns", "Chicken shawarma", "Gift bag or box",
];

export const gallery = [
  { src: "/images/call-to-bar.jpg", alt: "White cake with a gold scales of justice and law books, made for a Call to Bar celebration" },
  { src: "/images/football.jpg", alt: "Football-themed cake with a green jersey, black and white pitch pattern and footballs" },
  { src: "/images/abc-school.jpg", alt: "Back-to-school cake with a graduation cap, coloured pencils and an ABC board" },
  { src: "/images/moon-and-clouds.jpg", alt: "Moon and clouds cake with a teddy bear, blue balloons and a gold ladder" },
];

export const hours = [
  { day: "Monday", d: 1, time: "10:00 AM to 6:30 PM" },
  { day: "Tuesday", d: 2, time: "10:00 AM to 6:30 PM" },
  { day: "Wednesday", d: 3, time: "10:00 AM to 6:30 PM" },
  { day: "Thursday", d: 4, time: "10:00 AM to 6:30 PM" },
  { day: "Friday", d: 5, time: "10:00 AM to 6:30 PM" },
  { day: "Saturday", d: 6, time: "10:00 AM to 6:00 PM" },
  { day: "Sunday", d: 0, time: "Closed" },
];
