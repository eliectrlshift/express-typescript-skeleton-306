class MailTemplateClass {
  public from = 'mail@domain.tld';

  public to: string;

  public subject: string;

  public text: string;

  constructor(to: string) {
    this.to = to;
  }
}

export { MailTemplateClass };
