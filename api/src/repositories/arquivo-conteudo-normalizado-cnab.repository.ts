import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {ArquivoConteudoNormalizadoCnab, ArquivoConteudoNormalizadoCnabRelations} from '../models';

export class ArquivoConteudoNormalizadoCnabRepository extends DefaultCrudRepository<
  ArquivoConteudoNormalizadoCnab,
  typeof ArquivoConteudoNormalizadoCnab.prototype.Id,
  ArquivoConteudoNormalizadoCnabRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(ArquivoConteudoNormalizadoCnab, dataSource);
  }
}
