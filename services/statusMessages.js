exports.status = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIEZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  SERVER_ERROR: 500,
};

exports.message = {
  serverError: { message: 'Sistema Indisponível' },
  fieldsInvalid: { message: 'Invalid fields' },
  userAlredyRegistered: { message: 'User already registered' },
  userNotExist: { message: 'User does not exist' },
  displaynameLength: { message: '"displayName" length must be at least 8 characters long' },
  emailInvalid: { message: '"email" must be a valid email' },
  emailRequired: { message: '"email" is required' },
  emailEmpty: { message: '"email" is not allowed to be empty' },
  passwordLength: { message: '"password" length must be 6 characters long' },
  passwordRequired: { message: '"password" is required' },
  passwordEmpty: { message: '"password" is not allowed to be empty' },
  loginEmpty: { message: '"email" is not allowed to be empty' },
  loginpasswordEmpty: { message: '"password" is not allowed to be empty' },
  categoryNameEmpty: { message: '"name" is required' },
  categoryIdEmpty: { message: '"categoryId" is required' },
  categoryIdNotFound: { message: '"categoryId" not found' },
  postTitleEmpty: { message: '"title" is required' },
  postContentEmpty: { message: '"content" is required' },
  postIdNotExist: { message: 'Post does not exist' },
  tokenNotFound: { message: 'Token not found' },
  tokenExpired: { message: 'Expired or invalid token' },
};