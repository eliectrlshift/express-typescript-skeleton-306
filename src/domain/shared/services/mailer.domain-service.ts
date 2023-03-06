abstract class MailerDomainService {
  public abstract send(message: any, triggerBy: string): Promise<void>;
}

export { MailerDomainService };
