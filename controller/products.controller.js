const conn = require("../infra/db-connection")("infra/lanchonete.db")
const productsDAO = require("../model/productsDAO")(conn);
const categoryDAO = require("../model/categoriesDAO")(conn);
const formidable = require("formidable");
const path = require("path");
const fs = require("fs");

exports.getProducts = (req, res) => {
  productsDAO.findAll((err, rows) => {
    if (err) {
      return res.render("not-found", { errorMessage: "Houve um erro ao consultar os dados" });
    }
    res.render("cardapio", {
      products: rows, role: "products", category: false, links: [{
        href: "/",
        label: "Home"
      },
      {
        href: "/cardapio",
        label: "Cardápio"
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

exports.getProductById = (req, res) => {
  const id = req.params.id;
  productsDAO.findById(id, (err, row) => {
    if (err) {
      return res.json({ message: "Houve um erro ao consultar os dados", err });
    }

    res.render("cardapio", {
      product: row, role: "detail", links: [{
        href: "/",
        label: "Home"
      },
      {
        href: "/cardapio",
        label: "Cardápio"
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
  })
}

exports.getProductByCategoryId = (req, res) => {
  const categoryId = req.params.id;
  categoryDAO.findById(categoryId, (err, row) => {
    if (err) {
      return res.render("not-found", { errorMessage: "Houve um erro ao consultar os dados", err });
    }
    productsDAO.findbyCategoryId(categoryId, (err, rows) => {
      if (err) {
        return res.render("not-found", { errorMessage: "Houve um erro ao consultar os dados", err });
      }
      if (!rows.length) {
        return res.render("not-found", { errorMessage: "Produto não encontrado" });
      }
      res.render("cardapio", {
        products: rows, role: "products", category: row, links: [{
          href: "/",
          label: "Home"
        },
        {
          href: "/cardapio",
          label: "Cardápio"
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
  });
};


exports.getAddProductsForm = (req, res) => {
  categoryDAO.findAll((err, rows) => {
    if (err) {
      return res.status(500).json({
        errorMessage: "Erro ao consultar os dados.",
        err: err
      });
    };
    res.render("add-product", {
      categories: rows, links: [{
        href: "/",
        label: "Home"
      },
      {
        href: "/cardapio",
        label: "Cardápio"
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

exports.saveProduct = (req, res) => {
  const formData = new formidable.IncomingForm();
  formData.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({
        errorMessage: "Algo errado aconteceu.",
        err: err
      });
    };

    const imagesPath = path.join(__dirname, "../public/images", files.image.newFilename);

    const product = { ...fields, image: files.image.newFilename };

    productsDAO.saveProduct(product, (err) => {
      if (err) {
        return res.status(500).json({
          errorMessage: "Erro ao salvar os dados.",
          err: err
        });
      }

      // Salva a imagem no caminho definido, apenas após obter suceso ao salvar no banco
      fs.renameSync(files.image.filepath, imagesPath);

      return res.redirect("/cardapio");
    });
  });
};

exports.deleteProductsForm = (req, res) => {
  productsDAO.findAll((err, rows) => {
    if (err) {
      return res.status(500).json({
        errorMessage: "Erro ao consultar os dados.",
        err: err
      });
    };
    res.render("delete-product", {
      products: rows, links: [{
        href: "/",
        label: "Home"
      },
      {
        href: "/cardapio",
        label: "Cardápio"
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

exports.deleteProducts = (req, res) => {
  const produtoExcluir = req.query.productId;
  if (!produtoExcluir) {
    return res.status(500).json({
      errorMessage: "Algo errado aconteceu.",
    });
  };

  productsDAO.deleteProduct(produtoExcluir, (err) => {
    if (err) {
      return res.render("not-found", { errorMessage: "Erro ao deletar o produto." });
    }
    return res.redirect("/");
  })
}


// Edit copiado do professor

// exports.getEditProductsForm = (req, res) => {
//   const id = req.params.id;

//   productsDAO.findById(id, (err, row) => {
//     if (err) {
//       return res.status(500).json({
//         errorMessage: "Houve um erro ao consultar os dados.",
//         err: err,
//       });
//     }

//     if (!row) {
//       return res.status(404).json({
//         errorMessage: "Produto não encontrado.",
//         err: err,
//       });
//     }

//     categoryDAO.findAll((err, rows) => {
//       if (err) {
//         return res.status(500).json({
//           errorMessage: "Erro ao consultar os dados.",
//           err: err,
//         });
//       }

//       res.render("edit-product", { product: row, categories: rows });
//     });
//   });
// };

// exports.editProduct = (req, res) => {
//   const id = req.params.id;
//   productsDAO.findById(id, (err, row) => {
//     if (err) {
//       return res.status(500).json({
//         errorMessage: "Houve um erro ao consultar os dados.",
//         err: err,
//       });
//     }

//     console.log(row);

//     if (!row) {
//       return res.status(404).json({
//         errorMessage: "Produto não encontrado.",
//         err: err,
//       });
//     }

//     const product = { ...row, ...req.body };

//     console.log(req.body);

//     productsDAO.updateProduct(id, product, (err2) => {
//       if (err2) {
//         return res.status(500).json({
//           errorMessage: "Algo errado aconteceu.",
//           err: err2,
//         });
//       }
//       return res.redirect("/");
//     });

//   });
// };