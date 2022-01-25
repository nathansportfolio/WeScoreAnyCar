import VehicleModel from "./vehicle";

export const getVehicle = async () => {
try {
    vehicle = await VehicleModel.findOne({
        make: 'audi',
    }).populate("vehicle", [
      "model"
    ]);

  console.log('f', vehicle)
  } catch (err) {
    console.log('er', err)
  }

}
let vehicle = undefined;
