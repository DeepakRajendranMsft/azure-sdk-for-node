/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the Deployment class.
 * @constructor
 * Deployment operation parameters.
 *
 * @member {object} [properties] Gets or sets the deployment properties.
 * 
 * @member {object} [properties.template] Gets or sets the template content.
 * Use only one of Template or TemplateLink.
 * 
 * @member {object} [properties.templateLink] Gets or sets the URI referencing
 * the template. Use only one of Template or TemplateLink.
 * 
 * @member {string} [properties.templateLink.uri] URI referencing the template.
 * 
 * @member {string} [properties.templateLink.contentVersion] If included it
 * must match the ContentVersion in the template.
 * 
 * @member {object} [properties.parameters] Deployment parameters. Use only
 * one of Parameters or ParametersLink.
 * 
 * @member {object} [properties.parametersLink] Gets or sets the URI
 * referencing the parameters. Use only one of Parameters or ParametersLink.
 * 
 * @member {string} [properties.parametersLink.uri] URI referencing the
 * template.
 * 
 * @member {string} [properties.parametersLink.contentVersion] If included it
 * must match the ContentVersion in the template.
 * 
 * @member {string} [properties.mode] Gets or sets the deployment mode.
 * Possible values include: 'Incremental', 'Complete'
 * 
 * @member {object} [properties.debugSetting] Gets or sets the debug setting
 * of the deployment.
 * 
 * @member {string} [properties.debugSetting.detailLevel] Gets or sets the
 * debug detail level.
 * 
 */
function Deployment() {
}

/**
 * Defines the metadata of Deployment
 *
 * @returns {object} metadata of Deployment
 *
 */
Deployment.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Deployment',
    type: {
      name: 'Composite',
      className: 'Deployment',
      modelProperties: {
        properties: {
          required: false,
          serializedName: 'properties',
          type: {
            name: 'Composite',
            className: 'DeploymentProperties'
          }
        }
      }
    }
  };
};

module.exports = Deployment;
