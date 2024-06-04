import bcrypt from 'bcryptjs';

const loginMockSuccess = {
  username: 'Xablau',
  password: bcrypt.hashSync('123456'),
  vocation:'witch',
  level: '10',
}

const loginMockErrorEmail = {
  password: bcrypt.hashSync('123456'),
}

const loginMockErrorPassword = {
  username: 'Xablau'
};

export default {
  loginMockSuccess,
  loginMockErrorEmail,
  loginMockErrorPassword,
}