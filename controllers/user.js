module.exports = {
  signup: (req, res) => {
    res.status(200).json({
      message: "anew user",
    });
  },

  login: (req, res) => {
    res.status(200).json({
      message: "u get in",
    });
  },
};
