import { validateForms } from './../functions/validate-forms';
const rules1 = [
  {
    ruleSelector: '.form-name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.form-lvl',
    rules: [
      {
        rule: 'minLength',
        value: 2
      },
      {
        rule: 'maxLength',
        value: 10
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните уровень!'
      }
    ]
  },
  {
    ruleSelector: '.form-age',
    rules: [
      {
        rule: 'required',
      },
      {
        rule: 'number',
      },
      {
        rule: 'minNumber',
        value: 18,
      },
      {
        rule: 'maxNumber',
        value: 150,
      },
    ]
  },
  {
    ruleSelector: '.form-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.form-wish',
    rules: [
      {
        rule: 'minLength',
        value: 15,
      },
      {
        rule: 'maxLength',
        value: 1200,
      },
    ]
  },
];

const afterForm = () => {
};

validateForms('.cta__form', rules1, afterForm, ['.form__choose']);
