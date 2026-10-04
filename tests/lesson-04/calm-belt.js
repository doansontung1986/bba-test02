let navigatorName = "Luffy";
let curentHakiLevel = 3;

const MEAT_CONSUMPTION_ON_ISLAND_A = 15;
const MEAT_CONSUMPTION_ON_ISLAND_B = 25;
const MEAT_CONSUMPTION_ON_ISLAND_C = 40;

const totalMeatConsumption =
  MEAT_CONSUMPTION_ON_ISLAND_A +
  MEAT_CONSUMPTION_ON_ISLAND_B +
  MEAT_CONSUMPTION_ON_ISLAND_C;

const averageMeatConsumption = totalMeatConsumption / 3;
const remainingMeat = totalMeatConsumption % 3;

console.log(
  "The remaining meat after distributing to 3 main members: " + remainingMeat,
);
