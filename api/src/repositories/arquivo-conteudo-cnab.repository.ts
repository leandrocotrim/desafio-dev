import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {ArquivoConteudoCnab, ArquivoConteudoCnabRelations} from '../models';

export class ArquivoConteudoCnabRepository extends DefaultCrudRepository<
  ArquivoConteudoCnab,
  typeof ArquivoConteudoCnab.prototype.Id,
  ArquivoConteudoCnabRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(ArquivoConteudoCnab, dataSource);
  }
}
