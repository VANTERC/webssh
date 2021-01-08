module.exports = {
  extends: ['plugin:vue/essential',"eslint:recommended"],
  rules: {
    'semi': [2, 'always'],
    'quotes': [2, 'single'],
    'space-before-function-paren': [2, 'always'],
    "no-undef": 0,//不能有未定义的变量
    "no-undef-init": 0,//变量初始化时不能直接给它赋值为undefined
    "no-undefined": 0,//不能使用undefined
  },
  parserOptions: {
    "parser": "babel-eslint",
    "ecmaVersion": 2018,
    "sourceType": "module"
    },
  plugins: [
      "vue"
  ]
};
