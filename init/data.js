
const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1500,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1200,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 1000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 2500,
      location: "Florence",
      country: "Italy",
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 800,
      location: "Portland",
      country: "United States",
    },
    // Add more objects here...
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 2000,
      location: "Cancun",
      country: "Mexico",
    },
    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 3500,
      location: "Los Angeles",
      country: "United States",
    },
    // Add more objects here...
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
    },
    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
    },
    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
    },
    // Add more objects here...
    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 10000,
      location: "Fiji",
      country: "Fiji",
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      image: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 2200,
      location: "Boston",
      country: "United States",
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      image: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 1800,
      location: "Bali",
      country: "Indonesia",
    },
    // Add more objects here...
    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 1500,
      location: "Banff",
      country: "Canada",
    },
    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      image: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 1600,
      location: "Miami",
      country: "United States",
    },
    {
      title: "Tropical Villa in Phuket",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
      image: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 3000,
      location: "Phuket",
      country: "Thailand",
    },
    {
      title: "Historic Castle in Scotland",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
      image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 4000,
      location: "Scottish Highlands",
      country: "United Kingdom",
    },
    // Add more objects here...
    {
      title: "Desert Oasis in Dubai",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
    },
    {
      title: "Rustic Log Cabin in Montana",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 1100,
      location: "Montana",
      country: "United States",
    },
    {
      title: "Beachfront Villa in Greece",
      description:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
      image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 2500,
      location: "Mykonos",
      country: "Greece",
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      image: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    // Add more objects here...
    {
      title: "Historic Cottage in Charleston",
      description:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
      image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 1600,
      location: "Charleston",
      country: "United States",
    },
    {
      title: "Modern Apartment in Tokyo",
      description:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
      image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 2000,
      location: "Tokyo",
      country: "Japan",
    },
    {
      title: "Lakefront Retreat in Ontario",
      description: "Experience serene lake views in this cozy retreat nestled in the heart of Ontario's cottage country.",
      image: "https://www.thethinkingtraveller.com/media/Resized/GREECE%20villas/Carmen/SEP22/1000/TTT_Greece_Porto_Heli_Carmen_SEP22_010.jpg",
      price: 1300,
      location: "Ontario",
      country: "Canada"
  },
  {
      title: "Luxury Safari Camp in Kenya",
      description: "Embark on a once-in-a-lifetime safari adventure in this luxurious camp situated amidst the Kenyan wilderness.",
      image: "https://www.thethinkingtraveller.com/media/Resized/GREECE%20villas/Iriana/FEB22/1000/Greece_Porto_Heli_Iriana_NOV21_3.jpg",
      price: 4500,
      location: "Maasai Mara National Reserve",
      country: "Kenya"
  },
  {
      title: "Oceanfront Condo in Miami Beach",
      description: "Enjoy breathtaking ocean views from this elegant condo located in the heart of Miami Beach's vibrant scene.",
      image: "https://img.freepik.com/free-photo/swimming-pool-resort_1150-10727.jpg?size=626&ext=jpg&ga=GA1.1.872965841.1718520579&semt=sph",
      price: 2800,
      location: "Miami Beach",
      country: "United States"
  },
  {
      title: "Luxury Chalet in the French Alps",
      description: "Ski in style and comfort in this luxurious chalet nestled in the picturesque French Alps.",
      image: "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150762.jpg?size=626&ext=jpg&ga=GA1.1.872965841.1718520579&semt=sph",
      price: 3800,
      location: "Chamonix",
      country: "France"
  },
  {
      title: "Riverside Cabin in the Smoky Mountains",
      description: "Unwind by the river in this charming cabin surrounded by the breathtaking beauty of the Smoky Mountains.",
      image: "https://img.freepik.com/free-photo/luxury-house-real-estate-sale-property-generative-ai_169016-29360.jpg?size=626&ext=jpg&ga=GA1.1.872965841.1718520579&semt=ais_user",
      price: 1100,
      location: "Gatlinburg",
      country: "United States"
  },
  {
      title: "Seaside Villa in Santorini",
      description: "Bask in the sun and enjoy stunning views of the Aegean Sea from this beautiful villa perched on the cliffs of Santorini.",
      image: "https://img.freepik.com/free-photo/coastal-luxury-villa-architecture_1409-7356.jpg?size=626&ext=jpg&ga=GA1.1.872965841.1718520579&semt=sph",
      price: 3200,
      location: "Santorini",
      country: "Greece"
  },
  {
      title: "Historic Riad in Marrakech",
      description: "Immerse yourself in the rich culture of Marrakech in this beautifully restored historic riad.",
      image: "https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004035.jpg?size=626&ext=jpg",
      price: 2000,
      location: "Marrakech",
      country: "Morocco"
  },
  {
      title: "Mountain View Lodge in Colorado",
      description: "Experience the beauty of the Rockies in this cozy lodge with panoramic mountain views.",
      image: "https://img.freepik.com/free-photo/varenna-village-lombardy-italy_181624-17741.jpg?size=626&ext=jpg&ga=GA1.1.872965841.1718520579&semt=sph",
      price: 1500,
      location: "Colorado",
      country: "United States"
  },
  // {
  //     title: "Luxury Villa in Ibiza",
  //     description: "Party in style in this luxurious villa located in the heart of Ibiza's vibrant nightlife scene.",
  //     image: "https://images.unsplash.com/photo-1501675201779-0c180c8c5b8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  //     price: 4200,
  //     location: "Ibiza",
  //     country: "Spain"
  // },
  // {
  //     title: "Ski Lodge in Whistler",
  //     description: "Hit the slopes from this cozy ski lodge nestled in the world-renowned resort town of Whistler.",
  //     image: "https://images.unsplash.com/photo-1567202497291-9bc6b2b1a156?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  //     price: 2600,
  //     location: "Whistler",
  //     country: "Canada"
  // },
  // {
  //     title: "Beachfront Resort in the Bahamas",
  //     description: "Escape to paradise in this luxurious beachfront resort offering unparalleled views of the Caribbean Sea.",
  //     image: "https://images.unsplash.com/photo-1562083885-5a1a04effd18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  //     price: 5000,
  //     location: "Nassau",
  //     country: "Bahamas"
  // },
  // {
  //     title: "Vineyard Estate in Napa Valley",
  //     description: "Experience wine country living in this stunning vineyard estate nestled in the heart of Napa Valley.",
  //     image: "https://images.unsplash.com/photo-1559599068-f0de3a6e8a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  //     price: 3500,
  //     location: "Napa Valley",
  //     country: "United States"
  // },
  // {
  //     title: "Luxury Beach House in Malibu",
  //     description: "Live the California dream in this luxurious beach house with panoramic views of the Pacific Ocean.",
  //     image: "https://images.unsplash.com/photo-1514496354383-436c3b7fa980?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  //     price: 5500,
  //     location: "Malibu",
  //     country: "United States"
  // },
  ];
  
  module.exports = { data: sampleListings };
  
  
  // const sampleListings = [
  //     {
  //       title: "Cozy Beachfront Cottage",
  //       description:
  //         "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 1500,
  //       location: "Malibu",
  //       country: "United States",
  //     },
  //     {
  //       title: "Modern Loft in Downtown",
  //       description:
  //         "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 1200,
  //       location: "New York City",
  //       country: "United States",
  //     },
  //     {
  //       title: "Mountain Retreat",
  //       description:
  //         "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 1000,
  //       location: "Aspen",
  //       country: "United States",
  //     },
  //     {
  //       title: "Historic Villa in Tuscany",
  //       description:
  //         "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 2500,
  //       location: "Florence",
  //       country: "Italy",
  //     },
  //     {
  //       title: "Secluded Treehouse Getaway",
  //       description:
  //         "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 800,
  //       location: "Portland",
  //       country: "United States",
  //     },
  //     {
  //       title: "Beachfront Paradise",
  //       description:
  //         "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 2000,
  //       location: "Cancun",
  //       country: "Mexico",
  //     },
  //     {
  //       title: "Rustic Cabin by the Lake",
  //       description:
  //         "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 900,
  //       location: "Lake Tahoe",
  //       country: "United States",
  //     },
  //     {
  //       title: "Luxury Penthouse with City Views",
  //       description:
  //         "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 3500,
  //       location: "Los Angeles",
  //       country: "United States",
  //     },
  //     {
  //       title: "Ski-In/Ski-Out Chalet",
  //       description:
  //         "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 3000,
  //       location: "Verbier",
  //       country: "Switzerland",
  //     },
  //     {
  //       title: "Safari Lodge in the Serengeti",
  //       description:
  //         "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 4000,
  //       location: "Serengeti National Park",
  //       country: "Tanzania",
  //     },
  //     {
  //       title: "Historic Canal House",
  //       description:
  //         "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 1800,
  //       location: "Amsterdam",
  //       country: "Netherlands",
  //     },
  //     {
  //       title: "Private Island Retreat",
  //       description:
  //         "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 10000,
  //       location: "Fiji",
  //       country: "Fiji",
  //     },
  //     {
  //       title: "Charming Cottage in the Cotswolds",
  //       description:
  //         "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 1200,
  //       location: "Cotswolds",
  //       country: "United Kingdom",
  //     },
  //     {
  //       title: "Historic Brownstone in Boston",
  //       description:
  //         "Step back in time in this elegant historic brownstone located in the heart of Boston.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 2200,
  //       location: "Boston",
  //       country: "United States",
  //     },
  //     {
  //       title: "Beachfront Bungalow in Bali",
  //       description:
  //         "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 1800,
  //       location: "Bali",
  //       country: "Indonesia",
  //     },
  //     {
  //       title: "Mountain View Cabin in Banff",
  //       description:
  //         "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 1500,
  //       location: "Banff",
  //       country: "Canada",
  //     },
  //     {
  //       title: "Art Deco Apartment in Miami",
  //       description:
  //         "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 1600,
  //       location: "Miami",
  //       country: "United States",
  //     },
  //     {
  //       title: "Tropical Villa in Phuket",
  //       description:
  //         "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 3000,
  //       location: "Phuket",
  //       country: "Thailand",
  //     },
  //     {
  //       title: "Historic Castle in Scotland",
  //       description:
  //         "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 4000,
  //       location: "Scottish Highlands",
  //       country: "United Kingdom",
  //     },
  //     {
  //       title: "Desert Oasis in Dubai",
  //       description:
  //         "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 5000,
  //       location: "Dubai",
  //       country: "United Arab Emirates",
  //     },
  //     {
  //       title: "Rustic Log Cabin in Montana",
  //       description:
  //         "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 1100,
  //       location: "Montana",
  //       country: "United States",
  //     },
  //     {
  //       title: "Beachfront Villa in Greece",
  //       description:
  //         "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 2500,
  //       location: "Mykonos",
  //       country: "Greece",
  //     },
  //     {
  //       title: "Eco-Friendly Treehouse Retreat",
  //       description:
  //         "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 750,
  //       location: "Costa Rica",
  //       country: "Costa Rica",
  //     },
  //     {
  //       title: "Historic Cottage in Charleston",
  //       description:
  //         "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 1600,
  //       location: "Charleston",
  //       country: "United States",
  //     },
  //     {
  //       title: "Modern Apartment in Tokyo",
  //       description:
  //         "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 2000,
  //       location: "Tokyo",
  //       country: "Japan",
  //     },
  //     {
  //       title: "Lakefront Cabin in New Hampshire",
  //       description:
  //         "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 1200,
  //       location: "New Hampshire",
  //       country: "United States",
  //     },
  //     {
  //       title: "Luxury Villa in the Maldives",
  //       description:
  //         "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 6000,
  //       location: "Maldives",
  //       country: "Maldives",
  //     },
  //     {
  //       title: "Ski Chalet in Aspen",
  //       description:
  //         "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 4000,
  //       location: "Aspen",
  //       country: "United States",
  //     },
  //     {
  //       title: "Secluded Beach House in Costa Rica",
  //       description:
  //         "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
  //       image: {
  //         filename: "listingimage",
  //         url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //       },
  //       price: 1800,
  //       location: "Costa Rica",
  //       country: "Costa Rica",
  //     },
  //   ];
    
  //   module.exports = { data: sampleListings };