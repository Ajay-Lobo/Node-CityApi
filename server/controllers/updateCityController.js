import CityModel from "../model/cityModel.js";

export const updateCity = async (req, res) => {
  try {
    const cityName = req.params.name;
    const updatedCityData = {
      name: req.body.name,
      population: req.body.population,
      country: req.body.country,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    };

    const existingCity = await CityModel.findOne({ name: cityName });
    if (!existingCity) {
      return res.status(404).json({
        message: "City not found",
      });
    }

    const updatedCity = await CityModel.findOneAndUpdate(
      { name: cityName },
      updatedCityData,
      { new: true }
    );

    res.status(200).json({
      updatedCity,
      message: "City updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Error occurred while updating city",
    });
    console.log(error);
  }
};
