import CityModel from '../model/cityModel.js';

// Get cities with filtering, searching, and projection controller function
export const getAllCities = async (req, res) => {
    try {
        // Extract query parameters from the request
        const { page = 1, limit = 10, filter, search } = req.query;

        // Convert page and limit to integers
        const pageNumber = parseInt(page);
        const limitNumber = parseInt(limit);

        // Calculate the skip value based on the page number and limit
        const skip = (pageNumber - 1) * limitNumber;

        // Construct the query object for filtering
        let query = {};
        if (filter) {
            // Implement filtering logic based on the specified criteria
            if (filter === 'population') {
                query.population = { $gt: 10000 }; // Filter cities with population greater than 100,000
            }
        }

        // Construct the search query object
        const searchQuery = search ? { country: { $regex: 'India', $options: 'i' } } : {};

        // Merge filtering and search queries
        const combinedQuery = { ...query, ...searchQuery };

        // Specify projection to include 'name', 'country', and 'population' fields
        const projection = { name: 1, country: 1, population: 1, _id: 0 };

        // Retrieve cities from the database, apply filtering, projection, sorting by name, and limit the results
        const cities = await CityModel.find(combinedQuery)
            .select(projection)
            .sort({ name: 1 })
            .skip(skip)
            .limit(limitNumber);

        // Return the paginated, filtered, searched, projected, and sorted list of cities as the response
        res.status(200).json(cities);
    } catch (error) {
        // Handle any errors
        console.error('Error retrieving cities:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
