export class HttpContinueCode {
  static statusCode: number = 100;
  static statusMessage: string = "Continue";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {}

  getStatus() {
    return {
      statusCode: HttpContinueCode.statusCode,
      statusMessage: HttpContinueCode.statusMessage,
    };
  }
}
export class HttpSwitchingProtocolsCode {
  static statusCode: number = 101;
  static statusMessage: string = "Switching Protocols";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {}

  getStatus() {
    return {
      statusCode: HttpSwitchingProtocolsCode.statusCode,
      statusMessage: HttpSwitchingProtocolsCode.statusMessage,
    };
  }
}
export class HttpProcessingCode {
  static statusCode: number = 102;
  static statusMessage: string = "Processing";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {}

  getStatus() {
    return {
      statusCode: HttpProcessingCode.statusCode,
      statusMessage: HttpProcessingCode.statusMessage,
    };
  }
}
export class HttpOKCode {
  static statusCode: number = 200;
  static statusMessage: string = "OK";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {}

  getStatus() {
    return {
      statusCode: HttpOKCode.statusCode,
      statusMessage: HttpOKCode.statusMessage,
    };
  }
}
export class HttpCreatedCode {
  static statusCode: number = 201;
  static statusMessage: string = "Created";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {}

  getStatus() {
    return {
      statusCode: HttpCreatedCode.statusCode,
      statusMessage: HttpCreatedCode.statusMessage,
    };
  }
}
export class HttpAcceptedCode {
  static statusCode: number = 202;
  static statusMessage: string = "Accepted";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {}

  getStatus() {
    return {
      statusCode: HttpAcceptedCode.statusCode,
      statusMessage: HttpAcceptedCode.statusMessage,
    };
  }
}
export class HttpNonAuthoritativeInformationCode {
  static statusCode: number = 203;
  static statusMessage: string = "Non Authoritative Information";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {}

  getStatus() {
    return {
      statusCode: HttpNonAuthoritativeInformationCode.statusCode,
      statusMessage: HttpNonAuthoritativeInformationCode.statusMessage,
    };
  }
}
export class HttpNoContentCode {
  static statusCode: number = 204;
  static statusMessage: string = "No Content";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {}

  getStatus() {
    return {
      statusCode: HttpNoContentCode.statusCode,
      statusMessage: HttpNoContentCode.statusMessage,
    };
  }
}
export class HttpResetContentCode {
  static statusCode: number = 205;
  static statusMessage: string = "Reset Content";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {}

  getStatus() {
    return {
      statusCode: HttpResetContentCode.statusCode,
      statusMessage: HttpResetContentCode.statusMessage,
    };
  }
}
export class HttpPartialContentCode {
  static statusCode: number = 206;
  static statusMessage: string = "Partial Content";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {}

  getStatus() {
    return {
      statusCode: HttpPartialContentCode.statusCode,
      statusMessage: HttpPartialContentCode.statusMessage,
    };
  }
}
export class HttpMultiStatusCode {
  static statusCode: number = 207;
  static statusMessage: string = "Multi Status";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {}

  getStatus() {
    return {
      statusCode: HttpMultiStatusCode.statusCode,
      statusMessage: HttpMultiStatusCode.statusMessage,
    };
  }
}
export class HttpAlreadyReportedCode {
  static statusCode: number = 208;
  static statusMessage: string = "Already Reported";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {}

  getStatus() {
    return {
      statusCode: HttpAlreadyReportedCode.statusCode,
      statusMessage: HttpAlreadyReportedCode.statusMessage,
    };
  }
}
export class HttpIMUsedCode {
  static statusCode: number = 226;
  static statusMessage: string = "IM Used";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {}

