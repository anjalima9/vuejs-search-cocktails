export function setSearchedCocktails(state, cocktails) {
state.searchedCocktails = cocktails || []
}

export function setCocktailsByLetter(state, cocktails) {
    state.cocktailsByLetter = cocktails || []
}

export function setCocktailsByIngredient(state, cocktails) {
    state.cocktailsByIngredient = cocktails || []
}

export function setIngredient(state, ingredient) {
    state.ingredient = ingredient
}
