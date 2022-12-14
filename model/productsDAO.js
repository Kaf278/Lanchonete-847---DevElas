class ProductsDAO {
  constructor (conn) {
    this.db = conn;
  }

  findAll(callback) {
    this.db.all(`SELECT * FROM products`, callback);
  }

  findById(id, callback) {
    this.db.get(`SELECT * FROM products WHERE id = ?`, id, callback);
  }

  findbyCategoryId(categoryId, callback) {
    this.db.all(`SELECT * FROM products WHERE categoryId = ?`, categoryId, callback);
  }

  saveProduct(product, callback) {
    const { name, price, image, categoryId, description } = product;
    this.db.run(
      `INSERT INTO products (name, image, price, categoryId, description) 
       VALUES (?, ?, ?, ?, ?)`,
      [ name, image, price, categoryId, description ],
      callback
    );
  }

  deleteProduct(product, callback) {
    this.db.run(`DELETE FROM products where id = ${product}`, callback);
  }

  // Edit copiado do professor
  // updateProduct(id, product, callback) {
  //   const { name, price, image, categoryId } = product;
  //   const sql = `UPDATE products SET name = ?, price = ?, image = ?, categoryId = ? WHERE id = ?`;

  //   this.db.run(sql, [name, price, image, categoryId, id], callback);
  // }
};

module.exports = (conn) => {
  return new ProductsDAO(conn);
};