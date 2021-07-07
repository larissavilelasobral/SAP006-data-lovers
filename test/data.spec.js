import allFilters from '../src/data.js';


describe('allFilters', () => {

  it('should be an object', () => {
    expect(typeof allFilters).toBe('object');
})
});

describe('searchCharacter', () => {

  it('should be a function', () => {
    expect(typeof allFilters.searchCharacter).toBe('function');
  })
  });

describe('orderAZ', () => {
  it('should be a function', () => {
    expect(typeof allFilters.orderAZ).toBe('function');
  })
  // it('should return "" for ""', () => {
  //   expect(allFilters.orderAZ('')).toBe('');
  // })
 });

 describe('orderZA', () => {
  it('should be a function', () => {
    expect(typeof allFilters.orderZA).toBe('function');
  })
//   it('should return "" for ""', () => {
//     expect(allFilters.orderZA()).toBe();
//   })
 });

 describe('filterTag', () => {
  it('should be a function', () => {
    expect(typeof allFilters.filterTag).toBe('function');
  })
  // it('should return "" for "" with tag', () => {
  //   expect(allFilters.filterTag("")).toBe("");
  // })
 });

 describe('filterDifficultyEasy', () => {
  it('should be a function', () => {
    expect(typeof allFilters.filterTag).toBe('function');
  })
//   it('should return "" for ""', () => {
//     expect(allFilters.filterDifficultyEasy()).toBe();
//   })
 });

 describe('filterDifficultyHard', () => {
  it('should be a function', () => {
    expect(typeof allFilters.filterTag).toBe('function');
  })
//   it('should return "" for ""', () => {
//     expect(allFilters.filterDifficultyHard()).toBe();
//   })
 });