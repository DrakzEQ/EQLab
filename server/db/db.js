const env    = process.env.NODE_ENV || "development",
      path   = require("path"),
      config = require(path.join(__dirname, '..', 'config', 'db.json'))[env];

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: config.host,
    user: config.username,
    password: config.password,
    database: config.database
  }
  // pool: { min: 0, max: 7 }
});

const sqlEvent = require('mysql-events')({
  host: config.host,
  user: config.username,
  password: config.password
}, {
  includeEvents: ['tablemap', 'writerows']
});

const db = {

  select: (tableStr, columnsArr, whereObj) => {
    return new Promise((resolve, reject) => {
      knex
        .select(columnsArr)
        .from(tableStr)
        .where(whereObj)
        .then(SQLdata => resolve(SQLdata))
        .catch(error => reject(error))
    });
  },

  insert: (tableStr, insertArr) => {
    return new Promise((resolve, reject) => {
      knex
        .insert(insertArr)
        .into(tableStr)
        .then(SQLdata => {
          resolve(SQLdata);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  update: (tableStr, updateObj, whereObj) => {
    return new Promise((resolve, reject) => {
      knex(tableStr)
        .update(updateObj)
        .where(whereObj)
        .then(SQLdata => {
          resolve(SQLdata);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  delete: (tableStr, whereObj) => {
    return new Promise((resolve, reject) => {
      knex(tableStr)
        .del()
        .where(whereObj)
        .then(SQLdata => {
          resolve(SQLdata)
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  
  raw: queryStr => {
    return new Promise((resolve, reject) => {
      knex.raw(queryStr)
        .then(SQLdata => {
          resolve(SQLdata);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

}
  
module.exports = { 
  db, 
  sqlEvent 
};