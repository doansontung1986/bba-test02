let navigatorName = "Luffy";
let curentHakiLevel = 3;

const meatConsumptionOnIslandA = 15;
const meatConsumptionOnIslandB = 25;
const meatConsumptionOnIslandC = 40;

const totalMeatConsumption =
  meatConsumptionOnIslandA +
  meatConsumptionOnIslandB +
  meatConsumptionOnIslandC;

const averageMeatConsumption = totalMeatConsumption / 3;
const remainingMeat = totalMeatConsumption % 3;

console.log(
  "The remaining meat after distributing to 3 main members: " + remainingMeat
);
