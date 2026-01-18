export const menuData2 = {
  categories: [
    {
      id: 1,
      name_de: "Antipasti",
      name_en: "Antipasti",
      has_subcategories: false,
      order_index: 1
    },
    {
      id: 2,
      name_de: "Pizze",
      name_en: "Pizze",
      has_subcategories: true,
      order_index: 2,
      subcategories: [
        { id: 21, name_de: "Pizze Speciali", name_en: "Pizze Speciali", order_index: 1 },
        { id: 22, name_de: "Pizze Classiche", name_en: "Pizze Classiche", order_index: 2 },
        { id: 23, name_de: "Pizze Verdure", name_en: "Pizze Verdure", order_index: 3 },
        { id: 24, name_de: "Pizze Carne", name_en: "Pizze Carne", order_index: 4 },
        { id: 25, name_de: "Pizze Pesce", name_en: "Pizze Pesce", order_index: 5 },
        { id: 26, name_de: "Pizze Bianche", name_en: "Pizze Bianche", order_index: 6 }
      ]
    },
    {
      id: 3,
      name_de: "Calzoni",
      name_en: "Calzoni",
      has_subcategories: false,
      order_index: 3
    },
    {
      id: 4,
      name_de: "Pinse",
      name_en: "Pinse",
      has_subcategories: false,
      order_index: 4
    },
    {
      id: 5,
      name_de: "Paste",
      name_en: "Paste",
      has_subcategories: false,
      order_index: 5
    },
    {
      id: 6,
      name_de: "Lasagne",
      name_en: "Lasagne",
      has_subcategories: false,
      order_index: 6
    }
  ],
  items: [
    // ==================== ANTIPASTI ====================
 {
    id: "ant_1",
    category_id: 1,
    subcategory_id: null,
    title_de: "Pizza Gorgonzola e Salsicci",
    title_en: "Pizza Gorgonzola e Salsicci",
    subtitle_de: "Ab 18.– Fr.",
    subtitle_en: "Ab 18.– Fr.",
    image_url: "/image_03_1080x1920.webp",
    ingredients_de: "Tomaten, Büffelmozzarella und Basilikum",
    ingredients_en: "Tomatoes, buffalo mozzarella and basil",
    order_index: 1,
    sizes: [
      { label_de: "Vorspeise", label_en: "Appetizer", price: "13.– Fr." },
      { label_de: "Hauptspeise", label_en: "Main course", price: "19.– Fr." }
    ],
    options: []
  },
  {
    id: "ant_2",
    category_id: 1,
    subcategory_id: null,
    title_de: "Insalata di tonno",
    title_en: "Insalata di tonno",
    subtitle_de: "ab 13.– Fr.",
    subtitle_en: "from 13.– Fr.",
    image_url: "/image_07_1080x1920.webp",
    ingredients_de: "Gemischter Salat, Thunfisch und Zwiebeln",
    ingredients_en: "Mixed salad, tuna and onions",
    order_index: 2,
    sizes: [
      { label_de: "Vorspeise", label_en: "Appetizer", price: "13.– Fr." },
      { label_de: "Hauptspeise", label_en: "Main course", price: "19.– Fr." }
    ],
    options: []
  },
  {
    id: "ant_3",
    category_id: 1,
    subcategory_id: null,
    title_de: "Insalata greca",
    title_en: "Insalata greca",
    subtitle_de: "ab 13.– Fr.",
    subtitle_en: "from 13.– Fr.",
    image_url: "/image_04_1080x1920.webp",
    ingredients_de: "Peperoni, Gurke, Balsamico, Cherrytomaten, Fetakäse und schwarze Oliven",
    ingredients_en: "Pepperoni, cucumber, balsamic vinegar, cherry tomatoes, feta cheese and black olives",
    order_index: 3,
    sizes: [
      { label_de: "Vorspeise", label_en: "Appetizer", price: "13.– Fr." },
      { label_de: "Hauptspeise", label_en: "Main course", price: "19.– Fr." }
    ],
    options: []
  },
  {
    id: "ant_4",
    category_id: 1,
    subcategory_id: null,
    title_de: "Insalata mista",
    title_en: "Insalata mista",
    subtitle_de: "ab 11.– Fr.",
    subtitle_en: "from 11.– Fr.",
    image_url: "/image_05_1080x1920.webp",
    ingredients_de: "Ein gemischter Salat",
    ingredients_en: "A mixed salad",
    order_index: 4,
    sizes: [
      { label_de: "Vorspeise", label_en: "Appetizer", price: "11.– Fr." },
      { label_de: "Hauptspeise", label_en: "Main course", price: "17.– Fr." }
    ],
    options: []
  },
  {
    id: "ant_5",
    category_id: 1,
    subcategory_id: null,
    title_de: "Insalata rucola grana",
    title_en: "Insalata rucola grana",
    subtitle_de: "ab 10.– Fr.",
    subtitle_en: "from 10.– Fr.",
    image_url: "/image_06_1080x1920.webp",
    ingredients_de: "Rucola, Balsamico und Parmesansplitter",
    ingredients_en: "Rocket, balsamic vinegar and Parmesan shavings",
    order_index: 5,
    sizes: [
      { label_de: "Vorspeise", label_en: "Appetizer", price: "10.– Fr." },
      { label_de: "Hauptspeise", label_en: "Main course", price: "16.– Fr." }
    ],
    options: []
  },
  {
    id: "ant_6",
    category_id: 1,
    subcategory_id: null,
    title_de: "Insalata verde",
    title_en: "Insalata verde",
    subtitle_de: "ab 7.– Fr.",
    subtitle_en: "from 7.– Fr.",
    image_url: "/image_08_1080x1920.webp",
    ingredients_de: "Ein grüner Salat",
    ingredients_en: "A green salad",
    order_index: 6,
    sizes: [
      { label_de: "Vorspeise", label_en: "Appetizer", price: "7.– Fr." },
      { label_de: "Hauptspeise", label_en: "Main course", price: "13.– Fr." }
    ],
    options: []
  },
  {
    id: "ant_7",
    category_id: 1,
    subcategory_id: null,
    title_de: "Pommes",
    title_en: "Pommes",
    subtitle_de: "9.– Fr.",
    subtitle_en: "9.– Fr.",
    image_url: "/image_75_1080x1920.webp",
    ingredients_de: "",
    ingredients_en: "",
    order_index: 7,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "9.– Fr." }
    ],
    options: []
  },
  {
    id: "ant_8",
    category_id: 1,
    subcategory_id: null,
    title_de: "Trüffel Pommes",
    title_en: "Truffle Pommes",
    subtitle_de: "12.– Fr.",
    subtitle_en: "12.– Fr.",
    image_url: "/image_81_1080x1920.webp",
    ingredients_de: "Pommes, Trüffel und Parmesan",
    ingredients_en: "French fries, truffles and parmesan",
    order_index: 8,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "12.– Fr." }
    ],
    options: []
  },
  {
    id: "ant_9",
    category_id: 1,
    subcategory_id: null,
    title_de: "Fitnessteller",
    title_en: "Fitnessteller",
    subtitle_de: "24.– Fr.",
    subtitle_en: "24.– Fr.",
    image_url: "/placeholder_01_1080x1920.jpeg",
    ingredients_de: "Hühnchen, Mais, Cherrytomaten, Oliven, Ei und Gurken",
    ingredients_en: "Chicken, corn, cherry tomatoes, olives, egg and cucumber",
    order_index: 9,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "24.– Fr." }
    ],
    options: []
  },
  {
    id: "ant_10",
    category_id: 1,
    subcategory_id: null,
    title_de: "Insalata Cesare",
    title_en: "Insalata Cesare",
    subtitle_de: "25.– Fr.",
    subtitle_en: "25.– Fr.",
    image_url: "/placeholder_01_1080x1920.jpeg",
    ingredients_de: "Gemischter Salat, Parmesan, Poulet, Croûton und Kürbiskerne",
    ingredients_en: "Mixed salad, parmesan, chicken, croutons and pumpkin seeds",
    order_index: 10,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "25.– Fr." }
    ],
    options: []
  },
  {
    id: "ant_11",
    category_id: 1,
    subcategory_id: null,
    title_de: "Antipasti della Casa",
    title_en: "Antipasti della Casa",
    subtitle_de: "29.– Fr.",
    subtitle_en: "29.– Fr.",
    image_url: "/placeholder_01_1080x1920.jpeg",
    ingredients_de: "Käse, verschiedene Salami, Oliven und Büffelmozzarella",
    ingredients_en: "Cheese, various salami, olives and buffalo mozzarella",
    order_index: 11,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "29.– Fr." }
    ],
    options: []
  },
  {
    id: "ant_12",
    category_id: 1,
    subcategory_id: null,
    title_de: "Antipasto Valtellina",
    title_en: "Antipasto Valtellina",
    subtitle_de: "25.– Fr.",
    subtitle_en: "25.– Fr.",
    image_url: "/placeholder_01_1080x1920.jpeg",
    ingredients_de: "Bresaola, Rucola und Parmesan",
    ingredients_en: "Bresaola, rocket and parmesan",
    order_index: 12,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "25.– Fr." }
    ],
    options: []
  },
  {
    id: "ant_13",
    category_id: 1,
    subcategory_id: null,
    title_de: "Bruschetta",
    title_en: "Bruschetta",
    subtitle_de: "13.– Fr.",
    subtitle_en: "13.– Fr.",
    image_url: "/placeholder_01_1080x1920.jpeg",
    ingredients_de: "Tomaten und Knoblauch",
    ingredients_en: "Tomatoes and garlic",
    order_index: 13,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "13.– Fr." }
    ],
    options: []
  },
  {
    id: "ant_14",
    category_id: 1,
    subcategory_id: null,
    title_de: "Burrata e Crudo",
    title_en: "Burrata e Crudo",
    subtitle_de: "18.– Fr.",
    subtitle_en: "18.– Fr.",
    image_url: "/placeholder_01_1080x1920.jpeg",
    ingredients_de: "Parmaschinken und Burrata (Sonderform des Mozzarella)",
    ingredients_en: "Parma ham and burrata (special form of mozzarella)",
    order_index: 14,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "18.– Fr." }
    ],
    options: []
  },
  {
    id: "piz_spec_1",
    category_id: 2,
    subcategory_id: 21,
    title_de: "Pizza Al Padrone",
    title_en: "Pizza Al Padrone",
    subtitle_de: "ab 20.– Fr.",
    subtitle_en: "from 20.– Fr.",
    image_url: "/image_17_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Rindfleisch und Zwiebeln",
    ingredients_en: "Tomatoes, mozzarella, beef and onions",
    order_index: 1,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "20.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "22.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "44.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_spec_2",
    category_id: 2,
    subcategory_id: 21,
    title_de: "Pizza Bachmann",
    title_en: "Pizza Bachmann",
    subtitle_de: "ab 23.– Fr.",
    subtitle_en: "from 23.– Fr.",
    image_url: "/image_20_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Pizzaschinken, Steinpilze und Knoblauch",
    ingredients_en: "Tomatoes, mozzarella, pizza ham, porcini mushrooms and garlic",
    order_index: 2,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "23.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "25.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "50.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_spec_3",
    category_id: 2,
    subcategory_id: 21,
    title_de: "Pizza Balkan",
    title_en: "Pizza Balkan",
    subtitle_de: "ab 23.– Fr.",
    subtitle_en: "from 23.– Fr.",
    image_url: "/image_21_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Ei, Beef-Salami, Peperoni, Pilze, Oliven und Artischocken",
    ingredients_en: "Tomatoes, mozzarella, egg, beef salami, pepperoni, mushrooms, olives and artichokes",
    order_index: 3,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "23.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "25.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "50.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_spec_4",
    category_id: 2,
    subcategory_id: 21,
    title_de: "Pizza Contadina",
    title_en: "Pizza Contadina",
    subtitle_de: "ab 22.– Fr.",
    subtitle_en: "from 22.– Fr.",
    image_url: "/image_26_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Salsiccia, Peperoni und Zwiebel",
    ingredients_en: "Tomatoes, mozzarella, salsiccia, pepperoni and onion",
    order_index: 4,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_spec_5",
    category_id: 2,
    subcategory_id: 21,
    title_de: "Pizza Dübendorf",
    title_en: "Pizza Dübendorf",
    subtitle_de: "ab 22.– Fr.",
    subtitle_en: "from 22.– Fr.",
    image_url: "/image_29_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Pizzaschinken und scharfer Salami",
    ingredients_en: "Tomatoes, mozzarella, pizza ham and spicy salami",
    order_index: 5,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_spec_6",
    category_id: 2,
    subcategory_id: 21,
    title_de: "Pizza Gran Gusto",
    title_en: "Pizza Gran Gusto",
    subtitle_de: "ab 23.– Fr.",
    subtitle_en: "from 23.– Fr.",
    image_url: "/image_38_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Pizzaschinken, Gorgonzola, Ei und Pilze",
    ingredients_en: "Tomatoes, mozzarella, pizza ham, gorgonzola, egg and mushrooms",
    order_index: 6,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "23.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "25.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "50.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_spec_7",
    category_id: 2,
    subcategory_id: 21,
    title_de: "Pizza Michelangelo",
    title_en: "Pizza Michelangelo",
    subtitle_de: "ab 22.– Fr.",
    subtitle_en: "from 22.– Fr.",
    image_url: "/image_44_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Parmaschinken, Rucola, Mascarpone und Cherrytomaten",
    ingredients_en: "Tomatoes, mozzarella, Parma ham, rocket, mascarpone and cherry tomatoes",
    order_index: 7,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_spec_8",
    category_id: 2,
    subcategory_id: 21,
    title_de: "Pizza Parmigiana",
    title_en: "Pizza Parmigiana",
    subtitle_de: "ab 21.– Fr.",
    subtitle_en: "from 21.– Fr.",
    image_url: "/image_49_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Parmaschinken, Rucola und Parmesan",
    ingredients_en: "Tomatoes, mozzarella, Parma ham, rocket and Parmesan cheese",
    order_index: 8,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "21.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "23.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "46.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_spec_9",
    category_id: 2,
    subcategory_id: 21,
    title_de: "Pizza Pazza",
    title_en: "Pizza Pazza",
    subtitle_de: "ab 24.– Fr.",
    subtitle_en: "from 24.– Fr.",
    image_url: "/image_51_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Pilze, Peperoni, Salamino, Oliven und Sardellen",
    ingredients_en: "Tomatoes, mozzarella, mushrooms, pepperoni, salamino, olives and anchovies",
    order_index: 9,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "24.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "26.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "52.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_spec_10",
    category_id: 2,
    subcategory_id: 21,
    title_de: "Pizza Siciliana",
    title_en: "Pizza Siciliana",
    subtitle_de: "ab 22.– Fr.",
    subtitle_en: "from 22.– Fr.",
    image_url: "/image_67_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Salami, Kapern, Zwiebel und Sardellen",
    ingredients_en: "Tomatoes, mozzarella, salami, capers, onion and anchovies",
    order_index: 10,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_spec_11",
    category_id: 2,
    subcategory_id: 21,
    title_de: "Pizza Veneziana",
    title_en: "Pizza Veneziana",
    subtitle_de: "ab 23.– Fr.",
    subtitle_en: "from 23.– Fr.",
    image_url: "/image_72_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, scharfer Salami, Pizzaschinken, Gorgonzola und Ei",
    ingredients_en: "Tomatoes, mozzarella, spicy salami, pizza ham, gorgonzola and egg",
    order_index: 11,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "23.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "25.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "50.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_spec_12",
    category_id: 2,
    subcategory_id: 21,
    title_de: "Pizza Zurigo",
    title_en: "Pizza Zurigo",
    subtitle_de: "ab 21.– Fr.",
    subtitle_en: "from 21.– Fr.",
    image_url: "/image_91_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Salsiccia, Gorgonzola und Rucola",
    ingredients_en: "Tomatoes, mozzarella, salsiccia, gorgonzola and rocket",
    order_index: 12,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "21.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "23.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "46.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_class_1",
    category_id: 2,
    subcategory_id: 22,
    title_de: "Pizza 4 Stagioni",
    title_en: "Pizza 4 Stagioni",
    subtitle_de: "ab 22.– Fr.",
    subtitle_en: "from 22.– Fr.",
    image_url: "/image_59_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Pizzaschinken, Peperoni, Pilze, Oliven und Artischocken",
    ingredients_en: "Tomatoes, mozzarella, pizza ham, pepperoni, mushrooms, olives and artichokes",
    order_index: 1,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_class_2",
    category_id: 2,
    subcategory_id: 22,
    title_de: "Pizza Capricciosa",
    title_en: "Pizza Capricciosa",
    subtitle_de: "ab 22.– Fr.",
    subtitle_en: "from 22.– Fr.",
    image_url: "/image_24_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Pizzaschinken, Pilze und Artischocken",
    ingredients_en: "Tomatoes, mozzarella, pizza ham, mushrooms and artichokes",
    order_index: 2,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_class_3",
    category_id: 2,
    subcategory_id: 22,
    title_de: "Pizza Diavola",
    title_en: "Pizza Diavola",
    subtitle_de: "ab 19.– Fr.",
    subtitle_en: "from 19.– Fr.",
    image_url: "/image_28_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und scharfer Salami",
    ingredients_en: "Tomatoes, mozzarella and spicy salami",
    order_index: 3,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "19.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "21.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "42.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_class_4",
    category_id: 2,
    subcategory_id: 22,
    title_de: "Pizza Hawaii",
    title_en: "Pizza Hawaii",
    subtitle_de: "ab 21.– Fr.",
    subtitle_en: "from 21.– Fr.",
    image_url: "/image_39_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Pizzaschinken und Ananas",
    ingredients_en: "Tomatoes, mozzarella, pizza ham and pineapple",
    order_index: 4,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "21.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "23.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "46.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_class_5",
    category_id: 2,
    subcategory_id: 22,
    title_de: "Pizza Margherita",
    title_en: "Pizza Margherita",
    subtitle_de: "ab 16.– Fr.",
    subtitle_en: "from 16.– Fr.",
    image_url: "/image_41_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und Oregano",
    ingredients_en: "Tomatoes, mozzarella and oregano",
    order_index: 5,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "16.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "18.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "36.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_class_6",
    category_id: 2,
    subcategory_id: 22,
    title_de: "Pizza Napoli",
    title_en: "Pizza Napoli",
    subtitle_de: "ab 20.– Fr.",
    subtitle_en: "from 20.– Fr.",
    image_url: "/image_46_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Sardellen und Kapern",
    ingredients_en: "Tomatoes, mozzarella, anchovies and capers",
    order_index: 6,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "20.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "22.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "44.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_class_7",
    category_id: 2,
    subcategory_id: 22,
    title_de: "Pizza Patatosa",
    title_en: "Pizza Patatosa",
    subtitle_de: "ab 18.– Fr.",
    subtitle_en: "from 18.– Fr.",
    image_url: "/image_50_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und Pommes",
    ingredients_en: "Tomatoes, mozzarella and chips",
    order_index: 7,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "18.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "20.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "40.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_class_8",
    category_id: 2,
    subcategory_id: 22,
    title_de: "Pizza Prosciutto",
    title_en: "Pizza Prosciutto",
    subtitle_de: "ab 19.– Fr.",
    subtitle_en: "from 19.– Fr.",
    image_url: "/image_56_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und Pizzaschinken",
    ingredients_en: "Tomatoes, mozzarella and pizza ham",
    order_index: 8,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "19.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "21.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "42.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_class_9",
    category_id: 2,
    subcategory_id: 22,
    title_de: "Pizza Prosciutto e Funghi",
    title_en: "Pizza Prosciutto e Funghi",
    subtitle_de: "ab 21.– Fr.",
    subtitle_en: "from 21.– Fr.",
    image_url: "/image_57_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Pizzaschinken und Pilze",
    ingredients_en: "Tomatoes, mozzarella, pizza ham and mushrooms",
    order_index: 9,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "21.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "23.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "46.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_class_10",
    category_id: 2,
    subcategory_id: 22,
    title_de: "Pizza Romana",
    title_en: "Pizza Romana",
    subtitle_de: "ab 18.– Fr.",
    subtitle_en: "from 18.– Fr.",
    image_url: "/image_61_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und Sardelle",
    ingredients_en: "Tomatoes, mozzarella and anchovy",
    order_index: 10,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "18.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "20.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "40.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_class_11",
    category_id: 2,
    subcategory_id: 22,
    title_de: "Pizza Salsiccia",
    title_en: "Pizza Salsiccia",
    subtitle_de: "ab 19.– Fr.",
    subtitle_en: "from 19.– Fr.",
    image_url: "/image_65_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und italienische Wurst",
    ingredients_en: "Tomatoes, mozzarella and Italian sausage",
    order_index: 11,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "19.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "21.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "42.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_class_12",
    category_id: 2,
    subcategory_id: 22,
    title_de: "Pizza Bufala",
    title_en: "Pizza Bufala",
    subtitle_de: "ab 21.– Fr.",
    subtitle_en: "from 21.– Fr.",
    image_url: "/image_84_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und Mozzarella di Bufala",
    ingredients_en: "Tomatoes, mozzarella and mozzarella di Bufala",
    order_index: 12,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "21.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "23.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "46.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_class_13",
    category_id: 2,
    subcategory_id: 22,
    title_de: "Pizza Quattro Formaggi",
    title_en: "Pizza Quattro Formaggi",
    subtitle_de: "ab 20.– Fr.",
    subtitle_en: "from 20.– Fr.",
    image_url: "/image_58_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und gemischte Käsesorten",
    ingredients_en: "Tomatoes, mozzarella and mixed cheeses",
    order_index: 13,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "20.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "22.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "44.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_class_14",
    category_id: 2,
    subcategory_id: 22,
    title_de: "Pizza Gorgonzola",
    title_en: "Pizza Gorgonzola",
    subtitle_de: "ab 18.– Fr.",
    subtitle_en: "from 18.– Fr.",
    image_url: "/image_36_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und Gorgonzola",
    ingredients_en: "Tomatoes, mozzarella and gorgonzola",
    order_index: 14,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "18.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "20.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "40.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ver_1",
    category_id: 2,
    subcategory_id: 23,
    title_de: "Pizza Dello Chef",
    title_en: "Pizza Dello Chef",
    subtitle_de: "ab 20.– Fr.",
    subtitle_en: "from 20.– Fr.",
    image_url: "/image_27_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Walnüsse, Gorgonzola und Rucola",
    ingredients_en: "Tomatoes, mozzarella, walnuts, gorgonzola and rocket",
    order_index: 1,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "20.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "22.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "44.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ver_2",
    category_id: 2,
    subcategory_id: 23,
    title_de: "Pizza Fresca",
    title_en: "Pizza Fresca",
    subtitle_de: "ab 22.– Fr.",
    subtitle_en: "from 22.– Fr.",
    image_url: "/image_30_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Bufala, Rucola und Cherrytomaten",
    ingredients_en: "Tomatoes, mozzarella, bufala, rocket and cherry tomatoes",
    order_index: 2,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ver_3",
    category_id: 2,
    subcategory_id: 23,
    title_de: "Pizza Funghi",
    title_en: "Pizza Funghi",
    subtitle_de: "ab 19.– Fr.",
    subtitle_en: "from 19.– Fr.",
    image_url: "/image_32_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und frische Champignons",
    ingredients_en: "Tomatoes, mozzarella and fresh mushrooms",
    order_index: 3,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "19.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "21.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "42.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ver_4",
    category_id: 2,
    subcategory_id: 23,
    title_de: "Pizza Italia",
    title_en: "Pizza Italia",
    subtitle_de: "ab 19.– Fr.",
    subtitle_en: "from 19.– Fr.",
    image_url: "/image_40_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Spinat, Ricotta und frische Tomaten",
    ingredients_en: "Tomatoes, mozzarella, spinach, ricotta and fresh tomatoes",
    order_index: 4,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "19.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "21.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "42.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ver_5",
    category_id: 2,
    subcategory_id: 23,
    title_de: "Pizza Misto Bosco",
    title_en: "Pizza Misto Bosco",
    subtitle_de: "ab 22.– Fr.",
    subtitle_en: "from 22.– Fr.",
    image_url: "/image_45_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Steinpilze und Champignons",
    ingredients_en: "Tomatoes, mozzarella, porcini mushrooms and mushrooms",
    order_index: 5,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ver_6",
    category_id: 2,
    subcategory_id: 23,
    title_de: "Pizza Olive",
    title_en: "Pizza Olive",
    subtitle_de: "ab 18.– Fr.",
    subtitle_en: "from 18.– Fr.",
    image_url: "/image_47_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und Oliven",
    ingredients_en: "Tomatoes, mozzarella and olives",
    order_index: 6,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "18.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "20.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "40.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ver_7",
    category_id: 2,
    subcategory_id: 23,
    title_de: "Pizza Porcini",
    title_en: "Pizza Porcini",
    subtitle_de: "ab 20.– Fr.",
    subtitle_en: "from 20.– Fr.",
    image_url: "/image_54_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und Steinpilze",
    ingredients_en: "Tomatoes, mozzarella and porcini mushrooms",
    order_index: 7,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "20.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "22.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "44.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ver_8",
    category_id: 2,
    subcategory_id: 23,
    title_de: "Pizza Rucola",
    title_en: "Pizza Rucola",
    subtitle_de: "ab 17.– Fr.",
    subtitle_en: "from 17.– Fr.",
    image_url: "/image_62_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und Rucola",
    ingredients_en: "Tomatoes, mozzarella and rocket",
    order_index: 8,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "17.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "19.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "38.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ver_9",
    category_id: 2,
    subcategory_id: 23,
    title_de: "Pizza Verdure Miste",
    title_en: "Pizza Verdure Miste",
    subtitle_de: "ab 20.– Fr.",
    subtitle_en: "from 20.– Fr.",
    image_url: "/image_73_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Zucchini, Peperoni und Aubergine",
    ingredients_en: "Tomatoes, mozzarella, zucchini, pepperoni and eggplant",
    order_index: 9,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "20.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "22.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "44.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ver_10",
    category_id: 2,
    subcategory_id: 23,
    title_de: "Pizza Ricotta Spinaci",
    title_en: "Pizza Ricotta Spinaci",
    subtitle_de: "ab 19.– Fr.",
    subtitle_en: "from 19.– Fr.",
    image_url: "/placeholder_01_1080x1920.jpeg",
    ingredients_de: "Tomaten, Mozzarella, Ricotta und Spinat",
    ingredients_en: "Tomatoes, mozzarella, ricotta and spinach",
    order_index: 10,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "19.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "21.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "42.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ca_1",
    category_id: 2,
    subcategory_id: 24,
    title_de: "Pizza Americana",
    title_en: "Pizza Americana",
    subtitle_de: "ab 21.– Fr.",
    subtitle_en: "from 21.– Fr.",
    image_url: "/image_18_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Kalbfleisch und Pommes",
    ingredients_en: "Tomatoes, mozzarella, veal and chips",
    order_index: 1,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "21.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "23.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "46.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ca_2",
    category_id: 2,
    subcategory_id: 24,
    title_de: "Pizza Amore",
    title_en: "Pizza Amore",
    subtitle_de: "ab 22.– Fr.",
    subtitle_en: "from 22.– Fr.",
    image_url: "/image_19_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Bresaola und Mascarpone",
    ingredients_en: "Tomatoes, mozzarella, bresaola and mascarpone",
    order_index: 2,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ca_3",
    category_id: 2,
    subcategory_id: 24,
    title_de: "Pizza Beef Salami",
    title_en: "Pizza Beef Salami",
    subtitle_de: "ab 21.– Fr.",
    subtitle_en: "from 21.– Fr.",
    image_url: "/image_22_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Beef-Salami und Oliven",
    ingredients_en: "Tomatoes, mozzarella, beef salami and olives",
    order_index: 3,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "21.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "23.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "46.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ca_4",
    category_id: 2,
    subcategory_id: 24,
    title_de: "Pizza Carbonara",
    title_en: "Pizza Carbonara",
    subtitle_de: "ab 22.– Fr.",
    subtitle_en: "from 22.– Fr.",
    image_url: "/image_25_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Speckwürfel, Ei und Parmesan",
    ingredients_en: "Tomatoes, mozzarella, diced bacon, egg and Parmesan cheese",
    order_index: 4,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ca_5",
    category_id: 2,
    subcategory_id: 24,
    title_de: "Pizza McDonald’s",
    title_en: "Pizza McDonald’s",
    subtitle_de: "ab 20.– Fr.",
    subtitle_en: "from 20.– Fr.",
    image_url: "/image_43_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Pouletwurst und Pommes",
    ingredients_en: "Tomatoes, mozzarella, chicken sausage and chips",
    order_index: 5,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "20.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "22.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "44.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ca_6",
    category_id: 2,
    subcategory_id: 24,
    title_de: "Pizza Parma",
    title_en: "Pizza Parma",
    subtitle_de: "ab 19.– Fr.",
    subtitle_en: "from 19.– Fr.",
    image_url: "/image_48_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und Parmaschinken",
    ingredients_en: "Tomatoes, mozzarella and Parma ham",
    order_index: 6,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "19.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "21.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "42.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ca_7",
    category_id: 2,
    subcategory_id: 24,
    title_de: "Pizza Pollo",
    title_en: "Pizza Pollo",
    subtitle_de: "ab 20.– Fr.",
    subtitle_en: "from 20.– Fr.",
    image_url: "/image_53_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und Hähnchenfleisch",
    ingredients_en: "Tomatoes, mozzarella and chicken",
    order_index: 7,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "20.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "22.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "44.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ca_8",
    category_id: 2,
    subcategory_id: 24,
    title_de: "Pizza Rustica",
    title_en: "Pizza Rustica",
    subtitle_de: "ab 21.– Fr.",
    subtitle_en: "from 21.– Fr.",
    image_url: "/image_63_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Ei und Speckwürfel",
    ingredients_en: "Tomatoes, mozzarella, egg and diced bacon",
    order_index: 8,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "21.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "23.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "46.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ca_9",
    category_id: 2,
    subcategory_id: 24,
    title_de: "Pizza San Marco",
    title_en: "Pizza San Marco",
    subtitle_de: "ab 21.– Fr.",
    subtitle_en: "from 21.– Fr.",
    image_url: "/image_66_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Knoblauch, scharfe Salami und Mascarpone",
    ingredients_en: "Tomatoes, mozzarella, garlic, spicy salami and mascarpone",
    order_index: 9,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "21.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "23.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "46.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ca_10",
    category_id: 2,
    subcategory_id: 24,
    title_de: "Pizza Südtirol",
    title_en: "Pizza Südtirol",
    subtitle_de: "ab 22.– Fr.",
    subtitle_en: "from 22.– Fr.",
    image_url: "/image_68_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Gorgonzola und Speckschieben",
    ingredients_en: "Tomatoes, mozzarella, gorgonzola and bacon slices",
    order_index: 10,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ca_11",
    category_id: 2,
    subcategory_id: 24,
    title_de: "Pizza Bresaola",
    title_en: "Pizza Bresaola",
    subtitle_de: "ab 23.– Fr.",
    subtitle_en: "from 23.– Fr.",
    image_url: "/image_86_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Bresaola, Rucola und Parmesan",
    ingredients_en: "Tomatoes, mozzarella, bresaola, rocket and parmesan",
    order_index: 11,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "23.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "25.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "50.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ca_12",
    category_id: 2,
    subcategory_id: 24,
    title_de: "Pizza Gorgonzola e Salsiccia",
    title_en: "Pizza Gorgonzola e Salsiccia",
    subtitle_de: "ab 21.– Fr.",
    subtitle_en: "from 21.– Fr.",
    image_url: "/image_37_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Gorgonzola und Salsiccia",
    ingredients_en: "Tomatoes, mozzarella, gorgonzola and salsiccia",
    order_index: 12,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "21.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "23.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "46.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_ca_13",
    category_id: 2,
    subcategory_id: 24,
    title_de: "Pizza Ricotta e Salsiccia",
    title_en: "Pizza Ricotta e Salsiccia",
    subtitle_de: "ab 20.– Fr.",
    subtitle_en: "from 20.– Fr.",
    image_url: "/image_60_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und italienische Wurst",
    ingredients_en: "Tomatoes, mozzarella and Italian sausage",
    order_index: 13,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "20.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "22.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "44.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  
  {
    id: "piz_pes_1",
    category_id: 2,
    subcategory_id: 25,
    title_de: "Pizza Frutti di Mare",
    title_en: "Pizza Frutti di Mare",
    subtitle_de: "ab 20.– Fr.",
    subtitle_en: "from 20.– Fr.",
    image_url: "/image_31_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Knoblauch und Meeresfrüchte",
    ingredients_en: "Tomatoes, mozzarella, garlic and seafood",
    order_index: 1,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "20.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "22.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "44.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_pes_2",
    category_id: 2,
    subcategory_id: 25,
    title_de: "Pizza Gamberoni",
    title_en: "Pizza Gamberoni",
    subtitle_de: "ab 22.– Fr.",
    subtitle_en: "from 22.– Fr.",
    image_url: "/image_33_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Riesen-Krevetten, Knoblauch und Spinat",
    ingredients_en: "Tomatoes, mozzarella, giant prawns, garlic and spinach",
    order_index: 2,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_pes_3",
    category_id: 2,
    subcategory_id: 25,
    title_de: "Pizza Mari e Monti",
    title_en: "Pizza Mari e Monti",
    subtitle_de: "ab 22.– Fr.",
    subtitle_en: "from 22.– Fr.",
    image_url: "/image_42_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Gamberoni, Zucchini und Knoblauch",
    ingredients_en: "Tomatoes, mozzarella, gamberoni, zucchini and garlic",
    order_index: 3,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_pes_4",
    category_id: 2,
    subcategory_id: 25,
    title_de: "Pizza Pescatora",
    title_en: "Pizza Pescatora",
    subtitle_de: "ab 26.– Fr.",
    subtitle_en: "from 26.– Fr.",
    image_url: "/image_52_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Riesen-Krevetten und Meeresfrüchte",
    ingredients_en: "Tomatoes, mozzarella, giant prawns and seafood",
    order_index: 4,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "26.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "28.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "56.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan",  label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_pes_5",
    category_id: 2,
    subcategory_id: 25,
    title_de: "Pizza Salmone",
    title_en: "Pizza Salmone",
    subtitle_de: "ab 22.– Fr.",
    subtitle_en: "from 22.– Fr.",
    image_url: "/image_64_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Lachs, Zwiebel und Kapern",
    ingredients_en: "Tomatoes, mozzarella, salmon, onion and capers",
    order_index: 5,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_pes_6",
    category_id: 2,
    subcategory_id: 25,
    title_de: "Pizza Tonno",
    title_en: "Pizza Tonno",
    subtitle_de: "ab 20.– Fr.",
    subtitle_en: "from 20.– Fr.",
    image_url: "/image_70_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Thunfisch und Zwiebel",
    ingredients_en: "Tomatoes, mozzarella, tuna and onion",
    order_index: 6,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "20.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "22.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "44.– Fr." }
    ],
    options: [
      { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },

  {
    id: "piz_bia_1",
    category_id: 2,
    subcategory_id: 26,
    title_de: "Pizza Biancaneve",
    title_en: "Pizza Biancaneve",
    subtitle_de: "ab 19.– Fr.",
    subtitle_en: "from 19.– Fr.",
    image_url: "/image_23_1080x1920.webp",
    ingredients_de: "Mozzarella, Zucchini, Ei, Zwiebel und Oliven",
    ingredients_en: "Mozzarella, zucchini, egg, onion and olives",
    order_index: 1,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "19.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "21.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "42.– Fr." }
    ],
    options: [
      { type: "glutenfree", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_bia_2",
    category_id: 2,
    subcategory_id: 26,
    title_de: "Pizza Giulia",
    title_en: "Pizza Giulia",
    subtitle_de: "ab 21.– Fr.",
    subtitle_en: "from 21.– Fr.",
    image_url: "/image_34_1080x1920.webp",
    ingredients_de: "Mozzarella, Parmaschinken, Brie und Cherrytomaten",
    ingredients_en: "Mozzarella, Parma ham, Brie and cherry tomatoes",
    order_index: 2,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "21.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "23.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "46.– Fr." }
    ],
    options: [
      { type: "glutenfree", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_bia_3",
    category_id: 2,
    subcategory_id: 26,
    title_de: "Pizza Gondola",
    title_en: "Pizza Gondola",
    subtitle_de: "ab 23.– Fr.",
    subtitle_en: "from 23.– Fr.",
    image_url: "/image_35_1080x1920.webp",
    ingredients_de: "Mozzarella, verschiedene Käsesorten, Salsiccia und Ei",
    ingredients_en: "Mozzarella, various cheeses, salsiccia and egg",
    order_index: 3,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "23.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "25.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "50.– Fr." }
    ],
    options: [
      { type: "glutenfree", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_bia_4",
    category_id: 2,
    subcategory_id: 26,
    title_de: "Pizza Primavera",
    title_en: "Pizza Primavera",
    subtitle_de: "ab 19.– Fr.",
    subtitle_en: "from 19.– Fr.",
    image_url: "/image_55_1080x1920.webp",
    ingredients_de: "Mozzarella, Cherrytomaten, Parmesan und Rucola",
    ingredients_en: "Mozzarella, cherry tomatoes, parmesan and rocket",
    order_index: 4,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "19.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "21.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "42.– Fr." }
    ],
    options: [
      { type: "glutenfree", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_bia_5",
    category_id: 2,
    subcategory_id: 26,
    title_de: "Pizza Veneta",
    title_en: "Pizza Veneta",
    subtitle_de: "ab 21.– Fr.",
    subtitle_en: "from 21.– Fr.",
    image_url: "/image_71_1080x1920.webp",
    ingredients_de: "Mozzarella, Aubergine, Gorgonzola und Parmesan",
    ingredients_en: "Mozzarella, eggplant, gorgonzola and parmesan",
    order_index: 5,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "21.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "23.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "46.– Fr." }
    ],
    options: [
      { type: "glutenfree", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_bia_6",
    category_id: 2,
    subcategory_id: 26,
    title_de: "Pizza Tartufata",
    title_en: "Pizza Tartufata",
    subtitle_de: "ab 25.– Fr.",
    subtitle_en: "from 25.– Fr.",
    image_url: "/image_69_1080x1920.webp",
    ingredients_de: "Mozzarella, Steinpilze, Knoblauch und Trüffel",
    ingredients_en: "Mozzarella, porcini mushrooms, garlic and truffles",
    order_index: 6,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "25.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "27.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "54.– Fr." }
    ],
    options: [
      { type: "glutenfree", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "piz_bia_7",
    category_id: 2,
    subcategory_id: 26,
    title_de: "Pizza Campagnola",
    title_en: "Pizza Campagnola",
    subtitle_de: "ab 21.– Fr.",
    subtitle_en: "from 21.– Fr.",
    image_url: "/image_87_1080x1920.webp",
    ingredients_de: "Mozzarella, Speckschieben und Mascarpone",
    ingredients_en: "Mozzarella, bacon slices and mascarpone",
    order_index: 7,
    sizes: [
      { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "21.– Fr." },
      { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "23.– Fr." },
      { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "46.– Fr." }
    ],
    options: [
      { type: "glutenfree", label_de: "Glutenfrei", label_en: "Gluten free", price_modifier: "+2.– CHF" },
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "cal_1",
    category_id: 3,
    subcategory_id: null,
    title_de: "Calzone Beef",
    title_en: "Calzone Beef",
    subtitle_de: "ab 23.– Fr.",
    subtitle_en: "from 23.– Fr.",
    image_url: "/image_01_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und Beef-Salami",
    ingredients_en: "Tomatoes, mozzarella and beef salami",
    order_index: 1,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "23.– Fr." }
    ],
    options: [
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "cal_2",
    category_id: 3,
    subcategory_id: null,
    title_de: "Calzone Classico",
    title_en: "Calzone Classico",
    subtitle_de: "ab 23.– Fr.",
    subtitle_en: "from 23.– Fr.",
    image_url: "/image_02_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Pizzaschinken, Ei und Pesto",
    ingredients_en: "Tomatoes, mozzarella, pizza ham, egg and pesto",
    order_index: 2,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "23.– Fr." }
    ],
    options: [
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "cal_3",
    category_id: 3,
    subcategory_id: null,
    title_de: "Calzone Popeye",
    title_en: "Calzone Popeye",
    subtitle_de: "ab 22.– Fr.",
    subtitle_en: "from 22.– Fr.",
    image_url: "/image_01_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Ricotta und Spinat",
    ingredients_en: "Tomatoes, mozzarella, ricotta and spinach",
    order_index: 3,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "22.– Fr." }
    ],
    options: [
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "cal_4",
    category_id: 3,
    subcategory_id: null,
    title_de: "Calzone Veneziana",
    title_en: "Calzone Veneziana",
    subtitle_de: "ab 26.– Fr.",
    subtitle_en: "from 26.– Fr.",
    image_url: "/image_01_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Gamberoni, Spinat und Knoblauch",
    ingredients_en: "Tomatoes, mozzarella, gamberoni, spinach and garlic",
    order_index: 4,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "26.– Fr." }
    ],
    options: [
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "cal_5",
    category_id: 3,
    subcategory_id: null,
    title_de: "Calzone Verdure",
    title_en: "Calzone Verdure",
    subtitle_de: "ab 22.– Fr.",
    subtitle_en: "from 22.– Fr.",
    image_url: "/image_01_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella und Gemüse",
    ingredients_en: "Tomatoes, mozzarella and vegetables",
    order_index: 5,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "22.– Fr." }
    ],
    options: [
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },

  {
    id: "pin_1",
    category_id: 4,
    subcategory_id: null,
    title_de: "Pinsa Classica",
    title_en: "Pinsa Classica",
    subtitle_de: "ab 19.– Fr.",
    subtitle_en: "from 19.– Fr.",
    image_url: "/image_13_1080x1920.webp",
    ingredients_de: "Tomaten und Mozzarella",
    ingredients_en: "Tomatoes and mozzarella",
    order_index: 1,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "19.– Fr." }
    ],
    options: [
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "pin_2",
    category_id: 4,
    subcategory_id: null,
    title_de: "Pinsa Crudo e Bufala",
    title_en: "Pinsa Crudo e Bufala",
    subtitle_de: "ab 26.– Fr.",
    subtitle_en: "from 26.– Fr.",
    image_url: "/image_14_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Bufala und Parmaschinken",
    ingredients_en: "Tomatoes, mozzarella, bufala and Parma ham",
    order_index: 2,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "26.– Fr." }
    ],
    options: [
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "pin_3",
    category_id: 4,
    subcategory_id: null,
    title_de: "Pinsa Fresca",
    title_en: "Pinsa Fresca",
    subtitle_de: "ab 26.– Fr.",
    subtitle_en: "from 26.– Fr.",
    image_url: "/image_15_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Bufala, Cherrytomaten und Rucola",
    ingredients_en: "Tomatoes, mozzarella, bufala, cherry tomatoes and rocket",
    order_index: 3,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "26.– Fr." }
    ],
    options: [
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "pin_4",
    category_id: 4,
    subcategory_id: null,
    title_de: "Pinsa Michelangelo",
    title_en: "Pinsa Michelangelo",
    subtitle_de: "ab 26.– Fr.",
    subtitle_en: "from 26.– Fr.",
    image_url: "/image_16_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Rucola, Parmaschinken, Kirschtomaten und Mascarpone",
    ingredients_en: "Tomatoes, mozzarella, rocket, Parma ham, cherry tomatoes and mascarpone cheese",
    order_index: 4,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "26.– Fr." }
    ],
    options: [
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "pin_5",
    category_id: 4,
    subcategory_id: null,
    title_de: "Pinsa Bresaola",
    title_en: "Pinsa Bresaola",
    subtitle_de: "ab 27.– Fr.",
    subtitle_en: "from 27.– Fr.",
    image_url: "/image_89_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Bresaola, Rucola und Parmesan",
    ingredients_en: "Tomatoes, mozzarella, bresaola, rocket and parmesan",
    order_index: 5,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "27.– Fr." }
    ],
    options: [
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  
  {
    id: "pas_1",
    category_id: 5,
    subcategory_id: null,
    title_de: "Spaghetti Carbonara",
    title_en: "Spaghetti Carbonara",
    subtitle_de: "24.– Fr.",
    subtitle_en: "24.– Fr.",
    image_url: "/image_76_1080x1920.webp",
    ingredients_de: "Ei, Guanciale und Pecorino",
    ingredients_en: "Egg, guanciale and pecorino",
    order_index: 1,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "24.– Fr." }
    ],
    options: []
  },
  {
    id: "pas_2",
    category_id: 5,
    subcategory_id: null,
    title_de: "Spaghetti Frutti di Mare",
    title_en: "Spaghetti Frutti di Mare",
    subtitle_de: "27.– Fr.",
    subtitle_en: "27.– Fr.",
    image_url: "/image_77_1080x1920.webp",
    ingredients_de: "Cherrytomaten, Meeresfrüchte, Knoblauch und Petersilie",
    ingredients_en: "Cherry tomatoes, seafood, garlic and parsley",
    order_index: 2,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "27.– Fr." }
    ],
    options: []
  },
  {
    id: "pas_3",
    category_id: 5,
    subcategory_id: null,
    title_de: "Tagliatelle Bolognese",
    title_en: "Tagliatelle Bolognese",
    subtitle_de: "24.– Fr.",
    subtitle_en: "24.– Fr.",
    image_url: "/image_78_1080x1920.webp",
    ingredients_de: "Tomaten und Rindfleisch",
    ingredients_en: "Tomatoes and beef",
    order_index: 3,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "24.– Fr." }
    ],
    options: []
  },
  {
    id: "pas_4",
    category_id: 5,
    subcategory_id: null,
    title_de: "Tagliatelle Salmone",
    title_en: "Tagliatelle Salmone",
    subtitle_de: "24.– Fr.",
    subtitle_en: "24.– Fr.",
    image_url: "/image_80_1080x1920.webp",
    ingredients_de: "Räucherlachs, Frühlingszwiebeln und Rahm",
    ingredients_en: "Smoked salmon, spring onions and cream",
    order_index: 4,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "24.– Fr." }
    ],
    options: []
  },
  {
    id: "pas_5",
    category_id: 5,
    subcategory_id: null,
    title_de: "Tagliatelle Porcini",
    title_en: "Tagliatelle Porcini",
    subtitle_de: "21.– Fr.",
    subtitle_en: "21.– Fr.",
    image_url: "/image_79_1080x1920.webp",
    ingredients_de: "Frische Steinpilze, Knoblauch und Petersilie",
    ingredients_en: "Fresh porcini mushrooms, garlic and parsley",
    order_index: 5,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "21.– Fr." }
    ],
    options: []
  },
  {
    id: "pas_6",
    category_id: 5,
    subcategory_id: null,
    title_de: "Penne Pesto e Mascarpone",
    title_en: "Penne Pesto e Mascarpone",
    subtitle_de: "19.– Fr.",
    subtitle_en: "19.– Fr.",
    image_url: "/image_10_1080x1920.webp",
    ingredients_de: "Basilikum, Olivenöl und Mascarpone",
    ingredients_en: "Basil, olive oil and mascarpone",
    order_index: 6,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "19.– Fr." }
    ],
    options: []
  },
  {
    id: "pas_7",
    category_id: 5,
    subcategory_id: null,
    title_de: "Penne Pomodoro e Basilico",
    title_en: "Penne Pomodoro e Basilico",
    subtitle_de: "18.– Fr.",
    subtitle_en: "18.– Fr.",
    image_url: "/image_11_1080x1920.webp",
    ingredients_de: "Tomaten und Basilikum",
    ingredients_en: "Tomatoes and basil",
    order_index: 7,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "18.– Fr." }
    ],
    options: []
  },
  {
    id: "pas_8",
    category_id: 5,
    subcategory_id: null,
    title_de: "Penne Zermatt",
    title_en: "Penne Zermatt",
    subtitle_de: "25.– Fr.",
    subtitle_en: "25.– Fr.",
    image_url: "/image_90_1080x1920.webp",
    ingredients_de: "Gorgonzola, Taleggio, Belpaese und Speckwürfel",
    ingredients_en: "Gorgonzola, Taleggio, Belpaese and diced bacon",
    order_index: 8,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "25.– Fr." }
    ],
    options: []
  },
  {
    id: "pas_9",
    category_id: 5,
    subcategory_id: null,
    title_de: "Penne Arrabbiata",
    title_en: "Penne Arrabbiata",
    subtitle_de: "19.– Fr.",
    subtitle_en: "19.– Fr.",
    image_url: "/image_11_1080x1920.webp",
    ingredients_de: "Scharfe Tomaten",
    ingredients_en: "Spicy tomatoes",
    order_index: 9,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "19.– Fr." }
    ],
    options: []
  },
  {
    id: "pas_10",
    category_id: 5,
    subcategory_id: null,
    title_de: "Gnocchi Noci Gorgonzola",
    title_en: "Gnocchi Noci Gorgonzola",
    subtitle_de: "22.– Fr.",
    subtitle_en: "22.– Fr.",
    image_url: "/image_82_1080x1920.webp",
    ingredients_de: "Gorgonzola und Walnüsse",
    ingredients_en: "Gorgonzola and walnuts",
    order_index: 10,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "22.– Fr." }
    ],
    options: []
  },
  {
    id: "pas_11",
    category_id: 5,
    subcategory_id: null,
    title_de: "Gnocchi Salsiccia Funghi e Panna",
    title_en: "Gnocchi Salsiccia Funghi e Panna",
    subtitle_de: "23.– Fr.",
    subtitle_en: "23.– Fr.",
    image_url: "/image_83_1080x1920.webp",
    ingredients_de: "Salsiccia, frische Champignons und Rahm",
    ingredients_en: "Salsiccia, fresh mushrooms and cream",
    order_index: 11,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "23.– Fr." }
    ],
    options: []
  },
  {
    id: "pas_12",
    category_id: 5,
    subcategory_id: null,
    title_de: "Gnocchi Sorrentina",
    title_en: "Gnocchi Sorrentina",
    subtitle_de: "ab 22.– Fr.",
    subtitle_en: "from 22.– Fr.",
    image_url: "/image_88_1080x1920.webp",
    ingredients_de: "Tomaten mit gratiniertem Mozzarella",
    ingredients_en: "Tomatoes with mozzarella au gratin",
    order_index: 12,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "22.– Fr." }
    ],
    options: [
      { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" }
    ]
  },
  {
    id: "pas_13",
    category_id: 5,
    subcategory_id: null,
    title_de: "Gamberoni al Tegamino",
    title_en: "Gamberoni al Tegamino",
    subtitle_de: "24.– Fr.",
    subtitle_en: "24.– Fr.",
    image_url: "/placeholder_01_1080x1920.jpeg",
    ingredients_de: "Riesenkrevetten mit Knoblauch serviert mit Tagliatelle al burro",
    ingredients_en: "King prawns with garlic served with tagliatelle al burro",
    order_index: 13,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "24.– Fr." }
    ],
    options: []
  },
  {
    id: "las_1",
    category_id: 6,
    subcategory_id: null,
    title_de: "Lasagna Rind",
    title_en: "Lasagna Rind",
    subtitle_de: "23.– Fr.",
    subtitle_en: "23.– Fr.",
    image_url: "/image_09_1080x1920.webp",
    ingredients_de: "Tomaten, Mozzarella, Rindfleisch und Besciamella",
    ingredients_en: "Tomatoes, mozzarella, beef and besciamella",
    order_index: 1,
    sizes: [
      { label_de: "Normale Portion", label_en: "Normal portion", price: "23.– Fr." }
    ],
    options: []
  }










  ]
}