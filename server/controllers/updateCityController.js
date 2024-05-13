import CityModel from "../model/cityModel.js";

// Update city
export const updateCity = async (req, res) => {
    try {
        const cityName = req.params.name; // Extract the city name from the URL parameters
        const updatedCityData = {
            name: req.body.name, // Include the updated city name
            population: req.body.population,
            country: req.body.country,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        };

        // Check if the city with the same name already exists
        const existingCity = await CityModel.findOne({ name: cityName });
        if (!existingCity) {
            return res.status(404).json({
                message: "City not found"
            });
        }

        // Update the existing city
        const updatedCity = await CityModel.findOneAndUpdate({ name: cityName }, updatedCityData, { new: true });

        // Return success message and updated city object
        res.status(200).json({
            updatedCity,
            message: "City updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Error occurred while updating city"
        });
        console.log(error);
    }
};
