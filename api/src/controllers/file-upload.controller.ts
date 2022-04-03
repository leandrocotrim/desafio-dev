import {inject} from '@loopback/core';
import {
  post,
  Request,
  requestBody,
  Response,
  RestBindings
} from '@loopback/rest';
import events from 'events';
import readline from 'readline';
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

  private async exec(rl: readline.Interface) {
    for await (const line of rl) {
      console.log(`Line from file: ${line}`);
    }

    await events.once(rl, 'close');
  }

  private static getFilesAndFields(request: Request) {
    const uploadedFiles = request.files;
    const mapper = (f: globalThis.Express.Multer.File) => ({
      fieldname: f.fieldname,
      originalname: f.originalname,
      encoding: f.encoding,
      mimetype: f.mimetype,
      size: f.size,
    });

    let files: object[] = [];
    if (Array.isArray(uploadedFiles)) {
      files = uploadedFiles.map(mapper);
    } else {
      for (const filename in uploadedFiles) {
        files.push(...uploadedFiles[filename].map(mapper));
      }
    }
    return {files, fields: request.body};
  }
}
