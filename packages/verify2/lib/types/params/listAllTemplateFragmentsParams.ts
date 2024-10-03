import { ListAllTemplatesParams } from './listAllTemplateParams';

/**
 * Query parameters for listing all template fragments, including pagination.
 */
export type ListAllTemplateFragmentsParams = {
    /**
     * The template ID to retrieve fragments for.
     * @example "22f571c1-f41a-4db2-bba7-f23a069200c1"
     */
    templateId: string;
  } & ListAllTemplatesParams;
