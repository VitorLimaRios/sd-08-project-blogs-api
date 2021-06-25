const { Categorie } = require('../models');
const categoryValidation = require('../Schemas/categoryValidator');

const createCategory = async (name) => {
const { message, code } = await categoryValidation.validateCategory(name);
if (message) return { message, code }; 
   const data = await Categorie.create({ name });
    return { data };
};

module.exports = {
    createCategory,
};