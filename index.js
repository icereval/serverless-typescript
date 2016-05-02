'use strict';

/**
 * Serverless TypeScript Plugin
 */

module.exports = function(S) {

  require('ts-node/register');

  /**
   * ServerlessOptimizer
   */

  class ServerlessTypeScript extends S.classes.Plugin {

    /**
     * Constructor
     */

    constructor() {
      super();
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