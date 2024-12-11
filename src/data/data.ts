

export const navs = [
    {
        id:1,
        name: "Home",
        link: "/",
        active: true
    },
    {
        id:2,
        name: "Recipes",
        link: "/postitems",
        active: true
    },
    {
        id:3,
        name: "About",
        link: "/about",
        active: true
    },
    {
        id:4,
        name: "Contact",
        link: "/contact",
        active: "false"
    },
]
export const scis = [
    {
        id:1,
        icon: 'bi-facebook',
        link: 'https://web.facebook.com/profile.php?id=61566508671453',
    },
    {
        id:2,
        icon: 'bi-instagram',
        link: 'https://www.instagram.com/',
    },
    {
        id:3,
        icon: 'bi-tiktok',
        link: 'https://tiktok.com',
    },
]
export const contact_sci = [
    {
        id:1,
        img: '/assets/facebook-logo.png',
        link: 'https://web.facebook.com/profile.php?id=61566508671453',
    },
    {
        id:2,
        img: '/assets/instagram-logo.png',
        name: 'https://www.instagram.com/',
    },
    {
        id:3,
        img: '/assets/tiktok-logo.png',
        link: 'https://tiktok.com',
    },
    {
        id:4,
        img: '/assets/email-logo.png',
        link: '',
    },
]
export const heroSlides = [
  
    {
        id:1,
        bgImg: '/assets/kale_chicken_salade.jpg',
        title: 'GREEN CHICKEN SALAD',
        brief: 'A healthy and nourishing chicken salad topped with fresh green vegetables, perfect for a light lunch.',
        link: '/postitems/6'
    },
    {
        id:2,
        bgImg: '/assets/Backed_chicken.jpg',
        title: 'BAKED CHICKEN DRUMSTICKS',
        brief: 'Oven-baked chicken drumsticks, flavorful and crispy, perfect for a quick and delicious dinner.',
        link: '/postitems/8'
    },
    {
        id:3,
        bgImg: '/assets/sesame_chicken.jpg',
        title: 'SESAME CHICKEN',
        brief: 'Popular Asian dish, featuring chicken coated in a sweet and spicy sauce, topped with sesame seeds.',
        link: '/postitems/7'
    },
    {
      
        id:4,
        bgImg: '/assets/CILANTRO_LIME_AVOCADO_TOAST.jpg',
        title: 'Cilantro Lime Avocado Toast',
        brief: 'This Cilantro Lime Avocado Toast is a fresh and tasty starter perfect for weekends, featuring creamy avocado topped with vibrant ingredients.',
        link: '/postitems/17'
    },
]

