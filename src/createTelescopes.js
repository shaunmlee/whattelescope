import React from "react";

export class Telescope {
  constructor(name, aperture, price, type, mount, size, url, img, blurb) {
    this.name = name;
    this.aperture = aperture; // inches
    this.price = price;
    this.type = type; // for primary optics e.g. refractor
    this.mount = mount; //Dob, AltAz, EQ
    this.size = size;
    this.url = url; // affiliate link
    this.img = img; // Amazon image URL.
    this.blurb = blurb; // short blurb
  }
}

export function createScopes() {
  let orionXT8 = new Telescope(
    "Orion XT8",
    8,
    347.99,
    "reflector",
    "Dob",
    "free-standing",
    "https://amzn.to/2jHQzJD",
    "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001DDW9V6&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=whattelescope-21&language=en_GB",
    "Large aperture collects plenty of light for viewing galaxies and nebulae. Amazing value for money."
  );

  let celestronTravelScope70 = new Telescope(
    "Celestron TravelScope 70",
    3,
    68.99,
    "refractor",
    "AltAz",
    "backpack",
    "https://amzn.to/2l7rBUn",
    "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001TI9Y2M&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=whattelescope-21&language=en_GB",
    "Small enough to fit into the supplied backpack."
  );

  let celestronNexStar8 = new Telescope(
    "Celestron NexStar 8SE",
    8,
    1299,
    "cassergrain",
    "computerised",
    "tripod",
    "https://amzn.to/2XWXqN6",
    "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000GUFOC8&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=whattelescope-21&language=en_GB",
    "Computerised mount makes finding nightsky objects a doddle."
  );

  let skywatcherHeritage130P = new Telescope(
    "Skywatcher Heritage130P FlexTube",
    5.1,
    169.0,
    "reflector",
    "Dob",
    "tabletop",
    "https://amzn.to/2NZbnKX",
    "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B002828HJE&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=whattelescope-21&language=en_GB",
    "Excellent beginner's scope. Collapsible tube makes storage easy."
  );

  let orionFunScope76 = new Telescope(
    "Orion FunScope 76mm TableTop Reflector",
    3,
    61.99,
    "reflector",
    "Dob",
    "tabletop",
    "https://amzn.to/2NYDudb",
    "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00FM4A108&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=whattelescope-21&language=en_GB",
    "Ideal for taking your first steps into astronomy."
  );

  let orionXT6 = new Telescope(
    "Orion XT6",
    6,
    246.99,
    "reflector",
    "Dob",
    "free-standing",
    "https://amzn.to/2SmRr3i",
    "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001DDW9UW&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=whattelescope-21&language=en_GB",
    "Long focal length gives great magnification of planetary objects."
  );

  let celestronAstroMaster102AZ = new Telescope(
    "Celestron AstroMaster 102 AZ",
    4,
    169.0,
    "refractor",
    "AltAz",
    "tripod",
    "https://amzn.to/2JNr9TJ",
    "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01E5DVONO&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=whattelescope-21&language=en_GB",
    "A wonderful introductory refractor which gives right-way-up images."
  );

  return [
    orionXT8,
    celestronTravelScope70,
    celestronNexStar8,
    skywatcherHeritage130P,
    orionFunScope76,
    orionXT6,
    celestronAstroMaster102AZ
  ];
}
