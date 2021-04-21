import {
    ERR_MSG_TRANSFORMER_MUST_NOT_RETURN,
    ERR_MSG_CALLED_WITH,
    ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE,
    ERR_MSG_RECOVERER_MUST_NOT_RETURN,
} from '../shared/ErrorMessage';

const NO_VALUE_TYPE_STR = '`undefined`';

export const ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE =
    ERR_MSG_TRANSFORMER_MUST_NOT_RETURN + NO_VALUE_TYPE_STR;
export const ERR_MSG_UNWRAP_NO_VAL_FOR_UNDEFINABLE = ERR_MSG_CALLED_WITH + NO_VALUE_TYPE_STR;
export const ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_UNDEFINABLE =
    ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE + NO_VALUE_TYPE_STR;
export const ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE =
    ERR_MSG_RECOVERER_MUST_NOT_RETURN + NO_VALUE_TYPE_STR;
