import {
  SDKTestCase,
  keyAuth,
  validateBearerAuth,
} from '../../../../testHelpers';
import {
  Verify2,
  Template,
  ListAllTemplatesResponse,
  TemplateResponse,
  TemplatePage,
} from '../../lib/';

export default [
  {
    label: 'fetch a page of templates',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    requests: [
      [
        '/v2/verify/templates',
        'GET',
      ],
    ],
    responses: [
      [
        200,
        {
          total_items: 25,
          page: 1,
          page_size: 10,
          total_pages: 3,
          _embedded: {
            templates: [
              {
                template_id: 'a1b2c3d4',
                name: 'My Template',
                is_default: true,
                _links: {
                  self: {
                    href: '/v2/verify/templates/a1b2c3d4',
                  },
                },
              } as TemplateResponse,
              {
                template_id: 'e5f6g7h8',
                name: 'Another Template',
                is_default: false,
                _links: {
                  self: {
                    href: '/v2/verify/templates/e5f6g7h8',
                  },
                },
              } as TemplateResponse,
            ],
          },
          _links: {
            self: {
              href: '/v2/verify/templates',
            },
            next: {
              href: '/v2/verify/templates?page=2',
            },
          },
        } as ListAllTemplatesResponse,
      ],
    ],
    client: new Verify2(keyAuth),
    clientMethod: 'getTemplatePage' as keyof Verify2,
    parameters: [],
    generator: false,
    error: false,
    expected: {
      totalItems: 25,
      page: 1,
      pageSize: 10,
      totalPages: 3,
      templates: [
        {
          templateId: 'a1b2c3d4',
          name: 'My Template',
          isDefault: true,
          links: {
            self: {
              href: '/v2/verify/templates/a1b2c3d4',
            },
          },
        } as Template,
        {
          templateId: 'e5f6g7h8',
          name: 'Another Template',
          isDefault: false,
          links: {
            self: {
              href: '/v2/verify/templates/e5f6g7h8',
            },
          },
        } as Template,
      ],
      links: {
        self: {
          href: '/v2/verify/templates',
        },
        next: {
          href: '/v2/verify/templates?page=2',
        },
      },
    } as TemplatePage,
  },
  {
    label: 'fetch a page of templates with pagination parameters',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify/templates?page=2&page_size=10',
        'GET',
      ],
    ],
    responses: [
      [
        200,
        {
          total_items: 25,
          page: 1,
          page_size: 10,
          total_pages: 3,
          _embedded: {
            templates: [
              {
                template_id: 'a1b2c3d4',
                name: 'My Template',
                is_default: true,
                _links: {
                  self: {
                    href: '/v2/verify/templates/a1b2c3d4',
                  },
                },
              } as TemplateResponse,
              {
                template_id: 'e5f6g7h8',
                name: 'Another Template',
                is_default: false,
                _links: {
                  self: {
                    href: '/v2/verify/templates/e5f6g7h8',
                  },
                },
              } as TemplateResponse,
            ],
          },
          _links: {
            self: {
              href: '/v2/verify/templates',
            },
            next: {
              href: '/v2/verify/templates?page=2',
            },
          },
        } as ListAllTemplatesResponse,
      ],
    ],
    clientMethod: 'getTemplatePage',
    parameters: [
      {
        page: 2,
        pageSize: 10,
      }
    ],
    expected: {
      totalItems: 25,
      page: 1,
      pageSize: 10,
      totalPages: 3,
      templates: [
        {
          templateId: 'a1b2c3d4',
          name: 'My Template',
          isDefault: true,
          links: {
            self: {
              href: '/v2/verify/templates/a1b2c3d4',
            },
          },
        } as Template,
        {
          templateId: 'e5f6g7h8',
          name: 'Another Template',
          isDefault: false,
          links: {
            self: {
              href: '/v2/verify/templates/e5f6g7h8',
            },
          },
        } as Template,
      ],
      links: {
        self: {
          href: '/v2/verify/templates',
        },
        next: {
          href: '/v2/verify/templates?page=2',
        },
      },
    } as TemplatePage,
  },
  {
    label: 'list all templates',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: true,
    error: false,
    requests: [
      [
        '/v2/verify/templates?page=1',
        'GET',
      ],
      [
        '/v2/verify/templates?page=2',
        'GET',
      ],
    ],
    responses: [
      [
        200,
        {
          total_items: 25,
          page: 1,
          page_size: 10,
          total_pages: 3,
          _embedded: {
            templates: [
              {
                template_id: 'a1b2c3d4',
                name: 'My Template',
                is_default: true,
                _links: {
                  self: {
                    href: '/v2/verify/templates/a1b2c3d4',
                  },
                },
              } as TemplateResponse,
            ],
          },
          _links: {
            self: {
              href: '/v2/verify/templates',
            },
            next: {
              href: '/v2/verify/templates?page=2',
            },
          },
        } as ListAllTemplatesResponse,
      ],
      [
        200,
        {
          total_items: 25,
          page: 1,
          page_size: 10,
          total_pages: 3,
          _embedded: {
            templates: [
              {
                template_id: 'e5f6g7h8',
                name: 'Another Template',
                is_default: false,
                _links: {
                  self: {
                    href: '/v2/verify/templates/e5f6g7h8',
                  },
                },
              } as TemplateResponse,
            ],
          },
          _links: {
            self: {
              href: '/v2/verify/templates',
            },
          },
        } as ListAllTemplatesResponse,
      ],
    ],
    clientMethod: 'listAllTemplates',
    parameters: [],
    expected: [
      {
        templateId: 'a1b2c3d4',
        name: 'My Template',
        isDefault: true,
        links: {
          self: {
            href: '/v2/verify/templates/a1b2c3d4',
          },
        },
      },
      {
        templateId: 'e5f6g7h8',
        name: 'Another Template',
        isDefault: false,
        links: {
          self: {
            href: '/v2/verify/templates/e5f6g7h8',
          },
        },
      }
    ],
  },
  {
    label: 'fetch a template',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify/templates/a1b2c3d4',
        'GET',
      ],
    ],
    responses: [
      [
        200,
        {
          template_id: 'a1b2c3d4',
          name: 'My Template',
          is_default: true,
          _links: {
            self: {
              href: '/v2/verify/templates/a1b2c3d4',
            },
          },
        } as TemplateResponse,
      ],
    ],
    clientMethod: 'getTemplate' as keyof Verify2,
    parameters: [
      'a1b2c3d4',
    ],
    expected: {
      templateId: 'a1b2c3d4',
      name: 'My Template',
      isDefault: true,
      links: {
        self: {
          href: '/v2/verify/templates/a1b2c3d4',
        },
      },
    },
  },
  {
    label: 'delete a template',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify/templates/a1b2c3d4',
        'DELETE',
      ],
    ],
    responses: [
      [
        204,
      ],
    ],
    clientMethod: 'deleteTemplate' as keyof Verify2,
    parameters: [
      'a1b2c3d4',
    ],
    expected: true,
  },
  {
    label: 'create a template',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify/templates',
        'POST',
        {
          name: 'My Template',
        }
      ],
    ],
    responses: [
      [
        200,
        {
          templateId: 'a1b2c3d4',
          name: 'My Template',
          isDefault: false,
          links: {
            self: {
              href: '/v2/verify/templates/a1b2c3d4',
            },
          },

        }
      ],
    ],
    clientMethod: 'createTemplate' as keyof Verify2,
    parameters: [
      {
        name: 'My Template',
      }
    ],
    expected: {
      templateId: 'a1b2c3d4',
      name: 'My Template',
      isDefault: false,
      links: {
        self: {
          href: '/v2/verify/templates/a1b2c3d4',
        },
      }
    },
  },
  {
    label: 'update a template',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify/templates/a1b2c3d4',
        'PATCH',
        {
          name: 'My Updated Template',
          is_default: false,
        }
      ],
    ],
    responses: [
      [
        200,
        {
          templateId: 'a1b2c3d4',
          name: 'My Updated Template',
          isDefault: false,
          links: {
            self: {
              href: '/v2/verify/templates/a1b2c3d4',
            },
          },

        }
      ],
    ],
    clientMethod: 'updateTemplate' as keyof Verify2,
    parameters: [
      {
        templateId: 'a1b2c3d4',
        name: 'My Updated Template',
        isDefault: false,
      }
    ],
    expected: {
      templateId: 'a1b2c3d4',
      name: 'My Updated Template',
      isDefault: false,
      links: {
        self: {
          href: '/v2/verify/templates/a1b2c3d4',
        },
      }
    },
  },
  {
    label: 'error when missing template id',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: 'Template ID is required for updating a template',
    requests: [
    ],
    responses: [
    ],
    clientMethod: 'updateTemplate' as keyof Verify2,
    parameters: [
      {
        name: 'My Updated Template',
        isDefault: false,
      }
    ],
    expected: null,
  },
] as SDKTestCase<Verify2>[];
