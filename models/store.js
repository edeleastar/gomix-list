'use strict';

const low = require('lowdb');
const uuid = require('uuid');
const fileAsync = require('lowdb/lib/file-async');

class Store {
  constructor(file, name, defaults) {
    this.defauts = defaults;
    this.name = name;
    this.db = low(file, { storage: fileAsync, });
    this.db.defaults(defaults).value();
    this.objs = this.db.get(name);
  }

  add(obj) {
    this.objs.push(obj).last().value();
  }

  remove(obj) {
    this.db.get(this.name).remove(obj).value();
  }

  findAll() {
    return this.db.get(this.name).value();
  }

  findByIds(ids) {
    return this.db.get(this.name).keyBy('id').at(ids).value();
  }

  findBy(filter) {
    return this.db.get(this.name).filter(filter).value();
  }

  findOneBy(filter) {
    const results = this.db.get(this.name).filter(filter).value();
    return results[0];
  }

  drop() {
    this.db.get(this.name).remove().value();
  }

  save() {
    this.db.write();
  }
}

module.exports = Store;
