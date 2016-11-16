export default {
  values: [{
    first_name: 'Ivan',
    last_name: 'Montiel',
    fullName: 'Ivan Montiel',
    slug: 'ivan',
  }],
  lookup: (user) => user.first_name + ' ' + user.last_name,
  fillAttr: 'fullName',
  allowSpaces: true,
};
