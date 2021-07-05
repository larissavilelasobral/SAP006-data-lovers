const allFilters = {
searchCharacter: function searchCharacter(data, input){
  const searchChampion = data.filter(item => item.name.toLowerCase().includes(input))
  return searchChampion
},
orderAZ: function orderAZ(data){
  const resultsAZ = data.sort((a, z) => a.name > z.name ? 1 : -1)
  return resultsAZ
},
orderZA: function orderZA(data){
  const resultsZA = data.sort((a, z) => a.name < z.name ? 1 : -1)
  return resultsZA
},
filterTag: function filterTag(data,tag){
  const charactersTags = data.filter(function(item){
  return item.tags.includes(tag);
  })
  return charactersTags
},
filterDifficultyMenor: function filterDifficulty(data, difficulty){
  const charactersFilter = data.filter(function(champion){
  return champion.info.difficulty <= difficulty;
  })
  return charactersFilter
},
filterDifficultyMaior: function filterDifficulty(data, difficulty){
  const charactersFilter = data.filter(function(champion){
  return champion.info.difficulty >= difficulty;
  })
  return charactersFilter
}
}

export default allFilters