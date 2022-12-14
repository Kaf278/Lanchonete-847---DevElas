const productsController = require("./controller/products.controller");
const categoriesController = require("./controller/categories.controller");
const generalController = require("./controller/general.controller");

module.exports = (app) => {  
  app.get("/", (req, res) => generalController.getPaginaInicial(req, res));
  app.get("/contato", (req, res) => generalController.getContato(req, res));
  app.get("/admin-login", (req, res) => generalController.getAdminLogin(req, res));
  app.get("/admin", (req, res) => generalController.getAdmin(req, res));

  app.get("/cardapio", (req, res) => categoriesController.getCategories(req, res));

  app.get("/products", (req, res) => productsController.getProducts(req, res));
  app.get("/products/:id", (req, res) => productsController.getProductById(req, res));
  app.get("/category/:id/products", (req, res) => productsController.getProductByCategoryId(req, res));
  app.get("/add-product", (req, res) => productsController.getAddProductsForm(req, res));
  app.post("/save-product", (req, res) => productsController.saveProduct(req, res));  

  app.get("/edit-product/:id", (req, res) => productsController.getEditProductsForm(req, res));
  app.get("/delete-product", (req, res) => productsController.deleteProductsForm(req, res));
  app.get("/delete", (req, res) => productsController.deleteProducts(req, res));
};