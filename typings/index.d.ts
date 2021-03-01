/* general */
export interface CredentialsObject {
	apiKey: string;
	apiSecret: string;
	applicationId?: string;
	privateKey?: string;
	signatureSecret?: string;
	signatureMethod?: string;
}

export interface HttpClient {
	credentials: CredentialsObject,
	host: string,
	port: number,
	https: { [key: string]: any },
	http: { [key: string]: any },
	headers: { [key: string]: any },
	logger: any,
	timeout: number | undefined,
	requestLib: any
}

export interface VonageOptions {
	debug: boolean,
	logger: any,
	userAgent: string,
	httpClient: HttpClient
	api: HttpClient
	rest: HttpClient
}

export interface VonageApiError {
	body: { [key: string]: any };
	headers?: { [key: string]: any };
}

export interface ParserError {
	status: string;
	message: string;
	body: string;
	parseError: Error;
}

/* message API */
export enum MessageRequestResponseStatusCode {
	Success = '0',
	Throttled = '1',
	MissingParameters = '2',
	InvalidParameters = '3',
	InvalidCredentials = '4',
	InternalError = '5',
	InvalidMessage = '6',
	NumberBarred = '7',
	PartnerAccountBarred = '8',
	PartnerQuotaViolation = '9',
	TooManyExistingBinds = '10',
	AccountNotEnabledForHTTP = '11',
	MessageTooLong = '12',
	InvalidSignature = '14',
	InvalidSenderAddress = '15',
	InvalidNetworkCode = '22',
	InvalidCallbackURL = '23',
	NonWhitelistedDestination = '29',
	SignatureAndAPISecretDisallowed = '32',
	NumberDeActivated = '33',
}

export interface MessageRequestResponseSuccess {
	to: string,
	'message-id': string,
	status: MessageRequestResponseStatusCode.Success,
	'remaining-balance': string,
	'message-price': string,
	'network': string,
	'account-ref': string,
}

export interface MessageError {
	status: Exclude<MessageRequestResponseStatusCode,
		MessageRequestResponseStatusCode.Success>;
	'error-text': string;
}

export interface MessageRequestResponse {
	'message-count': number;
	messages: (MessageRequestResponseSuccess | MessageError)[];
}

export interface SendSmsOptions {
	from: string;
	to: string;
	text?: string;
	sig?: string;
	ttl?: number;
	'status-report-req'?: boolean;
	callback?: string;
	'message-class'?: number;
	type?: string;
	vcard?: string | any;
	vcal?: string | any;
	body?: string;
	udh?: string;
	'protocol-id'?: number;
	title?: string;
	url?: string;
	validity?: string;
	'client-ref'?: string;
	'account-ref'?: string;
}

export type SendSms = (
	sender: string,
	recipient: string,
	message: string,
	opts: Partial<SendSmsOptions>,
	callback: (err: MessageError, data: MessageRequestResponse) => void
) => void;

export class Message {
	credentials: CredentialsObject;
	options: VonageOptions;
	shortcodeAlert(): void;
	shortcode2FA(): void;
	shortcodeMarketing(): void;
	sendSms: SendSms;
	sendBinaryMessage: any;
	sendWapPushMessage: any;
	search: any;
	searchRejections: any;

}

/* verify API */
export interface VerifyError extends VonageApiError {
	status: RequestResponseStatusCode | ControlResponseStatusCode | string;
	error_text: string;
	[key: string]: any;
}

export interface RequestObject {
	brand: string;
	number: string;
	sender_id?: string;
	country?: string;
	code_length?: number;
	lg?: string;
	require_type?: string;
	pin_expiry?: number;
	next_event_wait?: number;
	workflow_id?: number;
}

export interface RequestResponse {
	request_id: string;
	status: string;
}

export enum RequestResponseStatusCode {
	Success = "0",
	Throttled = "1",
	MissingParameters = "2",
	InvalidCredentials = "3",
	InternalError = "4",
	NotProcessed = "5",
	BlackListedNumber = "6",
	BlockedAccount = "7",
	QuotaExceeded = "8",
	ConcurrentVerificationNumber = "9",
	TargetNetworkNotSupported = "10",
	WrongVerificationCode = "11",
	TooManyRequests = "12",
	NoMoreEvents = "13",
	NoRequestFound = "14",
}

export interface ControlObject {
	request_id: string;
	cmd: string;
}

export interface ControlResponse {
	status: string;
	command: string;
}

export enum ControlResponseStatusCode {
	Success = "0",
	CancelOrTriggerNextEvent = "19",
}

export interface CheckObject {
	request_id: string;
	code: string;
	ip_address?: string;
}

export interface CheckResponse {
	request_id: string;
	event_id: string;
	status: string;
	price: string;
	currency: string;
}

