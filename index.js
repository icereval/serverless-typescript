'use strict';

/**
 * Serverless TypeScript Plugin
 */

module.exports = function(S) {

  const BbPromise  = require('bluebird');

  /**
   * ServerlessOptimizer
   */

  class ServerlessTypeScript extends S.classes.Plugin {

    /**
     * Constructor
     */

    constructor() {
      super();
      require('ts-node/register');
    }

    /**
     * Define your plugins name
     */

    static getName() {
      return 'com.loqwai.' + ServerlessTypeScript.name;
    }

    /**
     * Register Hooks
     */

    registerHooks() {
      return BbPromise.resolve();
    }

  }

  return ServerlessTypeScript;
};