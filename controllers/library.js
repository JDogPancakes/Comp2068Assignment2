const Library = require('../models/library');

exports.index = async (request, response, next) => {
  try { 
    const libraries = await Library.find();
    
    response.status(200).json(libraries);
  } catch (error) {
    next(error);
  }
};

exports.show = async (request, response, next) => {
  try {
    const { id } = request.params;
    const library = await Library.findById(id);
    response.status(200)
    .json({ ...library._doc});
  } catch (error) {
    next(error);
  }
};

exports.create = async (request, response, next) => {
  try {
    const { name,location,book } = request.body;
    const library = await Library.create({
      name,location,book});
    response.status(200)
    .json({message: "Library was created successfully",status: "success",library});
  } catch (error) {
    next(error);
  }
};

exports.update = async (request, response, next) => {
  try {
    const { id, name,location } = request.body;

    await Library.findOneAndUpdate({ _id: id }, { name,location });
    const library = await Library.findById(id);

    response.status(200).json({message: "Library was updated successfully",status: "success",library});} 
    catch (error) {
    next(error);
  }
};

exports.destroy = async (request, response, next) => {
  try {
    const { id } = request.body;
    await Library.findOneAndDelete({ _id: id });
    response.status(200).json({message: "Library was deleted successfully",status: "success"});
  } catch (error) {
    next(error);
  }
};