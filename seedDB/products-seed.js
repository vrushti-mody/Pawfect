const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------Dog Treats
  const treats_titles = [
    "Pedigree Dog Treats",
    "Meat Up Real Chicken Biscuit",
    "Dogaholic Milky Chews Sticks",
    "Choostix Biskies Real Chicken Dog Treat",
    "Purepet 100% Vegeterian Biscuit"
  ];
  const treats_imgs = [
    "https://images-na.ssl-images-amazon.com/images/I/81V5yUGIGNL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71qg9nW7CFL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71u-NTXPo2L._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71v8XLSxhLL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61PX6QirFQL._SL1500_.jpg"
  ];

  //--------------------Odour Remover 
  const odour_remover_titles = [
    "Simple Solution Stain and Odour Remover",
    "Boltz Odour and Urine Smell Remover",
    "Kolan Organic Pet Stains & Odour Remover",
    "Wahl Housebreaking Aid",
    "Odosmash Pet Stain and Odor Remover"
  ];

  const odour_remover_imgs = [
    "https://images-na.ssl-images-amazon.com/images/I/71bajOfWidL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/519yTC9USFL._SL1200_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51K3n-0eH7L._SL1000_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51hxAboc8mL._SL1080_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71hONOnnktL._SL1500_.jpg"
  ];

  //--------------------Creams
  const creams_titles = [
    "Captain Zack Pawsitively Smooth Paw Butter",
    "Petveda Paw Cream for Dogs",
    "Petacom Petapaw Silk Paw Butter",
    "Petlogix Natural Paw Cream",
    "WILDWASH Healing Paw Balm",
  ];

  const creams_imgs = [
    "https://images-na.ssl-images-amazon.com/images/I/414ZTnv7M8L.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71Rkv3sOMrL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51JJMan0tPL.jpgg",
    "https://images-na.ssl-images-amazon.com/images/I/61pOJ%2BxsWOL._SL1200_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61FaZTQDK5L._SL1000_.jpg"
  ];

  //--------------------Leash
  const leash_titles = [
    "AmazonBasics Single Handle Dog Leash",
    "The Pets Company Leash and Collar",
    "Sollar&#39;S Neck Collar Belts and Leash",
    "Dog Training Line Leash for Pet",
    "Sage Square Rope Training Leash",
  ];
  const leash_imgs = [
    "https://images-na.ssl-images-amazon.com/images/I/81kSDjUPuNL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81ObEDRpQkL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51yT%2BklwcYL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61Ir3yY7xFL._SL1001_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/612CghcNFqL._SL1114_.jpg"
  ];

  //-------------------Bath TIme

  const bathtime_titles = [
    "Captain Zack - Dog Shampoo",
    "Wahl Oatmeal Shampoo",
    "Medilogy Biotech Dog Shampoo",
    "Pupkart Himalaya Shampoo for Dogs",
    "Beaphar Bea Dog Shampoo",
    "Himalaya Erina Plus Conditioner",
    "Captain Zack IRradicate Biphasic Conditioner",
    "Petveda Conditioner for Pets",
    "PETVEDA Moisturising Pet Conditioner",
    "John Paul Pet Oatmeal Conditioning"
  ];
  const bathtime_imgs = [
    "https://images-na.ssl-images-amazon.com/images/I/71OGHz%2Bu9xL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81EqAtxLXML._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71KfPv5MlJL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51OxE37pQqL._SL1000_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/31XI1rVKKGL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51En6Bu4n5L._SL1000_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/7134bWGJ8KL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71eADVUWLoL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71eADVUWLoL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/710NcfwlkjL._SL1500_.jpg"
  ];

  //-----------------------Scooper
  const scooper_titles = [
    "The Pets Company Dog Poop Scooper",
    "Foodie Puppies Potty Scooper",
    "PetVogue Pet Dog Pooper Scooper",
    "Pupkart Scoobee Dog Potty Scooper",
    "PetVogue Plastic Litter Scooper"
  ];
  const scooper_imgs = [
    "https://images-na.ssl-images-amazon.com/images/I/51nJvNj88OL._SL1000_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41FtTaZEMbL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51ULs4badWL._SL1100_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/31nQgItjeBL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51ULs4badWL._SL1100_.jpg"
  ];

  //-----------------Toys

  const toys_titles = [
    "Petlicious &amp; More Eetoys Ball Toy",
    "Foodie Puppies Hard Squeeze Squeak Ball",
    "Super Dog Rubber Hole Ball",
    "Choostix Dog Musical Ball",
    "Super Dog Spiked Rubber Dog Ball"
  ];
  const toys_imgs = [
    "https://images-na.ssl-images-amazon.com/images/I/61mbs76czxL._SL1121_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71TgiPR0JRL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61zQd302BSL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81ulOzabowL._SL1500_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51jLRJg7RYL.jpg",
  ];

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 10, max: 100 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(treats_titles, treats_imgs, "Dog Treats");
  await seedProducts(odour_remover_titles, odour_remover_imgs, "Odour Removers");
  await seedProducts(creams_titles, creams_imgs, "Healing Creams");
  await seedProducts(leash_titles, leash_imgs, "Leashes");
  await seedProducts(
    bathtime_titles,
    bathtime_imgs,
    "Bath time"
  );
  await seedProducts(scooper_titles, scooper_imgs, "Poop scoopers");
  await seedProducts(toys_titles, toys_imgs, "Dog Toys");

  await closeDB();
}

seedDB();
