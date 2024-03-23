export const maps: MapData[] = [
  { name: "Central Core", vp: 1, area_count: 40, hard: false },
  { name: "Central Core Hard", vp: 6, area_count: 40, hard: true },
  { name: "Haunted Halls", vp: 1, area_count: 16, hard: false },
  { name: "Peculiar Pyramid", vp: 1, area_count: 22, hard: false },
  { name: "Peculiar Pyramid Hard", vp: 2, area_count: 22, hard: true },
  { name: "Peculiar Pyramid - Perimeter", vp: 1, area_count: 11, hard: false },
  { name: "Peculiar Pyramid Hard - Perimeter", vp: 2, area_count: 11, hard: true },
  { name: "Wacky Wonderland", vp: 5, area_count: 80, hard: false },
  { name: "Glacial Gorge", vp: 2, area_count: 40, hard: false },
  { name: "Glacial Gorge Hard", vp: 6, area_count: 40, hard: true },
  { name: "Vicious Valley", vp: 1, area_count: 40, hard: false },
  { name: "Vicious Valley Hard", vp: 8, area_count: 40, hard: true },
  { name: "Humongous Hollow", vp: 7, area_count: 80, hard: false },
  { name: "Humongous Hollow Hard", vp: 10, area_count: 80, hard: true },
  { name: "Elite Expanse", vp: 8, area_count: 80, hard: false },
  { name: "Elite Expanse Hard", vp: 16, area_count: 80, hard: true },
  { name: "Dangerous District", vp: 4, area_count: 80, hard: false },
  { name: "Dangerous District Hard", vp: 11, area_count: 80, hard: true },
  { name: "Monumental Migration", vp: 50, area_count: 480, hard: false },
  { name: "Ominous Occult", vp: 7, area_count: 16, hard: false },
  { name: "Ominous Occult Hard", vp: 10, area_count: 16, hard: true },
  { name: "Frozen Fjord", vp: 3, area_count: 40, hard: false },
  { name: "Frozen Fjord Hard", vp: 10, area_count: 40, hard: true },
  { name: "Restless Ridge", vp: 5, area_count: 40, hard: false },
  { name: "Restless Ridge Hard", vp: 24, area_count: 43, hard: true },
  { name: "Toxic Territory", vp: 2, area_count: 20, hard: false },
  { name: "Toxic Territory Hard", vp: 4, area_count: 20, hard: true },
  { name: "Magnetic Monopole", vp: 2, area_count: 28, hard: false },
  { name: "Magnetic Monopole Hard", vp: 4, area_count: 28, hard: true },
  { name: "Magnetic Monopole - Dipole", vp: 1, area_count: 6, hard: false },
  { name: "Magnetic Monopole Hard - Dipole", vp: 3, area_count: 6, hard: true },
  { name: "Burning Bunker", vp: 3, area_count: 28, hard: false },
  { name: "Burning Bunker Hard", vp: 6, area_count: 28, hard: true },
  { name: "Grand Garden", vp: 2, area_count: 28, hard: false },
  { name: "Grand Garden Hard", vp: 5, area_count: 28, hard: true },
  { name: "Mysterious Mansion - Greater Hedge", vp: 2, area_count: 15, hard: false },
  { name: "Mysterious Mansion - Dungeon", vp: 2, area_count: 15, hard: false },
  { name: "Mysterious Mansion - Liminal Alley", vp: 1, area_count: 13, hard: false },
  { name: "Mysterious Mansion - Attic", vp: 1, area_count: 15, hard: false },
  { name: "Catastrophic Core", vp: 9, area_count: 40, hard: false },
  { name: "Cyber Castle", vp: 10, area_count: 14, hard: false },
  { name: "Cyber Castle Hard", vp: 15, area_count: 22, hard: true },
  { name: "Endless Echo", vp: 30, area_count: 400, hard: false },
  { name: "Endless Echo Hard", vp: 45, area_count: 400, hard: true },
  { name: "Shifting Sands", vp: 4, area_count: 41, hard: false },
  { name: "Infinite Inferno", vp: 3, area_count: 38, hard: false },
  { name: "Coupled Corridors - North", vp: 3, area_count: 56, hard: false },
  { name: "Coupled Corridors - South", vp: 3, area_count: 54, hard: false },
  { name: "Withering Wasteland", vp: 3, area_count: 40, hard: false },
  { name: "Dusty Depths", vp: 8, area_count: 20, hard: false },
];

interface MapData {
  name: string;
  vp: number;
  area_count: number;
  hard: boolean;
}
