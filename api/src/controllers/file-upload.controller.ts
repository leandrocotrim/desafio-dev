import {inject} from '@loopback/core';
import {
  post,
  Request,
  requestBody,
  Response,
  RestBindings
} from '@loopback/rest';
import {FILE_UPLOAD_SERVICE} from '../utils/file/keys';
import {FileUploadHandler} from '../utils/file/types';

export class FileUploadController {

  constructor(
    @inject(FILE_UPLOAD_SERVICE) private handler: FileUploadHandler,
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
      this.handler(request, response, (err: unknown) => {
        if (err) reject(err);
        else {

          const files = <Express.Multer.File[]>request.files;
          const file = <Express.Multer.File>files.find(f => f);
          const lines = file.buffer.toString()
            .replace(/\r\n/, '\n').split('\n');

          console.log(lines);

          resolve(lines);
        }
      });
    });
  }
}