  getStatus() {
    return {
      statusCode: HttpIMUsedCode.statusCode,
      statusMessage: HttpIMUsedCode.statusMessage,
    };
  }
}
export class HttpMultipleChoicesCode extends Error {
  static statusCode: number = 300;
  static statusMessage: string = "Multiple Choices";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Multiple Choices");
  }

  getStatus() {
    return {
      statusCode: HttpMultipleChoicesCode.statusCode,
      statusMessage: HttpMultipleChoicesCode.statusMessage,
    };
  }
}
export class HttpMovedPermanentlyCode extends Error {
  static statusCode: number = 301;
  static statusMessage: string = "Moved Permanently";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Moved Permanently");
  }

  getStatus() {
    return {
      statusCode: HttpMovedPermanentlyCode.statusCode,
      statusMessage: HttpMovedPermanentlyCode.statusMessage,
    };
  }
}
export class HttpFoundCode extends Error {
  static statusCode: number = 302;
  static statusMessage: string = "Found";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Found");
  }

  getStatus() {
    return {
      statusCode: HttpFoundCode.statusCode,
      statusMessage: HttpFoundCode.statusMessage,
    };
  }
}
export class HttpSeeOtherCode extends Error {
  static statusCode: number = 303;
  static statusMessage: string = "See Other";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("See Other");
  }

  getStatus() {
    return {
      statusCode: HttpSeeOtherCode.statusCode,
      statusMessage: HttpSeeOtherCode.statusMessage,
    };
  }
}
export class HttpNotModifiedCode extends Error {
  static statusCode: number = 304;
  static statusMessage: string = "Not Modified";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Not Modified");
  }

  getStatus() {
    return {
      statusCode: HttpNotModifiedCode.statusCode,
      statusMessage: HttpNotModifiedCode.statusMessage,
    };
  }
}
export class HttpUseProxyCode extends Error {
  static statusCode: number = 305;
  static statusMessage: string = "Use Proxy";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Use Proxy");
  }

  getStatus() {
    return {
      statusCode: HttpUseProxyCode.statusCode,
      statusMessage: HttpUseProxyCode.statusMessage,
    };
  }
}
export class HttpTemporaryRedirectCode extends Error {
  static statusCode: number = 307;
  static statusMessage: string = "Temporary Redirect";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Temporary Redirect");
  }

  getStatus() {
    return {
      statusCode: HttpTemporaryRedirectCode.statusCode,
      statusMessage: HttpTemporaryRedirectCode.statusMessage,
    };
  }
}
export class HttpPermanentRedirectCode extends Error {
  static statusCode: number = 308;
  static statusMessage: string = "Permanent Redirect";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Permanent Redirect");
  }

  getStatus() {
    return {
      statusCode: HttpPermanentRedirectCode.statusCode,
      statusMessage: HttpPermanentRedirectCode.statusMessage,
    };
  }
}
export class HttpBadRequestCode extends Error {
  static statusCode: number = 400;
  static statusMessage: string = "Bad Request";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Bad Request");
  }

  getStatus() {
    return {
      statusCode: HttpBadRequestCode.statusCode,
      statusMessage: HttpBadRequestCode.statusMessage,
    };
  }
}
export class HttpUnauthorizedCode extends Error {
  static statusCode: number = 401;
  static statusMessage: string = "Unauthorized";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Unauthorized");
  }

  getStatus() {
    return {
      statusCode: HttpUnauthorizedCode.statusCode,
      statusMessage: HttpUnauthorizedCode.statusMessage,
    };
  }
}
export class HttpPaymentRequiredCode extends Error {
  static statusCode: number = 402;
  static statusMessage: string = "Payment Required";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Payment Required");
  }

  getStatus() {
    return {
      statusCode: HttpPaymentRequiredCode.statusCode,
      statusMessage: HttpPaymentRequiredCode.statusMessage,
    };
  }
}
export class HttpForbiddenCode extends Error {
  static statusCode: number = 403;
  static statusMessage: string = "Forbidden";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Forbidden");
  }

  getStatus() {
    return {
      statusCode: HttpForbiddenCode.statusCode,
      statusMessage: HttpForbiddenCode.statusMessage,
    };
  }
}
export class HttpNotFoundCode extends Error {
  static statusCode: number = 404;
  static statusMessage: string = "Not Found";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Not Found");
  }

  getStatus() {
    return {
      statusCode: HttpNotFoundCode.statusCode,
      statusMessage: HttpNotFoundCode.statusMessage,
    };
  }
}
export class HttpMethodNotAllowedCode extends Error {
  static statusCode: number = 405;
  static statusMessage: string = "Method Not Allowed";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Method Not Allowed");
  }

  getStatus() {
    return {
      statusCode: HttpMethodNotAllowedCode.statusCode,
      statusMessage: HttpMethodNotAllowedCode.statusMessage,
    };
  }
}
export class HttpNotAcceptableCode extends Error {
  static statusCode: number = 406;
  static statusMessage: string = "Not Acceptable";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Not Acceptable");
  }

  getStatus() {
    return {
      statusCode: HttpNotAcceptableCode.statusCode,
      statusMessage: HttpNotAcceptableCode.statusMessage,
    };
  }
}
export class HttpProxyAuthenticationRequiredCode extends Error {
  static statusCode: number = 407;
  static statusMessage: string = "Proxy Authentication Required";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Proxy Authentication Required");
  }

  getStatus() {
    return {
      statusCode: HttpProxyAuthenticationRequiredCode.statusCode,
      statusMessage: HttpProxyAuthenticationRequiredCode.statusMessage,
    };
  }
}
export class HttpRequestTimeoutCode extends Error {
  static statusCode: number = 408;
  static statusMessage: string = "Request Timeout";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Request Timeout");
  }

  getStatus() {
    return {
      statusCode: HttpRequestTimeoutCode.statusCode,
      statusMessage: HttpRequestTimeoutCode.statusMessage,
    };
  }
}
export class HttpConflictCode extends Error {
  static statusCode: number = 409;
  static statusMessage: string = "Conflict";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Conflict");
  }

  getStatus() {
    return {
      statusCode: HttpConflictCode.statusCode,
      statusMessage: HttpConflictCode.statusMessage,
    };
  }
}
export class HttpGoneCode extends Error {
  static statusCode: number = 410;
  static statusMessage: string = "Gone";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Gone");
  }

  getStatus() {
    return {
      statusCode: HttpGoneCode.statusCode,
      statusMessage: HttpGoneCode.statusMessage,
    };
  }
}
export class HttpLengthRequiredCode extends Error {
  static statusCode: number = 411;
  static statusMessage: string = "Length Required";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Length Required");
  }

  getStatus() {
    return {
      statusCode: HttpLengthRequiredCode.statusCode,
      statusMessage: HttpLengthRequiredCode.statusMessage,
    };
  }
}
export class HttpPreconditionFailedCode extends Error {
  static statusCode: number = 412;
  static statusMessage: string = "Precondition Failed";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Precondition Failed");
  }

  getStatus() {
    return {
      statusCode: HttpPreconditionFailedCode.statusCode,
      statusMessage: HttpPreconditionFailedCode.statusMessage,
    };
  }
}
export class HttpRequestEntityTooLargeCode extends Error {
  static statusCode: number = 413;
  static statusMessage: string = "Request Entity Too Large";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Request Entity Too Large");
  }

  getStatus() {
    return {
      statusCode: HttpRequestEntityTooLargeCode.statusCode,
      statusMessage: HttpRequestEntityTooLargeCode.statusMessage,
    };
  }
}
export class HttpRequestURITooLongCode extends Error {
  static statusCode: number = 414;
  static statusMessage: string = "Request URI Too Long";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Request URI Too Long");
  }

  getStatus() {
    return {
      statusCode: HttpRequestURITooLongCode.statusCode,
      statusMessage: HttpRequestURITooLongCode.statusMessage,
    };
  }
}
export class HttpUnsupportedMediaTypeCode extends Error {
  static statusCode: number = 415;
  static statusMessage: string = "Unsupported Media Type";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Unsupported Media Type");
  }

  getStatus() {
    return {
      statusCode: HttpUnsupportedMediaTypeCode.statusCode,
      statusMessage: HttpUnsupportedMediaTypeCode.statusMessage,
    };
  }
}
export class HttpRequestedRangeNotSatisfiableCode extends Error {
  static statusCode: number = 416;
  static statusMessage: string = "Requested Range Not Satisfiable";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Requested Range Not Satisfiable");
  }

  getStatus() {
    return {
      statusCode: HttpRequestedRangeNotSatisfiableCode.statusCode,
      statusMessage: HttpRequestedRangeNotSatisfiableCode.statusMessage,
    };
  }
}
export class HttpExpectationFailedCode extends Error {
  static statusCode: number = 417;
  static statusMessage: string = "Expectation Failed";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Expectation Failed");
  }

  getStatus() {
    return {
      statusCode: HttpExpectationFailedCode.statusCode,
      statusMessage: HttpExpectationFailedCode.statusMessage,
    };
  }
}
export class HttpImAteapotCode extends Error {
  static statusCode: number = 418;
  static statusMessage: string = "Im A teapot";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Im A teapot");
  }

  getStatus() {
    return {
      statusCode: HttpImAteapotCode.statusCode,
      statusMessage: HttpImAteapotCode.statusMessage,
    };
  }
}
export class HttpEnhanceYourCalmCode extends Error {
  static statusCode: number = 420;
  static statusMessage: string = "Enhance Your Calm";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Enhance Your Calm");
  }

  getStatus() {
    return {
      statusCode: HttpEnhanceYourCalmCode.statusCode,
      statusMessage: HttpEnhanceYourCalmCode.statusMessage,
    };
  }
}
export class HttpUnprocessableEntityCode extends Error {
  static statusCode: number = 422;
  static statusMessage: string = "Unprocessable Entity";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Unprocessable Entity");
  }

  getStatus() {
    return {
      statusCode: HttpUnprocessableEntityCode.statusCode,
      statusMessage: HttpUnprocessableEntityCode.statusMessage,
    };
  }
}
export class HttpLockedCode extends Error {
  static statusCode: number = 423;
  static statusMessage: string = "Locked";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Locked");
  }

  getStatus() {
    return {
      statusCode: HttpLockedCode.statusCode,
      statusMessage: HttpLockedCode.statusMessage,
    };
  }
}
export class HttpFailedDependencyCode extends Error {
  static statusCode: number = 424;
  static statusMessage: string = "Failed Dependency";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Failed Dependency");
  }

  getStatus() {
    return {
      statusCode: HttpFailedDependencyCode.statusCode,
      statusMessage: HttpFailedDependencyCode.statusMessage,
    };
  }
}
export class HttpReservedForWebDAVCode extends Error {
  static statusCode: number = 425;
  static statusMessage: string = "Reserved For WebDAV";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Reserved For WebDAV");
  }

  getStatus() {
    return {
      statusCode: HttpReservedForWebDAVCode.statusCode,
      statusMessage: HttpReservedForWebDAVCode.statusMessage,
    };
  }
}
export class HttpUpgradeRequiredCode extends Error {
  static statusCode: number = 426;
  static statusMessage: string = "Upgrade Required";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Upgrade Required");
  }

  getStatus() {
    return {
      statusCode: HttpUpgradeRequiredCode.statusCode,
      statusMessage: HttpUpgradeRequiredCode.statusMessage,
    };
  }
}
export class HttpPreconditionRequiredCode extends Error {
  static statusCode: number = 428;
  static statusMessage: string = "Precondition Required";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Precondition Required");
  }

  getStatus() {
    return {
      statusCode: HttpPreconditionRequiredCode.statusCode,
      statusMessage: HttpPreconditionRequiredCode.statusMessage,
    };
  }
}
export class HttpTooManyRequestsCode extends Error {
  static statusCode: number = 429;
  static statusMessage: string = "Too Many Requests";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Too Many Requests");
  }

  getStatus() {
    return {
      statusCode: HttpTooManyRequestsCode.statusCode,
      statusMessage: HttpTooManyRequestsCode.statusMessage,
    };
  }
}
export class HttpRequestHeaderFieldsTooLargeCode extends Error {
  static statusCode: number = 431;
  static statusMessage: string = "Request Header Fields Too Large";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Request Header Fields Too Large");
  }

  getStatus() {
    return {
      statusCode: HttpRequestHeaderFieldsTooLargeCode.statusCode,
      statusMessage: HttpRequestHeaderFieldsTooLargeCode.statusMessage,
    };
  }
}
export class HttpNoResponseCode extends Error {
  static statusCode: number = 444;
  static statusMessage: string = "No Response";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("No Response");
  }

  getStatus() {
    return {
      statusCode: HttpNoResponseCode.statusCode,
      statusMessage: HttpNoResponseCode.statusMessage,
    };
  }
}
export class HttpRetryWithCode extends Error {
  static statusCode: number = 449;
  static statusMessage: string = "Retry With";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Retry With");
  }

  getStatus() {
    return {
      statusCode: HttpRetryWithCode.statusCode,
      statusMessage: HttpRetryWithCode.statusMessage,
    };
  }
}
export class HttpBlockedByWindowsParentalControlsCode extends Error {
  static statusCode: number = 450;
  static statusMessage: string = "Blocked By Windows Parental Controls";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Blocked By Windows Parental Controls");
  }

  getStatus() {
    return {
      statusCode: HttpBlockedByWindowsParentalControlsCode.statusCode,
      statusMessage: HttpBlockedByWindowsParentalControlsCode.statusMessage,
    };
  }
}
export class HttpUnavailableForLegalReasonsCode extends Error {
  static statusCode: number = 451;
  static statusMessage: string = "Unavailable For Legal Reasons";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Unavailable For Legal Reasons");
  }

  getStatus() {
    return {
      statusCode: HttpUnavailableForLegalReasonsCode.statusCode,
      statusMessage: HttpUnavailableForLegalReasonsCode.statusMessage,
    };
  }
}
export class HttpClientClosedRequestCode extends Error {
  static statusCode: number = 499;
  static statusMessage: string = "Client Closed Request";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Client Closed Request");
  }

  getStatus() {
    return {
      statusCode: HttpClientClosedRequestCode.statusCode,
      statusMessage: HttpClientClosedRequestCode.statusMessage,
    };
  }
}
export class HttpInternalServerErrorCode extends Error {
  static statusCode: number = 500;
  static statusMessage: string = "Internal Server Error";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Internal Server Error");
  }

  getStatus() {
    return {
      statusCode: HttpInternalServerErrorCode.statusCode,
      statusMessage: HttpInternalServerErrorCode.statusMessage,
    };
  }
}
export class HttpNotImplementedCode extends Error {
  static statusCode: number = 501;
  static statusMessage: string = "Not Implemented";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Not Implemented");
  }

  getStatus() {
    return {
      statusCode: HttpNotImplementedCode.statusCode,
      statusMessage: HttpNotImplementedCode.statusMessage,
    };
  }
}
export class HttpBadGatewayCode extends Error {
  static statusCode: number = 502;
  static statusMessage: string = "Bad Gateway";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Bad Gateway");
  }

  getStatus() {
    return {
      statusCode: HttpBadGatewayCode.statusCode,
      statusMessage: HttpBadGatewayCode.statusMessage,
    };
  }
}
export class HttpServiceUnavailableCode extends Error {
  static statusCode: number = 503;
  static statusMessage: string = "Service Unavailable";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Service Unavailable");
  }

  getStatus() {
    return {
      statusCode: HttpServiceUnavailableCode.statusCode,
      statusMessage: HttpServiceUnavailableCode.statusMessage,
    };
  }
}
export class HttpGatewayTimeoutCode extends Error {
  static statusCode: number = 504;
  static statusMessage: string = "Gateway Timeout";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Gateway Timeout");
  }

  getStatus() {
    return {
      statusCode: HttpGatewayTimeoutCode.statusCode,
      statusMessage: HttpGatewayTimeoutCode.statusMessage,
    };
  }
}
export class HttpHTTPVersionNotSupportedCode extends Error {
  static statusCode: number = 505;
  static statusMessage: string = "HTTP Version Not Supported";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("HTTP Version Not Supported");
  }

  getStatus() {
    return {
      statusCode: HttpHTTPVersionNotSupportedCode.statusCode,
      statusMessage: HttpHTTPVersionNotSupportedCode.statusMessage,
    };
  }
}
export class HttpVariantAlsoNegotiatesCode extends Error {
  static statusCode: number = 506;
  static statusMessage: string = "Variant Also Negotiates";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Variant Also Negotiates");
  }

  getStatus() {
    return {
      statusCode: HttpVariantAlsoNegotiatesCode.statusCode,
      statusMessage: HttpVariantAlsoNegotiatesCode.statusMessage,
    };
  }
}
export class HttpInsufficientStorageCode extends Error {
  static statusCode: number = 507;
  static statusMessage: string = "Insufficient Storage";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Insufficient Storage");
  }

  getStatus() {
    return {
      statusCode: HttpInsufficientStorageCode.statusCode,
      statusMessage: HttpInsufficientStorageCode.statusMessage,
    };
  }
}
export class HttpLoopDetectedCode extends Error {
  static statusCode: number = 508;
  static statusMessage: string = "Loop Detected";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Loop Detected");
  }

  getStatus() {
    return {
      statusCode: HttpLoopDetectedCode.statusCode,
      statusMessage: HttpLoopDetectedCode.statusMessage,
    };
  }
}
export class HttpBandwidthLimitExceededCode extends Error {
  static statusCode: number = 509;
  static statusMessage: string = "Bandwidth Limit Exceeded";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Bandwidth Limit Exceeded");
  }

  getStatus() {
    return {
      statusCode: HttpBandwidthLimitExceededCode.statusCode,
      statusMessage: HttpBandwidthLimitExceededCode.statusMessage,
    };
  }
}
export class HttpNotExtendedCode extends Error {
  static statusCode: number = 510;
  static statusMessage: string = "Not Extended";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Not Extended");
  }

  getStatus() {
    return {
      statusCode: HttpNotExtendedCode.statusCode,
      statusMessage: HttpNotExtendedCode.statusMessage,
    };
  }
}
export class HttpNetworkAuthenticationRequiredCode extends Error {
  static statusCode: number = 511;
  static statusMessage: string = "Network Authentication Required";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Network Authentication Required");
  }

  getStatus() {
    return {
      statusCode: HttpNetworkAuthenticationRequiredCode.statusCode,
      statusMessage: HttpNetworkAuthenticationRequiredCode.statusMessage,
    };
  }
}
export class HttpNetworkReadTimeoutCode extends Error {
  static statusCode: number = 598;
  static statusMessage: string = "Network Read Timeout";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Network Read Timeout");
  }

  getStatus() {
    return {
      statusCode: HttpNetworkReadTimeoutCode.statusCode,
      statusMessage: HttpNetworkReadTimeoutCode.statusMessage,
    };
  }
}
export class HttpNetworkConnectTimeoutCode extends Error {
  static statusCode: number = 599;
  static statusMessage: string = "Network Connect Timeout";

  constructor(
    public requestData: Record<string, any>,
    public responseData: Record<string, any>,
    public requestHeaders: Record<string, string>,
    public responseHeaders: Record<string, string>
  ) {
    super("Network Connect Timeout");
  }

  getStatus() {
    return {
      statusCode: HttpNetworkConnectTimeoutCode.statusCode,
      statusMessage: HttpNetworkConnectTimeoutCode.statusMessage,
    };
  }
}
