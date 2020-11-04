const db = require("../database/connection");
module.exports = {
  async index(req, res) {
    const totalOrphanages = await db("orphanages")
      .innerJoin("images", "orphanages.id", "=", "images.orphanage_id")
      .select(["orphanages.*", "images.*"]);
    // image_url: `http://192.168.15.10:3333/uploads/${user.avatar}`,
    // const { total } = totalConnections[0];
    // const resultMap = totalOrphanages.reduce((result, row) => {
    //   result[row.orphanage_id] = result[row.orphanage_id] || {
    //     ...row,
    //     images: [],
    //   };
    //   console.log(row.path);
    //   result[row.orphanage_id].images.push(row.path);

    //   return result[row.orphanage_id];
    // });
    // console.log(resultMap);
    return res.json(totalOrphanages);
  },
  async show(req, res) {
    const { orphanage_id } = req.params;
    const orphanageData = await db("orphanages")
      .where("orphanages.id", "=", orphanage_id)
      .join("images", "orphanages.id", "=", "images.orphanage_id")
      .select(["orphanages.*", "images.*"]);

    if (orphanageData === undefined) {
      return res.send(orphanageData);
    }
    return res.json(orphanageData);
  },
  async create(req, res) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      // images,
    } = req.body;
    const requestImages = req.files;
    const images = requestImages.map((file) => {
      return { path: file.filename };
    });
    const trx = await db.transaction();

    const orphanageId = await trx("orphanages").insert({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    });

    const orphanage_id = orphanageId[0];

    const insertedImages = images.map((image) => {
      trx("images")
        .insert({
          orphanage_id,
          path: image.path,
        })
        .then(() => {
          trx.commit();
        });
    });

    return res.status(201).send();
  },
};
