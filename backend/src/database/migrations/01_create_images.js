exports.up = function (knex) {
  return knex.schema.createTable("images", (table) => {
    table.increments("id").primary();
    table.string("path").notNullable();
    table
      .integer("orphanage_id")
      .notNullable()
      .references("id")
      .inTable("orphanages")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("images");
};
