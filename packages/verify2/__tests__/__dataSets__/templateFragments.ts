import {
  SDKTestCase,
  keyAuth,
  validateBearerAuth,
} from '../../../../testHelpers';
import {
  Verify2,
  ListAllTemplateFragmentsResponse,
  TemplateFragmentResponse,
  TemplateFragmentPage,
  TemplateFragment,
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
        '/v2/verify/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments',
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
            template_fragments: [
              {
                template_fragment_id: 'c70f446e-997a-4313-a081-60a02a31dc19',
                channel: 'sms',
                locale: 'en-us',
                text: 'Your verification code is ${code} for ${brand}. It is valid for ${time-limit} ${time-limit-unit}.',
                date_created: '2023-01-01T10:00:00.000Z',
                date_updated: '2023-02-01T12:00:00.000Z',
                _links: {
                  self: {
                    href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/c70f446e-997a-4313-a081-60a02a31dc19',
                  },
                  template: {
                    href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
                  },
                },
              } as TemplateFragmentResponse,
              {
                template_fragment_id: '9a2c62fb-c917-42df-be7a-ab1dc88b00d0',
                channel: 'voice',
                locale: 'fr-fr',
                text: 'Votre code de vérification est ${code} pour ${brand}. Il est valide pour ${time-limit} ${time-limit-unit}.',
                date_created: '2023-03-15T09:30:00.000Z',
                date_updated: '2023-04-10T10:45:00.000Z',
                _links: {
                  self: {
                    href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/9a2c62fb-c917-42df-be7a-ab1dc88b00d0',
                  },
                  template: {
                    href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
                  },
                },
              } as TemplateFragmentResponse,
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
        } as ListAllTemplateFragmentsResponse,
      ],
    ],
    client: new Verify2(keyAuth),
    clientMethod: 'getTemplateFragmentPage' as keyof Verify2,
    parameters: [
      {
        templateId: '22f571c1-f41a-4db2-bba7-f23a069200c1',
      }
    ],
    generator: false,
    error: false,
    expected: {
      totalItems: 25,
      page: 1,
      pageSize: 10,
      totalPages: 3,
      fragments: [
        {
          templateFragmentId: 'c70f446e-997a-4313-a081-60a02a31dc19',
          channel: 'sms',
          locale: 'en-us',
          text: 'Your verification code is ${code} for ${brand}. It is valid for ${time-limit} ${time-limit-unit}.',
          dateCreated: '2023-01-01T10:00:00.000Z',
          dateUpdated: '2023-02-01T12:00:00.000Z',
          links: {
            self: {
              href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/c70f446e-997a-4313-a081-60a02a31dc19',
            },
            template: {
              href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
            },
          },
        } as TemplateFragment,
        {
          templateFragmentId: '9a2c62fb-c917-42df-be7a-ab1dc88b00d0',
          channel: 'voice',
          locale: 'fr-fr',
          text: 'Votre code de vérification est ${code} pour ${brand}. Il est valide pour ${time-limit} ${time-limit-unit}.',
          dateCreated: '2023-03-15T09:30:00.000Z',
          dateUpdated: '2023-04-10T10:45:00.000Z',
          links: {
            self: {
              href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/9a2c62fb-c917-42df-be7a-ab1dc88b00d0',
            },
            template: {
              href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
            },
          },
        } as TemplateFragment,
      ],
      links: {
        self: {
          href: '/v2/verify/templates',
        },
        next: {
          href: '/v2/verify/templates?page=2',
        },
      },
    } as TemplateFragmentPage,
  },
  {
    label: 'fetch a page of templates with pagination parameters',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    requests: [
      [
        '/v2/verify/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments?page=1&page_size=10',
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
            template_fragments: [
              {
                template_fragment_id: 'c70f446e-997a-4313-a081-60a02a31dc19',
                channel: 'sms',
                locale: 'en-us',
                text: 'Your verification code is ${code} for ${brand}. It is valid for ${time-limit} ${time-limit-unit}.',
                date_created: '2023-01-01T10:00:00.000Z',
                date_updated: '2023-02-01T12:00:00.000Z',
                _links: {
                  self: {
                    href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/c70f446e-997a-4313-a081-60a02a31dc19',
                  },
                  template: {
                    href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
                  },
                },
              } as TemplateFragmentResponse,
              {
                template_fragment_id: '9a2c62fb-c917-42df-be7a-ab1dc88b00d0',
                channel: 'voice',
                locale: 'fr-fr',
                text: 'Votre code de vérification est ${code} pour ${brand}. Il est valide pour ${time-limit} ${time-limit-unit}.',
                date_created: '2023-03-15T09:30:00.000Z',
                date_updated: '2023-04-10T10:45:00.000Z',
                _links: {
                  self: {
                    href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/9a2c62fb-c917-42df-be7a-ab1dc88b00d0',
                  },
                  template: {
                    href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
                  },
                },
              } as TemplateFragmentResponse,
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
        } as ListAllTemplateFragmentsResponse,
      ],
    ],
    client: new Verify2(keyAuth),
    clientMethod: 'getTemplateFragmentPage' as keyof Verify2,
    parameters: [
      {
        templateId: '22f571c1-f41a-4db2-bba7-f23a069200c1',
        page: 1,
        pageSize: 10,
      }
    ],
    generator: false,
    error: false,
    expected: {
      totalItems: 25,
      page: 1,
      pageSize: 10,
      totalPages: 3,
      fragments: [
        {
          templateFragmentId: 'c70f446e-997a-4313-a081-60a02a31dc19',
          channel: 'sms',
          locale: 'en-us',
          text: 'Your verification code is ${code} for ${brand}. It is valid for ${time-limit} ${time-limit-unit}.',
          dateCreated: '2023-01-01T10:00:00.000Z',
          dateUpdated: '2023-02-01T12:00:00.000Z',
          links: {
            self: {
              href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/c70f446e-997a-4313-a081-60a02a31dc19',
            },
            template: {
              href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
            },
          },
        } as TemplateFragment,
        {
          templateFragmentId: '9a2c62fb-c917-42df-be7a-ab1dc88b00d0',
          channel: 'voice',
          locale: 'fr-fr',
          text: 'Votre code de vérification est ${code} pour ${brand}. Il est valide pour ${time-limit} ${time-limit-unit}.',
          dateCreated: '2023-03-15T09:30:00.000Z',
          dateUpdated: '2023-04-10T10:45:00.000Z',
          links: {
            self: {
              href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/9a2c62fb-c917-42df-be7a-ab1dc88b00d0',
            },
            template: {
              href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
            },
          },
        } as TemplateFragment,
      ],
      links: {
        self: {
          href: '/v2/verify/templates',
        },
        next: {
          href: '/v2/verify/templates?page=2',
        },
      },
    } as TemplateFragmentPage,
  },
  {
    label: 'list all template fragments',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    requests: [
      [
        '/v2/verify/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments?page=1',
        'GET',
      ],
      [
        '/v2/verify/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments?page=2',
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
            template_fragments: [
              {
                template_fragment_id: 'c70f446e-997a-4313-a081-60a02a31dc19',
                channel: 'sms',
                locale: 'en-us',
                text: 'Your verification code is ${code} for ${brand}. It is valid for ${time-limit} ${time-limit-unit}.',
                date_created: '2023-01-01T10:00:00.000Z',
                date_updated: '2023-02-01T12:00:00.000Z',
                _links: {
                  self: {
                    href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/c70f446e-997a-4313-a081-60a02a31dc19',
                  },
                  template: {
                    href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
                  },
                },
              } as TemplateFragmentResponse,
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
        } as ListAllTemplateFragmentsResponse,
      ],
      [
        200,
        {
          total_items: 25,
          page: 1,
          page_size: 10,
          total_pages: 3,
          _embedded: {
            template_fragments: [
              {
                template_fragment_id: '9a2c62fb-c917-42df-be7a-ab1dc88b00d0',
                channel: 'voice',
                locale: 'fr-fr',
                text: 'Votre code de vérification est ${code} pour ${brand}. Il est valide pour ${time-limit} ${time-limit-unit}.',
                date_created: '2023-03-15T09:30:00.000Z',
                date_updated: '2023-04-10T10:45:00.000Z',
                _links: {
                  self: {
                    href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/9a2c62fb-c917-42df-be7a-ab1dc88b00d0',
                  },
                  template: {
                    href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
                  },
                },
              } as TemplateFragmentResponse,
            ],
          },
          _links: {
            self: {
              href: '/v2/verify/templates',
            },
            prev:{
              href: '/v2/verify/templates?page=1',
            },
          },
        } as ListAllTemplateFragmentsResponse,
      ],
    ],
    client: new Verify2(keyAuth),
    clientMethod: 'listAllTemplateFragments' as keyof Verify2,
    parameters: [
      {
        templateId: '22f571c1-f41a-4db2-bba7-f23a069200c1',
      }
    ],
    generator: true,
    error: false,
    expected: [
      {
        templateFragmentId: 'c70f446e-997a-4313-a081-60a02a31dc19',
        channel: 'sms',
        locale: 'en-us',
        text: 'Your verification code is ${code} for ${brand}. It is valid for ${time-limit} ${time-limit-unit}.',
        dateCreated: '2023-01-01T10:00:00.000Z',
        dateUpdated: '2023-02-01T12:00:00.000Z',
        links: {
          self: {
            href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/c70f446e-997a-4313-a081-60a02a31dc19',
          },
          template: {
            href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
          },
        },
      } as TemplateFragment,
      {
        templateFragmentId: '9a2c62fb-c917-42df-be7a-ab1dc88b00d0',
        channel: 'voice',
        locale: 'fr-fr',
        text: 'Votre code de vérification est ${code} pour ${brand}. Il est valide pour ${time-limit} ${time-limit-unit}.',
        dateCreated: '2023-03-15T09:30:00.000Z',
        dateUpdated: '2023-04-10T10:45:00.000Z',
        links: {
          self: {
            href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/9a2c62fb-c917-42df-be7a-ab1dc88b00d0',
          },
          template: {
            href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
          },
        },
      } as TemplateFragment,
    ],
  },
  {
    label: 'fetch a template fragment',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    requests: [
      [
        '/v2/verify/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/c70f446e-997a-4313-a081-60a02a31dc19',
        'GET',
      ],
    ],
    responses: [
      [
        200,
        {
          template_fragment_id: 'c70f446e-997a-4313-a081-60a02a31dc19',
          channel: 'sms',
          locale: 'en-us',
          text: 'Your verification code is ${code} for ${brand}. It is valid for ${time-limit} ${time-limit-unit}.',
          date_created: '2023-01-01T10:00:00.000Z',
          date_updated: '2023-02-01T12:00:00.000Z',
          _links: {
            self: {
              href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/c70f446e-997a-4313-a081-60a02a31dc19',
            },
            template: {
              href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
            },
          },
        } as TemplateFragmentResponse,
      ],
    ],
    client: new Verify2(keyAuth),
    clientMethod: 'getTemplateFragment' as keyof Verify2,
    parameters: [
      '22f571c1-f41a-4db2-bba7-f23a069200c1',
      'c70f446e-997a-4313-a081-60a02a31dc19',
    ],
    generator: false,
    error: false,
    expected: {
      templateFragmentId: 'c70f446e-997a-4313-a081-60a02a31dc19',
      channel: 'sms',
      locale: 'en-us',
      text: 'Your verification code is ${code} for ${brand}. It is valid for ${time-limit} ${time-limit-unit}.',
      dateCreated: '2023-01-01T10:00:00.000Z',
      dateUpdated: '2023-02-01T12:00:00.000Z',
      links: {
        self: {
          href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/c70f446e-997a-4313-a081-60a02a31dc19',
        },
        template: {
          href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
        },
      },
    } as TemplateFragment,
  },
  {
    label: 'delete a template fragment',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    requests: [
      [
        '/v2/verify/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/c70f446e-997a-4313-a081-60a02a31dc19',
        'DELETE',
      ],
    ],
    responses: [
      [
        204,
      ],
    ],
    client: new Verify2(keyAuth),
    clientMethod: 'deleteTemplateFragment' as keyof Verify2,
    parameters: [
      '22f571c1-f41a-4db2-bba7-f23a069200c1',
      'c70f446e-997a-4313-a081-60a02a31dc19',
    ],
    generator: false,
    error: false,
    expected: true
  },
  {
    label: 'create a template fragment',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    requests: [
      [
        '/v2/verify/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments',
        'POST',
        {
          channel: 'sms',
          locale: 'en-us',
          text: 'The verification code is ${code} for ${brand}. It is valid for ${time-limit} ${time-limit-unit}.',
        }
      ],
    ],
    responses: [
      [
        200,
        {
          template_fragment_id: 'c70f446e-997a-4313-a081-60a02a31dc19',
          channel: 'sms',
          locale: 'en-us',
          text: 'The verification code is ${code} for ${brand}. It is valid for ${time-limit} ${time-limit-unit}.',
          date_created: '2023-01-01T10:00:00.000Z',
          date_updated: '2023-02-01T12:00:00.000Z',
          _links: {
            self: {
              href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/c70f446e-997a-4313-a081-60a02a31dc19',
            },
            template: {
              href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
            },
          },
        } as TemplateFragmentResponse,
      ],
    ],
    client: new Verify2(keyAuth),
    clientMethod: 'createTemplateFragment' as keyof Verify2,
    parameters: [
      '22f571c1-f41a-4db2-bba7-f23a069200c1',
      {
        channel: 'sms',
        locale: 'en-us',
        text: 'The verification code is ${code} for ${brand}. It is valid for ${time-limit} ${time-limit-unit}.',
      }
    ],
    generator: false,
    error: false,
    expected: {
      templateFragmentId: 'c70f446e-997a-4313-a081-60a02a31dc19',
      channel: 'sms',
      locale: 'en-us',
      text: 'The verification code is ${code} for ${brand}. It is valid for ${time-limit} ${time-limit-unit}.',
      dateCreated: '2023-01-01T10:00:00.000Z',
      dateUpdated: '2023-02-01T12:00:00.000Z',
      links: {
        self: {
          href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/c70f446e-997a-4313-a081-60a02a31dc19',
        },
        template: {
          href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
        },
      },
    } as TemplateFragment,
  },
  {
    label: 'update a template fragment',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    requests: [
      [
        '/v2/verify/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/c70f446e-997a-4313-a081-60a02a31dc19',
        'PATCH',
      ],
    ],
    responses: [
      [
        200,
        {
          template_fragment_id: 'c70f446e-997a-4313-a081-60a02a31dc19',
          channel: 'sms',
          locale: 'en-us',
          text: 'The verification code is ${code} for ${brand}. It is valid for ${time-limit} ${time-limit-unit}.',
          date_created: '2023-01-01T10:00:00.000Z',
          date_updated: '2023-02-01T12:00:00.000Z',
          _links: {
            self: {
              href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/c70f446e-997a-4313-a081-60a02a31dc19',
            },
            template: {
              href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
            },
          },
        } as TemplateFragmentResponse,
      ],
    ],
    client: new Verify2(keyAuth),
    clientMethod: 'updateTemplateFragment' as keyof Verify2,
    parameters: [
      '22f571c1-f41a-4db2-bba7-f23a069200c1',
      {
        templateFragmentId: 'c70f446e-997a-4313-a081-60a02a31dc19',
        channel: 'sms',
        locale: 'en-us',
        text: 'The verification code is ${code} for ${brand}. It is valid for ${time-limit} ${time-limit-unit}.',
        dateCreated: '2023-01-01T10:00:00.000Z',
        dateUpdated: '2023-02-01T12:00:00.000Z',
        links: {
          self: {
            href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/c70f446e-997a-4313-a081-60a02a31dc19',
          },
          template: {
            href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
          },
        },
      }
    ],
    generator: false,
    error: false,
    expected: {
      templateFragmentId: 'c70f446e-997a-4313-a081-60a02a31dc19',
      channel: 'sms',
      locale: 'en-us',
      text: 'The verification code is ${code} for ${brand}. It is valid for ${time-limit} ${time-limit-unit}.',
      dateCreated: '2023-01-01T10:00:00.000Z',
      dateUpdated: '2023-02-01T12:00:00.000Z',
      links: {
        self: {
          href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/c70f446e-997a-4313-a081-60a02a31dc19',
        },
        template: {
          href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
        },
      },
    } as TemplateFragment,
  },
  {
    label: 'error when missing template fragment id',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    requests: [
    ],
    responses: [
    ],
    client: new Verify2(keyAuth),
    clientMethod: 'updateTemplateFragment' as keyof Verify2,
    parameters: [
      '22f571c1-f41a-4db2-bba7-f23a069200c1',
      {
        channel: 'sms',
        locale: 'en-us',
        text: 'The verification code is ${code} for ${brand}. It is valid for ${time-limit} ${time-limit-unit}.',
        dateCreated: '2023-01-01T10:00:00.000Z',
        dateUpdated: '2023-02-01T12:00:00.000Z',
        links: {
          self: {
            href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1/template_fragments/c70f446e-997a-4313-a081-60a02a31dc19',
          },
          template: {
            href: 'https://api.nexmo.com/v2/templates/22f571c1-f41a-4db2-bba7-f23a069200c1',
          },
        },
      }
    ],
    generator: false,
    error: 'Template Fragment ID is required for updating a template fragment',
    expected: null,
  }
] as SDKTestCase<Verify2>[];
