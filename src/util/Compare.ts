import { Hero } from "./../model/hero";
export function compareHeroId(hero1: Hero, hero2: Hero) {
  const id1 = hero1.id;
  const id2 = hero2.id;

  let comparison = 0;
  if (id1 < id2) {
    comparison = 1;
  } else if (id1 > id2) {
    comparison = -1;
  }
  return comparison;
}
