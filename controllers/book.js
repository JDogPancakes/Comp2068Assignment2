const Book = require('../models/book');

exports.index = async (request, response, next) => {
    try {
      const book = await Book.find();
      response.status(200)
      .json(book);
    } catch (error) {
      next(error);
    }
  };

exports.show = async (request, response, next) => {
    try {
      const { id } = request.params;
      const book = await Book.findById(id);
      response.status(200).json(book);
    } catch (error) {
      next(error);
    }
  };

exports.create = async (request, response, next) => {
    try {
      const {title,genre } = request.body;
      const book = await Book.create({title,genre});
      response.status(200).json({message: "A new book was made",status: "success",book});
    } catch (error) {
        next(error);
      }
    };
exports.update = async (request, response, next) => {
      try {
        const {id,title,genre} = request.body;
        await Book.findOneAndUpdate({ _id: id }, {id,title,genre});
        const book = await Book.findById(id);
        response.status(200).json({message: "Book was updated successfully",status: "success",book});
      } catch (error) {
        next(error);
    }
  };
exports.destroy = async (request, response, next) => {
    try {
      const { id } = request.body;
      await Book.findOneAndDelete({ _id: id });
      response.status(200).json({message: "Book was deleted successfully",status: "success"});
    } catch (error) {
      next(error);
    }
  };

  
    