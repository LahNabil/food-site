

export const navs = [
    {
        id:1,
        name: "Home",
        link: "/",
        active: true
    },
    {
        id:2,
        name: "PostItems",
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
        img: './assets/facebook-logo.png',
        link: 'https://web.facebook.com/profile.php?id=61566508671453',
    },
    {
        id:2,
        img: './assets/instagram-logo.png',
        name: 'https://www.instagram.com/',
    },
    {
        id:3,
        img: './assets/tiktok-logo.png',
        link: 'https://tiktok.com',
    },
    {
        id:4,
        img: './assets/email-logo.png',
        link: '',
    },
]
export const heroSlides = [
    {
        id:1,
        bgImg: '/assets/photo1.jpg',
        title: 'photo1',
        brief: 'Neat own nor she said see walk. And charm add green you these. Sang busy in this drew ye fine. At greater prepare musical so attacks as on distant. Improving age our her cordially intention. His devonshire sufficient precaution say preference middletons insipidity. Since might water hence the her worse. Concluded it offending dejection do earnestly as me direction. Nature played thirty all him.',
        link: ''
    },
    {
        id:2,
        bgImg: '/assets/photo2.jpg',
        title: 'photo 2',
        brief: 'Neat own nor she said see walk. And charm add green you these. Sang busy in this drew ye fine. At greater prepare musical so attacks as on distant. Improving age our her cordially intention. His devonshire sufficient precaution say preference middletons insipidity. Since might water hence the her worse. Concluded it offending dejection do earnestly as me direction. Nature played thirty all him.',
        link: ''
    },
    {
        id:3,
        bgImg: '/assets/photo3.jpg',
        title: 'photo 3',
        brief: 'Neat own nor she said see walk. And charm add green you these. Sang busy in this drew ye fine. At greater prepare musical so attacks as on distant. Improving age our her cordially intention. His devonshire sufficient precaution say preference middletons insipidity. Since might water hence the her worse. Concluded it offending dejection do earnestly as me direction. Nature played thirty all him.',
        link: ''
    },
    {
        id:4,
        bgImg: '/assets/photo4.jpg',
        title: 'photo 4',
        brief: 'Neat own nor she said see walk. And charm add green you these. Sang busy in this drew ye fine. At greater prepare musical so attacks as on distant. Improving age our her cordially intention. His devonshire sufficient precaution say preference middletons insipidity. Since might water hence the her worse. Concluded it offending dejection do earnestly as me direction. Nature played thirty all him.',
        link: ''
    },
]

