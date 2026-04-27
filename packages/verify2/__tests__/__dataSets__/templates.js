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
      authorization},
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
                is_default: {
                  self: {
                    href: '/v2/verify/templates/a1b2c3d4',
                  },
                },
              }{
                template_id: 'e5f6g7h8',
                name: 'Another Template',
                is_default: {
                  self: {
                    href: '/v2/verify/templates/e5f6g7h8',
                  },
                },
              }},
          _links: {
            self: {
              href: '/v2/verify/templates',
            },
            next: {
              href: '/v2/verify/templates?page=2',
            },
          },
        }(keyAuth),
    clientMethod: 'getTemplatePage' as keyof Verify2,
    parameters: [],
    generator: false,
    expected: {
      totalItems: 25,
      page: 1,
      pageSize: 10,
      totalPages: 3,
      templates: [
        {
          templateId: 'a1b2c3d4',
          name: 'My Template',
          isDefault: {
            self: {
              href: '/v2/verify/templates/a1b2c3d4',
            },
          },
        }{
          templateId: 'e5f6g7h8',
          name: 'Another Template',
          isDefault: {
            self: {
              href: '/v2/verify/templates/e5f6g7h8',
            },
          },
        }: {
        self: {
          href: '/v2/verify/templates',
        },
        next: {
          href: '/v2/verify/templates?page=2',
        },
      },
    }},
  {
    label: 'fetch a page of templates with pagination parameters',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
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
                is_default: {
                  self: {
                    href: '/v2/verify/templates/a1b2c3d4',
                  },
                },
              }{
                template_id: 'e5f6g7h8',
                name: 'Another Template',
                is_default: {
                  self: {
                    href: '/v2/verify/templates/e5f6g7h8',
                  },
                },
              }},
          _links: {
            self: {
              href: '/v2/verify/templates',
            },
            next: {
              href: '/v2/verify/templates?page=2',
            },
          },
        }: 'getTemplatePage',
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
          isDefault: {
            self: {
              href: '/v2/verify/templates/a1b2c3d4',
            },
          },
        }{
          templateId: 'e5f6g7h8',
          name: 'Another Template',
          isDefault: {
            self: {
              href: '/v2/verify/templates/e5f6g7h8',
            },
          },
        }: {
        self: {
          href: '/v2/verify/templates',
        },
        next: {
          href: '/v2/verify/templates?page=2',
        },
      },
    }},
  {
    label: 'list all templates',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
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
                is_default: {
                  self: {
                    href: '/v2/verify/templates/a1b2c3d4',
                  },
                },
              }},
          _links: {
            self: {
              href: '/v2/verify/templates',
            },
            next: {
              href: '/v2/verify/templates?page=2',
            },
          },
        }{
          total_items: 25,
          page: 1,
          page_size: 10,
          total_pages: 3,
          _embedded: {
            templates: [
              {
                template_id: 'e5f6g7h8',
                name: 'Another Template',
                is_default: {
                  self: {
                    href: '/v2/verify/templates/e5f6g7h8',
                  },
                },
              }},
          _links: {
            self: {
              href: '/v2/verify/templates',
            },
          },
        }: 'listAllTemplates',
    parameters: [],
    expected: [
      {
        templateId: 'a1b2c3d4',
        name: 'My Template',
        isDefault: {
          self: {
            href: '/v2/verify/templates/a1b2c3d4',
          },
        },
      },
      {
        templateId: 'e5f6g7h8',
        name: 'Another Template',
        isDefault: {
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
      authorization},
    client(keyAuth),
    generator: false,
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
          is_default: {
            self: {
              href: '/v2/verify/templates/a1b2c3d4',
            },
          },
        }: 'getTemplate' as keyof Verify2,
    parameters: [
      'a1b2c3d4',
    ],
    expected: {
      templateId: 'a1b2c3d4',
      name: 'My Template',
      isDefault: {
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
      authorization},
    client(keyAuth),
    generator: false,
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
    expected},
  {
    label: 'create a template',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
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
          isDefault: {
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
      isDefault: {
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
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify/templates/a1b2c3d4',
        'PATCH',
        {
          name: 'My Updated Template',
          is_default}
      ],
    ],
    responses: [
      [
        200,
        {
          templateId: 'a1b2c3d4',
          name: 'My Updated Template',
          isDefault: {
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
        isDefault}
    ],
    expected: {
      templateId: 'a1b2c3d4',
      name: 'My Updated Template',
      isDefault: {
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
      authorization},
    client(keyAuth),
    generator: 'Template ID is required for updating a template',
    requests: [
    ],
    responses: [
    ],
    clientMethod: 'updateTemplate' as keyof Verify2,
    parameters: [
      {
        name: 'My Updated Template',
        isDefault}
    ],
    expected},
];
