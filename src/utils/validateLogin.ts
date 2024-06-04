type ResponseValidate = {
  status: 'INVALID_DATA' | 'SUCCESS',
  data: { message: string },
};

const validate = (username: string, password: string): ResponseValidate => {
  if (!username || !password) {
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }
  return { status: 'SUCCESS', data: { message: '' } };
};

export default {
  validate,
};