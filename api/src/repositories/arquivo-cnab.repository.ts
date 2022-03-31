import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {ArquivoCnab, ArquivoCnabRelations} from '../models';

export class ArquivoCnabRepository extends DefaultCrudRepository<
  ArquivoCnab,
  typeof ArquivoCnab.prototype.Id,
  ArquivoCnabRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(ArquivoCnab, dataSource);
  }
}
