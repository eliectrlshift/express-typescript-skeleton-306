import { performance } from 'perf_hooks';
import { createTransport, Transporter } from 'nodemailer';
import { LOGGER } from '@domain/shared';
import { MailerDomainService } from '@domain/shared/services';
import { InfrastructureService } from '@infrastructure/shared/infrastructure-service.decorator';

@InfrastructureService(MailerDomainService)
class NodeMailerService extends MailerDomainService {
  private readonly transporter: Transporter = createTransport({});

  async send(message: any, triggerBy: string): Promise<void> {
    try {
      const startTime = performance.now();

      await this.transporter.sendMail(message);

      const endTime = performance.now();

      const useCaseExecutionTime = endTime - startTime;

      LOGGER.info(
        `[@Mailer] triggeredBy ${triggerBy} took +${useCaseExecutionTime} ms to execute!`
      );
    } catch (error) {
      LOGGER.error(
        `[@Mailer] triggeredBy ${triggerBy} threw the following error! --- ${error}`
      );
      throw error;
    }
  }
}

export { NodeMailerService };
