import CityModel from "../model/cityModel.js";

export const deleteCity = async (req, res) => {
  const cityName = req.params.name;

  try {
    const deletedCity = await CityModel.findOneAndDelete({ name: cityName });

    if (!deletedCity) {
      return res.status(404).json({ message: "City not found" });
    }

    res.status(200).json({ message: "City deleted successfully" });
  } catch (error) {
    console.error("Error deleting city:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
