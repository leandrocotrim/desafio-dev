import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {
  post,
  Request,
  requestBody,
  Response,
  RestBindings
} from '@loopback/rest';
import {ArquivoConteudoCnab, ArquivoConteudoNormalizadoCnab, CompoCnabEnum} from '../models';
import {ArquivoCnabRepository, ArquivoConteudoCnabRepository, CnabRepository, TipoTransacaoRepository} from '../repositories';
import {FILE_UPLOAD_SERVICE} from '../utils/file/keys';
import {FileUploadHandler} from '../utils/file/types';
import {ArquivoConteudoNormalizadoCnabRepository} from './../repositories/arquivo-conteudo-normalizado-cnab.repository';

export class FileUploadController {

  constructor(
    @inject(FILE_UPLOAD_SERVICE) private handler: FileUploadHandler,
    @repository(ArquivoCnabRepository)
    private arquivoCnabRepository: ArquivoCnabRepository,
    @repository(CnabRepository) private cnabRepository: CnabRepository,
    @repository(TipoTransacaoRepository)
    private tipoTransacaoRepository: TipoTransacaoRepository,
    @repository(ArquivoConteudoCnabRepository)
    private arquivoConteudoCnabRepository: ArquivoConteudoCnabRepository,
    @repository(ArquivoConteudoNormalizadoCnabRepository)
    private arquivoConteudoNormalizadoCnabRepository: ArquivoConteudoNormalizadoCnabRepository,
  ) { }

  @post('/files', {
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
        description: 'Files and fields',
      },
    },
  })
  async fileUpload(
    @requestBody.file()
    request: Request,
    @inject(RestBindings.Http.RESPONSE) response: Response,
  ): Promise<object> {
    return new Promise<object>((resolve, reject) => {
      this.handler(request, response, async (err: unknown) => {
        if (err) reject(err);
        else {

          try {
            const files = <Express.Multer.File[]>request.files;
            const file = <Express.Multer.File>files.find(f => f);
            const lines = file.buffer.toString()
              .replace(/\r\n/, '\n').split('\n')
              .filter(line => line.length > 0);

            const arquivoCnab =
              await this.arquivoCnabRepository.create({Nome: file.originalname});

            const cnabs = await this.cnabRepository.find();
            const tiposTransacao = await this.tipoTransacaoRepository.find();

            const arquivoConteudoCnabs =
              <ArquivoConteudoCnab[]>lines.map((line, index) => {
                let arquivoConteudoCnab: {[key: string]: any}
                  = new ArquivoConteudoCnab;

                Object.values(CompoCnabEnum).forEach((campo, indexValor) => {

                  if (typeof campo === 'number') return;

                  const cnab = cnabs.find(cnab => cnab.Id === indexValor + 1);

                  const inicio = cnab!.Inicio - 1;
                  const tamanho = cnab!.Tamanho;

                  arquivoConteudoCnab[campo] =
                    line.substring(inicio, inicio + tamanho);
                });

                arquivoConteudoCnab.IdArquivoCnab = arquivoCnab.Id;
                arquivoConteudoCnab.Linha = index + 1;

                return arquivoConteudoCnab;
              });

            await this.arquivoConteudoCnabRepository.createAll(arquivoConteudoCnabs);

            const arquivoConteudoNormalizadoCnabs =
              arquivoConteudoCnabs.map(conteudo => (
                <ArquivoConteudoNormalizadoCnab>{
                  Data: new Date(
                    parseInt(conteudo.Data.substring(0, 3)),
                    parseInt(conteudo.Data.substring(4, 5)) - 1,
                    parseInt(conteudo.Data.substring(6, 7))
                  ),
                  Hora: new Date(1970, 1, 1,
                    parseInt(conteudo.Data.substring(0, 1)),
                    parseInt(conteudo.Data.substring(2, 3)),
                    parseInt(conteudo.Data.substring(4, 5)),
                  ),
                  IdArquivoCnab: conteudo.IdArquivoCnab,
                  Linha: conteudo.Linha,
                  Valor: parseInt(conteudo.Valor) / 100,
                  Tipo: parseInt(conteudo.Tipo)
                }
              ));

            await this.arquivoConteudoNormalizadoCnabRepository
              .createAll(arquivoConteudoNormalizadoCnabs);

            resolve({ok: true});

          } catch (ex) {
            resolve({ok: false, ex});
          }
        }
      });
    });
  }
}
