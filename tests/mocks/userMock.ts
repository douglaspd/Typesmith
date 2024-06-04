import bcrypt from 'bcryptjs';

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

const userMock = {
  id: 1,
  username: "Hagar",
  vocation: 'string',
  level: '10',
  password:  bcrypt.hashSync('terrível', SALT_ROUNDS),
  productIds: [{ id: 1 }],
  dataValues: {},
};

export default userMock;