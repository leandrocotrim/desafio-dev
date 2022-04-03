import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin, SchemaMigrationOptions} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {CnabRepository} from './repositories/cnab.repository';
import {CnabSeed} from './repositories/seed/cnab-seed';
import {TipoTransacaoSeed} from './repositories/seed/tipo-transacao-seed';
import {TipoTransacaoRepository} from './repositories/tipo-transacao.repository';
import {MySequence} from './sequence';

export {ApplicationConfig};

export class ApiApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(
    options: ApplicationConfig = {},
  ) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }

  async migrateSchema(options?: SchemaMigrationOptions) {

    await super.migrateSchema(options);

    const cnabRepository = await this.getRepository(CnabRepository);
    const cnabSeed = new CnabSeed(cnabRepository);
    await cnabSeed.seed();

    const tipoTransacaoRepository = await this.getRepository(TipoTransacaoRepository);
    const tipoTransacaoSeed = new TipoTransacaoSeed(tipoTransacaoRepository);
    await tipoTransacaoSeed.seed();

  }
}
