const namespace = type => `error/${type}`;

export const RESPONSE_ERROR = namespace('RESPONSE_ERROR');
export const responseError = payload => ({ type: RESPONSE_ERROR, payload });
