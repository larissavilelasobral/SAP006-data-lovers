import allFilters from '../src/data.js';

const data = [
  {"name": "Aatrox", "key": "266", "info": {"difficulty": "4"}, "tags": ["Fighter", "Tank"]},
  {"name": "Ahri", "key": "103", "info": {"difficulty": "5"}, "tags": ["Mage", "Assassin"]},
  {"name": "Ashe", "key": "22", "info": {"difficulty": "4"}, "tags": ["Marksman", "Support"]},
  {"name": "Zed", "key": "238", "info": {"difficulty": "7"}, "tags": ["Assassin", "Fighter"]}
]

describe('allFilters', () => {

  it('should be an object', () => {
    expect(typeof allFilters).toBe('object');
})
});

const procurarPersonagens = [
  {"name": "Aatrox"},
  {"name": "Ziggs"}
]
describe('searchCharacter', () => {
  it('should be a function', () => {
    expect(typeof allFilters.searchCharacter).toBe('function');
  })
  it('filtro de pesquisa', () => {
    const personagemA = [{"name": "Aatrox"}]
    expect(allFilters.searchCharacter(procurarPersonagens, "a")).toEqual(personagemA)
  })
  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => allFilters.orderAZ("")).toThrow(TypeError);
    expect(() => allFilters.orderAZ(0)).toThrow(TypeError);
    expect(() => allFilters.orderAZ(null)).toThrow(TypeError);
  })
  });

describe('orderAZ', () => {
  it('should be a function', () => {
    expect(typeof allFilters.orderAZ).toBe('function');
  })
  it("filtrar personagens de A a Z", () => {
    const ordemAZ = [
      {"name": "Aatrox", "key": "266", "info": {"difficulty": "4"}, "tags": ["Fighter", "Tank"]},
      {"name": "Ahri", "key": "103", "info": {"difficulty": "5"}, "tags": ["Mage", "Assassin"]},
      {"name": "Ashe", "key": "22", "info": {"difficulty": "4"}, "tags": ["Marksman", "Support"]},
      {"name": "Zed", "key": "238", "info": {"difficulty": "7"}, "tags": ["Assassin", "Fighter"]}
    ]
    expect(allFilters.orderAZ(data)).toEqual(ordemAZ);
  })
  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => allFilters.orderAZ("")).toThrow(TypeError);
    expect(() => allFilters.orderAZ(0)).toThrow(TypeError);
    expect(() => allFilters.orderAZ(null)).toThrow(TypeError);
  })
 });

 describe('orderZA', () => {
  it('should be a function', () => {
    expect(typeof allFilters.orderAZ).toBe('function');
  })
  it("filtrar personagens de Z a A", () => {
    const ordemZA = [
      {"name": "Zed", "key": "238", "info": {"difficulty": "7"}, "tags": ["Assassin", "Fighter"]},
      {"name": "Ashe", "key": "22", "info": {"difficulty": "4"}, "tags": ["Marksman", "Support"]},
      {"name": "Ahri", "key": "103", "info": {"difficulty": "5"}, "tags": ["Mage", "Assassin"]},
      {"name": "Aatrox", "key": "266", "info": {"difficulty": "4"}, "tags": ["Fighter", "Tank"]}
    ]
    expect(allFilters.orderZA(data)).toEqual(ordemZA);
  })
  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => allFilters.orderAZ("")).toThrow(TypeError);
    expect(() => allFilters.orderAZ(0)).toThrow(TypeError);
    expect(() => allFilters.orderAZ(null)).toThrow(TypeError);
  })
 });

 describe('filterTag', () => {
  it('should be a function', () => {
    expect(typeof allFilters.filterTag).toBe('function');
  })
  it('filtrar categoria Tank', () => {
    const tanks = [
      {"name": "Aatrox", "key": "266", "info": {"difficulty": "4"}, "tags": ["Fighter", "Tank"]},
    ]
    expect(allFilters.filterTag(data, "Tank")).toEqual(tanks);
  })
  it('filtrar categoria Fighter', () => {
    const fighters = [
      {"name": "Zed", "key": "238", "info": {"difficulty": "7"}, "tags": ["Assassin", "Fighter"]},
      {"name": "Aatrox", "key": "266", "info": {"difficulty": "4"}, "tags": ["Fighter", "Tank"]}
    ]
    expect(allFilters.filterTag(data, "Fighter")).toEqual(fighters);
  })
  it('filtrar categoria Mage', () => {
    const mages = [
      {"name": "Ahri", "key": "103", "info": {"difficulty": "5"}, "tags": ["Mage", "Assassin"]}
   ]
     expect(allFilters.filterTag(data, "Mage")).toEqual(mages);
  })
  it('filtrar categoria Assassin', () => {
    const assassins = [
      {"name": "Zed", "key": "238", "info": {"difficulty": "7"}, "tags": ["Assassin", "Fighter"]},
      {"name": "Ahri", "key": "103", "info": {"difficulty": "5"}, "tags": ["Mage", "Assassin"]}
  ]
    expect(allFilters.filterTag(data, "Assassin")).toEqual(assassins);
  })
  it('filtrar categoria Support', () => {
    const supports = [
      {"name": "Ashe", "key": "22", "info": {"difficulty": "4"}, "tags": ["Marksman", "Support"]}
  ]
    expect(allFilters.filterTag(data, "Support")).toEqual(supports);
  })
  it('filtrar categoria Marksman', () => {
    const marksmans = [
      {"name": "Ashe", "key": "22", "info": {"difficulty": "4"}, "tags": ["Marksman", "Support"]}
  ]
    expect(allFilters.filterTag(data, "Marksman")).toEqual(marksmans);
  })
 });

 const dificuldadePersonagens = [
  {"name": "Aatrox", "key": "266", "info": {"difficulty": "4"}, "tags": ["Fighter", "Tank"]},
  {"name": "Ahri", "key": "103", "info": {"difficulty": "5"}, "tags": ["Mage", "Assassin"]},
  {"name": "Anivia", "key": "34", "info": {"difficulty": "10"}, "tags": ["Mage", "Support"]},
  {"name": "Zed", "key": "238", "info": {"difficulty": "7"}, "tags": ["Assassin", "Fighter"]}
]
  describe('filterDifficultyEasy', () => {
  it('should be a function', () => {
    expect(typeof allFilters.filterDifficultyEasy).toBe('function');
  })
  it('filtrar dificuldade fácil', () => {
    const personagensFaceis = [
      {"name": "Aatrox", "key": "266", "info": {"difficulty": "4"}, "tags": ["Fighter", "Tank"]},
      {"name": "Ahri", "key": "103", "info": {"difficulty": "5"}, "tags": ["Mage", "Assassin"]}
    ]
    expect(allFilters.filterDifficultyEasy(dificuldadePersonagens, 5)).toEqual(personagensFaceis)
 })
});

  describe('filterDifficultyHard', () => {
    it('should be a function', () => {
      expect(typeof allFilters.filterDifficultyHard).toBe('function');
    })
    it('filtrar dificuldade dificil', () => {
     const personagensDificeis = [
      {"name": "Anivia", "key": "34", "info": {"difficulty": "10"}, "tags": ["Mage", "Support"]},
      {"name": "Zed", "key": "238", "info": {"difficulty": "7"}, "tags": ["Assassin", "Fighter"]}
    ]
      expect(allFilters.filterDifficultyHard(dificuldadePersonagens, 6)).toEqual(personagensDificeis)
    })
  });