export class Verify {
	constructor(credentials: CredentialsObject, options: { [key: string]: any });
	request(request: RequestObject, callback: (err: VerifyError, data: RequestResponse) => void): void;
	control(request: ControlObject, callback: (err: VerifyError, data: ControlResponse) => void): void;
	check(request: CheckObject, callback: (err: VerifyError, data: CheckResponse) => void): void;
	__proto__: any;
	[key: string]: any;
}

/* Media API */
export interface MediaSearchRequestObject {
	order: string;
	page_index: number;
	page_size: number;
	start_time: string;
	end_time: string;
}

export interface MediaLinkObject {
	self: {
		href: string;
	};
	first: {
		href: string;
	};
	last: {
		href: string;
	};
}

export interface MediaSearchResponseObject {
	page_size: number;
	page_index: number;
	_links: MediaLinkObject;
	count: number;
	_embedded: {
		media: [MediaResponseObject]
	};
}


export interface MediaResponseObject {
	id: string;
	original_file_name: string;
	mime_type: string;
	account_id: string;
	store_id: string;
	max_downloads_allowed: number;
	times_downloaded: number;
	etag: string;
	media_size: number;
	time_created: string;
	time_last_updated: string;
	public: boolean;
	metadata_primary: string;
	metadata_secondary: string;
}

export interface MediaUpdateRequest {
	public: boolean;
	metadata_primary: string;
	metadata_secondary: string;
	title: string;
	description: string;
	mime_type: string;
	max_downloads_allowed: number;
}

export class Media {
	constructor(credentials: CredentialsObject, options: { [key: string]: any });
	search(request: MediaSearchRequestObject, callback: (err: VonageApiError, data: MediaSearchResponseObject) => void): void;
	delete(id: string, callback: (err: VonageApiError) => void): void;
	get(id: string, callback: (err: VonageApiError, data: MediaResponseObject) => void): void;
	update(id: string, request: MediaUpdateRequest, callback: (err: VonageApiError) => void): void;
	__proto__: any;
	[key: string]: any;
}

/* number API */
export interface INumberResponse {
	'error-code': string;
	'error-code-label': string;
}

export interface INumber {
	country: string;
	msisdn: string;
	moHttpUrl: string;
	type: string;
	cost: string;
	features: string[];
	messagesCallbackType: string;
	messagesCallbackValue: string;
	voiceCallbackType: string;
	voiceCallbackValue: string;
}

export interface getNumberResponse {
	count: number;
	numbers: Omit<Required<INumber>, 'cost'>[];
}

export interface searchNumberResponse {
	count: number;
	numbers: Pick<Required<INumber>, 'country' | 'msisdn' | 'type' | 'cost' | 'features'>[];
}

export class Number {
	constructor(
		credentials: CredentialsObject,
		options: { [key: string]: any }
	);
	getPricing(): void;
	getPhonePricing(): void;
	get(
		options: { [key: string]: any } | ((error?: INumberResponse, response?: getNumberResponse) => void),
		callback?: (error?: INumberResponse, response?: getNumberResponse) => void
	): void;
	search(
		countryCode?: string,
		pattern?: unknown,
		callback?: (error?: INumberResponse, response?: searchNumberResponse) => void
	): void;
	buy(
		countryCode?: string,
		msisdn?: string,
		targetApiKey?: string | ((error?: INumberResponse, response?: INumberResponse) => void),
		callback?: (error?: INumberResponse, response?: INumberResponse) => void
	): void;
	cancel(
		countryCode?: string,
		msisdn?: string,
		targetApiKey?: string | ((error?: INumberResponse, response?: INumberResponse) => void),
		callback?: (error?: INumberResponse, response?: INumberResponse) => void
	): void;
	update(
		countryCode?: string,
		msisdn?: string,
		params?: string | ((error?: INumberResponse, response?: INumberResponse) => void),
		callback?: (error?: INumberResponse, response?: INumberResponse) => void
	): void;
	__proto__: any;
	[key: string]: any;
}

/* number-insight API */
export interface NumberInsightError extends VonageApiError {
	status: NumberInsightResponseStatusCode | number;
	error_text: string;
	[key: string]: any;
}

export interface NumberInsightObject {
	level: NumberInsightLevel;
	number: string;
	country?: string;
	cnam?: boolean;
	ip?: string;
	features?: string[];
	callback?: string;
	callback_timeout?: number;
	callback_method?: string;
	client_ref?: string;
	'include-intermediate-callbacks'?: string;
}

export interface NumberInsightResponse {
	status: NumberInsightResponseStatusCode | number;
	status_message: string;
	request_id: string;
	international_format_number: string;
	national_format_number: string;
	country_code: string;
	country_code_iso3: string;
	country_name: string;
	country_prefix: string;
	request_price?: string;
	refund_price?: string;
	remaining_balance?: string;
	current_carrier?: {
		network_code?: string;
		name?: string;
		country?: string;
		network_type?: string;
	};
	original_carrier?: {
		network_code?: string;
		name?: string;
		country?: string;
		network_type?: string;
	};
	ported?: string;
	roaming?: {
		status?: string;
		roaming_country_code?: string;
		roaming_network_code?: string;
		roaming_network_name?: string;
	};
	caller_identity?: {
		caller_type?: string;
		caller_name?: string;
		first_name?: string;
		last_name?: string;
	};
	caller_name?: string;
	first_name?: string;
	last_name?: string;
	caller_type?: NumberInsightCallerType;
	lookup_outcome?: NumberInsightLookupCode;
	lookup_outcome_message?: string;
	valid_number?: string;
	reachable?: string;
	error_text?: string;
}

