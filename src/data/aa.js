// src/data/menuData.js

export const menuData = {
  categories: [
    {
      id: 1,
      name_de: "Antipasti",
      name_en: "Appetizers",
      has_subcategories: false,
      order_index: 1
    },
    {
      id: 2,
      name_de: "Pizze",
      name_en: "Pizzas",
      has_subcategories: true,
      order_index: 2,
      subcategories: [
        { id: 21, name_de: "Pizze Speciali", name_en: "Special Pizzas", order_index: 1 },
        { id: 22, name_de: "Pizze Classiche", name_en: "Classic Pizzas", order_index: 2 },
        { id: 23, name_de: "Pizze Verdure", name_en: "Vegetable Pizzas", order_index: 3 },
        { id: 24, name_de: "Pizze Carne", name_en: "Meat Pizzas", order_index: 4 },
        { id: 25, name_de: "Pizze Pesce", name_en: "Fish Pizzas", order_index: 5 },
        { id: 26, name_de: "Pizze Bianche", name_en: "White Pizzas", order_index: 6 }
      ]
    },
    {
      id: 3,
      name_de: "Calzoni",
      name_en: "Calzones",
      has_subcategories: false,
      order_index: 3
    },
    {
      id: 4,
      name_de: "Pinse",
      name_en: "Pinsa",
      has_subcategories: false,
      order_index: 4
    },
    {
      id: 5,
      name_de: "Paste",
      name_en: "Pasta",
      has_subcategories: false,
      order_index: 5
    },
    {
      id: 6,
      name_de: "Lasagne",
      name_en: "Lasagna",
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
      title_de: "Insalata caprese",
      title_en: "Caprese Salad",
      subtitle_de: "ab 13.– Fr.",
      subtitle_en: "from 13.– Fr.",
      image_url: "/image_03_1080x1920.webp",
      ingredients_de: "Tomaten, Büffelmozzarella und Basilikum",
      ingredients_en: "Tomatoes, Buffalo Mozzarella and Basil",
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
      title_en: "Tuna Salad",
      subtitle_de: "ab 13.– Fr.",
      subtitle_en: "from 13.– Fr.",
      image_url: "/image_30_1080x1920.webp",
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
      title_en: "Greek Salad",
      subtitle_de: "ab 13.– Fr.",
      subtitle_en: "from 13.– Fr.",
      image_url: "/image_v4_1080x1920.webp",
      ingredients_de: "Peperoni, Gurken, Salatkerne, Zwiebeln, Kirschtomaten, Feta-Käse und schwarze Oliven",
      ingredients_en: "Peppers, cucumber, lettuce, onions, cherry tomatoes, feta cheese and black olives",
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
      title_en: "Mixed Salad",
      subtitle_de: "ab 11.– Fr.",
      subtitle_en: "from 11.– Fr.",
      image_url: "/image_v5_1080x1920.webp",
      ingredients_de: "Gemischter Salat",
      ingredients_en: "Mixed salad",
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
      title_de: "Insalata greca con rucola e grana",
      title_en: "Greek Salad with Arugula and Parmesan",
      subtitle_de: "ab 13.– Fr.",
      subtitle_en: "from 13.– Fr.",
      image_url: "/image_03_1080x1920.webp",
      ingredients_de: "Rucola, Kirschtomaten und Parmesankäse",
      ingredients_en: "Arugula, cherry tomatoes and Parmesan cheese",
      order_index: 5,
      sizes: [
        { label_de: "Vorspeise", label_en: "Appetizer", price: "13.– Fr." },
        { label_de: "Hauptspeise", label_en: "Main course", price: "19.– Fr." }
      ],
      options: []
    },
    {
      id: "ant_6",
      category_id: 1,
      subcategory_id: null,
      title_de: "Insalata verde",
      title_en: "Green Salad",
      subtitle_de: "ab 7.– Fr.",
      subtitle_en: "from 7.– Fr.",
      image_url: "/image_28_1080x1920.webp",
      ingredients_de: "Grüner Salat",
      ingredients_en: "Green salad",
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
      title_de: "Pomodori",
      title_en: "Tomatoes",
      subtitle_de: "9.– Fr.",
      subtitle_en: "9.– Fr.",
      image_url: "/image_26_1080x1920.webp",
      ingredients_de: "Tomaten",
      ingredients_en: "Tomatoes",
      order_index: 7,
      sizes: [
        { label_de: "Normale portion", label_en: "Normal portion", price: "9.– Fr." }
      ],
      options: []
    },
    {
      id: "ant_8",
      category_id: 1,
      subcategory_id: null,
      title_de: "Peperoncini",
      title_en: "Pepperoncini",
      subtitle_de: "9.– Fr.",
      subtitle_en: "9.– Fr.",
      image_url: "/placeholder_01_1080x1920.webp",
      ingredients_de: "Hühnchen, Kirschtomaten, Oliven, Ei und Gurken",
      ingredients_en: "Chicken, cherry tomatoes, olives, egg and cucumber",
      order_index: 8,
      sizes: [
        { label_de: "Normale portion", label_en: "Normal portion", price: "9.– Fr." }
      ],
      options: []
    },
    {
      id: "ant_9",
      category_id: 1,
      subcategory_id: null,
      title_de: "Cetriolini",
      title_en: "Gherkins",
      subtitle_de: "9.– Fr.",
      subtitle_en: "9.– Fr.",
      image_url: "/placeholder_v1_1080x1920.webp",
      ingredients_de: "Hühnchen, Peperoni, Kirschtomaten, Ei und Gurken, Schalotten und Kapern (mit Büffelmozzarella und Saatgut)",
      ingredients_en: "Chicken, peppers, cherry tomatoes, egg and cucumber, shallots and capers (with buffalo mozzarella and seeds)",
      order_index: 9,
      sizes: [
        { label_de: "Normale portion", label_en: "Normal portion", price: "9.– Fr." }
      ],
      options: []
    },
    {
      id: "ant_10",
      category_id: 1,
      subcategory_id: null,
      title_de: "Antipasto della Casa",
      title_en: "House Antipasto",
      subtitle_de: "29.– Fr.",
      subtitle_en: "29.– Fr.",
      image_url: "/placeholder_02_1080x1920.webp",
      ingredients_de: "Oliven, verschiedene Salami, Oliven und Büffelmozzarella",
      ingredients_en: "Olives, various salami, olives and buffalo mozzarella",
      order_index: 10,
      sizes: [
        { label_de: "Normale portion", label_en: "Normal portion", price: "29.– Fr." }
      ],
      options: []
    },
    {
      id: "ant_11",
      category_id: 1,
      subcategory_id: null,
      title_de: "Antipasto Vallesina",
      title_en: "Vallesina Antipasto",
      subtitle_de: "25.– Fr.",
      subtitle_en: "25.– Fr.",
      image_url: "/placeholder_03_1080x1920.webp",
      ingredients_de: "Bresaola, Olivenpaté und Artischocken",
      ingredients_en: "Bresaola, olive pate and artichokes",
      order_index: 11,
      sizes: [
        { label_de: "Normale portion", label_en: "Normal portion", price: "25.– Fr." }
      ],
      options: []
    },
    {
      id: "ant_12",
      category_id: 1,
      subcategory_id: null,
      title_de: "Antipasto freddo",
      title_en: "Cold Antipasto",
      subtitle_de: "23.– Fr.",
      subtitle_en: "23.– Fr.",
      image_url: "/placeholder_04_1080x1920.webp",
      ingredients_de: "Salami, Schinken und Olivenpaté",
      ingredients_en: "Salami, ham and olive pate",
      order_index: 12,
      sizes: [
        { label_de: "Normale portion", label_en: "Normal portion", price: "23.– Fr." }
      ],
      options: []
    },
    {
      id: "ant_13",
      category_id: 1,
      subcategory_id: null,
      title_de: "Burrata e Crudo",
      title_en: "Burrata and Prosciutto",
      subtitle_de: "18.– Fr.",
      subtitle_en: "18.– Fr.",
      image_url: "/placeholder_04_1080x1920.webp",
      ingredients_de: "Parmaschinken und Burrata (spezielle Sorte Mozzarella)",
      ingredients_en: "Parma ham and burrata (special type of mozzarella)",
      order_index: 13,
      sizes: [
        { label_de: "Normale portion", label_en: "Normal portion", price: "18.– Fr." }
      ],
      options: []
    },

    // ==================== PIZZE SPECIALI ====================
    {
      id: "piz_spec_1",
      category_id: 2,
      subcategory_id: 21,
      title_de: "Pizza Al Padrone",
      title_en: "Pizza Al Padrone",
      subtitle_de: "ab 20.– Fr.",
      subtitle_en: "from 20.– Fr.",
      image_url: "/image_34_1080x1920.webp",
      ingredients_de: "Tomaten, Mozzarella, Rindfleisch und Zwiebeln",
      ingredients_en: "Tomatoes, mozzarella, beef and onions",
      order_index: 1,
      sizes: [
        { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "20.– Fr." },
        { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "22.– Fr." },
        { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "44.– Fr." }
      ],
      options: [
        { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten-free", price_modifier: "+2.– CHF" },
        { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" },
        { type: "vollkorn", label_de: "Vollkorn", label_en: "Whole grain", price_modifier: "+2.– CHF" }
      ]
    },
    {
      id: "piz_spec_2",
      category_id: 2,
      subcategory_id: 21,
      title_de: "Pizza Bachimon",
      title_en: "Pizza Bachimon",
      subtitle_de: "ab 23.– Fr.",
      subtitle_en: "from 23.– Fr.",
      image_url: "/image_35_1080x1920.webp",
      ingredients_de: "Tomaten, Mozzarella, Pizzaschinken, Peperoni, Pilze und Knoblauch",
      ingredients_en: "Tomatoes, mozzarella, pizza ham, peppers, mushrooms and garlic",
      order_index: 2,
      sizes: [
        { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "23.– Fr." },
        { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "25.– Fr." },
        { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "50.– Fr." }
      ],
      options: [
        { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten-free", price_modifier: "+2.– CHF" },
        { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" },
        { type: "vollkorn", label_de: "Vollkorn", label_en: "Whole grain", price_modifier: "+2.– CHF" }
      ]
    },
    {
      id: "piz_spec_3",
      category_id: 2,
      subcategory_id: 21,
      title_de: "Pizza Capua",
      title_en: "Pizza Capua",
      subtitle_de: "ab 23.– Fr.",
      subtitle_en: "from 23.– Fr.",
      image_url: "/image_v2_1080x1920.webp",
      ingredients_de: "Tomaten, Mozzarella, Pizzaschinken, scharfe Salami, Zwiebeln und Ei",
      ingredients_en: "Tomatoes, mozzarella, pizza ham, hot salami, onions and egg",
      order_index: 3,
      sizes: [
        { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "23.– Fr." },
        { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "25.– Fr." },
        { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "50.– Fr." }
      ],
      options: [
        { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten-free", price_modifier: "+2.– CHF" },
        { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" },
        { type: "vollkorn", label_de: "Vollkorn", label_en: "Whole grain", price_modifier: "+2.– CHF" }
      ]
    },
    {
      id: "piz_spec_4",
      category_id: 2,
      subcategory_id: 21,
      title_de: "Pizza Gran Gusto",
      title_en: "Pizza Gran Gusto",
      subtitle_de: "ab 23.– Fr.",
      subtitle_en: "from 23.– Fr.",
      image_url: "/image_38_1080x1920.webp",
      ingredients_de: "Tomaten, Mozzarella, Pizzaschinken, Gorgonzola, Ei und Pilze",
      ingredients_en: "Tomatoes, mozzarella, pizza ham, gorgonzola, egg and mushrooms",
      order_index: 4,
      sizes: [
        { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "23.– Fr." },
        { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "25.– Fr." },
        { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "50.– Fr." }
      ],
      options: [
        { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten-free", price_modifier: "+2.– CHF" },
        { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" },
        { type: "vollkorn", label_de: "Vollkorn", label_en: "Whole grain", price_modifier: "+2.– CHF" }
      ]
    },
    {
      id: "piz_spec_5",
      category_id: 2,
      subcategory_id: 21,
      title_de: "Pizza Gorgonzola e Salsiccia",
      title_en: "Pizza Gorgonzola e Salsiccia",
      subtitle_de: "ab 22.– Fr.",
      subtitle_en: "from 22.– Fr.",
      image_url: "/image_v6_1080x1920.webp",
      ingredients_de: "Tomaten, Mozzarella, Wurst, Gorgonzola und Zwiebeln",
      ingredients_en: "Tomatoes, mozzarella, sausage, gorgonzola and onions",
      order_index: 5,
      sizes: [
        { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
        { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
        { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
      ],
      options: [
        { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten-free", price_modifier: "+2.– CHF" },
        { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" },
        { type: "vollkorn", label_de: "Vollkorn", label_en: "Whole grain", price_modifier: "+2.– CHF" }
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
        { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten-free", price_modifier: "+2.– CHF" },
        { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" },
        { type: "vollkorn", label_de: "Vollkorn", label_en: "Whole grain", price_modifier: "+2.– CHF" }
      ]
    },
    {
      id: "piz_spec_7",
      category_id: 2,
      subcategory_id: 21,
      title_de: "Pizza Etrusca",
      title_en: "Pizza Etrusca",
      subtitle_de: "ab 22.– Fr.",
      subtitle_en: "from 22.– Fr.",
      image_url: "/image_v3_1080x1920.webp",
      ingredients_de: "Tomaten, Mozzarella, Ricotta, Rucola und Speck",
      ingredients_en: "Tomatoes, mozzarella, ricotta, arugula and bacon",
      order_index: 7,
      sizes: [
        { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
        { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
        { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
      ],
      options: [
        { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten-free", price_modifier: "+2.– CHF" },
        { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" },
        { type: "vollkorn", label_de: "Vollkorn", label_en: "Whole grain", price_modifier: "+2.– CHF" }
      ]
    },
    {
      id: "piz_spec_8",
      category_id: 2,
      subcategory_id: 21,
      title_de: "Pizza Parma",
      title_en: "Pizza Parma",
      subtitle_de: "ab 24.– Fr.",
      subtitle_en: "from 24.– Fr.",
      image_url: "/image_v1_1080x1920.webp",
      ingredients_de: "Tomaten, Mozzarella, Pilze, Peperoni, Salami, Oliven und Artischocken",
      ingredients_en: "Tomatoes, mozzarella, mushrooms, peppers, salami, olives and artichokes",
      order_index: 8,
      sizes: [
        { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "24.– Fr." },
        { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "26.– Fr." },
        { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "52.– Fr." }
      ],
      options: [
        { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten-free", price_modifier: "+2.– CHF" },
        { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" },
        { type: "vollkorn", label_de: "Vollkorn", label_en: "Whole grain", price_modifier: "+2.– CHF" }
      ]
    },
    {
      id: "piz_spec_9",
      category_id: 2,
      subcategory_id: 21,
      title_de: "Pizza Siciliana",
      title_en: "Pizza Siciliana",
      subtitle_de: "ab 22.– Fr.",
      subtitle_en: "from 22.– Fr.",
      image_url: "/image_v7_1080x1920.webp",
      ingredients_de: "Tomaten, Mozzarella, Sardellen, Oliven, Kapern und Zwiebeln",
      ingredients_en: "Tomatoes, mozzarella, anchovies, olives, capers and onions",
      order_index: 9,
      sizes: [
        { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
        { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
        { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
      ],
      options: [
        { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten-free", price_modifier: "+2.– CHF" },
        { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" },
        { type: "vollkorn", label_de: "Vollkorn", label_en: "Whole grain", price_modifier: "+2.– CHF" }
      ]
    },
    {
      id: "piz_spec_10",
      category_id: 2,
      subcategory_id: 21,
      title_de: "Pizza Quattro Stagioni",
      title_en: "Pizza Quattro Stagioni",
      subtitle_de: "ab 24.– Fr.",
      subtitle_en: "from 24.– Fr.",
      image_url: "/image_36_1080x1920.webp",
      ingredients_de: "Tomaten, Mozzarella, Pizzaschinken, Pilze, Oliven und Artischocken",
      ingredients_en: "Tomatoes, mozzarella, pizza ham, mushrooms, olives and artichokes",
      order_index: 10,
      sizes: [
        { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "24.– Fr." },
        { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "26.– Fr." },
        { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "52.– Fr." }
      ],
      options: [
        { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten-free", price_modifier: "+2.– CHF" },
        { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" },
        { type: "vollkorn", label_de: "Vollkorn", label_en: "Whole grain", price_modifier: "+2.– CHF" }
      ]
    },
    {
      id: "piz_spec_11",
      category_id: 2,
      subcategory_id: 21,
      title_de: "Pizza Capricciosa",
      title_en: "Pizza Capricciosa",
      subtitle_de: "ab 22.– Fr.",
      subtitle_en: "from 22.– Fr.",
      image_url: "/image_37_1080x1920.webp",
      ingredients_de: "Tomaten, Mozzarella, Pizzaschinken, Pilze und Artischocken",
      ingredients_en: "Tomatoes, mozzarella, pizza ham, mushrooms and artichokes",
      order_index: 11,
      sizes: [
        { label_de: "Ø 30 cm", label_en: "Ø 30 cm", price: "22.– Fr." },
        { label_de: "Ø 33 cm", label_en: "Ø 33 cm", price: "24.– Fr." },
        { label_de: "Ø 45 cm", label_en: "Ø 45 cm", price: "48.– Fr." }
      ],
      options: [
        { type: "glutenfrei", label_de: "Glutenfrei", label_en: "Gluten-free", price_modifier: "+2.– CHF" },
        { type: "vegan", label_de: "Vegan", label_en: "Vegan", price_modifier: "+2.– CHF" },
        { type: "vollkorn", label_de: "Vollkorn", label_en: "Whole grain", price_modifier: "+2.– CHF" }
      ]
    }
  ]
}