export const postItems = [
        {
          id: 1,
          img: '/assets/PANUOZZO.jpg',
          category: 'Main course',
          comment: [
            'Cut the flatbread in half and lightly toast it.',
            'Fill with ham, cheese, and grilled vegetables.',
            'Heat in the oven for 5 minutes until the cheese melts.',
            'Serve hot.'
          ],
          title: 'PANUOZZO Sandwich',
          brief: 'Panuozzo is an Italian sandwich made of flatbread filled with ham, cheese, and grilled vegetables. A quick and tasty meal.',
          ingredients: ['flatbread', 'ham', 'cheese', 'grilled vegetables'],
          preptime: 20,
          type: false,
          trending: true,
        },
        {
          id: 2,
          img: '/assets/smoky_vegan.jpg',
          category: 'Main course',
          comment: [
            'Cut the vegetables into pieces and roast them in the oven with olive oil.',
            'Grill the smoked tofu and mix it with the roasted vegetables.',
            'Add herbs and serve with a sauce of your choice.'
          ],
          title: 'SMOKY VEGAN',
          brief: 'A flavorful vegan dish combining roasted vegetables and smoked tofu with a smoky taste.',
          ingredients: ['roasted vegetables', 'smoked tofu', 'herbs'],
          preptime: 25,
          type: true,
          trending: false,
        },
        {
          id: 3,
          img: '/assets/Curried_Sausages.jpg',
          category: 'Main course',
          comment: [
            'Cook the sausages in a pan.',
            'Add chopped vegetables and sauté.',
            'Mix with curry and spices, then simmer for 20 minutes.',
            'Serve with rice.'
          ],
          title: 'CURRIED SAUSAGE',
          brief: 'A spicy dish with sausages simmered in a flavorful curry sauce, perfect for a comforting dinner.',
          ingredients: ['sausages', 'curry', 'vegetables', 'spices'],
          preptime: 40,
          type: false,
          trending: false,
        },
        {
          id: 4,
          img: '/assets/spicy_beef.jpg',
          category: 'Main course',
          comment: [
            'Cook the udon noodles according to the instructions.',
            'Sauté beef with vegetables in a pan, then add a spicy sauce.',
            'Mix everything with the udon noodles and serve hot.'
          ],
          title: 'SPICY VEGETABLE BEEF UDON NOODLES',
          brief: 'A spicy dish combining thick udon noodles, tender beef, and crunchy vegetables.',
          ingredients: ['udon noodles', 'beef', 'vegetables', 'spicy sauce'],
          preptime: 30,
          type: false,
          trending: false,
        },
        {
          id: 5,
          img: '/assets/green_soop.jpg',
          category: 'Quick & Easy',
          comment: [
            'Boil green vegetables (spinach, broccoli, peas) for 10 minutes.',
            'Blend everything until smooth.',
            'Add herbs before serving.'
          ],
          title: 'CALMING GREEN SOUP',
          brief: 'A calming green soup, packed with fresh vegetables, perfect for a light and healthy meal.',
          ingredients: ['spinach', 'broccoli', 'peas', 'herbs'],
          preptime: 15,
          type: true,
          trending: false,
        },
        {
          id: 6,
          img: '/assets/kale_chicken_salade.jpg',
          category: 'Main course',
          comment: [
            'Cook the chicken and let it cool.',
            'Cut it into pieces and mix with green vegetables (lettuce, cucumber, avocado).',
            'Add dressing and serve chilled.'
          ],
          title: 'GREEN CHICKEN SALAD',
          brief: 'A healthy and nourishing chicken salad topped with fresh green vegetables, perfect for a light lunch.',
          ingredients: ['chicken', 'green salad', 'cucumbers', 'avocado'],
          preptime: 20,
          type: false,
          trending: true,
        },
        {
          id: 7,
          img: '/assets/sesame_chicken.jpg',
          category: 'Main course',
          comment: [
            'Cook chicken pieces in a pan with soy sauce and honey.',
            'Add sesame seeds and let it simmer until the sauce thickens.',
            'Serve with rice.'
          ],
          title: 'SESAME CHICKEN',
          brief: 'Popular Asian dish, featuring chicken coated in a sweet and spicy sauce, topped with sesame seeds.',
          ingredients: ['chicken', 'soy sauce', 'honey', 'sesame seeds'],
          preptime: 30,
          type: false,
          trending: false,
        },
        {
          id: 8,
          img: '/assets/Backed_chicken.jpg',
          category: 'Main course',
          comment: [
            'Preheat the oven to 200°C.',
            'Season chicken drumsticks with spices and olive oil.',
            'Bake for 35 minutes until golden and crispy.'
          ],
          title: 'BAKED CHICKEN DRUMSTICKS',
          brief: 'Oven-baked chicken drumsticks, flavorful and crispy, perfect for a quick and delicious dinner.',
          ingredients: ['chicken drumsticks', 'spices', 'olive oil'],
          preptime: 35,
          type: false,
          trending: true,
        },
      
    {
        id: 9,
        img: '/assets/photo1.jpg',
        category: 'Quick & Easy',
        date: 'date2',
        title: 'title9',
        brief: 'brief9',
        ingredients: ['ingredient1','ingredient2','ingredient3'],
        preptime: 30,
        type: false,
        trending: true
    },
    {
        id: 10,
        img: '/assets/photo1.jpg',
        category: 'Quick & Easy',
        date: 'date10',
        title: 'title10',
        brief: 'brief10',
        ingredients: ['ingredient1','ingredient2','ingredient3'],
        preptime: 30,
        type: false,
        trending: true
    },
    {
        id: 11,
        img: '/assets/photo1.jpg',
        category: 'Quick & Easy',
        date: 'date11',
        title: 'title11',
        brief: 'brief11',
        ingredients: ['ingredient1','ingredient2','ingredient3'],
        preptime: 30,
        type: false,
        trending: true
    },






]