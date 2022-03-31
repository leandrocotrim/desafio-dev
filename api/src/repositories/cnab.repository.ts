import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Cnab, CnabRelations} from '../models';

export class CnabRepository extends DefaultCrudRepository<
  Cnab,
  typeof Cnab.prototype.Id,
  CnabRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(Cnab, dataSource);
  }
}
