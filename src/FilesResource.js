"use strict";

var fs = require('fs');

class FilesResource {

  /**
   * The path to the `calls` resource.
   */
  static get PATH() {
    return '/v1/files';
  }

  /**
   * Creates a new FilesResource.
   *
   * @param {Credentials} creds - Credentials used when interacting with the Nexmo API.
   * @param {Object} options - additional options for the class.
   */
  constructor(creds, options) {
    this.creds = creds;
    this.options = options;
  }

  /**
   * Get stream for a remote File
   *
   * @param {string} [fileIdOrUrl] - The unique identifier or URL for the file
   * @param {function} callback - function to be called when the request completes.
   */
  get(fileIdOrUrl, callback) {

    if(!fileIdOrUrl) {
      throw new Error('"fileIdOrUrl" is a required parameter');
    }

    fileIdOrUrl = fileIdOrUrl.split("/").pop(-1);

    var config = {
      host:'api.nexmo.com',
      path:`${FilesResource.PATH}/${fileIdOrUrl}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/octet-stream',
        'Authorization': `Bearer ${this.creds.generateJwt()}`
      }
    };

    this.options.httpClient.request(config, callback);
  }

  /**
   * Save remote File locally
   *
   * @param {string} [fileIdOrUrl] - The unique identifier or URL for the file
   * @param {string} [filePath] - Path name to store the file to
   * @param {function} callback - function to be called when the request completes.
   */
  save(fileIdOrUrl, filePath, callback) {
    this.get(fileIdOrUrl, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        this.__storeFile(data, filePath, callback);
      }
    })
  }

  __storeFile(data, filePath, callback) {
    fs.writeFile(filePath, data, (error) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, filePath);
      }
    });
  }

}

export default FilesResource;
