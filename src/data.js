const allFilters = {
  searchCharacter: function (data, input){
    if (data == "" || data == 0 || data == null || input == 0){
      throw new TypeError("Argumentos inválidos", "data.js");
    }else{
    return data.filter(item => item.name.toLowerCase().includes(input));
    }
  },
  orderAZ: function (data){
    if (data == "" || data == 0 || data == null) {
      throw new TypeError("Argumentos inválidos", "data.js");
    }else{
    return data.sort((a, z) => a.name > z.name ? 1 : -1);
    }
  },
  orderZA: function (data){
    if (data == "" || data == 0 || data == null) {
      throw new TypeError("Argumentos inválidos", "data.js");
    }else{
    return data.sort((a, z) => z.name > a.name ? 1 : -1);
    }
  },
  filterTag: function (data,tag){
    return data.filter(item => item.tags.includes(tag));
  },
    filterDifficultyEasy: function (data, difficulty){
      const charactersFilter = data.filter(function(champion){
      return champion.info.difficulty <= difficulty;
      })
      return charactersFilter;
    },
  filterDifficultyHard: function (data, difficulty){
    const charactersFilter = data.filter(function(champion){
    return champion.info.difficulty >= difficulty;
    })
    return charactersFilter;
  }
  }

  export default allFilters