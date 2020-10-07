export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
      let config = {
        'required': 'Required',
        'invalidEmailAddress': 'Invalid email address',
        'invalidMobile': 'Invalid Mobile. Mobile must be at least 10 characters long, and contain a number.',
        'minlength': `Minimum length ${validatorValue.requiredLength}`
      };
  
      return config[validatorName];
    }
  
    static emailValidator(control) {
      if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        return null;
      } else {
        return { 'invalidEmailAddress': true };
      }
    }
  
    static mobileNumberValidator(control) {
  
      if (control.value.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
        return null;
      } else {
        return { 'invalidMobile': true };
      }
    }
  }
  