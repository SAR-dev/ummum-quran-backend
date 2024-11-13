/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qcfeo7fgy5w8qwl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c1sgm1tw",
    "name": "target_date",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "\\d{4}-\\d{2}-\\d{2}"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qcfeo7fgy5w8qwl")

  // remove
  collection.schema.removeField("c1sgm1tw")

  return dao.saveCollection(collection)
})