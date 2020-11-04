exports.up = function (knex) {
  return knex.schema.createTable("orphanages", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.decimal("latitude", { precision: 2 }, { scale: 10 }).notNullable();
    table.decimal("longitude", 2, 10).notNullable();
    table.string("about").notNullable();
    table.string("instructions").notNullable();
    table.string("opening_hours").notNullable();
    table.boolean("open_on_weekends").notNullable().defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("orphanages");
};
// {
// 	"name":"test",
// 	"latitude":"-27.2104339",
// 	"longitude":"-49.629111",
// 	"about":"test",
// 	"instructions":"test",
// 	"opening_hours":"test",
// 	"open_on_weekends": false
// }
