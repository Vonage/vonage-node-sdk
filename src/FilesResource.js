"use strict";

var fs = require("fs");

class FilesResource {
  /**
   * The path to the `calls` resource.
   */
  static get PATH() {
    return "/v1/files";
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
    if (!fileIdOrUrl) {
      throw new Error('"fileIdOrUrl" is a required parameter');
    }

    fileIdOrUrl = fileIdOrUrl.split("/").pop(-1);

    var config = {
      host: "api.nexmo.com",
      path: `${FilesResource.PATH}/${fileIdOrUrl}`,
      method: "GET",
      headers: {
        "Content-Type": "application/octet-stream",
        Authorization: `Bearer ${this.creds.generateJwt()}`
      }
    };

    this.options.httpClient.request(config, callback);
  }

  /**
   * Save remote File locally
   *
   * @param {string} [fileIdOrUrl] - The unique identifier or URL for the file
   * @param {string} [file] - Filename or file descriptor
   * @param {function} callback - function to be called when the request completes.
   */
  save(fileIdOrUrl, file, callback) {
    this.get(fileIdOrUrl, (error, data) => {
      if (error) {
        callback(error, null);
      } else {
        this.__storeFile(data, file, callback);
      }
    });
  }

  __storeFile(data, file, callback) {
    fs.writeFile(file, data, error => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, file);
      }
    });
  }
}

export default FilesResource;
