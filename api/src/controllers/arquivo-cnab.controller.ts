import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ArquivoCnab} from '../models';
import {ArquivoCnabRepository} from '../repositories';

export class ArquivoCnabController {
  constructor(
    @repository(ArquivoCnabRepository)
    public arquivoCnabRepository : ArquivoCnabRepository,
  ) {}

  @post('/arquivo-cnab')
  @response(200, {
    description: 'ArquivoCnab model instance',
    content: {'application/json': {schema: getModelSchemaRef(ArquivoCnab)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArquivoCnab, {
            title: 'NewArquivoCnab',
            
          }),
        },
      },
    })
    arquivoCnab: ArquivoCnab,
  ): Promise<ArquivoCnab> {
    arquivoCnab.Id = undefined;
    return this.arquivoCnabRepository.create(arquivoCnab);
  }

  @get('/arquivo-cnab/count')
  @response(200, {
    description: 'ArquivoCnab model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ArquivoCnab) where?: Where<ArquivoCnab>,
  ): Promise<Count> {
    return this.arquivoCnabRepository.count(where);
  }

  @get('/arquivo-cnab')
  @response(200, {
    description: 'Array of ArquivoCnab model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ArquivoCnab, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ArquivoCnab) filter?: Filter<ArquivoCnab>,
  ): Promise<ArquivoCnab[]> {
    return this.arquivoCnabRepository.find(filter);
  }

  @patch('/arquivo-cnab')
  @response(200, {
    description: 'ArquivoCnab PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArquivoCnab, {partial: true}),
        },
      },
    })
    arquivoCnab: ArquivoCnab,
    @param.where(ArquivoCnab) where?: Where<ArquivoCnab>,
  ): Promise<Count> {
    return this.arquivoCnabRepository.updateAll(arquivoCnab, where);
  }

  @get('/arquivo-cnab/{id}')
  @response(200, {
    description: 'ArquivoCnab model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ArquivoCnab, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ArquivoCnab, {exclude: 'where'}) filter?: FilterExcludingWhere<ArquivoCnab>
  ): Promise<ArquivoCnab> {
    return this.arquivoCnabRepository.findById(id, filter);
  }

  @patch('/arquivo-cnab/{id}')
  @response(204, {
    description: 'ArquivoCnab PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArquivoCnab, {partial: true}),
        },
      },
    })
    arquivoCnab: ArquivoCnab,
  ): Promise<void> {
    await this.arquivoCnabRepository.updateById(id, arquivoCnab);
  }

  @put('/arquivo-cnab/{id}')
  @response(204, {
    description: 'ArquivoCnab PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() arquivoCnab: ArquivoCnab,
  ): Promise<void> {
    await this.arquivoCnabRepository.replaceById(id, arquivoCnab);
  }

  @del('/arquivo-cnab/{id}')
  @response(204, {
    description: 'ArquivoCnab DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.arquivoCnabRepository.deleteById(id);
  }
}
