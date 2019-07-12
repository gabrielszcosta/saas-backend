'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserTeamSchema extends Schema {
  up () {
    this.create('user_teams', (table) => {
      table.increments()
      table.interger('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.interger('team_id').unsigned().notNullable().references('id').inTable('teams').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_teams')
  }
}

module.exports = UserTeamSchema
