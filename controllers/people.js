const Person = require('../models/person');

exports.index = async (request, response, next) => {
    try {
      const people = await Person.find();
      
      response.status(200)
      .json(people);
    } catch (error) {
      next(error);
    }
  };

  exports.create = async (request, response, next) => {
    try {
      const {
        name,
        age 
      } = request.body;
      const person = await Person.create({
        name,
        age
      });

      response.status(200).json({
        message: "A new person was made",
        status: "success",
        person
      });
    } catch (error) {
        next(error);
      }
    };