export interface NumberInsightWebhookRequest
	extends NumberInsightResponse { }

export enum NumberInsightLookupCode {
	Success = 0,
	PartialSuccess = 1,
	Failed = 2
}

export enum NumberInsightLevel {
	Basic = "basic",
	Standard = "standard",
	AdvancedAsync = "advancedAsync",
	AdvancedSync = "advancedSync"
}

export enum NumberInsightCallerType {
	Business = "business",
	Consumer = "consumer",
	Unknown = "unknown"
}

export enum NumberInsightResponseStatusCode {
	Success = 0,
	Busy = 1,
	InvalidRequest = 3,
	InvalidCredentials = 4,
	InternalError = 5,
	PartnerQuotaExceeded = 9,
	FacilityNotAllowed = 19,
	LiveMobileLookupNotReturned1 = 43,
	LiveMobileLookupNotReturned2 = 44,
	LiveMobileLookupNotReturned3 = 45,
	RequestUnparseable = 999
}

export class NumberInsight {
	constructor(
		credentials: CredentialsObject,
		options: { [key: string]: any }
	);
	get(
		options: NumberInsightObject,
		callback?: (err?: NumberInsightError, data?: NumberInsightResponse) => void
	): void;
}

/* voice API */
export interface To {
	type: string;
	number: string;
	dtmfAnswer?: string;
}

export interface From {
	type: string;
	number: string;
}

export interface CallsResponse {
	count: number;
	page_size: number;
	record_index: number;
	_links: CallDetailLinks;
	_embedded: CallDetailEmbedded;
}

export interface CallDetailLinks {
	self: CallDetailsSelf;
}

export interface CallDetailsSelf {
	href: string;
}

export interface CallDetailEmbedded {
	calls: CallDetailCall[];
}

export interface CallDetailCall {
	_links: CallDetailLinks;
	uuid: string;
	conversation_uuid: string;
	to: To;
	from: From;
	status: string;
	direction: string;
	rate: string;
	price: string;
	duration: string;
	start_time: Date;
	end_time: Date;
	network: string;
}

export interface OutboundCallRequest {
	answer_url?: string[];
	ncco?: Ncco[];
	status: string;
	to: To[];
	from: From;
	event_url: string[];
	machine_detection: string;
}

export interface Ncco {
	action: string;
	text: string;
}

export interface OutboundCallResponse {
	uuid: string;
	status: string;
	direction: string;
	conversation_uuid: string;
}

export interface CallDetailResponse {
	_links: CallDetailLinks;
	uuid: string;
	conversation_uuid: string;
	to: To;
	from: From;
	status: string;
	direction: string;
	rate: string;
	price: string;
	duration: string;
	start_time: Date;
	end_time: Date;
	network: string;
}

export interface InProgressCallRequest {
	action: string;
	destination?: Destination;
}

export interface Destination {
	type: string;
	ncco?: Ncco[];
	url?: string[];
}

export interface StreamAudioInCallRequest {
	stream_url: string[];
	level?: string;
}

export interface ModifyInProgressCallResponse {
	message: string;
	uuid: string;
}

export interface TextToSpeechRequest {
	text: string;
	level?: string;
}

export interface DTMFRequest {
	digits: number;
}

export class Voice {
	constructor(credentials: CredentialsObject, options: { [key: string]: any });
	sendTTSMessage(recipient: To, message: TextToSpeechRequest, options: CredentialsObject, callback: (data: ModifyInProgressCallResponse) => void): void;
	sendTTSPromptWithCapture(recipient: To, message: TextToSpeechRequest, maxDigits: Number, callback: (data: ModifyInProgressCallResponse) => void): void;
	sendTTSPromptWithConfirm(recipient: To, message: TextToSpeechRequest, maxDigits: Number, pinCode: string, byeText: string, failedText: string, callback: (data: ModifyInProgressCallResponse) => void): void;
	call(recipient: To, answerUrl: string, opts: OutboundCallRequest, callback: (data: OutboundCallResponse) => void): void;
	__proto__: any;
	[key: string]: any;
}


export default class Vonage {
	constructor(credentials: CredentialsObject, options?: { [key: string]: any });
	public readonlycredentials: CredentialsObject;
	public readonlyoptions: VonageOptions;
	public readonly message: Message
	public readonly media: Media
	public readonly number: Number
	public readonly numberInsight: NumberInsight
	public readonly verify: Verify
	public readonly voice: Voice
}
