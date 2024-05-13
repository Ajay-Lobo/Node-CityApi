import CityModel from "../model/cityModel.js";

export const getAllCities = async (req, res) => {
  try {
    const { page = 1, limit = 10, filter, search } = req.query;

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const skip = (pageNumber - 1) * limitNumber;

    let query = {};
    if (filter && Object.keys(filter).length > 0) {
      query = { ...query, ...JSON.parse(filter) };
    }
    if (search && search !== "") {
      query.name = { $regex: `^${search.replace(/"/g, '')}$`, $options: 'i' };
    }

    const projection = { name: 1, country: 1, population: 1 };

    const cities = await CityModel.find(query)
      .select(projection)
      .sort({ name: 1 })
      .skip(skip)
      .limit(limitNumber);

    res.status(200).json(cities);
  } catch (error) {
    console.error("Error retrieving cities:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
