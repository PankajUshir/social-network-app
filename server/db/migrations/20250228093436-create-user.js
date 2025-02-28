'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            'User',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                },
                email: {
                    allowNull: false,
                    type: Sequelize.STRING,
                },
                password_hash: {
                    allowNull: false,
                    type: Sequelize.STRING,
                },
                first_name: {
                    type: Sequelize.STRING,
                },
                last_name: {
                    type: Sequelize.STRING,
                },
                phone_number: {
                    type: Sequelize.STRING,
                },
                last_login: {
                    allowNull: true,
                    type: Sequelize.DATE,
                },
                status: {
                    allowNull: false,
                    type: Sequelize.BOOLEAN,
                },
                created_at: {
                    allowNull: true,
                    type: Sequelize.DATE,
                },
                updated_at: {
                    allowNull: true,
                    type: Sequelize.DATE,
                },
                deleted_at: {
                    allowNull: true,
                    type: Sequelize.DATE,
                },
            },
            {
                modelName: 'User',
                tableName: 'User',
                timestamps: false,
            }
        )
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('User')
    },
}
