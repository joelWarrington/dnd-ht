/* eslint no-global-assign: "error" */
/* global dndapi:writable */
/* exported dndapi */
const axios = require('axios').default;

module.exports = {
  baseUrl: 'http://www.dnd5eapi.co/api',
  async getMonsters() {
    const monsters = await axios.get(`${this.baseUrl}/monsters`);
    return monsters.data.results;
  },
  async getMonster(index) {
    const monster = await axios.get(`${this.baseUrl}/monsters/${index.toString()}`);
    return monster;
  },
  async queryMonstersName(name) {
    const monsters = await axios.get(`${this.baseUrl}/monsters?${encodeURIComponent(name)}`);
    return monsters;
  },
  async getAbilityScores() {
    const abilities = await axios.get(`${this.baseUrl}/ability-scores`);
    return abilities;
  },
  async getConditions() {
    const conditions = await axios.get(`${this.baseUrl}/conditions`);
    return conditions;
  },
  async getCondition(index) {
    const condition = await axios.get(`${this.baseUrl}/conditions/${index}}`);
    return condition;
  },
  async getDamageTypes() {
    const damageTypes = await axios.get(`${this.baseUrl}/damage-types`);
    return damageTypes;
  },
  async getDamageType(index) {
    const damageType = await axios.get(`${this.baseUrl}/damage-types/${index}`);
    return damageType;
  },
};
