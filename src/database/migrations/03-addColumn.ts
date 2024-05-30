import { DataTypes, QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.addColumn('users', 'productIds', {
      type: DataTypes.INTEGER.UNSIGNED,
      field: 'product_id',
      allowNull: true,
      references: {
        model: 'products',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.removeColumn('users', 'product_id');
  }
};