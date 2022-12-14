const conn = require("../infra/db-connection")("infra/lanchonete.db")
const categoriesDAO = require("../model/categoriesDAO")(conn);

exports.getCategories = (req, res) => {
  categoriesDAO.findAll((err, rows) => {
    if (err) {
      return res.json({ message: "Houve um erro ao consultar os dados", err });
    };
    res.render("cardapio", {
      categories: rows, title: "cardapio", role: "cardapio", links: [{
        href: "/",
        label: "Home"
      },
      {
        href: "/contato",
        label: "Contato"
      },
      {
        href: "/admin-login",
        label: "Admin"
      }]
    });
  });
};