export const postItems = [
  {
    id: '1',
    img: '/assets/PANUOZZO.jpg',
    category: 'Main course',
    comment: [
      'Cut the flatbread in half horizontally to create two sandwich halves. Lightly brush the inside with olive oil and toast it until golden brown and crispy.',
      'Grill your vegetables (such as bell peppers, zucchini, and eggplant) with a drizzle of olive oil until soft and lightly charred.',
      'Layer the ham and cheese inside the flatbread along with the grilled vegetables.',
      'Place the sandwich in the oven and heat it for 5-7 minutes, or until the cheese melts and the flavors meld together.',
      'Serve hot, optionally with a side of salad or potato wedges.'
    ],
    title: 'PANUOZZO Sandwich',
    brief: 'Panuozzo is a popular Italian sandwich from the Campania region. This dish features a toasted flatbread filled with ham, cheese, and grilled vegetables, perfect for a quick meal packed with flavor.',
    ingredients: ['flatbread', 'ham', 'cheese', 'grilled vegetables', 'olive oil'],
    preptime: 20,
    type: false,
    trending: true,
    tips: 'For a vegetarian version, replace the ham with grilled tofu or a vegetarian deli slice. You can also add a bit of pesto or hot sauce for extra flavor.'
  },
  {
    id: '2',
    img: '/assets/smoky_vegan.jpg',
    category: 'Main course',
    comment: [
      'Cut the vegetables (such as carrots, zucchini, and bell peppers) into even pieces and roast them in the oven at 200°C (400°F) with olive oil for about 20 minutes, or until tender and slightly crispy.',
      'Grill the smoked tofu until it’s golden and slightly crispy on the outside.',
      'Mix the roasted vegetables and grilled tofu in a large bowl. Add fresh herbs (like parsley or cilantro) and season with salt and pepper.',
      'Serve with a sauce of your choice, such as tahini dressing or a smoky barbecue sauce.'
    ],
    title: 'SMOKY VEGAN',
    brief: 'A delicious and smoky vegan dish that combines roasted vegetables and grilled smoked tofu, offering a rich and hearty flavor. It’s perfect for those who enjoy bold, plant-based meals.',
    ingredients: ['roasted vegetables', 'smoked tofu', 'fresh herbs', 'olive oil'],
    preptime: 25,
    type: true,
    trending: false,
    tips: 'For a spicier kick, add chili flakes to the tofu while grilling. You can also serve this dish with quinoa or couscous for a more filling meal.'
  },
  {
    id: '3',
    img: '/assets/Curried_Sausages.jpg',
    category: 'Main course',
    comment: [
      'Heat a large pan over medium heat and cook the sausages until browned on all sides. Remove from the pan and set aside.',
      'In the same pan, add chopped vegetables (such as onions, bell peppers, and tomatoes) and sauté until softened.',
      'Add curry powder, cumin, and other spices to the vegetables and cook for an additional minute to release the flavors.',
      'Return the sausages to the pan, add some water or broth, and let everything simmer for 20 minutes until the sauce thickens and the sausages are fully cooked through.',
      'Serve with a side of rice or naan bread for a complete meal.'
    ],
    title: 'CURRIED SAUSAGE',
    brief: 'Curried sausages is a comforting dish where flavorful sausages are simmered in a rich, spiced curry sauce. It’s a warming dinner option that pairs perfectly with rice or naan bread.',
    ingredients: ['sausages', 'curry powder', 'chopped vegetables', 'spices', 'rice'],
    preptime: 40,
    type: false,
    trending: false,
    tips: 'For a creamier sauce, stir in a spoonful of coconut milk towards the end of the cooking process. You can also adjust the spice level by adding more or less curry powder.'
  }
,  
{
  id: '4',
  img: '/assets/spicy_beef.jpg',
  category: 'Main course',
  comment: [
    'Cook the udon noodles according to the package instructions. Drain and set aside, keeping them warm.',
    'In a large pan or wok, heat some oil over medium-high heat. Add thinly sliced beef and stir-fry until browned on all sides.',
    'Add vegetables (such as bell peppers, carrots, and bok choy) to the pan and sauté until they are tender but still crisp, about 3-5 minutes.',
    'Pour in a spicy sauce made of soy sauce, chili paste, and a bit of honey for sweetness. Let everything cook together for another 2-3 minutes until the flavors meld.',
    'Toss the cooked udon noodles into the pan and mix everything together until the noodles are evenly coated with the sauce and ingredients are well combined.',
    'Serve hot, garnished with chopped scallions and sesame seeds for added texture.'
  ],
  title: 'SPICY VEGETABLE BEEF UDON NOODLES',
  brief: 'This spicy and flavorful dish combines thick, chewy udon noodles with tender beef and crunchy vegetables, all coated in a rich and spicy sauce. It’s a perfect dish for noodle lovers looking for a kick of heat.',
  ingredients: ['udon noodles', 'beef', 'vegetables', 'spicy sauce', 'soy sauce', 'chili paste', 'honey'],
  preptime: 30,
  type: false,
  trending: false,
  tips: 'For extra spice, add some chili flakes or Sriracha sauce to the dish. You can also swap out the beef for chicken or tofu for a different protein option.'
},
{
  id: '5',
  img: '/assets/green_soop.jpg',
  category: 'Quick & Easy',
  comment: [
    'In a large pot, bring salted water to a boil. Add green vegetables like spinach, broccoli, and peas and cook for 10 minutes or until tender.',
    'Carefully transfer the cooked vegetables to a blender, reserving some of the cooking water.',
    'Blend the vegetables until smooth, adding a little bit of the cooking water at a time to achieve the desired soup consistency.',
    'Season with salt, pepper, and a squeeze of lemon juice for brightness. You can also stir in a dollop of cream or yogurt for a creamier texture.',
    'Serve the soup hot, garnished with fresh herbs such as parsley or basil for added flavor.'
  ],
  title: 'CALMING GREEN SOUP',
  brief: 'This vibrant green soup is packed with nutritious vegetables like spinach, broccoli, and peas. It’s light, refreshing, and perfect for a quick, healthy meal.',
  ingredients: ['spinach', 'broccoli', 'peas', 'fresh herbs', 'lemon juice', 'salt', 'pepper'],
  preptime: 15,
  type: true,
  trending: false,
  tips: 'For added texture, you can serve the soup with crunchy croutons or a slice of toasted bread. This soup also pairs well with a drizzle of olive oil or a sprinkle of grated Parmesan cheese.'
},

{
  id: '6',
  img: '/assets/kale_chicken_salade.jpg',
  category: 'Main course',
  comment: [
    'Season the chicken breasts and cook them on a grill or in a pan until golden and fully cooked through. Allow the chicken to cool slightly.',
    'Slice the chicken into bite-sized pieces and mix it with a variety of fresh green vegetables like lettuce, cucumber, and avocado for a crisp, refreshing base.',
    'Drizzle the salad with a light dressing of your choice (e.g., lemon vinaigrette or olive oil and balsamic) and toss to coat evenly.',
    'Serve the salad chilled or at room temperature for a light and nutritious meal.'
  ],
  title: 'GREEN CHICKEN SALAD',
  brief: 'This healthy and refreshing green chicken salad is a perfect choice for a light lunch, packed with nutritious ingredients and topped with a zesty dressing.',
  ingredients: ['chicken breasts', 'lettuce', 'cucumber', 'avocado', 'dressing (lemon vinaigrette or olive oil)'],
  preptime: 20,
  type: false,
  trending: true,
  tips: 'For added crunch, top the salad with toasted nuts or seeds. You can also substitute grilled chicken with baked or poached chicken for a different texture.'
},
{
  id: '7',
  img: '/assets/sesame_chicken.jpg',
  category: 'Main course',
  comment: [
    'Cut the chicken into bite-sized pieces and season with salt and pepper. In a large pan, heat some oil and cook the chicken until browned on all sides.',
    'Add soy sauce and honey to the pan, stirring to coat the chicken with the sweet and savory sauce. Let it simmer until the sauce thickens and caramelizes slightly.',
    'Stir in sesame seeds and cook for another 1-2 minutes until the seeds are toasted and aromatic.',
    'Serve the sesame chicken with a side of fluffy steamed rice, garnished with chopped green onions for a burst of freshness.'
  ],
  title: 'SESAME CHICKEN',
  brief: 'Sesame chicken is a popular Asian dish featuring tender chicken pieces coated in a sweet and savory sesame sauce, perfect for pairing with rice.',
  ingredients: ['chicken', 'soy sauce', 'honey', 'sesame seeds', 'green onions'],
  preptime: 30,
  type: false,
  trending: false,
  tips: 'For added heat, sprinkle some chili flakes or drizzle with sriracha before serving. You can also substitute honey with maple syrup or agave for a different sweetness.'
},
{
  id: '8',
  img: '/assets/Backed_chicken.jpg',
  category: 'Main course',
  comment: [
    'Preheat the oven to 200°C (400°F) and line a baking tray with parchment paper.',
    'In a large bowl, toss the chicken drumsticks with olive oil and a mix of your favorite spices, such as paprika, garlic powder, and thyme. Make sure the drumsticks are evenly coated.',
    'Place the drumsticks on the baking tray, leaving space between them, and bake for 35-40 minutes, turning halfway through. The chicken should be golden and crispy on the outside and cooked through on the inside.',
    'Serve hot with a side of roasted vegetables or mashed potatoes for a hearty meal.'
  ],
  title: 'BAKED CHICKEN DRUMSTICKS',
  brief: 'Oven-baked chicken drumsticks that are crispy on the outside and juicy on the inside, seasoned with a flavorful mix of spices.',
  ingredients: ['chicken drumsticks', 'olive oil', 'paprika', 'garlic powder', 'thyme'],
  preptime: 35,
  type: false,
  trending: true,
  tips: 'For an extra crispy finish, broil the chicken for the last 5 minutes of baking. You can also marinate the drumsticks overnight for more intense flavors.'
},
{
  id: '9',
  img: '/assets/BUTTER_CHICKEN.jpg',
  category: 'Main course',
  comment: [
    'In a large bowl, combine yogurt, lemon juice, and a blend of spices like garam masala, cumin, and turmeric. Marinate the chicken in this mixture for at least 30 minutes (or overnight for best results).',
    'Heat a pan over medium heat and cook the marinated chicken until lightly browned. Set aside.',
    'In the same pan, sauté onions, garlic, and ginger until fragrant. Add chopped tomatoes and cook until they soften and break down.',
    'Blend the tomato mixture into a smooth sauce using an immersion blender or regular blender, then return it to the pan.',
    'Stir in butter and cream, along with more spices (such as paprika and coriander), and let the sauce simmer for a few minutes.',
    'Add the cooked chicken to the sauce and simmer for another 10-15 minutes, allowing the flavors to meld together.',
    'Serve the butter chicken hot with basmati rice or garlic naan, garnished with fresh cilantro.'
  ],
  title: 'Butter Chicken (Murgh Makhani)',
  brief: 'Butter chicken is a rich and creamy Indian curry made with tender marinated chicken, a tomato-based sauce, and a blend of aromatic spices. Best enjoyed with rice or naan.',
  ingredients: ['chicken', 'yogurt', 'lemon juice', 'garam masala', 'cumin', 'turmeric', 'onions', 'garlic', 'ginger', 'tomatoes', 'butter', 'cream'],
  preptime: 45,
  type: false,
  trending: true,
  tips: 'For a smoky flavor, grill the chicken before adding it to the sauce. You can also add a pinch of fenugreek leaves for an authentic touch.'
},
{
  id: '10',
  img: '/assets/ARRABBIATA_PASTA.jpg',
  category: 'Main course',
  comment: [
    'Cook the pasta in a large pot of salted boiling water until al dente, according to the package instructions. Drain and set aside, reserving a cup of pasta water.',
    'In a large pan, heat olive oil over medium heat and sauté minced garlic and cayenne pepper until fragrant and golden, being careful not to burn the garlic.',
    'Add canned tomatoes to the pan, along with chili flakes, a pinch of sugar, black pepper, and kosher salt. Let the sauce simmer for 15-20 minutes, stirring occasionally.',
    'Mash the tomatoes with a fork or use an immersion blender to break them up, creating a chunky but smooth sauce. Adjust the thickness with the reserved pasta water, if needed.',
    'Stir in freshly chopped parsley and check the seasoning. Toss the cooked pasta in the sauce until well coated.',
    'Serve hot, garnished with a drizzle of olive oil, extra chili flakes for heat, and more fresh parsley.'
  ],
  title: 'Arrabbiata Pasta',
  brief: 'Arrabbiata is a classic Italian pasta dish known for its fiery tomato sauce, made with garlic, chili, and tomatoes. It pairs best with penne or ziti pasta and is perfect for spice lovers.',
  ingredients: ['penne or ziti', 'canned tomatoes', 'garlic', 'cayenne pepper', 'chili flakes', 'parsley', 'black pepper', 'kosher salt', 'sugar', 'olive oil'],
  preptime: 30,
  type: false,
  trending: true,
  tips: 'For added richness, you can stir in some Parmesan cheese or a splash of cream. Serve with crusty garlic bread for a complete meal.'
},

{
  id: '11',
  img: '/assets/PIZZA_BURGER.jpg',
  category: 'Main course',
  comment: [
    'Season the ground beef with Italian seasoning and form into 4 burger patties.',
    'Grill or pan-fry the patties until cooked to your liking.',
    'In a separate pan, heat the marinara sauce and add pizza seasoning for extra flavor.',
    'Toast the hamburger buns with butter until golden brown.',
    'Assemble the burger by placing a slice of mozzarella cheese on each patty, followed by some pepperoni and marinara sauce.',
    'Place the patties on the toasted buns and top with more marinara sauce if desired.',
    'Serve hot with your favorite pizza toppings.'
  ],
  title: 'The Ultimate Pizza Burger',
  brief: 'The Pizza Burger combines the juicy goodness of a burger with the bold flavors of pizza, making it a perfect fusion dish. Customize it with your favorite pizza toppings!',
  ingredients: ['ground beef', 'pepperoni', 'marinara sauce', 'Italian seasoning', 'pizza seasoning', 'hamburger buns', 'butter', 'mozzarella cheese'],
  preptime: 25,
  type: false,
  trending: false
},
{
  id: '12',
  img: '/assets/SPINACH_LASAGNA.jpg',
  category: 'Main course',
  comment: [
    'Preheat the oven to 375°F (190°C).',
    'Cook the lasagna noodles according to package instructions and drain.',
    'Thaw and drain the frozen spinach, squeezing out excess water.',
    'Layer a baking dish with marinara sauce, lasagna noodles, spinach, and a mix of mozzarella and parmesan cheese.',
    'Repeat layers until all ingredients are used.',
    'Cover with foil and bake for 30 minutes, then uncover and bake for an additional 15 minutes until the cheese is golden and bubbly.',
    'Let it rest for 10 minutes before serving.'
  ],
  title: 'Spinach Lasagna',
  brief: 'This Spinach Lasagna is rich with three cheeses and packed with spinach, making it a family favorite for weeknight dinners or gatherings.',
  ingredients: ['spinach', 'marinara sauce', 'lasagna noodles', 'mozzarella cheese', 'parmesan cheese'],
  preptime: 50,
  type: false,
  trending: true
},
{
  id: '13',
  img: '/assets/MUFFALETTA.jpg',
  category: 'Main course',
  comment: [
    'Prepare the olive salad by mixing black olives, green olives, pepperoncini, roasted red peppers, olive oil, and red wine vinegar with dried basil, oregano, garlic powder, salt, and pepper.',
    'Cut the bread in half horizontally and spread the olive salad on both halves.',
    'Layer the bottom half with Genoa salami, ham, mortadella, mozzarella, and provolone cheese.',
    'Place the top half of the bread over the layered meats and cheese.',
    'Press down and wrap the sandwich tightly in plastic wrap.',
    'Let the sandwich sit for at least 30 minutes to allow the flavors to meld before cutting and serving.'
  ],
  title: 'Muffaletta Sandwich',
  brief: 'This Muffaletta recipe brings the ultimate New Orleans sandwich to your kitchen, loaded with Italian meats, cheese, and a spicy homemade olive salad.',
  ingredients: ['genoa salami', 'ham', 'mortadella', 'mozzarella cheese', 'provolone cheese', 'black olives', 'green olives', 'pepperoncini peppers', 'roasted red peppers', 'basil', 'oregano', 'garlic powder', 'salt and pepper', 'olive oil', 'red wine vinegar', 'Italian bread or muffaletta bread'],
  preptime: 30,
  type: false,
  trending: false
},
{
  id: '14',
  img: '/assets/YAKI_UDON.jpg',
  category: 'Quick & Easy',
  comment: [
    'Cook the udon noodles according to the package instructions, then drain and set aside.',
    'In a hot pan, sauté the garlic, scallions, and shitake mushrooms until fragrant and slightly browned.',
    'Add the baby bok choy and cook until wilted.',
    'In a small bowl, whisk together the dark and light soy sauce, oyster sauce, mirin, honey or agave, and sriracha.',
    'Add the sauce mixture to the pan along with the cooked udon noodles.',
    'Toss everything together and stir-fry for a couple of minutes until the noodles are well coated and heated through.',
    'Serve hot, garnished with extra scallions if desired.'
  ],
  title: 'Yaki Udon',
  brief: 'Yaki Udon is a quick and easy stir-fry dish made with chewy udon noodles, fresh vegetables, and a savory sauce. Ready in just 15 minutes!',
  ingredients: ['baby bok choy', 'garlic', 'scallions', 'shitake mushrooms', 'honey or agave', 'mirin', 'vegetarian oyster sauce', 'dark soy sauce', 'light soy sauce', 'sriracha', 'udon noodles'],
  preptime: 15,
  type: false,
  trending: true
},
{
  id: '15',
  img: '/assets/PANEER_KATHI_ROLL.jpg',
  category: 'Quick & Easy',
  comment: [
    'In a bowl, combine whole wheat flour with water, a pinch of salt, and knead to form a soft dough. Let it rest for 15 minutes.',
    'In a pan, heat vegetable oil and sauté onions until translucent. Add ginger-garlic paste, chopped tomatoes, and spices (garam masala, red chili powder, turmeric, salt, and cumin). Cook until tomatoes soften.',
    'Add crumbled paneer and mix well. Cook for a few minutes until the paneer is heated through.',
    'Divide the dough into small balls and roll them out into thin rotis. Cook each roti on a hot skillet until golden on both sides.',
    'To assemble, place a roti on a plate, add the paneer mixture, and top with fresh lettuce, coriander leaves, green chilies, and lemon wedges.',
    'Roll the roti tightly around the filling and secure with onion rings if desired. Serve immediately.'
  ],
  title: 'Paneer Kathi Roll',
  brief: 'Paneer Kathi Rolls feature spicy paneer wrapped in soft roti, making a delicious and filling street food option that’s easy to prepare at home.',
  ingredients: ['fresh coriander leaves', 'green chilies', 'lemon wedges', 'lettuce', 'onion', 'tomato', 'ginger-garlic paste', 'mint chutney', 'garam masala', 'red chili powder', 'salt', 'turmeric powder', 'whole wheat flour', 'vegetable oil', 'cumin powder', 'cumin seeds', 'onion rings', 'paneer', 'water'],
  preptime: 30,
  type: false,
  trending: true
},
{
  id: '16',
  img: '/assets/SPICY_GARLIC_SHRIMP_NOODLES.jpg',
  category: 'Quick & Easy',
  comment: [
    'Cook the pasta according to package instructions, then drain and set aside.',
    'In a large pan, heat cooking oil and add minced garlic. Sauté until fragrant.',
    'Add shrimp and cook until they turn pink and opaque, about 2-3 minutes.',
    'Stir in sliced serrano peppers and green onions, cooking for another minute.',
    'In a small bowl, mix together fish sauce, soy sauce, gochugaru, cornstarch, black pepper, salt, and sake or water.',
    'Pour the sauce over the shrimp and stir to combine, cooking for an additional 2 minutes.',
    'Add the cooked pasta to the pan, tossing everything together until well combined.',
    'Finish with a dollop of unsalted butter and drizzle with sesame oil and seeds before serving.'
  ],
  title: 'Spicy Garlic Shrimp Noodles',
  brief: 'This Spicy Garlic Shrimp Noodles recipe combines succulent shrimp with noodles in a flavorful garlic sauce, making it a quick and delicious meal.',
  ingredients: ['jumbo shrimp', 'garlic', 'green onions', 'serrano pepper', 'fish sauce', 'soy sauce', 'dried pasta', 'black pepper', 'cornstarch', 'gochugaru', 'salt', 'cooking oil', 'sesame oil', 'unsalted butter', 'sake or water', 'maesilaek'],
  preptime: 25,
  type: false,
  trending: true
},

        {
          id: '17',
          img: '/assets/CILANTRO_LIME_AVOCADO_TOAST.jpg',
          category: 'Quick & Easy',
          comment: [
            'Toast the whole wheat bread slices until golden brown.',
            'In a bowl, mash the avocado with fresh lime juice, salt, and cracked black pepper to taste.',
            'Spread the mashed avocado evenly on the toasted bread.',
            'Top with halved cherry tomatoes, finely chopped red onion, and chopped cilantro.',
            'Drizzle with honey and extra virgin olive oil before serving.'
          ],
          title: 'Cilantro Lime Avocado Toast',
          brief: 'This Cilantro Lime Avocado Toast is a fresh and tasty starter perfect for weekends, featuring creamy avocado topped with vibrant ingredients.',
          ingredients: ['large avocado', 'cherry tomatoes', 'fresh cilantro', 'red onion', 'honey', 'fresh lime juice', 'cracked black pepper', 'salt', 'extra virgin olive oil', 'whole wheat bread'],
          preptime: 10,
          type: false,
          trending: true
        },
        {
          id: '18',
          img: '/assets/LAYERED_CHOCOLATE_CHEESECAKE.jpg',
          category: 'Dessert',
          comment: [
            'In a bowl, mix Oreo cookie crumbs with melted unsalted butter until well combined.',
            'Press the mixture into the bottom of a springform pan to form the crust.',
            'In a microwave-safe bowl, melt bittersweet chocolate and let it cool slightly.',
            'In a mixing bowl, beat the cream cheese, granulated sugar, powdered sugar, and vanilla extract until smooth and creamy.',
            'Fold the melted chocolate into the cream cheese mixture until fully incorporated.',
            'Spread half of the chocolate cheesecake filling over the Oreo crust, smoothing it out.',
            'Chill for about 15 minutes, then spread the remaining filling on top.',
            'Refrigerate for at least 4 hours or until set before serving.'
          ],
          title: 'Layered Chocolate Cheesecake with Oreo Crust - No Bake',
          brief: 'This Layered Chocolate Cheesecake with Oreo Crust is a rich and creamy dessert that requires no baking, perfect for any occasion.',
          ingredients: ['bittersweet chocolate', 'granulated sugar', 'powdered sugar', 'vanilla extract', 'Oreo cookie crumbs', 'unsalted butter', 'cream cheese'],
          preptime: 25,
          type: false,
          trending: false
        },
        {
          id: '19',
          img: '/assets/CHOCOLATE_CAKE_ROLL.jpg',
          category: 'Dessert',
          comment: [
            'Preheat your oven to 350°F (175°C) and line a jelly roll pan with parchment paper.',
            'In a mixing bowl, beat the eggs and granulated sugar until light and fluffy.',
            'Sift together flour, baking powder, cocoa powder, and salt; fold into the egg mixture gently.',
            'Spread the batter evenly in the prepared pan and bake for 12-15 minutes until set.',
            'While the cake is baking, prepare a clean kitchen towel dusted with powdered sugar.',
            'Once baked, remove the cake from the oven, invert it onto the towel, and carefully peel off the parchment paper.',
            'Roll the cake with the towel while it’s still warm and let it cool completely.',
            'For the filling, beat cream cheese and double cream with powdered sugar and vanilla until smooth.',
            'Unroll the cooled cake, spread the filling evenly, and then roll it back up without the towel.',
            'Chill in the refrigerator for a few hours before slicing and serving.'
          ],
          title: 'Chocolate Cake Roll',
          brief: 'The Chocolate Cake Roll is a delightful dessert that appears complex but is simple to make, perfect for impressing chocolate lovers.',
          ingredients: ['large eggs', 'corn syrup', 'all-purpose flour', 'baking powder', 'good quality chocolate', 'granulated sugar', 'powdered sugar', 'salt', 'pure vanilla', 'unsalted butter', 'cream cheese', 'double cream', 'Dutch-process cocoa'],
          preptime: 30,
          type: false,
          trending: true
        },
        {
          id: '20',
          img: '/assets/COFFEE_PANNA_COTTA.jpg',
          category: 'Dessert',
          comment: [
            'In a saucepan, heat the liquid cream, coffee, and sugar until warm, then remove from heat.',
            'Soak the gelatin sheets in cold water for about 5 minutes, then add them to the warm cream mixture until dissolved.',
            'Stir in the vanilla extract and pour the mixture into pudding molds.',
            'Refrigerate for at least 4 hours or until set.',
            'For the cocoa sauce, combine sugar, water, cocoa powder, lemon juice, instant coffee, and a pinch of salt in a saucepan.',
            'Heat until the mixture thickens slightly, then let it cool.',
            'To serve, unmold the panna cotta and drizzle with cocoa sauce.'
          ],
          title: 'Coffee Panna Cotta with Cocoa Sauce',
          brief: 'This Coffee Panna Cotta with Cocoa Sauce is a stunning dessert that elevates the flavor of coffee, complemented by a rich cocoa sauce.',
          ingredients: ['liquid cream', 'coffee', 'sugar', 'gelatin sheets', 'vanilla extract', 'sugar', 'water', 'unsweetened cocoa powder', 'lemon juice', 'instant coffee', 'salt'],
          preptime: 30,
          type: false,
          trending: true
        },
        {
          id: '21',
          img: '/assets/HEALTHY_LEMONADE.jpg',
          category: 'Drinks',
          comment: [
            'Juice the fresh lemons to extract the juice.',
            'In a pitcher, combine the lemon juice, honey, and water, adjusting sweetness to taste.',
            'Add ice and lemon slices for a refreshing presentation.',
            'Stir well and serve chilled.'
          ],
          title: 'Healthy Lemonade',
          brief: 'This Healthy Lemonade is a refreshing drink made with fresh lemons and honey, perfect for a natural, sugar-free beverage option.',
          ingredients: ['ice', 'fresh lemons', 'honey'],
          preptime: 10,
          type: false,
          trending: false
        },
        {
          id: '22',
          img: '/assets/VIRGIN_STRAWBERRY_DAIQUIRI.jpg',
          category: 'Drinks',
          comment: [
            'In a blender, combine the frozen strawberries, fresh strawberries, lime juice, and simple syrup.',
            'Blend until smooth and adjust sweetness as desired.',
            'Serve immediately in chilled glasses with lime wedges for garnish.',
            'Enjoy this refreshing drink on a hot summer day!'
          ],
          title: 'Virgin Strawberry Daiquiri',
          brief: 'This Virgin Strawberry Daiquiri is a delicious non-alcoholic frozen drink, perfect for summer parties and family gatherings.',
          ingredients: ['fresh lime', 'frozen strawberries', 'fresh strawberries', 'freshly squeezed lime juice', 'simple syrup'],
          preptime: 10,
          type: false,
          trending: false
        },
        {
          id: '23',
          img: '/assets/CREAMY_TOMATO_PASTA.jpg',
          category: 'Quick & Easy',
          comment: [
            'Cook the penne pasta according to package instructions.',
            'In a pan, sauté minced garlic in butter until fragrant.',
            'Add tomato paste and sauce, stir well.',
            'Pour in heavy cream and season with salt and black pepper.',
            'Simmer until the sauce thickens.',
            'Mix in cooked pasta and top with grated parmesan cheese.',
            'Garnish with fresh parsley and serve.'
          ],
          title: 'Creamy Tomato Pasta',
          brief: 'This Creamy Tomato Pasta is a simple and delicious meal made from scratch with a rich and silky smooth cream and tomato-based sauce. Ready in under 30 minutes using easy-to-find ingredients.',
          ingredients: [
            '3 cloves Garlic',
            '1 tbsp Parsley, fresh',
            '2 tbsp Tomato paste',
            '1 (15 ounce) can Tomato sauce',
            '8 oz Penne pasta',
            '1/4 tsp Black pepper, ground',
            '1/2 tsp Salt',
            '3 tbsp Butter',
            '1/2 cup Heavy cream',
            '1/2 cup Parmesan cheese, grated'
          ],
          preptime: 30,
          type: false,
          trending: false
        },
        {
          id: '24',
          img: '/assets/SOPA_DE_FIDEO.jpg',
          category: 'Quick & Easy',
          comment: [
            'Heat olive oil in a large pot and sauté the garlic until fragrant.',
            'Add the fideo pasta and cook until lightly browned.',
            'Blend tomatoes, cilantro, and oregano in a blender until smooth.',
            'Pour the tomato mixture into the pot, stir and cook for a few minutes.',
            'Add the broth, cumin, and salt, bring to a boil.',
            'Simmer until the pasta is tender, about 10 minutes.',
            'Serve hot, garnished with fresh cilantro.'
          ],
          title: 'Sopa de Fideo',
          brief: 'An authentic Mexican Sopa de Fideo made with tomatoes, noodles, garlic, and broth. A quick, easy, and delicious soup loved by both kids and adults.',
          ingredients: [
            '1/3 cup Cilantro',
            '2 cloves Garlic',
            '1 tbsp Mexican oregano, fresh',
            '1 (28-ounce) can Tomatoes, whole',
            '1 qt Chicken broth or vegetable broth',
            '1 (7-ounce) package Fideo pasta, cut',
            '1 tsp Kosher salt',
            '7/16 cup Olive oil',
            '1 tsp Cumin, ground'
          ],
          preptime: 20,
          type: false,
          trending: false
        },
        {
          id: '25',
          img: '/assets/SHRIMP_LO_MEIN.jpg',
          category: 'Quick & Easy',
          comment: [
            'Cook the noodles according to package instructions and set aside.',
            'Heat vegetable oil in a pan, then sauté garlic, ginger, and shrimp until shrimp turns pink.',
            'Add cabbage, carrots, and red bell pepper, and stir-fry for a few minutes.',
            'Mix in hoisin sauce, soy sauce, sesame oil, and brown sugar.',
            'Toss the noodles in the sauce mixture until well coated.',
            'Garnish with sesame seeds and serve hot.'
          ],
          title: 'Shrimp Lo Mein',
          brief: 'This Shrimp Lo Mein recipe combines juicy shrimp, tender vegetables, and noodles mixed in a flavorful lo mein sauce. A quick and easy meal, perfect for any night of the week.',
          ingredients: [
            '8 oz Shrimp',
            '1 cup Cabbage',
            '1/4 cup Carrots',
            '2 cloves Garlic',
            '1 tsp Garlic, dried',
            '2 tsp Ginger, dried',
            '1/2 cup Red bell pepper',
            '2 tbsp Hoisin sauce',
            '1/4 cup Soy sauce',
            '4 oz Noodles',
            '1 tsp Brown sugar',
            '1 Some sesame',
            '1 tsp Sesame oil',
            '1 tbsp Vegetable or olive oil'
          ],
          preptime: 25,
          type: false,
          trending: false
        },
        {
          id: '26',
          img: '/assets/OMELETTE_WITH_AVOCADO.jpg',
          category: 'Quick & Easy',
          comment: [
            'Whisk the eggs with a splash of milk, garlic salt, and pepper.',
            'Heat ghee in a pan and sauté mushrooms with red chili flakes until tender.',
            'Add spinach and cook until wilted.',
            'Pour the egg mixture into the pan and cook until the omelette starts to set.',
            'Sprinkle feta cheese on top and fold the omelette in half.',
            'Serve with half an avocado on the side.'
          ],
          title: 'Omelette with Avocado',
          brief: 'A quick and flavorful omelette with garlicky mushrooms, spinach, and feta, served with fresh avocado. Perfect for a simple, healthy meal.',
          ingredients: [
            '1/2 Avocado',
            '1/2 cup Mushrooms',
            '1/4 tsp Red chili flakes',
            '1 handful Spinach',
            '2 Eggs',
            'Garlic salt',
            'Pepper',
            '1 tbsp Feta',
            '2 tbsp Ghee',
            '1 splash Milk'
          ],
          preptime: 15,
          type: false,
          trending: false
        },
        {
          id: '27',
          img: '/assets/ROASTED_RED_PEPPER_ROMESCO.jpg',
          category: 'Quick & Easy',
          comment: [
            'In a blender, combine roasted red peppers, roma tomatoes, garlic, and almonds.',
            'Add dried basil, olive oil, red wine vinegar, salt, and pepper.',
            'Blend until smooth and creamy.',
            'Adjust seasoning to taste and serve with your favorite dish or use as a dip.'
          ],
          title: 'Roasted Red Pepper Romesco Sauce',
          brief: 'A vegan and gluten-free Roasted Red Pepper Romesco Sauce, perfect for weeknight meals. This versatile sauce can be used for pasta, dipping, or as a topping.',
          ingredients: [
            '2 tsp Basil, dried',
            '1 clove Garlic',
            '2 Roma tomatoes',
            '1 tsp Pepper',
            '1 12oz jar Red peppers, roasted',
            '1 1/2 tsp Salt',
            '2 tbsp Olive oil',
            '1/4 cup Red wine vinegar',
            '1 cup Almonds'
          ],
          preptime: 10,
          type: true,
          trending: false
        },
        {
          id: '28',
          img: '/assets/HUEVOS_RANCHEROS_TOSTADAS.jpg',
          category: 'Quick & Easy',
          comment: [
            'Warm the refried beans in a pan and spread them evenly on the tostada tortillas.',
            'In a separate pan, fry the eggs until the whites are set but the yolks are still runny.',
            'Top each tostada with a fried egg.',
            'Add sliced avocado, chopped lettuce, and diced tomatoes.',
            'Crumble queso fresco on top and serve immediately.'
          ],
          title: '10-Minute Huevos Rancheros Breakfast Tostadas',
          brief: 'Quick and easy vegetarian Huevos Rancheros Breakfast Tostadas, perfect for breakfast, lunch, or dinner. Ready in just 10 minutes.',
          ingredients: [
            '1 Avocado',
            '1 cup Lettuce',
            '1/2 cup Tomatoes',
            '4 Eggs',
            '1 Package herdez refried beans',
            '4 Tostada tortillas',
            '2 oz Queso fresco'
          ],
          preptime: 10,
          type: true,
          trending: false
        },
        {
          id: '29',
          img: '/assets/BANANA_PANCAKES.jpg',
          category: 'Dessert',
          comment: [
            'In a bowl, mash the banana until smooth.',
            'Whisk in the egg, buttermilk, and canola oil.',
            'In a separate bowl, combine the flour, baking powder, and sugar.',
            'Gradually mix the dry ingredients into the wet ingredients until just combined.',
            'Fold in chocolate chips if desired.',
            'Heat a pan over medium heat and pour batter to form pancakes.',
            'Cook until bubbles form on the surface, then flip and cook until golden brown.'
          ],
          title: 'Banana Pancakes',
          brief: 'Easy banana pancakes that are a fantastic change from the usual buttermilk pancakes. Perfect for a delicious family breakfast!',
          ingredients: [
            '1 Banana, medium very ripe',
            '1 Egg, large',
            '1 1/2 cups All-purpose flour',
            '2 1/2 tsp Baking powder',
            '1 Chocolate chips',
            '1 tbsp Granulated sugar',
            '2 tbsp Canola oil',
            '1 cup Buttermilk'
          ],
          preptime: 35,
          type: true,
          trending: true
        },
        {
          id: '30',
          img: '/assets/GARLIC_BASIL_BUTTER_PASTA.jpg',
          category: 'Quick & Easy',
          comment: [
            'Cook the bucatini pasta according to package instructions until al dente.',
            'In a large pan, melt the salted butter over medium heat until it starts to brown.',
            'Add minced garlic, cherry tomatoes, and red pepper flakes, and sauté until the tomatoes soften.',
            'Stir in fresh basil, freshly cracked black pepper, and olive oil.',
            'Toss the cooked pasta with the sauce and sprinkle with pecorino cheese before serving.'
          ],
          title: '20 Minute Garlic Basil Butter Pasta',
          brief: 'A quick and flavorful Garlic Basil Brown Butter Pasta with cherry tomatoes, fresh basil, and pecorino cheese. Ready in just 20 minutes!',
          ingredients: [
            '1 cup Basil, fresh',
            '2 cups Cherry tomatoes',
            '2 cloves Garlic',
            '1 lb Bucatini pasta',
            '1 1/2 tsp Black pepper, freshly cracked',
            'Kosher salt',
            'Red pepper flakes',
            '2 tbsp Olive oil, extra virgin',
            '6 tbsp Butter, salted',
            '1/2 cup Pecorino cheese'
          ],
          preptime: 20,
          type: true,
          trending: false
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

        
        
        
   





]