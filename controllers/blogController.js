const Blog = require("../modals/blog");

const blog_index = (req, res) => {
  Blog.find()

    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send({ message: err });
    });
};

const blog_create = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send({ message: err });
    });
};

const blog_put = (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  if (!id) return res.status(404).send("The course is not found");
  Blog.updateOne({ _id: id }, { $set: { name: name } })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send({ message: err });
    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(404).send("The course is not found");
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send({ message: err });
    });
};

const blog_details = (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(404).send("The course is not found");
  Blog.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send({ message: err });
    });
};

module.exports = {
  blog_index,
  blog_details,
  blog_create,
  blog_put,
  blog_delete,
};
