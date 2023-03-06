import { readFileSync } from 'fs';
import { join } from 'path';
import { compile } from 'handlebars';
import { MailTemplateClass } from './template-class';

const sourceTemplate = readFileSync(
  join(__dirname, 'authentication-forgot-password.hbs'),
  'utf8'
);

interface TData {
  username: string;
  token: string;
}

class AuthenticationForgotPasswordMailTemplate extends MailTemplateClass {
  constructor(to: string) {
    super(to);

    this.subject = 'New Login from project';
    this.text = 'New Login from project';
  }

  public get(data: TData) {
    const template = compile(sourceTemplate);
    console.log(data);
    return {
      from: this.from,
      to: this.to,
      subject: this.subject,
      text: this.text,
      html: template(data),
    };
  }
}

export { AuthenticationForgotPasswordMailTemplate };
