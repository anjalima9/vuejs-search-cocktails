import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import CocktailsByName from '../views/CocktailsByName.vue'
import CocktailsByLetter from '../views/CocktailsByLetter.vue'
import CocktailsByIngredient from '../views/CocktailsByIngredient.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import CocktailDetails from '../views/CocktailDetails.vue'
import Ingredients from '../views/Ingredients.vue'

const routes = [{
  path: "/",
  component: DefaultLayout,
  children:[
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/by-name/:name?",
      name: "byName",
      component: CocktailsByName,
    },
    {
      path: "/by-letter/:letter?",
      name: "byLetter",
      component: CocktailsByLetter,
    },
    {
      path: "/ingredients",
      name: "ingredients",
      component: Ingredients,
    },
    {
      path: "/by-ingredient/:ingredient",
      name: "byIngredient",
      component: CocktailsByIngredient,
    },
    {
      path: "/cocktail/:id",
      name: "cocktailDetails",
      component: CocktailDetails,
    },
  ]
},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
