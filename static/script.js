const products = [
    {
        id: 1,
        name: "64K",
        price: 8000,
        category: "beauty",
        image: "static/images/perfume1.jpg"
    },
    {
        id: 2,
        name: "Arabic",
        price: 27000,
        category: "beauty",
        image: "static/images/perfume2.jpg"
    },
    {
        id: 3,
        name: "Aventos",
        price: 19000,
        category: "beauty",
        image: "static/images/perfume3.jpg"
    },
    {
        id: 4,
        name: "Ophylia",
        price: 20000,
        category: "beauty",
        image:" static/images/perfume4.jpg"
    },
    {
        id: 5,
        name: "Million",
        price: 9000,
        category: "beauty",
        image: "static/images/perfume5.jpg"
    },
    {
        id: 6,
        name: "Kaly",
        price: 10000 ,
        category: "beauty",
        image: "static/images/perfume6.jpg"
    },
    {
        id: 7,
        name: "Mosuf",
        price: 6500,
        category: "beauty",
        image: "static/images/perfume7.jpg"
    },
    {
        id: 8,
        name: "Mosuf",
        price: 6500,
        category: "beauty",
        image: "static/images/perfume8.jpg"
    },
    {
        id: 9,
        name: "Sky Vannila",
        price: 4000,
        category: "beauty",
        image: "static/images/perfume9.jpg"
    },

    {
        id: 10,
        name: "Matelot",
        price: 18000,
        category: "beauty",
        image: "static/images/perfume10.jpg"

    },

    {
        id: 11,
        name: "Club de nuit",
        price: 58000,
        category: "beauty",
        image: "static/images/perfume11.jpg"
 
    },
    {
        id: 12,
        name: "Oud Al layi ",
        price: 18000,
        category: "beauty",
        image: "static/images/perfume12.jpg"
    },
    {
       id: 13,
        name: "24K",
        price: 4000,
        category: "beauty",
        image: "static/images/perfume13.jpg" 
    },
    {
        id: 14,
        name: "Eclaire",
        price: 10000,
        category: "beauty",
        image: "static/images/perfume14.jpg"
    },
    {
        id: 15,
        name: "Smart Collection",
        price: 10000,
        category: "beauty",
        image: "static/images/perfume15.jpg"
    },
    {
        id: 16,
        name: "Deal&Onleeu",
        price: 8000,
        category: "beauty",
        image: "static/images/perfume16.jpg"
    },
    {
         id: 17,
        name: "Khamrah",
        price: 33000,
        category: "beauty",
        image: "static/images/perfume17.jpg"
    }, 
    {
          id: 18,
        name: "Fire on ice",
        price: 29000,
        category: "beauty",
        image: "static/images/perfume18.jpg"
    },
    {
          id: 19,
        name: "Island",
        price: 27000,
        category: "beauty",
        image: "static/images/perfume19.jpg"
    },
    {
          id: 20,
        name: "Shaghaf",
        price: 29000,
        category: "beauty",
        image: "static/images/perfume20.jpg"
    },
    {
          id: 21,
        name: "Nitro",
        price: 36000,
        category: "beauty",
        image: "static/images/perfume21.jpg"
    },
    {
          id: 22,
        name: "Asad",
        price: 26000,
        category: "beauty",
        image: "static/images/perfume22.jpg"
    },
    {
          id: 23,
        name: "Island breeze",
        price: 36000,
        category: "beauty",
        image: "static/images/perfume23.jpg"
    },
    {
          id: 24,
        name: "Vannila voyage",
        price: 36000,
        category: "beauty",
        image: "static/images/perfume24.jpg"
    },
    {
          id: 24,
        name: "Vannila voyage",
        price: 36000,
        category: "beauty",
        image: "static/images/perfume24.jpg"
    },
    {
      id: 25,
        name: "Royal",
        price: 6000,
        category: "beauty",
        image: "static/images/perfume25.jpeg"  
    },
    {
        id: 26,
        name: "Liquid Brun",
        price: 55000,
        category: "beauty",
        image: "static/images/perfume26.jpeg"
    },
    {
        id: 27,
        name: "Now women",
        price: 8000,
        category: "beauty",
        image: "static/images/perfume27.jpeg"
    },
    {
        id: 28,
        name: "Sahiid",
        price: 6000,
        category: "beauty",
        image: "static/images/perfume28.jpeg"
    },
    {
        id: 29,
        name: "Bade's Al oud",
        price: 36000,
        category: "beauty",
        image: "static/images/perfume29.jpeg"
    },
    {
        id: 30,
        name: "Gkmen",
        price: 4500,
        category: "beauty",
        image: "static/images/perfume30.jpeg"
    },
    {
        id: 31,
        name: "Rouge",
        price: 10000,
        category: "beauty",
        image: "static/images/perfume31.jpeg"
    },
    {
        id: 33,
        name: "Imperio",
        price: 5000,
        category: "beauty",
        image: "static/images/perfume33.jpeg"
    },
    {
        id: 34,
        name: "Oud Torch",
        price: 5000,
        category: "beauty",
        image: "static/images/perfume34.jpeg"
    },
    {
        id: 35,
        name: "Valentiho",
        price: 5000,
        category: "beauty",
        image: "static/images/perfume35.jpeg"
    }
];
const container = document.getElementById("product-list");
if (container) {
    products.forEach(p => {
        //....your existing code stays  exactly as it is...
    });
}

products.forEach(p => {
  container.innerHTML += `
    <div class="product">
      <div class="img-wrap">
        <img src="${p.image}" alt="${p.name}">
      </div>
      <h3>${p.name}</h3>
      <p class="price">&#8358;${p.price.toLocaleString()}</p>
      <button>Add to Cart</button>
    </div>
  `;
});