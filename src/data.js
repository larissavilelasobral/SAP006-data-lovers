const allFilters = {
  searchCharacter: function (data, input){
    const searchChampion = data.filter(item => item.name.toLowerCase().includes(input))
    return searchChampion
  },
  orderAZ: function (data){
    const resultsAZ = data.sort((a, z) => a.name > z.name ? 1 : -1)
    return resultsAZ    
  },
  orderZA: function (data){
    const resultsZA = data.sort((a, z) => a.name < z.name ? 1 : -1)
    return resultsZA
  },
  filterTag: function (data,tag){
    const charactersTags = data.filter(function(item){
     return item.tags.includes(tag);
    })
    return charactersTags
  },
    filterDifficultyEasy: function (data, difficulty){
      const charactersFilter = data.filter(function(champion){
      return champion.info.difficulty <= difficulty;
      })
      return charactersFilter
    },
  filterDifficultyHard: function (data, difficulty){
    const charactersFilter = data.filter(function(champion){
    return champion.info.difficulty >= difficulty;
    })
    return charactersFilter
  }
  }

  export default allFilters