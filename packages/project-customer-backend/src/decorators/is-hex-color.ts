import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsHexColor(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isHexColor',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any): boolean {
          if (typeof value !== 'string') return false;
          const regex = /^#([A-Fa-f0-9]{3}){1,2}$/;
          return regex.test(value);
        },
        defaultMessage(args: ValidationArguments): string {
          return `${args.property} must be a valid hexadecimal color code.`;
        },
      },
    });
  };
}
