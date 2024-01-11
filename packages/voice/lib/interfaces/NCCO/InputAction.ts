import { InputAction as InputActionType } from '../../types/index';
import debug from 'debug';

debug('@vonage/voice')(
  'This interface is deprecated. Please update to use the InputActionType type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the InputActionType type
 */
export type InputAction = InputActionType;
