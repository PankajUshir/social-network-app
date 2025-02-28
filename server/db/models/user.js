const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/sequelize')

const User = sequelize.define(
    'User',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        password_hash: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        phone_number: {
            type: DataTypes.STRING,
        },
        last_login: {
            allowNull: true,
            type: DataTypes.DATE,
        },
        status: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
        },
        created_at: {
            allowNull: true,
            type: DataTypes.DATE,
        },
        updated_at: {
            allowNull: true,
            type: DataTypes.DATE,
        },
        deleted_at: {
            allowNull: true,
            type: DataTypes.DATE,
        },
    },
    {
        modelName: 'User',
        tableName: 'User',
        timestamps: false,
    }
)

module.exports = User
