import Logo from '#/assets/images/logo.png';

export const formConfig = {
  validateMessages: {
    required: 'Please enter ${label}!',
    whitespace: ' ${label} cannot be empty!',
    string: {
      min: '${label} must be miximun ${min} characters.',
      max: '${label} must be maximum ${max} characters.',
    },
    types: {
      number: '${label} must be number.',
    },
    pattern: {
      mismatch: '${label} is not valid!',
    },
  },
  requiredMark: true,
};

export const appConfig = {
  title: 'CWS',
  logo: Logo,
};
