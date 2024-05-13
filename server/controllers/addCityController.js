import CityModel from "../model/cityModel.js";

// Add city
export const addCity = async (req, res) => {
    try {
            // Check if the city with the same name already exists
            const existingCity = await CityModel.findOne({ name: req.body.name });
            if (existingCity) {
                return res.status(400).json({
                    message: "City with the same name already exists"
                });
            }
            
        const newCity = new CityModel({
            name: req.body.name,
            population: req.body.population,
            country: req.body.country,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        });

        await newCity.save();
        res.status(200).json({
            newCity,
            message: "City has been added successfully"
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Error occurred while adding city"
        });
        console.log(error);
    }
};
