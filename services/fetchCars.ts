import VehicleModel from "./vehicle";

export const getVehicle = async () => {
try {
    return VehicleModel.findOne({}, function(err, vehicle) {
      console.log('vehicle')
    })

  console.log('f', vehicle)
  } catch (err) {
    console.log('er', err)
  }

}
let vehicle = undefined;
