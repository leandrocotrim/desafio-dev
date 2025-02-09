import {
    BindingScope,
    config,
    ContextTags,
    injectable,
    Provider,
  } from '@loopback/core';
  import multer from 'multer';
  import {FILE_UPLOAD_SERVICE} from '../utils/file/keys';
  import {FileUploadHandler} from '../utils/file/types';
  
  @injectable({
    scope: BindingScope.TRANSIENT,
    tags: {[ContextTags.KEY]: FILE_UPLOAD_SERVICE},
  })
  export class FileUploadProvider implements Provider<FileUploadHandler> {
    constructor(@config() private options: multer.Options = {}) {
      if (!this.options.storage) {
        // Default to in-memory storage
        this.options.storage = multer.memoryStorage();
      }
    }
  
    value(): FileUploadHandler {
      return multer(this.options).any();
    }
  }