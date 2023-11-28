import axiosClient from '../axiosClient'

export function searchCocktails({commit}, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        commit('setSearchedCocktails', data.drinks)
    })
}

export function searchCocktailsByLetter({commit}, letter) {
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data}) => {
        commit('setCocktailsByLetter', data.drinks)
    })
}

export function searchCocktailsByIngredient({commit}, ing) {
    axiosClient.get(`filter.php?i=${ing}`)
    .then(({data}) => {
        commit('setCocktailsByIngredient', data.drinks)
    })
}
