import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  ReportMentJson: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AcceptOrderIapInput = {
  productId: Scalars['String']['input'];
  transactionDate: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
  transactionReceipt: Scalars['String']['input'];
};

export type ActivateLogFile = {
  __typename?: 'ActivateLogFile';
  date?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type AddressResponseInput = {
  admCd: Scalars['String']['input'];
  bdKdcd: Scalars['String']['input'];
  bdMgtSn: Scalars['String']['input'];
  bdNm: Scalars['String']['input'];
  buldMnnm: Scalars['String']['input'];
  buldSlno: Scalars['String']['input'];
  detBdNmList: Scalars['String']['input'];
  emdNm: Scalars['String']['input'];
  emdNo: Scalars['String']['input'];
  engAddr: Scalars['String']['input'];
  jibunAddr: Scalars['String']['input'];
  liNm?: InputMaybe<Scalars['String']['input']>;
  lnbrMnnm: Scalars['String']['input'];
  lnbrSlno: Scalars['String']['input'];
  mtYn: Scalars['String']['input'];
  rn: Scalars['String']['input'];
  rnMgtSn: Scalars['String']['input'];
  roadAddr: Scalars['String']['input'];
  roadAddrPart1: Scalars['String']['input'];
  roadAddrPart2: Scalars['String']['input'];
  sggNm: Scalars['String']['input'];
  siNm: Scalars['String']['input'];
  udrtYn: Scalars['String']['input'];
  zipNo: Scalars['String']['input'];
};

export enum AppType {
  Android = 'Android',
  Unknown = 'Unknown',
  Web = 'Web',
  IOs = 'iOS'
}

export type AresaJeonseSagi = {
  __typename?: 'AresaJeonseSagi';
  address?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deposit?: Maybe<Scalars['Int']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  reportId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Zu_Users>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type AresaJeonseSagiOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Arounds = {
  __typename?: 'Arounds';
  conveniences: Array<OfficetelIndicator>;
  countCctv?: Maybe<Scalars['Int']['output']>;
  exercises: Array<OfficetelIndicator>;
  greenaries: Array<OfficetelIndicator>;
  healthes: Array<OfficetelIndicator>;
  lifes: Array<OfficetelIndicator>;
  plays: Array<OfficetelIndicator>;
  safeties: Array<OfficetelIndicator>;
  traffics: Array<OfficetelIndicator>;
};

export type AuthTokenWithAuth = {
  __typename?: 'AuthTokenWithAuth';
  accessToken: Scalars['String']['output'];
  manager?: Maybe<Dd_Manager>;
  refreshToken: Scalars['String']['output'];
  user?: Maybe<Zu_Users>;
};

export type CaisMessage = {
  __typename?: 'CaisMessage';
  resultCode?: Maybe<Scalars['String']['output']>;
  resultMessage?: Maybe<Scalars['String']['output']>;
};

export type ContractTransferPair = {
  __typename?: 'ContractTransferPair';
  contract: ZuMonthlyPayContract;
  transfer?: Maybe<ZuMonthlyPayTransfer>;
};

export type ControlnetInput = {
  name: Scalars['String']['input'];
  ratio: Scalars['Float']['input'];
};

export type CreateBenefitInput = {
  brand: Scalars['String']['input'];
  couponGroupId?: InputMaybe<Scalars['Int']['input']>;
  description: Scalars['String']['input'];
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  imageUrl: Scalars['String']['input'];
  link: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  thumbnailImageUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateClassInput = {
  date: Scalars['DateTime']['input'];
  disabledAt?: InputMaybe<Scalars['DateTime']['input']>;
  limit: Scalars['Int']['input'];
  logoFileId?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  speaker: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateDiffusionInput = {
  controlnets: Array<ControlnetInput>;
  fileId: Scalars['ID']['input'];
  height?: InputMaybe<Scalars['Int']['input']>;
  hypernetworks: Array<Scalars['String']['input']>;
  model: Scalars['String']['input'];
  negativePrompt?: InputMaybe<Scalars['String']['input']>;
  prompt: Scalars['String']['input'];
  steps: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateFaqDto = {
  category?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type CreateProductInput = {
  appleInAppId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  disabledAt?: InputMaybe<Scalars['DateTime']['input']>;
  googleInAppId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  stock: Scalars['Int']['input'];
  type?: InputMaybe<DdProductType>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateStoreHubKoreaInput = {
  branchName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  residenceArea?: InputMaybe<Scalars['String']['input']>;
  storageSize?: InputMaybe<Scalars['String']['input']>;
  storedItems?: InputMaybe<Scalars['String']['input']>;
  usageDuration?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserPurchaseInput = {
  couponId?: InputMaybe<Scalars['Int']['input']>;
  productId: Scalars['Int']['input'];
  purchaseCount: Scalars['Int']['input'];
};

export type CreateZuBanner = {
  disabledAt?: InputMaybe<Scalars['DateTime']['input']>;
  externalLink?: InputMaybe<Scalars['String']['input']>;
  imageFileId: Scalars['Int']['input'];
  linkType?: Zu_Popups_Link_Type;
  name?: Scalars['String']['input'];
  order?: Scalars['Int']['input'];
  targetId?: InputMaybe<Scalars['Int']['input']>;
  type?: ZuBannerType;
};

export type DdNonMemberJeonseSafetyReportOrder = {
  __typename?: 'DDNonMemberJeonseSafetyReportOrder';
  address?: Maybe<Scalars['String']['output']>;
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  canceledReason?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deposit?: Maybe<Scalars['Int']['output']>;
  dong?: Maybe<Scalars['String']['output']>;
  ho?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  input?: Maybe<Scalars['String']['output']>;
  orderStatus: ZuOrderStatus;
  paymentKey?: Maybe<Scalars['String']['output']>;
  paymentLog?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  total: Scalars['Int']['output'];
  uuid: Scalars['String']['output'];
};

export type DdProduct = {
  __typename?: 'DDProduct';
  DDProductFile?: Maybe<Array<DdProductFile>>;
  ZUOrder?: Maybe<Array<ZuOrder>>;
  ZUUserProduct?: Maybe<Array<ZuUserProduct>>;
  _count: DdProductCount;
  appleInAppId?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  googleInAppId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Dd_Files>>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  purchases?: Maybe<Array<ZuUserProductPurchase>>;
  stock: Scalars['Int']['output'];
  type: DdProductType;
  updatedAt: Scalars['DateTime']['output'];
};

export type DdProductCount = {
  __typename?: 'DDProductCount';
  DDProductFile: Scalars['Int']['output'];
  ZUOrder: Scalars['Int']['output'];
  ZUUserProduct: Scalars['Int']['output'];
  purchases: Scalars['Int']['output'];
};

export type DdProductFile = {
  __typename?: 'DDProductFile';
  file?: Maybe<Dd_Files>;
  fileId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  product: DdProduct;
  productId: Scalars['Int']['output'];
  type: DdProductFileType;
};

export type DdProductFileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum DdProductFileType {
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type DdProductOrderByWithRelationInput = {
  DDProductFile?: InputMaybe<DdProductFileOrderByRelationAggregateInput>;
  ZUOrder?: InputMaybe<ZuOrderOrderByRelationAggregateInput>;
  ZUUserProduct?: InputMaybe<ZuUserProductOrderByRelationAggregateInput>;
  appleInAppId?: InputMaybe<SortOrderInput>;
  code?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  disabledAt?: InputMaybe<SortOrderInput>;
  googleInAppId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  purchases?: InputMaybe<ZuUserProductPurchaseOrderByRelationAggregateInput>;
  stock?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum DdProductType {
  CertificationOfContent = 'CERTIFICATION_OF_CONTENT',
  JeonseSagi = 'JEONSE_SAGI',
  MonthlyPay = 'MONTHLY_PAY',
  Product = 'PRODUCT',
  Zuti = 'ZUTI'
}

export type Dd_FilesCount = {
  __typename?: 'Dd_filesCount';
  DDProductFile: Scalars['Int']['output'];
  ZDNUserDiffusionRequest: Scalars['Int']['output'];
  ZUBanner: Scalars['Int']['output'];
  ZUClass: Scalars['Int']['output'];
  ZUClassFile: Scalars['Int']['output'];
  ZUOfficetelFiles: Scalars['Int']['output'];
  ZUPost: Scalars['Int']['output'];
  dd_file_links: Scalars['Int']['output'];
};

export type Dd_ManagerCount = {
  __typename?: 'Dd_managerCount';
  ZUBankCompany: Scalars['Int']['output'];
  ZUContact: Scalars['Int']['output'];
  ZUMonthlyPayContract: Scalars['Int']['output'];
  ZUMonthlyPayTransfer: Scalars['Int']['output'];
};

export type Dd_Notification_UsersCount = {
  __typename?: 'Dd_notification_usersCount';
  dd_notification_logs: Scalars['Int']['output'];
};

export type Dd_NotificationsCount = {
  __typename?: 'Dd_notificationsCount';
  dd_notification_users: Scalars['Int']['output'];
};

export enum FormResultsFormType {
  SaleInfo = 'SALE_INFO',
  Zuti = 'ZUTI'
}

export type FormTypeResult = {
  __typename?: 'FormTypeResult';
  saleTypeCode: Scalars['String']['output'];
  saleTypeName: Scalars['String']['output'];
  zutiCode: Scalars['String']['output'];
  zutiColor: Scalars['String']['output'];
  zutiDescription: Array<Scalars['String']['output']>;
  zutiDetail: Array<Scalars['String']['output']>;
  zutiName: Scalars['String']['output'];
};

export enum GraphQlNoticeLinkType {
  External = 'External',
  Internal = 'Internal'
}

export enum GraphQlNoticePaginationOrder {
  Id = 'Id'
}

export enum GraphQlPopupPaginationOrder {
  Id = 'Id',
  Order = 'Order'
}

export enum GraphQlSalePaginationOrder {
  Code = 'Code',
  Id = 'Id',
  Name = 'Name'
}

export type HoResponseInput = {
  bjdongCd?: InputMaybe<Scalars['String']['input']>;
  bjdongNm?: InputMaybe<Scalars['String']['input']>;
  bldNm?: InputMaybe<Scalars['String']['input']>;
  bldrgstCurdiGbCd?: InputMaybe<Scalars['String']['input']>;
  bldrgstSeqno?: InputMaybe<Scalars['String']['input']>;
  blprtYn?: InputMaybe<Scalars['String']['input']>;
  dongNm?: InputMaybe<Scalars['String']['input']>;
  hoNm?: InputMaybe<Scalars['String']['input']>;
  mjrfmlyYn?: InputMaybe<Scalars['String']['input']>;
  mnnm?: InputMaybe<Scalars['String']['input']>;
  multiUseBldYn?: InputMaybe<Scalars['String']['input']>;
  ownrYn?: InputMaybe<Scalars['String']['input']>;
  platGbCd?: InputMaybe<Scalars['String']['input']>;
  plplanIncYn?: InputMaybe<Scalars['String']['input']>;
  regstrGbCd?: InputMaybe<Scalars['String']['input']>;
  regstrKindCd?: InputMaybe<Scalars['String']['input']>;
  regstrKindNm?: InputMaybe<Scalars['String']['input']>;
  sigunguCd?: InputMaybe<Scalars['String']['input']>;
  sigunguNm?: InputMaybe<Scalars['String']['input']>;
  slno?: InputMaybe<Scalars['String']['input']>;
  totArea?: InputMaybe<Scalars['String']['input']>;
  untClsfCd?: InputMaybe<Scalars['String']['input']>;
  upperBldrgstSeqno?: InputMaybe<Scalars['String']['input']>;
};

export type InputShortFormAnswer = {
  _options: Array<InputShortFormFieldOption>;
  id: Scalars['String']['input'];
  type: ShortFormFieldType;
  value: Scalars['String']['input'];
};

export type InputShortFormField = {
  description: Scalars['String']['input'];
  id: Scalars['String']['input'];
  options: Array<InputShortFormFieldOption>;
  placeholder?: InputMaybe<Scalars['String']['input']>;
  required: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
  type: ShortFormFieldType;
};

export type InputShortFormFieldOption = {
  _meta?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type InputShortFormResults = {
  answers: Array<InputShortFormAnswer>;
  version: Scalars['String']['input'];
};

export type InputTraitsScore = {
  convenience?: InputMaybe<Scalars['Float']['input']>;
  exercise?: InputMaybe<Scalars['Float']['input']>;
  greenary?: InputMaybe<Scalars['Float']['input']>;
  health?: InputMaybe<Scalars['Float']['input']>;
  life?: InputMaybe<Scalars['Float']['input']>;
  play?: InputMaybe<Scalars['Float']['input']>;
  safety?: InputMaybe<Scalars['Float']['input']>;
  traffic?: InputMaybe<Scalars['Float']['input']>;
};

export type InputUpdateRecommendTown = {
  imageFileId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
};

export type InputUpdateReportMent = {
  value: Scalars['String']['input'];
};

export type JibunAddr = {
  __typename?: 'JibunAddr';
  bjdongCd?: Maybe<Scalars['String']['output']>;
  bjdongNm?: Maybe<Scalars['String']['output']>;
  bldNm?: Maybe<Scalars['String']['output']>;
  bldrgstCurdiGbCd?: Maybe<Scalars['String']['output']>;
  bldrgstSeqno?: Maybe<Scalars['String']['output']>;
  blprtYn?: Maybe<Scalars['String']['output']>;
  dongNm?: Maybe<Scalars['String']['output']>;
  mainPrposNm?: Maybe<Scalars['String']['output']>;
  mjrfmlyYn?: Maybe<Scalars['String']['output']>;
  mnnm?: Maybe<Scalars['String']['output']>;
  multiUseBldYn?: Maybe<Scalars['String']['output']>;
  ownrYn?: Maybe<Scalars['String']['output']>;
  platGbCd?: Maybe<Scalars['String']['output']>;
  plplanIncYn?: Maybe<Scalars['String']['output']>;
  regstrGbCd?: Maybe<Scalars['String']['output']>;
  regstrKindCd?: Maybe<Scalars['String']['output']>;
  regstrKindNm?: Maybe<Scalars['String']['output']>;
  sigunguCd?: Maybe<Scalars['String']['output']>;
  sigunguNm?: Maybe<Scalars['String']['output']>;
  slno?: Maybe<Scalars['String']['output']>;
  totArea?: Maybe<Scalars['String']['output']>;
  untClsfCd?: Maybe<Scalars['String']['output']>;
  upperBldrgstSeqno?: Maybe<Scalars['String']['output']>;
};

export type JibunAddrInput = {
  bjdongCd?: InputMaybe<Scalars['String']['input']>;
  bjdongNm?: InputMaybe<Scalars['String']['input']>;
  bldNm?: InputMaybe<Scalars['String']['input']>;
  bldrgstCurdiGbCd?: InputMaybe<Scalars['String']['input']>;
  bldrgstSeqno?: InputMaybe<Scalars['String']['input']>;
  blprtYn?: InputMaybe<Scalars['String']['input']>;
  dongNm?: InputMaybe<Scalars['String']['input']>;
  mainPrposNm?: InputMaybe<Scalars['String']['input']>;
  mjrfmlyYn?: InputMaybe<Scalars['String']['input']>;
  mnnm?: InputMaybe<Scalars['String']['input']>;
  multiUseBldYn?: InputMaybe<Scalars['String']['input']>;
  ownrYn?: InputMaybe<Scalars['String']['input']>;
  platGbCd?: InputMaybe<Scalars['String']['input']>;
  plplanIncYn?: InputMaybe<Scalars['String']['input']>;
  regstrGbCd?: InputMaybe<Scalars['String']['input']>;
  regstrKindCd?: InputMaybe<Scalars['String']['input']>;
  regstrKindNm?: InputMaybe<Scalars['String']['input']>;
  sigunguCd?: InputMaybe<Scalars['String']['input']>;
  sigunguNm?: InputMaybe<Scalars['String']['input']>;
  slno?: InputMaybe<Scalars['String']['input']>;
  totArea?: InputMaybe<Scalars['String']['input']>;
  untClsfCd?: InputMaybe<Scalars['String']['input']>;
  upperBldrgstSeqno?: InputMaybe<Scalars['String']['input']>;
};

export type LifeInRegionRecommendation = {
  __typename?: 'LifeInRegionRecommendation';
  name: Scalars['String']['output'];
  score: Scalars['Int']['output'];
};

export type LifeInRegionWeights = {
  key: Scalars['String']['input'];
  value: Scalars['Int']['input'];
};

export enum ManagerOrderBy {
  CreatedAt = 'CreatedAt',
  Id = 'Id'
}

export type Mutation = {
  __typename?: 'Mutation';
  acceptMonthlyPayContract: ZuMonthlyPayContract;
  acceptNonMemberOrder: DdNonMemberJeonseSafetyReportOrder;
  /** @deprecated 결제 시스템 통합을 위해 depreacted, use intead acceptOrderToss, acceptOrderIAP, acceptOrderPayple */
  acceptOrder: ZuOrder;
  acceptOrderIAP: ZuOrder;
  acceptOrderToss: ZuOrder;
  /** @deprecated instead use order */
  acceptUserPurchase: ZuUserProductPurchase;
  aggregateLog: Scalars['String']['output'];
  aggregateReportResult: ZuJeonseSafetyReport;
  aggregateReportResultByUser: ZuJeonseSafetyReport;
  agreeTermsAndConditionByCode: ZuTermsAndConditions;
  answerContact: ZuContact;
  applyCardBenefit: ZuUserApplyCardBenefit;
  attachBenefitCategory: ZuBenefit;
  autoGenerateNewOffictels: Scalars['Boolean']['output'];
  autoGenerateOfficetelNearBy: Scalars['Boolean']['output'];
  calculateZuti: ZutiResult;
  cancelCoupon: ZuCoupon;
  cancelMonthlyPayTransfer: ZuMonthlyPayTransfer;
  /** @deprecated instead use order */
  cancelUserPurchase: ZuUserProductPurchase;
  cancelUserTask: ZuUserTask;
  checkSale: Zu_Sales;
  completeCertificationOfContent: ZuCertificationOfContent;
  completeMonthlyPayTransfer: ZuMonthlyPayTransfer;
  completeUserTask: ZuUserTask;
  confirmCardBenefit: ZuUserApplyCardBenefit;
  connectTaskToBenefit: Scalars['Boolean']['output'];
  /** @deprecated instead use benefit */
  connectTaskToCoupon: Scalars['Boolean']['output'];
  consumeJeonseSagiReport: ReportResponseGql;
  crawlOfficetelRealEstateTransactions: Scalars['Boolean']['output'];
  createAllLogJson: Dd_Files;
  createAllUserExcel: Dd_Files;
  /** (익명) 1:1문의 생성, 구글 정책상 익명 유저에게 계정삭제 문의를 받을 수 있어야함 */
  createAnonymousContact: ZuContact;
  createBank: ZuBankCompany;
  /** [관리자] 배너 생성 */
  createBanner: ZuBanner;
  createBenefit: ZuBenefit;
  createBenefitCategory: ZuBenefit;
  createClass: ZuClass;
  /** (사용자) 1:1문의 생성 */
  createContact: ZuContact;
  /** couponGroup은 필수로 connect하여야함, user는 nullable */
  createCoupon: ZuCoupon;
  createCouponGroup: ZuCouponGroup;
  /** couponGroup은 필수로 connect하여야함, user는 nullable */
  createCouponMany: Scalars['Boolean']['output'];
  createEvent: ZuEvent;
  createEventParticipation: ZuEventParticipation;
  createFaq: ZuFaq;
  createJeonseSafetyReport?: Maybe<ZuJeonseSafetyReport>;
  createLifeAnal: ZuLifeAnal;
  createLifeInRegion: Dd_Life_In_Region;
  createLog: Scalars['Boolean']['output'];
  createMonthlyPayContract: ZuMonthlyPayContract;
  createNotice: Zu_Notices;
  createPopup: ZuPopup;
  createPost: ZuPost;
  createPostLink: ZuPostLink;
  createProduct: DdProduct;
  createPushPolicy: Zu_Push_Policies;
  createRecord: Zu_Records;
  createShortForm: Zu_Short_Forms;
  createShortFormResult: Zu_Short_Form_Results;
  createTask: ZuTask;
  createTaskCategory: ZuTaskCategory;
  createTermsAndCondition: ZuTermsAndConditions;
  /** @deprecated instead use order */
  createUserPurchase: ZuUserProductPurchase;
  /** [관리자] 배너 삭제 */
  deleteBanner: ZuBanner;
  deleteBenefit: ZuBenefit;
  deleteBenefitCategory: ZuBenefit;
  deleteEvent: ZuEvent;
  deleteFaq: ZuFaq;
  deleteLifeInRegion: Scalars['Boolean']['output'];
  deleteNotice: Zu_Notices;
  deletePopup: ZuPopup;
  deletePost: ZuPost;
  deletePostLink: ZuPostLink;
  /** 이미 제품이 결제까지 진행된 제품은 삭제할 수 없습니다. */
  deleteProduct: DdProduct;
  deletePushPolicy: Zu_Push_Policies;
  deleteRecord: Scalars['Boolean']['output'];
  deleteTermsAndCondition: ZuTermsAndConditions;
  detachBenefitCategory: ZuBenefit;
  disableBenefit: ZuBenefit;
  disableCouponGroup: ZuCouponGroup;
  disableProduct: DdProduct;
  disablePushPolicy: Zu_Push_Policies;
  disableShortForm: Zu_Short_Forms;
  disableTask: ZuTask;
  disableUserCardBenefit: Zu_Users;
  disabledMarketing: Zu_Users;
  disconnectTaskToAllBenefit: Scalars['Boolean']['output'];
  /** @deprecated instead use benefit */
  disconnectTaskToAllCoupon: Scalars['Boolean']['output'];
  disconnectTaskToBenefit: Scalars['Boolean']['output'];
  /** @deprecated instead use benefit */
  disconnectTaskToCoupon: Scalars['Boolean']['output'];
  enableBenefit: ZuBenefit;
  enableMarketing: Zu_Users;
  enablePushPolicy: Zu_Push_Policies;
  enableShortForm: Zu_Short_Forms;
  enableTask: ZuTask;
  enableUserCardBenefit: Zu_Users;
  failMonthlyPayContract: ZuMonthlyPayContract;
  joinClass: ZuClass;
  logVisitSale: Scalars['Boolean']['output'];
  managerPhoneSignIn: AuthTokenWithAuth;
  managerRefreshToken: AuthTokenWithAuth;
  memoCardBenefit: ZuUserApplyCardBenefit;
  readContact: Scalars['Boolean']['output'];
  readUserTask: ZuUserTask;
  recordBenefitUsage: Scalars['Boolean']['output'];
  refundOrder: Scalars['Boolean']['output'];
  /** @deprecated instead use order */
  refundUserPurchase: ZuUserProductPurchase;
  registerCouponToUser: ZuCoupon;
  registerCoupons: Scalars['Boolean']['output'];
  reportErrorSales: Scalars['Boolean']['output'];
  /** 사용자 요청할 수 있는 권한, disabled 된 쿠폰그룹은 보여지지 않음 */
  requestCoupon: ZuCoupon;
  requestDiffusion: ZdnUserDiffusionRequest;
  requestStoreHubKorea: StoreHubKoreanRequest;
  resetBjdongCodes: Scalars['Boolean']['output'];
  resetOfficetelRealEstateTransactions: Scalars['Boolean']['output'];
  resetOfficetelTrades: Scalars['Boolean']['output'];
  resetOfficetels: Scalars['Boolean']['output'];
  resetUserTask: Scalars['Boolean']['output'];
  sendAuthKakao: Scalars['Boolean']['output'];
  /** @deprecated kakao 메세지로 변경 */
  sendAuthSms: Scalars['Boolean']['output'];
  sendEmail: Scalars['Boolean']['output'];
  sendKakaoAlarmTalkAresaDone: Scalars['Boolean']['output'];
  sendKakaoAlarmTalkDone: Scalars['Boolean']['output'];
  sendMessageFeedback: Scalars['Boolean']['output'];
  sendMessageReportSent: Scalars['Boolean']['output'];
  sendNotification: Scalars['Boolean']['output'];
  sendSwitMessage: Scalars['Boolean']['output'];
  setUserTaskInput: ZuUserTaskInput;
  setVersion: Scalars['Boolean']['output'];
  signInOAuth: AuthTokenWithAuth;
  startNonMemberOrder: DdNonMemberJeonseSafetyReportOrder;
  startOrder: ZuOrder;
  /** @deprecated  */
  submitForm: Zu_Form_Results;
  submitFormResult: Zu_Form_Results;
  syncBjdongCodes: Scalars['String']['output'];
  syncOfficetelRecentlyTrade: Scalars['Boolean']['output'];
  syncPostLinks: Scalars['Boolean']['output'];
  syncZipupDevice: Zu_Users;
  toggleLifeInRegion: Dd_Life_In_Region;
  toggleNewSaleAlarm: Zu_Users;
  toggleNewServiceAlarm: Zu_Users;
  togglePlannerAlarm: Zu_Users;
  toggleSaleZzim: Zu_Sales;
  unregisterCouponToUser: ZuCoupon;
  updateAresaJeonseReport: AresaJeonseSagi;
  updateBank: ZuBankCompany;
  /** [관리자] 배너 수정 */
  updateBanner: ZuBanner;
  updateBenefit: ZuBenefit;
  updateBenefitCategory: ZuBenefit;
  updateCertificationOfContent: ZuCertificationOfContent;
  updateClass: ZuClass;
  updateCouponGroup: ZuCouponGroup;
  updateEvent: ZuEvent;
  updateFaq: ZuFaq;
  updateFaqBulk: Scalars['Boolean']['output'];
  updateFormWeight: Zu_Form_Weights;
  updateJeonseSafetyReport: ZuJeonseSafetyReport;
  updateLifeInRegion: Dd_Life_In_Region;
  updateMonthlyPayContract: ZuMonthlyPayContract;
  updateMonthlyPayTransfer: ZuMonthlyPayTransfer;
  updateNotice: Zu_Notices;
  updateOfficetel: Zu_Officetels;
  updatePopup: ZuPopup;
  updatePost: ZuPost;
  updateProduct: DdProduct;
  updateRecommendTown: Zu_Recommend_Towns;
  updateRecord: Zu_Records;
  updateReportMent: ZuReportMent;
  updateSaleInterior: Scalars['Boolean']['output'];
  updateShortForm: Zu_Short_Forms;
  updateTask: ZuTask;
  updateTaskCategory: ZuTaskCategory;
  updateTermsAndCondition: ZuTermsAndConditions;
  updateUser: Zu_Users;
  updateZUTI: Zu_Users;
  /** @deprecated instead upload from controller */
  uploadFile: Dd_Files;
  useCoupon: ZuCoupon;
  verifyPhoneCode?: Maybe<Scalars['String']['output']>;
  withdrawMe: Zu_Users;
  zipupOauthSignUp: AuthTokenWithAuth;
  zipupPhoneSignIn: AuthTokenWithAuth;
  zipupPhoneSignUp: AuthTokenWithAuth;
};


export type MutationAcceptMonthlyPayContractArgs = {
  contractId: Scalars['ID']['input'];
};


export type MutationAcceptNonMemberOrderArgs = {
  paymentKey: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};


export type MutationAcceptOrderArgs = {
  paymentKey: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};


export type MutationAcceptOrderIapArgs = {
  data: AcceptOrderIapInput;
  uuid: Scalars['String']['input'];
};


export type MutationAcceptOrderTossArgs = {
  paymentKey: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};


export type MutationAcceptUserPurchaseArgs = {
  amount: Scalars['Int']['input'];
  orderId: Scalars['String']['input'];
  paymentKey: Scalars['String']['input'];
  paymentType: Scalars['String']['input'];
};


export type MutationAggregateLogArgs = {
  date: Scalars['String']['input'];
};


export type MutationAggregateReportResultArgs = {
  reportId: Scalars['ID']['input'];
};


export type MutationAggregateReportResultByUserArgs = {
  reportId: Scalars['ID']['input'];
};


export type MutationAgreeTermsAndConditionByCodeArgs = {
  code: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationAnswerContactArgs = {
  answer: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationApplyCardBenefitArgs = {
  account?: InputMaybe<Scalars['Boolean']['input']>;
  card?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAttachBenefitCategoryArgs = {
  benefitId: Scalars['ID']['input'];
  categoryId: Scalars['ID']['input'];
};


export type MutationAutoGenerateNewOffictelsArgs = {
  useLocal?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCalculateZutiArgs = {
  answers: Array<Scalars['Boolean']['input']>;
};


export type MutationCancelCouponArgs = {
  couponId: Scalars['ID']['input'];
};


export type MutationCancelMonthlyPayTransferArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCancelUserPurchaseArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCancelUserTaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCheckSaleArgs = {
  id: Scalars['ID']['input'];
  log?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCompleteCertificationOfContentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCompleteMonthlyPayTransferArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCompleteUserTaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationConfirmCardBenefitArgs = {
  id: Scalars['Float']['input'];
};


export type MutationConnectTaskToBenefitArgs = {
  benefitId: Scalars['ID']['input'];
  taskId: Scalars['ID']['input'];
};


export type MutationConnectTaskToCouponArgs = {
  couponGroupId: Scalars['ID']['input'];
  taskId: Scalars['ID']['input'];
};


export type MutationConsumeJeonseSagiReportArgs = {
  bdKdcd: Scalars['String']['input'];
  bjdong: Scalars['String']['input'];
  bun: Scalars['String']['input'];
  dongName: Scalars['String']['input'];
  floor: Scalars['String']['input'];
  hoName: Scalars['String']['input'];
  ji: Scalars['String']['input'];
  jibunAddress: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  roadAddress: Scalars['String']['input'];
  sigungu: Scalars['String']['input'];
};


export type MutationCrawlOfficetelRealEstateTransactionsArgs = {
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  states?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationCreateAnonymousContactArgs = {
  question: Scalars['String']['input'];
};


export type MutationCreateBankArgs = {
  data: ZuBankCompanyCreateInput;
};


export type MutationCreateBannerArgs = {
  data: CreateZuBanner;
};


export type MutationCreateBenefitArgs = {
  data: CreateBenefitInput;
};


export type MutationCreateBenefitCategoryArgs = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateClassArgs = {
  data: CreateClassInput;
  imageIds: Array<Scalars['ID']['input']>;
};


export type MutationCreateContactArgs = {
  question: Scalars['String']['input'];
};


export type MutationCreateCouponArgs = {
  data: ZuCouponCreateInput;
};


export type MutationCreateCouponGroupArgs = {
  data: ZuCouponGroupCreateInput;
};


export type MutationCreateCouponManyArgs = {
  data: Array<ZuCouponCreateManyUserInput>;
};


export type MutationCreateEventArgs = {
  data: ZuEventCreateInput;
};


export type MutationCreateEventParticipationArgs = {
  eventId: Scalars['ID']['input'];
};


export type MutationCreateFaqArgs = {
  data: CreateFaqDto;
};


export type MutationCreateJeonseSafetyReportArgs = {
  addressResponse: AddressResponseInput;
  deposit: Scalars['String']['input'];
  dongResponse?: InputMaybe<JibunAddrInput>;
  hoResponse?: InputMaybe<HoResponseInput>;
};


export type MutationCreateLifeAnalArgs = {
  around?: InputMaybe<Scalars['Int']['input']>;
  doda: Array<Array<Scalars['String']['input']>>;
  email?: InputMaybe<Scalars['String']['input']>;
  maxSpace?: InputMaybe<Scalars['Int']['input']>;
  minSpace?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  station?: InputMaybe<Scalars['String']['input']>;
  traits: InputTraitsScore;
};


export type MutationCreateLifeInRegionArgs = {
  convenienceFacilityScore: Scalars['Int']['input'];
  crimeSafetyScore: Scalars['Int']['input'];
  culturalFacilityCount: Scalars['Int']['input'];
  diningFacilityScore: Scalars['Int']['input'];
  generalStoreCount: Scalars['Int']['input'];
  greenSpaceRatio: Scalars['Int']['input'];
  medicalFacilityCount: Scalars['Int']['input'];
  publicTransportScore: Scalars['Int']['input'];
  regionName: Scalars['String']['input'];
  shoppingFacilityScore: Scalars['Int']['input'];
  sportsFacilityScore: Scalars['Int']['input'];
  subwayStationCount: Scalars['Int']['input'];
};


export type MutationCreateLogArgs = {
  logContents?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};


export type MutationCreateMonthlyPayContractArgs = {
  data: ZuMonthlyPayContractCreateInput;
  imageIds: Array<Scalars['ID']['input']>;
};


export type MutationCreateNoticeArgs = {
  button?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fixed?: InputMaybe<Scalars['Int']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  linkType?: InputMaybe<GraphQlNoticeLinkType>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreatePopupArgs = {
  externalLink?: InputMaybe<Scalars['String']['input']>;
  fileId: Scalars['ID']['input'];
  linkType: Zu_Popups_Link_Type;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  shownAt?: InputMaybe<Scalars['Int']['input']>;
  targetId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreatePostArgs = {
  category: Scalars['String']['input'];
  color?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  exposedAt?: InputMaybe<Scalars['DateTime']['input']>;
  thumbnailFileId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreatePostLinkArgs = {
  data: ZuPostLinkCreateInput;
};


export type MutationCreateProductArgs = {
  data: CreateProductInput;
  fileIds: Array<Scalars['ID']['input']>;
};


export type MutationCreatePushPolicyArgs = {
  name: Scalars['String']['input'];
  periodDays: Scalars['Int']['input'];
  startHour: Scalars['Int']['input'];
  targetType: PushPolicyTargetType;
  template: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateRecordArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  countRoom?: InputMaybe<Scalars['Float']['input']>;
  elevator?: InputMaybe<Scalars['String']['input']>;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  floorHighest?: InputMaybe<Scalars['Int']['input']>;
  floorStructure?: InputMaybe<Scalars['String']['input']>;
  interior?: InputMaybe<Scalars['String']['input']>;
  jeonseDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  maintenanceCost?: InputMaybe<Scalars['BigInt']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  monthlyDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  monthlyRent?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  option?: InputMaybe<Scalars['String']['input']>;
  parkingCount?: InputMaybe<Scalars['Int']['input']>;
  parkingType?: InputMaybe<Scalars['String']['input']>;
  saleType?: InputMaybe<Scalars['String']['input']>;
  supplyArea?: InputMaybe<Scalars['Int']['input']>;
  tradeType?: InputMaybe<Scalars['String']['input']>;
  yearConstruction?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateShortFormArgs = {
  description: Scalars['String']['input'];
  fields: Array<InputShortFormField>;
  title: Scalars['String']['input'];
  type: ShortFormType;
};


export type MutationCreateShortFormResultArgs = {
  result: InputShortFormResults;
  shortFormId: Scalars['ID']['input'];
};


export type MutationCreateTaskArgs = {
  data: ZuTaskCreateInput;
};


export type MutationCreateTaskCategoryArgs = {
  data: ZuTaskCategoryCreateInput;
};


export type MutationCreateTermsAndConditionArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  isRequired: Scalars['Boolean']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  revisionedAt: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateUserPurchaseArgs = {
  data: CreateUserPurchaseInput;
};


export type MutationDeleteBannerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBenefitArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBenefitCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFaqArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLifeInRegionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNoticeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePopupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostLinkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePushPolicyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRecordArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTermsAndConditionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDetachBenefitCategoryArgs = {
  benefitId: Scalars['ID']['input'];
  categoryId: Scalars['ID']['input'];
};


export type MutationDisableBenefitArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDisableCouponGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDisableProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDisablePushPolicyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDisableShortFormArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDisableTaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDisableUserCardBenefitArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationDisconnectTaskToAllBenefitArgs = {
  taskId: Scalars['ID']['input'];
};


export type MutationDisconnectTaskToAllCouponArgs = {
  taskId: Scalars['ID']['input'];
};


export type MutationDisconnectTaskToBenefitArgs = {
  benefitId: Scalars['ID']['input'];
  taskId: Scalars['ID']['input'];
};


export type MutationDisconnectTaskToCouponArgs = {
  couponGroupId: Scalars['ID']['input'];
  taskId: Scalars['ID']['input'];
};


export type MutationEnableBenefitArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEnableMarketingArgs = {
  methods?: InputMaybe<Array<ZuUserMarketingAgreeMethods>>;
};


export type MutationEnablePushPolicyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEnableShortFormArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEnableTaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEnableUserCardBenefitArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationFailMonthlyPayContractArgs = {
  id: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
};


export type MutationJoinClassArgs = {
  classId: Scalars['ID']['input'];
};


export type MutationLogVisitSaleArgs = {
  exposureSequece: Scalars['Int']['input'];
  saleId: Scalars['ID']['input'];
};


export type MutationManagerPhoneSignInArgs = {
  verifiedToken: Scalars['String']['input'];
};


export type MutationManagerRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationMemoCardBenefitArgs = {
  content: Scalars['String']['input'];
  id: Scalars['Float']['input'];
};


export type MutationReadUserTaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRecordBenefitUsageArgs = {
  benefitId: Scalars['ID']['input'];
};


export type MutationRefundOrderArgs = {
  uuid: Scalars['String']['input'];
};


export type MutationRefundUserPurchaseArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRegisterCouponToUserArgs = {
  id: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationRegisterCouponsArgs = {
  codes: Array<Scalars['String']['input']>;
  groupId: Scalars['ID']['input'];
};


export type MutationReportErrorSalesArgs = {
  saleIds: Array<Scalars['ID']['input']>;
};


export type MutationRequestCouponArgs = {
  couponGroupId: Scalars['ID']['input'];
};


export type MutationRequestDiffusionArgs = {
  data: CreateDiffusionInput;
};


export type MutationRequestStoreHubKoreaArgs = {
  data: CreateStoreHubKoreaInput;
};


export type MutationResetOfficetelTradesArgs = {
  fileId: Scalars['ID']['input'];
};


export type MutationResetOfficetelsArgs = {
  fileId: Scalars['ID']['input'];
};


export type MutationSendAuthKakaoArgs = {
  phone: Scalars['String']['input'];
};


export type MutationSendAuthSmsArgs = {
  isRegister?: Scalars['Boolean']['input'];
  phone: Scalars['String']['input'];
};


export type MutationSendEmailArgs = {
  html: Scalars['String']['input'];
  subject: Scalars['String']['input'];
  to: Scalars['String']['input'];
};


export type MutationSendKakaoAlarmTalkAresaDoneArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSendKakaoAlarmTalkDoneArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSendMessageFeedbackArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSendMessageReportSentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSendNotificationArgs = {
  contents: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userIds: Array<Scalars['ID']['input']>;
};


export type MutationSendSwitMessageArgs = {
  message: Scalars['String']['input'];
};


export type MutationSetUserTaskInputArgs = {
  inputKey: Scalars['String']['input'];
  inputValue: Scalars['String']['input'];
  taskId: Scalars['ID']['input'];
};


export type MutationSetVersionArgs = {
  androidForceUpdateVersion?: InputMaybe<Scalars['String']['input']>;
  androidLatestVersion?: InputMaybe<Scalars['String']['input']>;
  iOSForceUpdateVersion?: InputMaybe<Scalars['String']['input']>;
  iOSLatestVersion?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSignInOAuthArgs = {
  oauthId: Scalars['ID']['input'];
  type: ZuUserOauthType;
};


export type MutationStartNonMemberOrderArgs = {
  addressResponse: AddressResponseInput;
  deposit: Scalars['String']['input'];
  dongResponse?: InputMaybe<JibunAddrInput>;
  hoResponse?: InputMaybe<HoResponseInput>;
  phone: Scalars['String']['input'];
};


export type MutationStartOrderArgs = {
  data: StartOrderInput;
};


export type MutationSubmitFormArgs = {
  formId: Scalars['ID']['input'];
  result: Scalars['JSONObject']['input'];
};


export type MutationSubmitFormResultArgs = {
  formId: Scalars['ID']['input'];
  result: Scalars['JSONObject']['input'];
  type: FormResultsFormType;
};


export type MutationSyncBjdongCodesArgs = {
  fileId: Scalars['ID']['input'];
};


export type MutationSyncPostLinksArgs = {
  sourceId: Scalars['ID']['input'];
  targetIds: Array<Scalars['ID']['input']>;
};


export type MutationSyncZipupDeviceArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
  type: AppType;
  version?: InputMaybe<Scalars['String']['input']>;
};


export type MutationToggleLifeInRegionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationToggleSaleZzimArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUnregisterCouponToUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAresaJeonseReportArgs = {
  data: UpdateAresaJeonseReport;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBankArgs = {
  data: ZuBankCompanyUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBannerArgs = {
  data: UpdateZuBanner;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBenefitArgs = {
  data: UpdateBenefitInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBenefitCategoryArgs = {
  code: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateCertificationOfContentArgs = {
  data: UpdateCertificationOfContentInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateClassArgs = {
  data: UpdateClassInput;
  id: Scalars['ID']['input'];
  imageIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationUpdateCouponGroupArgs = {
  data: ZuCouponGroupUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEventArgs = {
  data: ZuEventUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFaqArgs = {
  data: UpdateFaqDto;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFaqBulkArgs = {
  data: Array<UpdateFaqBulkDto>;
};


export type MutationUpdateFormWeightArgs = {
  elevator: Scalars['Float']['input'];
  floorHighest: Scalars['Float']['input'];
  floorStructure: Scalars['Float']['input'];
  interior: Scalars['Float']['input'];
  jeonseDeposit: Scalars['Float']['input'];
  monthlyDeposit: Scalars['Float']['input'];
  monthlyRent: Scalars['Float']['input'];
  option: Scalars['Float']['input'];
  parkingCount: Scalars['Float']['input'];
  parkingType: Scalars['Float']['input'];
  supplyArea: Scalars['Float']['input'];
  yearConstruction: Scalars['Float']['input'];
};


export type MutationUpdateJeonseSafetyReportArgs = {
  data: ZuJeonseSafetyReportUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateLifeInRegionArgs = {
  convenienceFacilityScore: Scalars['Int']['input'];
  crimeSafetyScore: Scalars['Int']['input'];
  culturalFacilityCount: Scalars['Int']['input'];
  diningFacilityScore: Scalars['Int']['input'];
  generalStoreCount: Scalars['Int']['input'];
  greenSpaceRatio: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
  medicalFacilityCount: Scalars['Int']['input'];
  publicTransportScore: Scalars['Int']['input'];
  regionName: Scalars['String']['input'];
  shoppingFacilityScore: Scalars['Int']['input'];
  sportsFacilityScore: Scalars['Int']['input'];
  subwayStationCount: Scalars['Int']['input'];
};


export type MutationUpdateMonthlyPayContractArgs = {
  data: ZuMonthlyPayContractUpdateInput;
  id: Scalars['ID']['input'];
  imageIds: Array<Scalars['ID']['input']>;
};


export type MutationUpdateMonthlyPayTransferArgs = {
  data: ZuMonthlyPayTransferUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateNoticeArgs = {
  button?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fixed?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  link?: InputMaybe<Scalars['String']['input']>;
  linkType?: InputMaybe<GraphQlNoticeLinkType>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateOfficetelArgs = {
  data: UpdateOfficetelInput;
  id: Scalars['ID']['input'];
  imageIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationUpdatePopupArgs = {
  deletedAt?: InputMaybe<Scalars['Int']['input']>;
  externalLink?: InputMaybe<Scalars['String']['input']>;
  fileId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  linkType?: InputMaybe<Zu_Popups_Link_Type>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  shownAt?: InputMaybe<Scalars['Int']['input']>;
  targetId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdatePostArgs = {
  category: Scalars['String']['input'];
  color?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  disabledAt?: InputMaybe<Scalars['DateTime']['input']>;
  exposedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  thumbnailFileId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};


export type MutationUpdateProductArgs = {
  data: UpdateProductInput;
  fileIds: Array<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRecommendTownArgs = {
  id: Scalars['ID']['input'];
  input: InputUpdateRecommendTown;
};


export type MutationUpdateRecordArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  countRoom?: InputMaybe<Scalars['Float']['input']>;
  elevator?: InputMaybe<Scalars['String']['input']>;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  floorHighest?: InputMaybe<Scalars['Int']['input']>;
  floorStructure?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  interior?: InputMaybe<Scalars['String']['input']>;
  jeonseDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  maintenanceCost?: InputMaybe<Scalars['BigInt']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  monthlyDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  monthlyRent?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  option?: InputMaybe<Scalars['String']['input']>;
  parkingCount?: InputMaybe<Scalars['Int']['input']>;
  parkingType?: InputMaybe<Scalars['String']['input']>;
  saleType?: InputMaybe<Scalars['String']['input']>;
  supplyArea?: InputMaybe<Scalars['Int']['input']>;
  tradeType?: InputMaybe<Scalars['String']['input']>;
  yearConstruction?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateReportMentArgs = {
  id: Scalars['ID']['input'];
  input: InputUpdateReportMent;
};


export type MutationUpdateSaleInteriorArgs = {
  code: Scalars['String']['input'];
  interior: Scalars['String']['input'];
};


export type MutationUpdateShortFormArgs = {
  description: Scalars['String']['input'];
  fields: Array<InputShortFormField>;
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  type: ShortFormType;
};


export type MutationUpdateTaskArgs = {
  data: ZuTaskUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTaskCategoryArgs = {
  data: ZuTaskCategoryCreateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTermsAndConditionArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  isRequired: Scalars['Boolean']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  revisionedAt: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  birthday: Scalars['String']['input'];
  email: Scalars['EmailAddress']['input'];
  gender: Scalars['String']['input'];
  job: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateZutiArgs = {
  zutiType: ZutiType;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
  public?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUseCouponArgs = {
  couponId: Scalars['ID']['input'];
};


export type MutationVerifyPhoneCodeArgs = {
  code: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationWithdrawMeArgs = {
  reason?: InputMaybe<Scalars['String']['input']>;
};


export type MutationZipupOauthSignUpArgs = {
  agreeMarketingAd: Scalars['Boolean']['input'];
  data: OAuthSignUpRequest;
  marketingMethods?: InputMaybe<Array<ZuUserMarketingAgreeMethods>>;
};


export type MutationZipupPhoneSignInArgs = {
  verifiedToken: Scalars['String']['input'];
};


export type MutationZipupPhoneSignUpArgs = {
  age: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  isAgreeMarketing: Scalars['Boolean']['input'];
  job: Scalars['String']['input'];
  name: Scalars['String']['input'];
  verifiedToken: Scalars['String']['input'];
};

export enum NotificationOrderBy {
  CreatedAt = 'CreatedAt',
  Id = 'Id',
  Summary = 'Summary'
}

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type OAuthSignUpRequest = {
  agreeMarketingAt: Scalars['Boolean']['input'];
  birthday: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  job: Scalars['String']['input'];
  name: Scalars['String']['input'];
  oauthId: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  type: ZuUserOauthType;
};

export type OfficetelIndicator = {
  __typename?: 'OfficetelIndicator';
  code: Scalars['String']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
};

export type PaginatedAresaJeonseReport = {
  __typename?: 'PaginatedAresaJeonseReport';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<AresaJeonseSagi>>;
};

export type PaginatedBank = {
  __typename?: 'PaginatedBank';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuBankCompany>>;
};

export type PaginatedBenefit = {
  __typename?: 'PaginatedBenefit';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuBenefit>>;
};

export type PaginatedBjdongCode = {
  __typename?: 'PaginatedBjdongCode';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuBjdongCodes>>;
};

export type PaginatedCertificationOfContent = {
  __typename?: 'PaginatedCertificationOfContent';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuCertificationOfContent>>;
};

export type PaginatedClass = {
  __typename?: 'PaginatedClass';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuClass>>;
};

export type PaginatedContact = {
  __typename?: 'PaginatedContact';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuContact>>;
};

export type PaginatedCoupon = {
  __typename?: 'PaginatedCoupon';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuCoupon>>;
};

export type PaginatedCouponGroup = {
  __typename?: 'PaginatedCouponGroup';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuCouponGroup>>;
};

export type PaginatedEvent = {
  __typename?: 'PaginatedEvent';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuEvent>>;
};

export type PaginatedEventParticipation = {
  __typename?: 'PaginatedEventParticipation';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuEventParticipation>>;
};

export type PaginatedGasCompany = {
  __typename?: 'PaginatedGasCompany';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuGasCompany>>;
};

export type PaginatedJeonseSafetyReport = {
  __typename?: 'PaginatedJeonseSafetyReport';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuJeonseSafetyReport>>;
};

export type PaginatedLifeAnal = {
  __typename?: 'PaginatedLifeAnal';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuLifeAnal>>;
};

export type PaginatedLog = {
  __typename?: 'PaginatedLog';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<Zu_Logs>>;
};

export type PaginatedManager = {
  __typename?: 'PaginatedManager';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<Dd_Manager>>;
};

export type PaginatedMonthlyPayContract = {
  __typename?: 'PaginatedMonthlyPayContract';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuMonthlyPayContract>>;
};

export type PaginatedMonthlyPayTransfer = {
  __typename?: 'PaginatedMonthlyPayTransfer';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuMonthlyPayTransfer>>;
};

export type PaginatedNotice = {
  __typename?: 'PaginatedNotice';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<Zu_Notices>>;
};

export type PaginatedNotification = {
  __typename?: 'PaginatedNotification';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<Dd_Notifications>>;
};

export type PaginatedNotificationUser = {
  __typename?: 'PaginatedNotificationUser';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<Dd_Notification_Users>>;
};

export type PaginatedOfficetel = {
  __typename?: 'PaginatedOfficetel';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<Zu_Officetels>>;
};

export type PaginatedOfficetelTransaction = {
  __typename?: 'PaginatedOfficetelTransaction';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuOfficetelTransaction>>;
};

export type PaginatedOrder = {
  __typename?: 'PaginatedOrder';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuOrder>>;
};

export type PaginatedPopup = {
  __typename?: 'PaginatedPopup';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuPopup>>;
};

export type PaginatedPost = {
  __typename?: 'PaginatedPost';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuPost>>;
};

export type PaginatedProduct = {
  __typename?: 'PaginatedProduct';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<DdProduct>>;
};

export type PaginatedPushPolicy = {
  __typename?: 'PaginatedPushPolicy';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<Zu_Push_Policies>>;
};

export type PaginatedRecommendTown = {
  __typename?: 'PaginatedRecommendTown';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<Zu_Recommend_Towns>>;
};

export type PaginatedReportMent = {
  __typename?: 'PaginatedReportMent';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuReportMent>>;
};

export type PaginatedSale = {
  __typename?: 'PaginatedSale';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<Zu_Sales>>;
};

export type PaginatedTask = {
  __typename?: 'PaginatedTask';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuTask>>;
};

export type PaginatedTaskCategory = {
  __typename?: 'PaginatedTaskCategory';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuTaskCategory>>;
};

export type PaginatedTrait = {
  __typename?: 'PaginatedTrait';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<Zu_Traits>>;
};

export type PaginatedUserPurchase = {
  __typename?: 'PaginatedUserPurchase';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuUserProductPurchase>>;
};

export type PaginatedUserTask = {
  __typename?: 'PaginatedUserTask';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<ZuUserTask>>;
};

export type PaginatedUsers = {
  __typename?: 'PaginatedUsers';
  count: Scalars['Int']['output'];
  nodes?: Maybe<Array<Zu_Users>>;
};

export enum PaymentMethod {
  AppleInApp = 'AppleInApp',
  GoogleInApp = 'GoogleInApp',
  Payple = 'Payple',
  Toss = 'Toss'
}

export enum ProductPlatform {
  Android = 'ANDROID',
  Ios = 'IOS'
}

export enum PushPolicyOrderBy {
  Id = 'Id'
}

export enum PushPolicyTargetType {
  All = 'ALL',
  SaleAlarm = 'SALE_ALARM'
}

export type Query = {
  __typename?: 'Query';
  activateLogs: Array<ActivateLogFile>;
  /** @deprecated deprecated instead use activeShortForm */
  activateShortForm: Zu_Short_Forms;
  /** 사용자용 */
  activeBenefitsByCode: Array<ZuBenefit>;
  activeCouponGroup: ZuCouponGroup;
  activeEvents: Array<ZuEvent>;
  activePopups: Array<ZuPopup>;
  activeShortForm: Zu_Short_Forms;
  aggregateServiceStatistics: Scalars['Boolean']['output'];
  auth: Dd_Manager;
  authUser: Zu_Users;
  bank: ZuBankCompany;
  bankPagination: PaginatedBank;
  banks: Array<ZuBankCompany>;
  /** [관리자] 배너 */
  banner: ZuBanner;
  /** [관리자] 배너 목록 */
  banners: Array<ZuBanner>;
  /** [앱] 타입별 배너 목록 */
  bannersByType: Array<ZuBanner>;
  benefit: ZuBenefit;
  benefitCategories: Array<ZuBenefitCategory>;
  benefitPagination: PaginatedBenefit;
  benefitsByCategory: Array<ZuBenefit>;
  bjdongCodePagination: PaginatedBjdongCode;
  certificationOfContent: ZuCertificationOfContent;
  certificationOfContentByUserId: Array<ZuCertificationOfContent>;
  certificationOfContentPagination: PaginatedCertificationOfContent;
  class: ZuClass;
  classPagination: PaginatedClass;
  contact?: Maybe<ZuContact>;
  contactPagination: PaginatedContact;
  contractWithTransfer: Array<ContractTransferPair>;
  /** 사용자도 요청할 수 있는 권한, disabled 된 쿠폰그룹은 보여지지 않음 */
  couponByUserId: Array<ZuCoupon>;
  couponGroup: ZuCouponGroup;
  couponGroupPaginataion: PaginatedCouponGroup;
  couponPagination: PaginatedCoupon;
  downloadableCouponGroups: Array<ZuCouponGroup>;
  event: ZuEvent;
  eventPagination: PaginatedEvent;
  faq: ZuFaq;
  faqs: Array<ZuFaq>;
  file: Dd_Files;
  formResult: Zu_Form_Results;
  formTypeResult: FormTypeResult;
  formWeight: Zu_Form_Weights;
  gasCompanyPagination: PaginatedGasCompany;
  getOfficetelInfoByAddress?: Maybe<ZuNaverOfficetel>;
  getRecommendationRegions: Array<LifeInRegionRecommendation>;
  hasProduct: Scalars['Boolean']['output'];
  inAppPaymentIds: Array<Scalars['String']['output']>;
  jeonseSafetyReport: ZuJeonseSafetyReport;
  jeonseSafetyReports?: Maybe<Array<ZuJeonseSafetyReport>>;
  jeonseSafetyReportsPagination?: Maybe<PaginatedJeonseSafetyReport>;
  jeonseSagiReport: ReportResponseGql;
  jeonseSagiReportPagination: PaginatedAresaJeonseReport;
  jeonseSagiReports: Array<AresaJeonseSagi>;
  lifeAnal: ZuLifeAnal;
  lifeAnalPagination: PaginatedLifeAnal;
  lifeInRegion: Dd_Life_In_Region;
  lifeInRegions: Array<Dd_Life_In_Region>;
  logPagination: PaginatedLog;
  managerPagination: PaginatedManager;
  monthlyPayContract?: Maybe<ZuMonthlyPayContract>;
  monthlyPayContractPagination: PaginatedMonthlyPayContract;
  monthlyPayContracts: Array<ZuMonthlyPayContract>;
  monthlyPayTransfer: ZuMonthlyPayTransfer;
  monthlyPayTransfers: Array<ZuMonthlyPayTransfer>;
  monthlyPayTransfersPagiation: PaginatedMonthlyPayTransfer;
  myRecords: Array<Zu_Records>;
  mySales: Array<Zu_Sales>;
  nonMemberOrder: DdNonMemberJeonseSafetyReportOrder;
  nonMemberOrders: Array<DdNonMemberJeonseSafetyReportOrder>;
  nonMemberOrdersByUUID: Array<DdNonMemberJeonseSafetyReportOrder>;
  notice: Zu_Notices;
  noticePagination: PaginatedNotice;
  notices: Array<Zu_Notices>;
  notificationPagination: PaginatedNotification;
  notificationUserPagination: PaginatedNotificationUser;
  notificationUsers: Array<Dd_Notification_Users>;
  officetel: Zu_Officetels;
  officetelByCode: Zu_Officetels;
  officetelPagination: PaginatedOfficetel;
  officetelTransationPagination: PaginatedOfficetelTransaction;
  officetelUpdatedInfo: UpdatedOfficetelInfo;
  order: ZuOrder;
  orderPagination: PaginatedOrder;
  ordersByUUId: ZuOrder;
  ordersByUserId: ZuOrder;
  popup: ZuPopup;
  popupPagination: PaginatedPopup;
  /** (사용자) */
  post: ZuPost;
  /**
   * PostLink는 한 Post의 연관 읽을거리를 연결하는 테이블입니다.
   *   PostLink는 sourceId와 targetId를 가지고 있으며, sourceId는 현재 읽고 있는 읽을거리 targetId는 연관된 읽을거리로 대응할 수 있습니다
   */
  postLinks: Array<ZuPostLink>;
  /** (관리자) */
  postPagination: PaginatedPost;
  /** (사용자) 오늘의 읽을거리, 관리자에서 노출값이 지정된 항목들은 여기서 노출됩니다. */
  posts: Array<ZuPost>;
  product: DdProduct;
  productPagination: PaginatedProduct;
  pushPolicyPagination: PaginatedPushPolicy;
  recommendTown: Zu_Recommend_Towns;
  recommendTownPagination: PaginatedRecommendTown;
  record: Zu_Records;
  reportMentPagination: PaginatedReportMent;
  /** 서비스단에서 사용하는 검색용 매물 페이지네이션 */
  saleExplorePagination: PaginatedSale;
  salePagination: PaginatedSale;
  saleStatistics: SaleStatistics;
  saleZutiRecommendation: Array<Zu_Sales>;
  /** @deprecated deprevated */
  salesUpdatedInfo: SalesUpdatedInfo;
  searchAddressJeonseSagi: Array<SearchResponse>;
  searchDongJeonseSagi: Array<SearchDongResponse>;
  searchHoJeonseSagi: Array<SearchResidenceApiResponse>;
  searchReportAddressPagination: PaginatedJeonseSafetyReport;
  serviceStatisticsByType: Array<ZuServiceStatistics>;
  shareMyResult: Scalars['String']['output'];
  /** @deprecated  */
  shareUrl: Scalars['String']['output'];
  shortForm: Zu_Short_Forms;
  shortForms: Array<Zu_Short_Forms>;
  task: ZuTask;
  taskCategoriesActivate: Array<ZuTaskCategory>;
  taskCategory: ZuTaskCategory;
  taskCategoryPagination: PaginatedTaskCategory;
  /** 해당 task의 content의 변수 및 제어문을 handlebar.js를 연동하여 적용하여 string으로 반환합니다. */
  taskHydrationContent?: Maybe<Scalars['String']['output']>;
  taskInputKeys: Array<Scalars['String']['output']>;
  taskPagination: PaginatedTask;
  termsAndCondition: ZuTermsAndConditions;
  termsAndConditionByTitle: ZuTermsAndConditions;
  termsAndConditions: Array<ZuTermsAndConditions>;
  termsAndConditionsByTitle: Array<ZuTermsAndConditions>;
  traitPagination: PaginatedTrait;
  traitsScoreMentMap: TraitsScoreMentMap;
  user: Zu_Users;
  userByCode: Zu_Users;
  userClasses: Array<ZuClassUser>;
  userIdByExternalCodes: Array<Scalars['String']['output']>;
  userPagination: PaginatedUsers;
  userParticationPagination: PaginatedEventParticipation;
  /** @deprecated instead use order */
  userPurchase: ZuUserProductPurchase;
  /** @deprecated instead use order */
  userPurchases: PaginatedUserPurchase;
  userTask: ZuUserTask;
  userTaskPagination: PaginatedUserTask;
  userTasksByUserId: Array<ZuUserTask>;
  zdnUserDiffusionRequest: ZdnUserDiffusionRequest;
  zdnUserDiffusionRequests: Array<ZdnUserDiffusionRequest>;
  zuFormResults: Array<Zu_Form_Results>;
  zzimSalesCursorPagination: SalePagination;
};


export type QueryActiveBenefitsByCodeArgs = {
  code: Scalars['String']['input'];
};


export type QueryActiveCouponGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBankArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBankPaginationArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBannerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBannersByTypeArgs = {
  type: ZuBannerType;
};


export type QueryBenefitArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBenefitPaginationArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBenefitsByCategoryArgs = {
  categoryCode?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBjdongCodePaginationArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCertificationOfContentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCertificationOfContentByUserIdArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryCertificationOfContentPaginationArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryClassArgs = {
  id: Scalars['ID']['input'];
};


export type QueryClassPaginationArgs = {
  order?: InputMaybe<ZuClassOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryContactArgs = {
  id: Scalars['Int']['input'];
};


export type QueryContactPaginationArgs = {
  order?: InputMaybe<ZuContactOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCouponByUserIdArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryCouponGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCouponGroupPaginataionArgs = {
  order?: InputMaybe<ZuCouponGroupOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCouponPaginationArgs = {
  couponGroupId?: InputMaybe<Scalars['ID']['input']>;
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};


export type QueryEventArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEventPaginationArgs = {
  order?: InputMaybe<ZuEventOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFaqArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFileArgs = {
  id: Scalars['String']['input'];
};


export type QueryFormResultArgs = {
  code: Scalars['String']['input'];
};


export type QueryFormTypeResultArgs = {
  code: Scalars['String']['input'];
};


export type QueryGasCompanyPaginationArgs = {
  bdong?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetOfficetelInfoByAddressArgs = {
  address: Scalars['String']['input'];
};


export type QueryGetRecommendationRegionsArgs = {
  area: Scalars['String']['input'];
  count: Scalars['Int']['input'];
  weights: Array<LifeInRegionWeights>;
};


export type QueryHasProductArgs = {
  productType: DdProductType;
};


export type QueryInAppPaymentIdsArgs = {
  platform: ProductPlatform;
};


export type QueryJeonseSafetyReportArgs = {
  id: Scalars['String']['input'];
};


export type QueryJeonseSafetyReportsPaginationArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryJeonseSagiReportArgs = {
  reportId: Scalars['String']['input'];
};


export type QueryJeonseSagiReportPaginationArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLifeAnalArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLifeAnalPaginationArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLifeInRegionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLogPaginationArgs = {
  endedAt?: InputMaybe<Scalars['DateTime']['input']>;
  isUserSearchFilter?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<Zu_LogsOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryManagerPaginationArgs = {
  asc?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<ManagerOrderBy>;
  page?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMonthlyPayContractArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMonthlyPayContractPaginationArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMonthlyPayContractsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMonthlyPayTransferArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMonthlyPayTransfersArgs = {
  contractId: Scalars['ID']['input'];
};


export type QueryMonthlyPayTransfersPagiationArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMySalesArgs = {
  all?: Scalars['Boolean']['input'];
  refresh?: Scalars['Boolean']['input'];
};


export type QueryNonMemberOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNonMemberOrdersArgs = {
  phone: Scalars['String']['input'];
};


export type QueryNonMemberOrdersByUuidArgs = {
  uuid: Scalars['String']['input'];
};


export type QueryNoticeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNoticePaginationArgs = {
  asc?: Scalars['Boolean']['input'];
  order?: InputMaybe<GraphQlNoticePaginationOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNotificationPaginationArgs = {
  asc?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<NotificationOrderBy>;
  page: Scalars['Int']['input'];
  query?: InputMaybe<Scalars['String']['input']>;
  take: Scalars['Int']['input'];
};


export type QueryNotificationUserPaginationArgs = {
  order?: InputMaybe<Dd_Notification_UsersOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryNotificationUsersArgs = {
  notificationId: Scalars['ID']['input'];
};


export type QueryOfficetelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOfficetelByCodeArgs = {
  code: Scalars['String']['input'];
};


export type QueryOfficetelPaginationArgs = {
  filterInactivated?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Zu_OfficetelsOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOfficetelTransationPaginationArgs = {
  order?: InputMaybe<ZuOfficetelTransactionOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrderArgs = {
  id: Scalars['Int']['input'];
};


export type QueryOrderPaginationArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrdersByUuIdArgs = {
  uuid: Scalars['String']['input'];
};


export type QueryPopupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPopupPaginationArgs = {
  asc?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<GraphQlPopupPaginationOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostLinksArgs = {
  sourceId: Scalars['ID']['input'];
};


export type QueryPostPaginationArgs = {
  order?: InputMaybe<ZuPostOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPostsArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  sourceId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductPaginationArgs = {
  page: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryPushPolicyPaginationArgs = {
  asc?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<PushPolicyOrderBy>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRecommendTownArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRecommendTownPaginationArgs = {
  asc?: InputMaybe<Scalars['Boolean']['input']>;
  existImage?: InputMaybe<Scalars['Boolean']['input']>;
  existNote?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<RecommendTownPaginationOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRecordArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReportMentPaginationArgs = {
  filterIntroLabel1?: InputMaybe<Array<Scalars['String']['input']>>;
  filterIntroLabel2?: InputMaybe<Array<Scalars['String']['input']>>;
  filterIntroLabel3?: InputMaybe<Array<Scalars['String']['input']>>;
  filterTraitsScoreLabel?: InputMaybe<Array<Scalars['String']['input']>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
};


export type QuerySaleExplorePaginationArgs = {
  asc?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<SaleExplorePaginationFilterInput>;
  filterState?: InputMaybe<Scalars['String']['input']>;
  filterSubway?: InputMaybe<Array<Scalars['String']['input']>>;
  order?: InputMaybe<Zu_SalesOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySalePaginationArgs = {
  asc?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<GraphQlSalePaginationOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySaleStatisticsArgs = {
  filterSubway?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QuerySaleZutiRecommendationArgs = {
  filterState?: InputMaybe<Scalars['String']['input']>;
  filterSubway?: InputMaybe<Array<Scalars['String']['input']>>;
  zuti?: InputMaybe<ZutiType>;
};


export type QuerySearchAddressJeonseSagiArgs = {
  keyword: Scalars['String']['input'];
};


export type QuerySearchDongJeonseSagiArgs = {
  admCd: Scalars['String']['input'];
  buldMnnm: Scalars['String']['input'];
  buldSlno: Scalars['String']['input'];
  dongNm?: InputMaybe<Scalars['String']['input']>;
  rnMgtSn: Scalars['String']['input'];
  serachType: Scalars['String']['input'];
  udrtYn: Scalars['String']['input'];
};


export type QuerySearchHoJeonseSagiArgs = {
  admCd: Scalars['String']['input'];
  buldMnnm: Scalars['String']['input'];
  buldSlno: Scalars['String']['input'];
  dongNm?: InputMaybe<Scalars['String']['input']>;
  rnMgtSn: Scalars['String']['input'];
  serachType: Scalars['String']['input'];
  udrtYn: Scalars['String']['input'];
};


export type QuerySearchReportAddressPaginationArgs = {
  page?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryServiceStatisticsByTypeArgs = {
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<ZuServiceStatisticsType>;
};


export type QueryShortFormArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskCategoryPaginationArgs = {
  order?: InputMaybe<ZuTaskCategoryOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTaskHydrationContentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskPaginationArgs = {
  order?: InputMaybe<ZuTaskOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Float']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryTermsAndConditionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTermsAndConditionByTitleArgs = {
  title: Scalars['String']['input'];
};


export type QueryTermsAndConditionsByTitleArgs = {
  parentId: Scalars['ID']['input'];
};


export type QueryTraitPaginationArgs = {
  asc?: InputMaybe<Scalars['Boolean']['input']>;
  filterCategories?: InputMaybe<Array<Scalars['String']['input']>>;
  order?: InputMaybe<TraitPaginationOrder>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  traitType?: InputMaybe<TraitType>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserByCodeArgs = {
  code: Scalars['Int']['input'];
};


export type QueryUserIdByExternalCodesArgs = {
  externalCodes: Array<Scalars['String']['input']>;
};


export type QueryUserPaginationArgs = {
  asc?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<UserOrderBy>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserParticationPaginationArgs = {
  page?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryUserPurchaseArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserPurchasesArgs = {
  asc?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<ZuUserProductPurchaseOrderByWithRelationInput>;
  page?: Scalars['Int']['input'];
  query?: InputMaybe<Scalars['String']['input']>;
  take?: Scalars['Int']['input'];
};


export type QueryUserTaskArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserTaskPaginationArgs = {
  order?: InputMaybe<ZuUserTaskOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryUserTasksByUserIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryZdnUserDiffusionRequestArgs = {
  id: Scalars['ID']['input'];
};


export type QueryZzimSalesCursorPaginationArgs = {
  nextCursor?: InputMaybe<Scalars['String']['input']>;
  prevCursor?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export enum RecommendTownPaginationOrder {
  Id = 'Id',
  Name = 'Name'
}

export type ReportResponseData = {
  __typename?: 'ReportResponseData';
  dataHub: Scalars['ReportMentJson']['output'];
  distinguish: Scalars['String']['output'];
  result: Scalars['ReportMentJson']['output'];
  summary: Scalars['ReportMentJson']['output'];
};

export type ReportResponseGql = {
  __typename?: 'ReportResponseGQL';
  buildName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  data?: Maybe<ReportResponseData>;
  dongName?: Maybe<Scalars['String']['output']>;
  floorName?: Maybe<Scalars['String']['output']>;
  fullCode?: Maybe<Scalars['String']['output']>;
  hoName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isBuildFile?: Maybe<Scalars['Boolean']['output']>;
  jibunAddress?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['String']['output']>;
  roadAddress?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type SaleExplorePaginationFilterInput = {
  /** 방 개수 필터 */
  countRoom?: InputMaybe<Array<SaleExplorePaginationFilterInputCountRoom>>;
  /** 엘리베이터 여부 필터 */
  elevator?: InputMaybe<SaleExplorePaginationFilterInputElevator>;
  /** 층수 필터 */
  floorHighest?: InputMaybe<Array<SaleExplorePaginationFilterInputFloorHighest>>;
  /** 층구조 필터 */
  floorStructure?: InputMaybe<SaleExplorePaginationFilterInputFloorStructure>;
  /** 남향 여부 필터 */
  houseOrientation?: InputMaybe<Scalars['Boolean']['input']>;
  /** 즉시 입주 가능 여부 필터 */
  immediate?: InputMaybe<Scalars['Boolean']['input']>;
  /** 인테리어 필터 */
  interior?: InputMaybe<Array<SaleExplorePaginationFilterInputInterior>>;
  /** 전세 보증금 필터 */
  jeonseDeposit?: InputMaybe<SaleExplorePaginationFilterInputBigIntRange>;
  /** 관리비 필터 */
  maintenanceFee?: InputMaybe<SaleExplorePaginationFilterInputBigIntRange>;
  /** 월세 보증금 필터 */
  monthlyDeposit?: InputMaybe<SaleExplorePaginationFilterInputBigIntRange>;
  /** 월세 금액 필터 */
  monthlyRent?: InputMaybe<SaleExplorePaginationFilterInputBigIntRange>;
  /** 옵션 필터 */
  option?: InputMaybe<Array<SaleExplorePaginationFilterInputOption>>;
  /** 주차 여부 필터 */
  parking?: InputMaybe<SaleExplorePaginationFilterInputParking>;
  /** 매물 유형 필터 */
  saleType?: InputMaybe<Array<SaleExplorePaginationFilterInputSaleType>>;
  /** 보안시설 여부 필터 */
  security?: InputMaybe<Scalars['Boolean']['input']>;
  /** 관리비 필터 */
  supplyArea?: InputMaybe<SaleExplorePaginationFilterInputBigIntRange>;
  /** 거래 유형 필터 */
  tradeType?: InputMaybe<SaleExplorePaginationFilterInputTradeType>;
  /** 준공년도 필터 */
  yearConstruction?: InputMaybe<SaleExplorePaginationFilterInputYearConstruction>;
};

export type SaleExplorePaginationFilterInputBigIntRange = {
  /** 최대값 */
  max?: InputMaybe<Scalars['String']['input']>;
  /** 최소값 */
  min?: InputMaybe<Scalars['String']['input']>;
};

export enum SaleExplorePaginationFilterInputCountRoom {
  Room_1 = 'Room_1',
  Room_1_5 = 'Room_1_5',
  Room_2 = 'Room_2',
  Room_3 = 'Room_3',
  Room_4 = 'Room_4'
}

export enum SaleExplorePaginationFilterInputElevator {
  Exist = 'Exist',
  Nothing = 'Nothing'
}

export enum SaleExplorePaginationFilterInputFloorHighest {
  GroundFloor = 'GroundFloor',
  LowerFloor = 'LowerFloor',
  MiddleFloor = 'MiddleFloor',
  Penthouse = 'Penthouse',
  SemiBasement = 'SemiBasement',
  UpperFloor = 'upperFloor'
}

export enum SaleExplorePaginationFilterInputFloorStructure {
  Duplex = 'Duplex',
  SingleFloor = 'SingleFloor'
}

export enum SaleExplorePaginationFilterInputInterior {
  Modern = 'Modern',
  Natural = 'Natural',
  Unique = 'Unique'
}

export enum SaleExplorePaginationFilterInputOption {
  FullOption = 'FullOption',
  Nothing = 'Nothing',
  Option = 'Option'
}

export enum SaleExplorePaginationFilterInputParking {
  Exist = 'Exist',
  Nothing = 'Nothing'
}

export enum SaleExplorePaginationFilterInputSaleType {
  Apartnemt = 'Apartnemt',
  Etc = 'ETC',
  Officetel = 'Officetel',
  Villa = 'Villa'
}

export enum SaleExplorePaginationFilterInputTradeType {
  Jeonse = 'Jeonse',
  Monthly = 'Monthly',
  Trading = 'Trading'
}

export enum SaleExplorePaginationFilterInputYearConstruction {
  YearConstruction_1 = 'YearConstruction_1',
  YearConstruction_5 = 'YearConstruction_5',
  YearConstruction_10 = 'YearConstruction_10',
  YearConstruction_20 = 'YearConstruction_20',
  YearConstruction_30 = 'YearConstruction_30'
}

export type SalePagination = {
  __typename?: 'SalePagination';
  count: Scalars['Float']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrev: Scalars['Boolean']['output'];
  nextCursor: Scalars['String']['output'];
  nodes: Array<Zu_Sales>;
  prevCursor: Scalars['String']['output'];
};

export type SaleStatistics = {
  __typename?: 'SaleStatistics';
  avrJeonseAptDeposit?: Maybe<Scalars['BigInt']['output']>;
  avrJeonseETCDeposit?: Maybe<Scalars['BigInt']['output']>;
  avrJeonseOfficeDeposit?: Maybe<Scalars['BigInt']['output']>;
  avrJeonseVillaDeposit?: Maybe<Scalars['BigInt']['output']>;
  avrMonthlyAptDeposit?: Maybe<Scalars['BigInt']['output']>;
  avrMonthlyAptRent?: Maybe<Scalars['BigInt']['output']>;
  avrMonthlyETCDeposit?: Maybe<Scalars['BigInt']['output']>;
  avrMonthlyETCRent?: Maybe<Scalars['BigInt']['output']>;
  avrMonthlyOfficeDeposit?: Maybe<Scalars['BigInt']['output']>;
  avrMonthlyOfficeRent?: Maybe<Scalars['BigInt']['output']>;
  avrMonthlyVillaDeposit?: Maybe<Scalars['BigInt']['output']>;
  avrMonthlyVillaRent?: Maybe<Scalars['BigInt']['output']>;
};

export type SalesUpdatedInfo = {
  __typename?: 'SalesUpdatedInfo';
  sales: Array<Dd_Files>;
};

export type SearchDongResponse = {
  __typename?: 'SearchDongResponse';
  admCd: Scalars['String']['output'];
  buldMnnm: Scalars['String']['output'];
  buldSlno: Scalars['String']['output'];
  dongNm: Scalars['String']['output'];
  rnMgtSn: Scalars['String']['output'];
  udrtYn: Scalars['String']['output'];
};

export type SearchResidenceApiResponse = {
  __typename?: 'SearchResidenceApiResponse';
  admCd: Scalars['String']['output'];
  buldMnnm: Scalars['String']['output'];
  buldSlno: Scalars['String']['output'];
  dongNm: Scalars['String']['output'];
  floorNm: Scalars['String']['output'];
  hoNm: Scalars['String']['output'];
  rnMgtSn: Scalars['String']['output'];
  udrtYn: Scalars['String']['output'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  admCd: Scalars['String']['output'];
  bdKdcd: Scalars['String']['output'];
  bdMgtSn: Scalars['String']['output'];
  buldMnnm: Scalars['String']['output'];
  buldSlno: Scalars['String']['output'];
  jibunAddr: Scalars['String']['output'];
  rnMgtSn: Scalars['String']['output'];
  roadAddr: Scalars['String']['output'];
  roadAddrPart2: Scalars['String']['output'];
  udrtYn: Scalars['String']['output'];
};

export type ShortFormAnswer = {
  __typename?: 'ShortFormAnswer';
  _options: Array<ShortFormFieldOption>;
  id: Scalars['String']['output'];
  type: ShortFormFieldType;
  value: Scalars['String']['output'];
};

export type ShortFormField = {
  __typename?: 'ShortFormField';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  options: Array<ShortFormFieldOption>;
  placeholder?: Maybe<Scalars['String']['output']>;
  required: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  type: ShortFormFieldType;
};

export type ShortFormFieldOption = {
  __typename?: 'ShortFormFieldOption';
  _meta?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export enum ShortFormFieldType {
  Checkbox = 'CHECKBOX',
  Date = 'DATE',
  Datetime = 'DATETIME',
  Dropdown = 'DROPDOWN',
  Email = 'EMAIL',
  Number = 'NUMBER',
  Radio = 'RADIO',
  Select = 'SELECT',
  Text = 'TEXT',
  Textarea = 'TEXTAREA',
  Time = 'TIME',
  Url = 'URL'
}

export type ShortFormFields = {
  __typename?: 'ShortFormFields';
  fields: Array<ShortFormField>;
  version: Scalars['String']['output'];
};

export enum ShortFormType {
  Vote = 'VOTE'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StartOrderInput = {
  count: Scalars['Int']['input'];
  couponId?: InputMaybe<Scalars['Int']['input']>;
  /** productType에 정의된 input으로 맞지않는 input이 입력되었을때 에러를 반환합니다. stringjson 형태로 입력해주세요 */
  input?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  productId: Scalars['ID']['input'];
};

export type StoreHubKoreanRequest = {
  __typename?: 'StoreHubKoreanRequest';
  branchName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  residenceArea?: Maybe<Scalars['String']['output']>;
  storageSize?: Maybe<Scalars['String']['output']>;
  storedItems?: Maybe<Scalars['String']['output']>;
  submitedAt: Scalars['DateTime']['output'];
  usageDuration?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type StoreHubKoreanRequestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TermsAndConditionsWithAgreedAt = {
  __typename?: 'TermsAndConditionsWithAgreedAt';
  agreedAt: Scalars['DateTime']['output'];
  termsAndCondition: ZuTermsAndConditions;
};

export enum TraitPaginationOrder {
  Id = 'Id',
  Name = 'Name'
}

export enum TraitType {
  Convenience = 'CONVENIENCE',
  Exercise = 'EXERCISE',
  Greenary = 'GREENARY',
  Health = 'HEALTH',
  Life = 'LIFE',
  Play = 'PLAY',
  Safety = 'SAFETY',
  Traffic = 'TRAFFIC'
}

export type UpdateAresaJeonseReport = {
  /** 최대 100자 */
  address?: InputMaybe<Scalars['String']['input']>;
  /** 요청 body */
  body?: InputMaybe<Scalars['String']['input']>;
  /** 보증금 */
  deposit?: InputMaybe<Scalars['Int']['input']>;
  /** 응답 error */
  error?: InputMaybe<Scalars['String']['input']>;
  /** 최대 100자 */
  reportId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBenefitInput = {
  brand?: InputMaybe<Scalars['String']['input']>;
  couponGroupId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  thumbnailImageUrl?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCertificationOfContentInput = {
  contractEndDate?: InputMaybe<Scalars['String']['input']>;
  contractStartDate?: InputMaybe<Scalars['String']['input']>;
  deposit?: InputMaybe<Scalars['String']['input']>;
  isDailySpecial?: InputMaybe<Scalars['Boolean']['input']>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  receiverAddress?: InputMaybe<Scalars['String']['input']>;
  receiverPhone?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  senderAddress?: InputMaybe<Scalars['String']['input']>;
  senderPhone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateClassInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  disabledAt?: InputMaybe<Scalars['DateTime']['input']>;
  limit: Scalars['Int']['input'];
  logoFileId?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  speaker?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFaqBulkDto = {
  category?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFaqDto = {
  category?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOfficetelInput = {
  addressStreat?: InputMaybe<Scalars['String']['input']>;
  avgPriceJeonse?: InputMaybe<Scalars['String']['input']>;
  avgPriceMonthlyRent?: InputMaybe<Scalars['String']['input']>;
  avgPriceMonthlyRentDeposit?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  countHousehold?: InputMaybe<Scalars['Int']['input']>;
  floorHighest?: InputMaybe<Scalars['Int']['input']>;
  latitude?: InputMaybe<Scalars['Decimal']['input']>;
  longitude?: InputMaybe<Scalars['Decimal']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  recentTradeDate?: InputMaybe<Scalars['Int']['input']>;
  recentTradeExclusivePrivateArea?: InputMaybe<Scalars['Decimal']['input']>;
  recentTradeFloor?: InputMaybe<Scalars['Int']['input']>;
  recentTradePriceRent?: InputMaybe<Scalars['String']['input']>;
  recentTradePriceRentDeposit?: InputMaybe<Scalars['String']['input']>;
  rentableAreaMax?: InputMaybe<Scalars['Decimal']['input']>;
  rentableAreaMin?: InputMaybe<Scalars['Decimal']['input']>;
  subwayStationNear?: InputMaybe<Scalars['String']['input']>;
  supplyArea?: InputMaybe<Scalars['String']['input']>;
  urlMap?: InputMaybe<Scalars['String']['input']>;
  yearConstruction?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateProductInput = {
  appleInAppId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  disabledAt?: InputMaybe<Scalars['DateTime']['input']>;
  googleInAppId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<DdProductType>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateZuBanner = {
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  disabledAt?: InputMaybe<Scalars['DateTime']['input']>;
  externalLink?: InputMaybe<Scalars['String']['input']>;
  imageFileId?: InputMaybe<Scalars['Int']['input']>;
  linkType?: InputMaybe<Zu_Popups_Link_Type>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  targetId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<ZuBannerType>;
};

export type UpdatedOfficetelInfo = {
  __typename?: 'UpdatedOfficetelInfo';
  officetels: Array<Dd_Files>;
  recentTrades: Array<Dd_Files>;
};

export enum UserOrderBy {
  CreatedAt = 'CreatedAt',
  Id = 'Id',
  Name = 'Name'
}

export type ZdnPromotionCode = {
  __typename?: 'ZDNPromotionCode';
  ZDNUser?: Maybe<Array<ZdnUser>>;
  _count: ZdnPromotionCodeCount;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ZdnPromotionCodeCount = {
  __typename?: 'ZDNPromotionCodeCount';
  ZDNUser: Scalars['Int']['output'];
};

export type ZdnUser = {
  __typename?: 'ZDNUser';
  ZDNUserDiffusionRequest?: Maybe<Array<ZdnUserDiffusionRequest>>;
  _count: ZdnUserCount;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  oauthId?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  promotionCode?: Maybe<ZdnPromotionCode>;
  promotionCodeId?: Maybe<Scalars['Int']['output']>;
  type: ZuUserOauthType;
  updatedAt: Scalars['DateTime']['output'];
};

export type ZdnUserCount = {
  __typename?: 'ZDNUserCount';
  ZDNUserDiffusionRequest: Scalars['Int']['output'];
};

export type ZdnUserDiffusionRequest = {
  __typename?: 'ZDNUserDiffusionRequest';
  controlnets?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  file: Dd_Files;
  fileId: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  hypernetworks?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  model?: Maybe<Scalars['String']['output']>;
  negativePrompt?: Maybe<Scalars['String']['output']>;
  prompt?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['String']['output']>;
  status: ZdnUserDiffusionRequestStatus;
  steps: Scalars['Int']['output'];
  user?: Maybe<ZdnUser>;
  userId?: Maybe<Scalars['Int']['output']>;
  width: Scalars['Int']['output'];
};

export type ZdnUserDiffusionRequestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ZdnUserDiffusionRequestStatus {
  Done = 'DONE',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Requested = 'REQUESTED'
}

export type ZuBankCompany = {
  __typename?: 'ZUBankCompany';
  ZUMonthlyPayContract?: Maybe<Array<ZuMonthlyPayContract>>;
  _count: ZuBankCompanyCount;
  code: Scalars['String']['output'];
  company: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Dd_Files>;
  imageId?: Maybe<Scalars['Int']['output']>;
  manager: Dd_Manager;
  managerId?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ZuBankCompanyCount = {
  __typename?: 'ZUBankCompanyCount';
  ZUMonthlyPayContract: Scalars['Int']['output'];
};

export type ZuBankCompanyCreateInput = {
  code: Scalars['String']['input'];
  company: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  imageId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ZuBankCompanyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuBankCompanyOrderByWithRelationInput = {
  ZUMonthlyPayContract?: InputMaybe<ZuMonthlyPayContractOrderByRelationAggregateInput>;
  code?: InputMaybe<SortOrder>;
  company?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrderInput>;
  manager?: InputMaybe<Dd_ManagerOrderByWithRelationInput>;
  managerId?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ZuBankCompanyUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  imageId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ZuBanner = {
  __typename?: 'ZUBanner';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  externalLink?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 이미지 파일 경로 */
  imageFile?: Maybe<Dd_Files>;
  imageFileId: Scalars['Int']['output'];
  linkType: Zu_Popups_Link_Type;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  targetId?: Maybe<Scalars['Int']['output']>;
  type: ZuBannerType;
  updatedAt: Scalars['DateTime']['output'];
};

export type ZuBannerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ZuBannerType {
  Home = 'HOME',
  My = 'MY',
  Planner = 'PLANNER',
  Post = 'POST',
  Sale = 'SALE'
}

export type ZuBenefit = {
  __typename?: 'ZUBenefit';
  ZUBenefitCategoryRelation?: Maybe<Array<ZuBenefitCategoryRelation>>;
  ZUBenefitUserHistory?: Maybe<Array<ZuBenefitUserHistory>>;
  ZUTaskBenefit?: Maybe<Array<ZuTaskBenefit>>;
  _count: ZuBenefitCount;
  brand: Scalars['String']['output'];
  builtLink?: Maybe<Scalars['String']['output']>;
  categories: Array<ZuBenefitCategory>;
  couponGroup?: Maybe<ZuCouponGroup>;
  couponGroupId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  hasUsedBenefit: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  thumbnailImageUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ZuBenefitCategory = {
  __typename?: 'ZUBenefitCategory';
  ZUBenefitCategoryRelation?: Maybe<Array<ZuBenefitCategoryRelation>>;
  _count: ZuBenefitCategoryCount;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ZuBenefitCategoryCount = {
  __typename?: 'ZUBenefitCategoryCount';
  ZUBenefitCategoryRelation: Scalars['Int']['output'];
};

export type ZuBenefitCategoryRelation = {
  __typename?: 'ZUBenefitCategoryRelation';
  benefitId: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
};

export type ZuBenefitCount = {
  __typename?: 'ZUBenefitCount';
  ZUBenefitCategoryRelation: Scalars['Int']['output'];
  ZUBenefitUserHistory: Scalars['Int']['output'];
  ZUTaskBenefit: Scalars['Int']['output'];
};

export type ZuBenefitOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuBenefitUserHistory = {
  __typename?: 'ZUBenefitUserHistory';
  benefitId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ZuBenefitUserHistoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuBjdongCodes = {
  __typename?: 'ZUBjdongCodes';
  code?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDisabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  simpleCode?: Maybe<Scalars['String']['output']>;
};

export type ZuCertificationOfContent = {
  __typename?: 'ZUCertificationOfContent';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  contractEndDate?: Maybe<Scalars['String']['output']>;
  contractStartDate?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deposit?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDailySpecial?: Maybe<Scalars['Boolean']['output']>;
  receiver?: Maybe<Scalars['String']['output']>;
  receiverAddress?: Maybe<Scalars['String']['output']>;
  receiverPhone?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
  senderAddress?: Maybe<Scalars['String']['output']>;
  senderPhone?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ZuCertificationOfContentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuClass = {
  __typename?: 'ZUClass';
  _count: ZuClassCount;
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  images: Array<Dd_Files>;
  limit?: Maybe<Scalars['Int']['output']>;
  logo: Dd_Files;
  logoFileId?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  speaker?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userCount: Scalars['Int']['output'];
  users: Array<Zu_Users>;
};

export type ZuClassCount = {
  __typename?: 'ZUClassCount';
  ZUClassFile: Scalars['Int']['output'];
  ZUClassUser: Scalars['Int']['output'];
};

export type ZuClassFile = {
  __typename?: 'ZUClassFile';
  classId: Scalars['Int']['output'];
  fileId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
};

export type ZuClassFileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuClassOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuClassOrderByWithRelationInput = {
  ZUClassFile?: InputMaybe<ZuClassFileOrderByRelationAggregateInput>;
  ZUClassUser?: InputMaybe<ZuClassUserOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  disabledAt?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  limit?: InputMaybe<SortOrderInput>;
  logoFile?: InputMaybe<Dd_FilesOrderByWithRelationInput>;
  logoFileId?: InputMaybe<SortOrderInput>;
  price?: InputMaybe<SortOrderInput>;
  speaker?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ZuClassUser = {
  __typename?: 'ZUClassUser';
  class: ZuClass;
  classId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ZuClassUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuContact = {
  __typename?: 'ZUContact';
  answer?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  manager?: Maybe<Dd_Manager>;
  managerId?: Maybe<Scalars['Int']['output']>;
  question: Scalars['String']['output'];
  readAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<Zu_Users>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ZuContactOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuContactOrderByWithRelationInput = {
  answer?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  manager?: InputMaybe<Dd_ManagerOrderByWithRelationInput>;
  managerId?: InputMaybe<SortOrderInput>;
  question?: InputMaybe<SortOrder>;
  readAt?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<Zu_UsersOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrderInput>;
};

export type ZuCoupon = {
  __typename?: 'ZUCoupon';
  ZUOrder?: Maybe<Array<ZuOrder>>;
  ZUUserProductPurchase?: Maybe<Array<ZuUserProductPurchase>>;
  _count: ZuCouponCount;
  code?: Maybe<Scalars['String']['output']>;
  couponGroup?: Maybe<ZuCouponGroup>;
  couponGroupId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  usedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ZuCouponCount = {
  __typename?: 'ZUCouponCount';
  ZUOrder: Scalars['Int']['output'];
  ZUUserProductPurchase: Scalars['Int']['output'];
};

export type ZuCouponCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  couponGroupId?: InputMaybe<Scalars['ID']['input']>;
};

export type ZuCouponCreateManyUserInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  couponGroupId: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  usedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ZuCouponGroup = {
  __typename?: 'ZUCouponGroup';
  ZUBenefit?: Maybe<Array<ZuBenefit>>;
  _count: ZuCouponGroupCount;
  brandImageUrl?: Maybe<Scalars['String']['output']>;
  brandName?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  contentImageUrl?: Maybe<Scalars['String']['output']>;
  count: Scalars['Int']['output'];
  coupons: Array<ZuCoupon>;
  createdAt: Scalars['DateTime']['output'];
  deliveryType: ZuCouponGroupDeliveryType;
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  discountAmount?: Maybe<Scalars['Int']['output']>;
  discountMax?: Maybe<Scalars['Int']['output']>;
  discountRate?: Maybe<Scalars['Int']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  imageId?: Maybe<Scalars['Int']['output']>;
  isCouponsExhausted: Scalars['Boolean']['output'];
  link?: Maybe<Scalars['String']['output']>;
  thumbnailImageId?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  type: ZuCouponGroupType;
  useCouponCode: Scalars['Boolean']['output'];
  useQueryUserIdentifier: Scalars['Boolean']['output'];
  usedCount: Scalars['Int']['output'];
};

export type ZuCouponGroupCount = {
  __typename?: 'ZUCouponGroupCount';
  ZUBenefit: Scalars['Int']['output'];
  ZUCoupon: Scalars['Int']['output'];
  ZUTaskCouponGroup: Scalars['Int']['output'];
};

export enum ZuCouponGroupDeliveryType {
  MonthlyPay = 'MONTHLY_PAY',
  Normal = 'NORMAL',
  SafetyReport = 'SAFETY_REPORT'
}

export type ZuCouponGroupOrderByWithRelationInput = {
  ZUBenefit?: InputMaybe<ZuBenefitOrderByRelationAggregateInput>;
  ZUCoupon?: InputMaybe<ZuCouponOrderByRelationAggregateInput>;
  ZUTaskCouponGroup?: InputMaybe<ZuTaskCouponGroupOrderByRelationAggregateInput>;
  brandImageUrl?: InputMaybe<SortOrderInput>;
  brandName?: InputMaybe<SortOrderInput>;
  content?: InputMaybe<SortOrderInput>;
  contentImageUrl?: InputMaybe<SortOrderInput>;
  count?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deliveryType?: InputMaybe<SortOrder>;
  disabledAt?: InputMaybe<SortOrderInput>;
  discountAmount?: InputMaybe<SortOrderInput>;
  discountMax?: InputMaybe<SortOrderInput>;
  discountRate?: InputMaybe<SortOrderInput>;
  expiredAt?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrderInput>;
  link?: InputMaybe<SortOrderInput>;
  thumbnailImageId?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  useCouponCode?: InputMaybe<SortOrder>;
  useQueryUserIdentifier?: InputMaybe<SortOrder>;
  usedCount?: InputMaybe<SortOrder>;
};

export enum ZuCouponGroupType {
  External = 'EXTERNAL',
  Internal = 'INTERNAL'
}

export type ZuCouponOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuCouponOrderByWithRelationInput = {
  ZUOrder?: InputMaybe<ZuOrderOrderByRelationAggregateInput>;
  ZUUserProductPurchase?: InputMaybe<ZuUserProductPurchaseOrderByRelationAggregateInput>;
  code?: InputMaybe<SortOrderInput>;
  couponGroup?: InputMaybe<ZuCouponGroupOrderByWithRelationInput>;
  couponGroupId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  usedAt?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<Zu_UsersOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrderInput>;
};

export type ZuEvent = {
  __typename?: 'ZUEvent';
  ZUEventParticipation?: Maybe<Array<ZuEventParticipation>>;
  _count: ZuEventCount;
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  endAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image: Dd_Files;
  imageId?: Maybe<Scalars['Int']['output']>;
  isActive: Scalars['Boolean']['output'];
  startAt: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type ZuEventCount = {
  __typename?: 'ZUEventCount';
  ZUEventParticipation: Scalars['Int']['output'];
};

export type ZuEventOrderByWithRelationInput = {
  ZUEventParticipation?: InputMaybe<ZuEventParticipationOrderByRelationAggregateInput>;
  code?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  disabledAt?: InputMaybe<SortOrderInput>;
  endAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrderInput>;
  startAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrderInput>;
};

export type ZuEventParticipation = {
  __typename?: 'ZUEventParticipation';
  createdAt: Scalars['DateTime']['output'];
  eventId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ZuEventParticipationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuFaq = {
  __typename?: 'ZUFaq';
  category?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  order: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ZuGasCompany = {
  __typename?: 'ZUGasCompany';
  address: Scalars['String']['output'];
  bdong: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  contact: Scalars['String']['output'];
  gu: Scalars['String']['output'];
  hdong: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  officeName: Scalars['String']['output'];
};

export type ZuJeonseSafetyReport = {
  __typename?: 'ZUJeonseSafetyReport';
  address?: Maybe<Scalars['String']['output']>;
  addressResponse?: Maybe<Scalars['String']['output']>;
  building_ledger_url?: Maybe<Scalars['String']['output']>;
  crawledAt?: Maybe<Scalars['DateTime']['output']>;
  crawledBy?: Maybe<Scalars['String']['output']>;
  crawledIp?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deposit?: Maybe<Scalars['Int']['output']>;
  dong?: Maybe<Scalars['String']['output']>;
  dongResponse?: Maybe<Scalars['String']['output']>;
  failedAt?: Maybe<Scalars['DateTime']['output']>;
  ho?: Maybe<Scalars['String']['output']>;
  hoResponse?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  log?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  realEstatePrice?: Maybe<Scalars['String']['output']>;
  registry_transcript_url?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['String']['output']>;
  status: ZuReportStatus;
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ZuJeonseSafetyReportOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuJeonseSafetyReportUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  building_ledger_url?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deposit?: InputMaybe<Scalars['Float']['input']>;
  dong?: InputMaybe<Scalars['String']['input']>;
  ho?: InputMaybe<Scalars['String']['input']>;
  realEstatePrice?: InputMaybe<Scalars['String']['input']>;
  registry_transcript_url?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ZuReportStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ZuMonthlyPayContract = {
  __typename?: 'ZUMonthlyPayContract';
  _count: ZuMonthlyPayContractCount;
  acceptedAt?: Maybe<Scalars['DateTime']['output']>;
  account?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['String']['output']>;
  bankCompanyId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  failedAt?: Maybe<Scalars['DateTime']['output']>;
  failedReason?: Maybe<Scalars['String']['output']>;
  files: Array<Dd_Files>;
  id: Scalars['ID']['output'];
  inCludeMaintenance?: Maybe<Scalars['DateTime']['output']>;
  landlord?: Maybe<Scalars['String']['output']>;
  maintenancefee?: Maybe<Scalars['String']['output']>;
  manager: Dd_Manager;
  managerId?: Maybe<Scalars['Int']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  scheduledDate?: Maybe<Scalars['String']['output']>;
  senderName?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ZuMonthlyPayContractCount = {
  __typename?: 'ZUMonthlyPayContractCount';
  ZUMonthlyPayContractFile: Scalars['Int']['output'];
  ZUMonthlyPayTransfer: Scalars['Int']['output'];
};

export type ZuMonthlyPayContractCreateInput = {
  acceptedAt?: InputMaybe<Scalars['DateTime']['input']>;
  account?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  disabledAt?: InputMaybe<Scalars['DateTime']['input']>;
  failedAt?: InputMaybe<Scalars['DateTime']['input']>;
  failedReason?: InputMaybe<Scalars['String']['input']>;
  inCludeMaintenance?: InputMaybe<Scalars['DateTime']['input']>;
  landlord?: InputMaybe<Scalars['String']['input']>;
  maintenancefee?: InputMaybe<Scalars['String']['input']>;
  scheduledDate?: InputMaybe<Scalars['String']['input']>;
  senderName?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ZuMonthlyPayContractFile = {
  __typename?: 'ZUMonthlyPayContractFile';
  contractId: Scalars['Int']['output'];
  fileId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
};

export type ZuMonthlyPayContractFileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuMonthlyPayContractFileOrderByWithRelationInput = {
  contract?: InputMaybe<ZuMonthlyPayContractOrderByWithRelationInput>;
  contractId?: InputMaybe<SortOrder>;
  file?: InputMaybe<Dd_FilesOrderByWithRelationInput>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ZuMonthlyPayContractOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuMonthlyPayContractOrderByWithRelationInput = {
  ZUBankCompany?: InputMaybe<ZuBankCompanyOrderByWithRelationInput>;
  ZUMonthlyPayContractFile?: InputMaybe<ZuMonthlyPayContractFileOrderByRelationAggregateInput>;
  ZUMonthlyPayTransfer?: InputMaybe<ZuMonthlyPayTransferOrderByRelationAggregateInput>;
  acceptedAt?: InputMaybe<SortOrderInput>;
  account?: InputMaybe<SortOrderInput>;
  address?: InputMaybe<SortOrderInput>;
  amount?: InputMaybe<SortOrderInput>;
  bankCompanyId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  disabledAt?: InputMaybe<SortOrderInput>;
  failedAt?: InputMaybe<SortOrderInput>;
  failedReason?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  inCludeMaintenance?: InputMaybe<SortOrderInput>;
  landlord?: InputMaybe<SortOrderInput>;
  maintenancefee?: InputMaybe<SortOrderInput>;
  manager?: InputMaybe<Dd_ManagerOrderByWithRelationInput>;
  managerId?: InputMaybe<SortOrderInput>;
  memo?: InputMaybe<SortOrderInput>;
  scheduledDate?: InputMaybe<SortOrderInput>;
  senderName?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<Zu_UsersOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrderInput>;
};

export type ZuMonthlyPayContractUpdateInput = {
  acceptedAt?: InputMaybe<Scalars['DateTime']['input']>;
  account?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['String']['input']>;
  bankId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  disabledAt?: InputMaybe<Scalars['DateTime']['input']>;
  failedAt?: InputMaybe<Scalars['DateTime']['input']>;
  failedReason?: InputMaybe<Scalars['String']['input']>;
  inCludeMaintenance?: InputMaybe<Scalars['DateTime']['input']>;
  landlord?: InputMaybe<Scalars['String']['input']>;
  maintenancefee?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  scheduledDate?: InputMaybe<Scalars['String']['input']>;
  senderName?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ZuMonthlyPayTransfer = {
  __typename?: 'ZUMonthlyPayTransfer';
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  contract: ZuMonthlyPayContract;
  contractId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  manager: Dd_Manager;
  managerId?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<ZuOrder>;
  orderId?: Maybe<Scalars['Int']['output']>;
  rejectedAt?: Maybe<Scalars['DateTime']['output']>;
  rejectedReason?: Maybe<Scalars['String']['output']>;
  transferDate?: Maybe<Scalars['String']['output']>;
};

export type ZuMonthlyPayTransferOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuMonthlyPayTransferUpdateInput = {
  canceledAt?: InputMaybe<Scalars['DateTime']['input']>;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  contractId: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  rejectedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rejectedReason?: InputMaybe<Scalars['String']['input']>;
  transferDate?: InputMaybe<Scalars['String']['input']>;
};

export type ZuNaverOfficetel = {
  __typename?: 'ZUNaverOfficetel';
  address?: Maybe<Scalars['String']['output']>;
  batlRatio?: Maybe<Scalars['String']['output']>;
  btlRatio?: Maybe<Scalars['String']['output']>;
  civilLeaseHouseholdCount?: Maybe<Scalars['String']['output']>;
  completeAddress?: Maybe<Scalars['String']['output']>;
  complexName?: Maybe<Scalars['String']['output']>;
  complexNo?: Maybe<Scalars['String']['output']>;
  constructionCompanyName?: Maybe<Scalars['String']['output']>;
  cortarNo?: Maybe<Scalars['String']['output']>;
  crawledAt: Scalars['DateTime']['output'];
  dealCount?: Maybe<Scalars['String']['output']>;
  detailAddress?: Maybe<Scalars['String']['output']>;
  etcLeaseHouseholdCount?: Maybe<Scalars['String']['output']>;
  exlusiveArea?: Maybe<Scalars['String']['output']>;
  heatMethodTypeCode?: Maybe<Scalars['String']['output']>;
  highFloor?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isBookmarked?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  leaseCount?: Maybe<Scalars['String']['output']>;
  longTermLeaseHouseholdCount?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  lowFloor?: Maybe<Scalars['String']['output']>;
  maxSupplyArea?: Maybe<Scalars['String']['output']>;
  minSupplyArea?: Maybe<Scalars['String']['output']>;
  nationLeaseHouseholdCount?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<Scalars['String']['output']>;
  parkingCountByHousehold?: Maybe<Scalars['String']['output']>;
  parkingPossibleCount?: Maybe<Scalars['String']['output']>;
  permanentLeaseHouseholdCount?: Maybe<Scalars['String']['output']>;
  publicLeaseHouseholdCount?: Maybe<Scalars['String']['output']>;
  pyeongNames?: Maybe<Scalars['String']['output']>;
  realEstateTypeCode?: Maybe<Scalars['String']['output']>;
  realEstateTypeName?: Maybe<Scalars['String']['output']>;
  rentCount?: Maybe<Scalars['String']['output']>;
  roadAddress?: Maybe<Scalars['String']['output']>;
  roadAddressPrefix?: Maybe<Scalars['String']['output']>;
  roadZipCode?: Maybe<Scalars['String']['output']>;
  shortTermRentCount?: Maybe<Scalars['String']['output']>;
  totalDongCount?: Maybe<Scalars['String']['output']>;
  totalHouseholdCount?: Maybe<Scalars['String']['output']>;
  totalLeaseHouseholdCount?: Maybe<Scalars['String']['output']>;
  useApproveYmd?: Maybe<Scalars['String']['output']>;
};

export type ZuOfficetelFiles = {
  __typename?: 'ZUOfficetelFiles';
  createdAt: Scalars['DateTime']['output'];
  file: Dd_Files;
  fileId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  officetel: Zu_Officetels;
  officetelId: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type ZuOfficetelFilesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuOfficetelTransaction = {
  __typename?: 'ZUOfficetelTransaction';
  bjCode?: Maybe<Scalars['String']['output']>;
  bjDong?: Maybe<Scalars['String']['output']>;
  bon?: Maybe<Scalars['String']['output']>;
  bu?: Maybe<Scalars['String']['output']>;
  bunji?: Maybe<Scalars['String']['output']>;
  contractDate?: Maybe<Scalars['String']['output']>;
  contractPeriod?: Maybe<Scalars['String']['output']>;
  contractType?: Maybe<Scalars['String']['output']>;
  contractYearMonth?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deposit?: Maybe<Scalars['String']['output']>;
  exerciseOfRenewalOption?: Maybe<Scalars['String']['output']>;
  floor?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  monthlyRent?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  previouseContractDeposit?: Maybe<Scalars['String']['output']>;
  previouseContractMonthlyRent?: Maybe<Scalars['String']['output']>;
  roadName?: Maybe<Scalars['String']['output']>;
  sigungu?: Maybe<Scalars['String']['output']>;
  supplyArea?: Maybe<Scalars['String']['output']>;
  tradeType?: Maybe<Scalars['String']['output']>;
  yearConstruction?: Maybe<Scalars['String']['output']>;
};

export type ZuOfficetelTransactionOrderByWithRelationInput = {
  bjCode?: InputMaybe<SortOrderInput>;
  bjDong?: InputMaybe<SortOrderInput>;
  bon?: InputMaybe<SortOrderInput>;
  bu?: InputMaybe<SortOrderInput>;
  bunji?: InputMaybe<SortOrderInput>;
  contractDate?: InputMaybe<SortOrderInput>;
  contractPeriod?: InputMaybe<SortOrderInput>;
  contractType?: InputMaybe<SortOrderInput>;
  contractYearMonth?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  deposit?: InputMaybe<SortOrderInput>;
  exerciseOfRenewalOption?: InputMaybe<SortOrderInput>;
  floor?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrderInput>;
  monthlyRent?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrderInput>;
  previouseContractDeposit?: InputMaybe<SortOrderInput>;
  previouseContractMonthlyRent?: InputMaybe<SortOrderInput>;
  roadName?: InputMaybe<SortOrderInput>;
  sigungu?: InputMaybe<SortOrderInput>;
  supplyArea?: InputMaybe<SortOrderInput>;
  tradeType?: InputMaybe<SortOrderInput>;
  yearConstruction?: InputMaybe<SortOrderInput>;
};

export type ZuOrder = {
  __typename?: 'ZUOrder';
  ZUMonthlyPayTransfer?: Maybe<Array<ZuMonthlyPayTransfer>>;
  _count: ZuOrderCount;
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  canceledReason?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  count: Scalars['Int']['output'];
  couponId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  discount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  input?: Maybe<Scalars['String']['output']>;
  paymentKey?: Maybe<Scalars['String']['output']>;
  paymentLog?: Maybe<Scalars['String']['output']>;
  price: Scalars['Int']['output'];
  product: DdProduct;
  productId?: Maybe<Scalars['Int']['output']>;
  refundRequestAt?: Maybe<Scalars['DateTime']['output']>;
  refundRequestReason?: Maybe<Scalars['String']['output']>;
  refundedAt?: Maybe<Scalars['DateTime']['output']>;
  status: ZuOrderStatus;
  total: Scalars['Int']['output'];
  type?: Maybe<ZuOrderType>;
  userId?: Maybe<Scalars['Int']['output']>;
  uuid: Scalars['String']['output'];
};

export type ZuOrderCount = {
  __typename?: 'ZUOrderCount';
  ZUMonthlyPayTransfer: Scalars['Int']['output'];
};

export type ZuOrderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ZuOrderStatus {
  Error = 'ERROR',
  Pending = 'PENDING',
  Refunded = 'REFUNDED',
  RefundRequested = 'REFUND_REQUESTED',
  Success = 'SUCCESS'
}

export enum ZuOrderType {
  InApp = 'IN_APP',
  Payple = 'PAYPLE',
  Toss = 'TOSS'
}

export type ZuPaymentLog = {
  __typename?: 'ZUPaymentLog';
  UserProductPurchase?: Maybe<ZuUserProductPurchase>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  log: Scalars['String']['output'];
  loggedAt: Scalars['DateTime']['output'];
  type: ZuPaymentLogType;
  updatedAt: Scalars['DateTime']['output'];
  userProductPurchaseId?: Maybe<Scalars['Int']['output']>;
};

export type ZuPaymentLogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ZuPaymentLogType {
  Purchase = 'PURCHASE',
  Refund = 'REFUND'
}

export type ZuPointOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuPost = {
  __typename?: 'ZUPost';
  _count: ZuPostCount;
  category?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  exposedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  thumbnail: Dd_Files;
  thumbnailFileId?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ZuPostCount = {
  __typename?: 'ZUPostCount';
  ZUPostLink: Scalars['Int']['output'];
};

export type ZuPostLink = {
  __typename?: 'ZUPostLink';
  id: Scalars['ID']['output'];
  sourceId: Scalars['Int']['output'];
  targetId: Scalars['Int']['output'];
};

export type ZuPostLinkCreateInput = {
  sourceId: Scalars['Int']['input'];
  targetId: Scalars['String']['input'];
};

export type ZuPostLinkOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuPostOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuPostOrderByWithRelationInput = {
  ZUPostLink?: InputMaybe<ZuPostLinkOrderByRelationAggregateInput>;
  category?: InputMaybe<SortOrderInput>;
  color?: InputMaybe<SortOrderInput>;
  content?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  disabledAt?: InputMaybe<SortOrderInput>;
  exposedAt?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  thumbnailFile?: InputMaybe<Dd_FilesOrderByWithRelationInput>;
  thumbnailFileId?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ZuReportStatus {
  Done = 'DONE',
  Failed = 'FAILED',
  Waiting = 'WAITING'
}

export type ZuSalesUserViewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuServiceStatistics = {
  __typename?: 'ZUServiceStatistics';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  datetime: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum ZuServiceStatisticsType {
  CountCompleteTaskId = 'COUNT_COMPLETE_TASK_ID',
  CountOfActiveUser = 'COUNT_OF_ACTIVE_USER',
  CountOfCrawlingSales = 'COUNT_OF_CRAWLING_SALES',
  CountOfCrawlingSalesByAddress = 'COUNT_OF_CRAWLING_SALES_BY_ADDRESS',
  CountOfPage = 'COUNT_OF_PAGE',
  CountOfPostIndex = 'COUNT_OF_POST_INDEX',
  CountOfRegisterUser = 'COUNT_OF_REGISTER_USER',
  CountOfRegisterUserByAge = 'COUNT_OF_REGISTER_USER_BY_AGE',
  CountOfRegisterUserByGender = 'COUNT_OF_REGISTER_USER_BY_GENDER',
  CountOfRegisterUserByJob = 'COUNT_OF_REGISTER_USER_BY_JOB',
  CountOfVisitingUserPage = 'COUNT_OF_VISITING_USER_PAGE',
  Userflow_1Hour = 'USERFLOW_1_HOUR'
}

export enum ZutiType {
  Aaaaa = 'AAAAA',
  Aaaab = 'AAAAB',
  Aaaba = 'AAABA',
  Aaabb = 'AAABB',
  Aabaa = 'AABAA',
  Aabab = 'AABAB',
  Aabba = 'AABBA',
  Aabbb = 'AABBB',
  Abaaa = 'ABAAA',
  Abaab = 'ABAAB',
  Ababa = 'ABABA',
  Ababb = 'ABABB',
  Abbaa = 'ABBAA',
  Abbab = 'ABBAB',
  Abbba = 'ABBBA',
  Abbbb = 'ABBBB',
  Baaaa = 'BAAAA',
  Baaab = 'BAAAB',
  Baaba = 'BAABA',
  Baabb = 'BAABB',
  Babaa = 'BABAA',
  Babab = 'BABAB',
  Babba = 'BABBA',
  Babbb = 'BABBB',
  Bbaaa = 'BBAAA',
  Bbaab = 'BBAAB',
  Bbaba = 'BBABA',
  Bbabb = 'BBABB',
  Bbbaa = 'BBBAA',
  Bbbab = 'BBBAB',
  Bbbba = 'BBBBA',
  Bbbbb = 'BBBBB'
}

export type ZuTask = {
  __typename?: 'ZUTask';
  _count: ZuTaskCount;
  alarmTitle?: Maybe<Scalars['String']['output']>;
  benefits: Array<ZuBenefit>;
  conditions: Array<ZuTaskCondition>;
  confetti: Scalars['Boolean']['output'];
  content?: Maybe<Scalars['String']['output']>;
  /** @deprecated instead use benefit */
  couponGroups: Array<ZuCouponGroup>;
  createdAt: Scalars['DateTime']['output'];
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  endOffset: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  inputKey?: Maybe<Scalars['String']['output']>;
  inputType?: Maybe<ZuTaskInputType>;
  order?: Maybe<Scalars['Int']['output']>;
  preAlaramOffset?: Maybe<Scalars['Int']['output']>;
  selectOptions?: Maybe<Scalars['JSON']['output']>;
  startOffset: Scalars['Int']['output'];
  subTitle?: Maybe<Scalars['String']['output']>;
  taskCategoryId?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  type: ZuTaskType;
  updatedAt: Scalars['DateTime']['output'];
};

export type ZuTaskBenefit = {
  __typename?: 'ZUTaskBenefit';
  benefitId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  taskId: Scalars['Int']['output'];
};

export type ZuTaskBenefitOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuTaskCategory = {
  __typename?: 'ZUTaskCategory';
  _count: ZuTaskCategoryCount;
  createdAt: Scalars['DateTime']['output'];
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  tasks?: Maybe<Array<ZuTask>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ZuTaskCategoryCount = {
  __typename?: 'ZUTaskCategoryCount';
  ZUTask: Scalars['Int']['output'];
};

export type ZuTaskCategoryCreateInput = {
  disabledAt?: InputMaybe<Scalars['DateTime']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type ZuTaskCategoryOrderByWithRelationInput = {
  ZUTask?: InputMaybe<ZuTaskOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  disabledAt?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ZuTaskCondition = {
  __typename?: 'ZUTaskCondition';
  compareValue?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  operator: ZuTaskConditionOperator;
  taskId?: Maybe<Scalars['Int']['output']>;
};

export type ZuTaskConditionInput = {
  compareValue?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  operator: ZuTaskConditionOperator;
};

export enum ZuTaskConditionOperator {
  Contains = 'CONTAINS',
  Equal = 'EQUAL',
  Exist = 'EXIST',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  LessThan = 'LESS_THAN',
  LessThanOrEqual = 'LESS_THAN_OR_EQUAL',
  NotEqual = 'NOT_EQUAL'
}

export type ZuTaskConditionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuTaskCount = {
  __typename?: 'ZUTaskCount';
  ZUTaskBenefit: Scalars['Int']['output'];
  ZUTaskCouponGroup: Scalars['Int']['output'];
  ZUUserTask: Scalars['Int']['output'];
  ZUUserTaskInput: Scalars['Int']['output'];
  conditions: Scalars['Int']['output'];
};

export type ZuTaskCouponGroupOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuTaskCreateInput = {
  alarmTitle?: InputMaybe<Scalars['String']['input']>;
  conditions?: InputMaybe<Array<ZuTaskConditionInput>>;
  confetti?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  endOffset: Scalars['Int']['input'];
  inputKey?: InputMaybe<Scalars['String']['input']>;
  inputType?: InputMaybe<ZuTaskInputType>;
  order?: InputMaybe<Scalars['Int']['input']>;
  preAlaramOffset?: InputMaybe<Scalars['Int']['input']>;
  selectOptions?: InputMaybe<Array<ZuTaskSelectOptionInput>>;
  startOffset: Scalars['Int']['input'];
  subTitle?: InputMaybe<Scalars['String']['input']>;
  taskCategoryId: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  type: ZuTaskType;
};

export enum ZuTaskInputType {
  Address = 'ADDRESS',
  Date = 'DATE',
  Datetime = 'DATETIME',
  MultiSelect = 'MULTI_SELECT',
  Number = 'NUMBER',
  Select = 'SELECT',
  Text = 'TEXT',
  Time = 'TIME'
}

export type ZuTaskOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuTaskOrderByWithRelationInput = {
  ZUTaskBenefit?: InputMaybe<ZuTaskBenefitOrderByRelationAggregateInput>;
  ZUTaskCategory?: InputMaybe<ZuTaskCategoryOrderByWithRelationInput>;
  ZUTaskCouponGroup?: InputMaybe<ZuTaskCouponGroupOrderByRelationAggregateInput>;
  ZUUserTask?: InputMaybe<ZuUserTaskOrderByRelationAggregateInput>;
  ZUUserTaskInput?: InputMaybe<ZuUserTaskInputOrderByRelationAggregateInput>;
  alarmTitle?: InputMaybe<SortOrderInput>;
  conditions?: InputMaybe<ZuTaskConditionOrderByRelationAggregateInput>;
  confetti?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  disabledAt?: InputMaybe<SortOrderInput>;
  endOffset?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inputKey?: InputMaybe<SortOrderInput>;
  inputType?: InputMaybe<SortOrderInput>;
  order?: InputMaybe<SortOrderInput>;
  preAlaramOffset?: InputMaybe<SortOrderInput>;
  selectOptions?: InputMaybe<SortOrderInput>;
  startOffset?: InputMaybe<SortOrder>;
  subTitle?: InputMaybe<SortOrderInput>;
  taskCategoryId?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ZuTaskSelectOptionInput = {
  label: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export enum ZuTaskType {
  Content = 'CONTENT',
  Input = 'INPUT'
}

export type ZuTaskUpdateInput = {
  alarmTitle?: InputMaybe<Scalars['String']['input']>;
  conditions?: InputMaybe<Array<ZuTaskConditionInput>>;
  confetti?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  couponId?: InputMaybe<Scalars['ID']['input']>;
  endOffset?: InputMaybe<Scalars['Int']['input']>;
  inputKey?: InputMaybe<Scalars['String']['input']>;
  inputType?: InputMaybe<ZuTaskInputType>;
  order?: InputMaybe<Scalars['Int']['input']>;
  preAlaramOffset?: InputMaybe<Scalars['Int']['input']>;
  selectOptions?: InputMaybe<Array<ZuTaskSelectOptionInput>>;
  startOffset?: InputMaybe<Scalars['Int']['input']>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  taskCategoryId: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ZuTaskType>;
};

export type ZuUserApplyCardBenefit = {
  __typename?: 'ZUUserApplyCardBenefit';
  account: Scalars['Boolean']['output'];
  card: Scalars['Boolean']['output'];
  confirmManagerId?: Maybe<Scalars['Int']['output']>;
  confirmedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  userId: Scalars['Int']['output'];
};

export type ZuUserApplyCardBenefitOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ZuUserMarketingAgreeMethods {
  AppPush = 'APP_PUSH',
  Email = 'EMAIL',
  Sms = 'SMS'
}

export enum ZuUserOauthType {
  Apple = 'APPLE',
  Google = 'GOOGLE',
  Kakao = 'KAKAO',
  Naver = 'NAVER',
  Phone = 'PHONE'
}

export type ZuUserProduct = {
  __typename?: 'ZUUserProduct';
  createdAt: Scalars['DateTime']['output'];
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  /** debuging */
  from?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  productId?: Maybe<Scalars['Int']['output']>;
  usedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ZuUserProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuUserProductPurchase = {
  __typename?: 'ZUUserProductPurchase';
  ZUPaymentLog?: Maybe<Array<ZuPaymentLog>>;
  _count: ZuUserProductPurchaseCount;
  acceptedAt?: Maybe<Scalars['DateTime']['output']>;
  code: Scalars['String']['output'];
  couponDiscount: Scalars['Int']['output'];
  couponId?: Maybe<Scalars['Int']['output']>;
  couponName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  failedAt?: Maybe<Scalars['DateTime']['output']>;
  failedReason?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  paymentKey?: Maybe<Scalars['String']['output']>;
  point: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  product: DdProduct;
  productId?: Maybe<Scalars['Int']['output']>;
  purchaseAt?: Maybe<Scalars['DateTime']['output']>;
  purchaseCount: Scalars['Int']['output'];
  refundAcceptManagerId?: Maybe<Scalars['Int']['output']>;
  refundReason?: Maybe<Scalars['String']['output']>;
  refundRequestedAt?: Maybe<Scalars['DateTime']['output']>;
  refundedAt?: Maybe<Scalars['DateTime']['output']>;
  total: Scalars['Int']['output'];
  type?: Maybe<PaymentMethod>;
  updatedAt: Scalars['DateTime']['output'];
  useCount: Scalars['Int']['output'];
  usedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ZuUserProductPurchaseCount = {
  __typename?: 'ZUUserProductPurchaseCount';
  ZUPaymentLog: Scalars['Int']['output'];
};

export type ZuUserProductPurchaseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuUserProductPurchaseOrderByWithRelationInput = {
  ZUPaymentLog?: InputMaybe<ZuPaymentLogOrderByRelationAggregateInput>;
  acceptedAt?: InputMaybe<SortOrderInput>;
  code?: InputMaybe<SortOrder>;
  coupon?: InputMaybe<ZuCouponOrderByWithRelationInput>;
  couponDiscount?: InputMaybe<SortOrder>;
  couponId?: InputMaybe<SortOrderInput>;
  couponName?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  failedAt?: InputMaybe<SortOrderInput>;
  failedReason?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  paymentKey?: InputMaybe<SortOrderInput>;
  point?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  product?: InputMaybe<DdProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrderInput>;
  purchaseAt?: InputMaybe<SortOrderInput>;
  purchaseCount?: InputMaybe<SortOrder>;
  refundAcceptManagerId?: InputMaybe<SortOrderInput>;
  refundReason?: InputMaybe<SortOrderInput>;
  refundRequestedAt?: InputMaybe<SortOrderInput>;
  refundedAt?: InputMaybe<SortOrderInput>;
  total?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  useCount?: InputMaybe<SortOrder>;
  usedAt?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<Zu_UsersOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrderInput>;
};

export type ZuUserTask = {
  __typename?: 'ZUUserTask';
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  task: ZuTask;
  taskId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  viewedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ZuUserTaskInput = {
  __typename?: 'ZUUserTaskInput';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  inputKey: Scalars['String']['output'];
  inputValue: Scalars['String']['output'];
  taskId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type ZuUserTaskInputOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuUserTaskOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ZuUserTaskOrderByWithRelationInput = {
  canceledAt?: InputMaybe<SortOrderInput>;
  completedAt?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  task?: InputMaybe<ZuTaskOrderByWithRelationInput>;
  taskId?: InputMaybe<SortOrder>;
  user?: InputMaybe<Zu_UsersOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  viewedAt?: InputMaybe<SortOrderInput>;
};

export type ZipupOfficetel = {
  __typename?: 'ZipupOfficetel';
  distance: Scalars['Int']['output'];
  officetel: Zu_Officetels;
  score: Scalars['Float']['output'];
  traits: Traits;
};

export type ZipupOfficetelCounts = {
  __typename?: 'ZipupOfficetelCounts';
  count250: Scalars['Int']['output'];
  count500: Scalars['Int']['output'];
  count1000: Scalars['Int']['output'];
};

export type ZipupRecommendTown = {
  __typename?: 'ZipupRecommendTown';
  id: Scalars['Int']['output'];
  image?: Maybe<Dd_Files>;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  topTraits: Array<Scalars['String']['output']>;
};

export type ZuCouponGroupCreateInput = {
  brandImageUrl?: InputMaybe<Scalars['String']['input']>;
  brandName?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentImageUrl?: InputMaybe<Scalars['String']['input']>;
  deliveryType?: InputMaybe<ZuCouponGroupDeliveryType>;
  link?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type ZuCouponGroupUpdateInput = {
  brandImageUrl?: InputMaybe<Scalars['String']['input']>;
  brandName?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentImageUrl?: InputMaybe<Scalars['String']['input']>;
  deliveryType?: InputMaybe<ZuCouponGroupDeliveryType>;
  disabledAt?: InputMaybe<Scalars['DateTime']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ZuEventCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  disabledAt: Scalars['DateTime']['input'];
  endAt: Scalars['DateTime']['input'];
  imageId: Scalars['Int']['input'];
  startAt: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ZuEventUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  disabledAt?: InputMaybe<Scalars['DateTime']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  imageId?: InputMaybe<Scalars['Int']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ZuLifeAnal = {
  __typename?: 'ZuLifeAnal';
  around?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  doda: Scalars['JSON']['output'];
  draft?: Maybe<Scalars['JSON']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  feedback?: Maybe<Scalars['String']['output']>;
  feedbackSentMessageAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  maxSpace?: Maybe<Scalars['Int']['output']>;
  minSpace?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  recommendTowns: Array<ZipupRecommendTown>;
  reportSentMessageAt?: Maybe<Scalars['DateTime']['output']>;
  station?: Maybe<Scalars['String']['output']>;
  successCache: Scalars['Boolean']['output'];
  traits: Traits;
  updatedAt: Scalars['DateTime']['output'];
  zipupOfficetelCounts: ZipupOfficetelCounts;
  zipupOfficetels1km: Array<ZipupOfficetel>;
  zipupOfficetels2km: Array<ZipupOfficetel>;
  zipupOfficetels4km: Array<ZipupOfficetel>;
  zipupOfficetelsTop3: Array<ZipupOfficetel>;
};

export type ZuPopup = {
  __typename?: 'ZuPopup';
  createdAt: Scalars['Float']['output'];
  deletedAt?: Maybe<Scalars['Float']['output']>;
  externalLink?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Array<Dd_Files>;
  linkType: Zu_Popups_Link_Type;
  manager?: Maybe<Dd_Manager>;
  managerId?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  shownAt: Scalars['Float']['output'];
  targetId?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['Float']['output'];
};

export type ZuReportMent = {
  __typename?: 'ZuReportMent';
  id: Scalars['ID']['output'];
  label: Scalars['ReportMentJson']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type ZuTermsAndConditions = {
  __typename?: 'ZuTermsAndConditions';
  _count: Zu_Terms_And_ConditionsCount;
  children: Array<ZuTermsAndConditions>;
  code?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  countChildren: Scalars['Int']['output'];
  createdAt: Scalars['Float']['output'];
  deletedAt?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  isRequired?: Maybe<Scalars['Boolean']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  revisionedAt: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['Float']['output'];
  zu_user_terms_and_conditions?: Maybe<Array<Zu_User_Terms_And_Conditions>>;
};

export type Zu_OfficetelsCount = {
  __typename?: 'Zu_officetelsCount';
  ZUOfficetelFiles: Scalars['Int']['output'];
};

export type Zu_Terms_And_ConditionsCount = {
  __typename?: 'Zu_terms_and_conditionsCount';
  zu_user_terms_and_conditions: Scalars['Int']['output'];
};

export type Zu_UsersCount = {
  __typename?: 'Zu_usersCount';
  AresaJeonseSagi: Scalars['Int']['output'];
  StoreHubKoreanRequest: Scalars['Int']['output'];
  ZUBenefitUserHistory: Scalars['Int']['output'];
  ZUCertificationOfContent: Scalars['Int']['output'];
  ZUClassUser: Scalars['Int']['output'];
  ZUContact: Scalars['Int']['output'];
  ZUCoupon: Scalars['Int']['output'];
  ZUEventParticipation: Scalars['Int']['output'];
  ZUJeonseSafetyReport: Scalars['Int']['output'];
  ZUMonthlyPayContract: Scalars['Int']['output'];
  ZUOrder: Scalars['Int']['output'];
  ZUPoint: Scalars['Int']['output'];
  ZUSalesUserView: Scalars['Int']['output'];
  ZUUserApplyCardBenefit: Scalars['Int']['output'];
  ZUUserProduct: Scalars['Int']['output'];
  ZUUserProductPurchase: Scalars['Int']['output'];
  ZUUserTask: Scalars['Int']['output'];
  ZUUserTaskInput: Scalars['Int']['output'];
  dd_notification_users: Scalars['Int']['output'];
  dd_user_devices: Scalars['Int']['output'];
  zu_form_results: Scalars['Int']['output'];
  zu_user_terms_and_conditions: Scalars['Int']['output'];
};

export type ZutiResult = {
  __typename?: 'ZutiResult';
  description: Scalars['String']['output'];
  image: Scalars['String']['output'];
  items: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Dd_File_Links = {
  __typename?: 'dd_file_links';
  createdAt: Scalars['DateTime']['output'];
  dd_file: Dd_Files;
  fileId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  linkableId: Scalars['String']['output'];
  linkableType: Scalars['String']['output'];
  meta?: Maybe<Scalars['JSON']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  target?: Maybe<Scalars['String']['output']>;
};

export type Dd_File_LinksOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Dd_Files = {
  __typename?: 'dd_files';
  DDProductFile?: Maybe<Array<DdProductFile>>;
  ZDNUserDiffusionRequest?: Maybe<Array<ZdnUserDiffusionRequest>>;
  ZUBanner?: Maybe<Array<ZuBanner>>;
  ZUClass?: Maybe<Array<ZuClass>>;
  ZUClassFile?: Maybe<Array<ZuClassFile>>;
  ZUMonthlyPayContractFile?: Maybe<ZuMonthlyPayContractFile>;
  ZUOfficetelFiles?: Maybe<Array<ZuOfficetelFiles>>;
  ZUPost?: Maybe<Array<ZuPost>>;
  _count: Dd_FilesCount;
  createdAt: Scalars['DateTime']['output'];
  dd_file_links?: Maybe<Array<Dd_File_Links>>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize: Scalars['String']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  mimetype?: Maybe<Scalars['String']['output']>;
  public: Scalars['Boolean']['output'];
  url: Scalars['String']['output'];
};

export type Dd_FilesOrderByWithRelationInput = {
  DDProductFile?: InputMaybe<DdProductFileOrderByRelationAggregateInput>;
  ZDNUserDiffusionRequest?: InputMaybe<ZdnUserDiffusionRequestOrderByRelationAggregateInput>;
  ZUBanner?: InputMaybe<ZuBannerOrderByRelationAggregateInput>;
  ZUClass?: InputMaybe<ZuClassOrderByRelationAggregateInput>;
  ZUClassFile?: InputMaybe<ZuClassFileOrderByRelationAggregateInput>;
  ZUMonthlyPayContractFile?: InputMaybe<ZuMonthlyPayContractFileOrderByWithRelationInput>;
  ZUOfficetelFiles?: InputMaybe<ZuOfficetelFilesOrderByRelationAggregateInput>;
  ZUPost?: InputMaybe<ZuPostOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  dd_file_links?: InputMaybe<Dd_File_LinksOrderByRelationAggregateInput>;
  filename?: InputMaybe<SortOrderInput>;
  hash?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  mimetype?: InputMaybe<SortOrderInput>;
  public?: InputMaybe<SortOrder>;
};

export type Dd_Life_In_Region = {
  __typename?: 'dd_life_in_region';
  area?: Maybe<Scalars['String']['output']>;
  convenienceFacilityScore?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  crimeSafetyScore?: Maybe<Scalars['Int']['output']>;
  culturalFacilityCount?: Maybe<Scalars['Int']['output']>;
  diningFacilityScore?: Maybe<Scalars['Int']['output']>;
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  generalStoreCount?: Maybe<Scalars['Int']['output']>;
  greenSpaceRatio?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  medicalFacilityCount?: Maybe<Scalars['Int']['output']>;
  publicTransportScore?: Maybe<Scalars['Int']['output']>;
  regionName: Scalars['String']['output'];
  shoppingFacilityScore?: Maybe<Scalars['Int']['output']>;
  sportsFacilityScore?: Maybe<Scalars['Int']['output']>;
  subwayStationCount?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Dd_Manager = {
  __typename?: 'dd_manager';
  _count: Dd_ManagerCount;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  lastSignedAt?: Maybe<Scalars['DateTime']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  roles: Scalars['JSON']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type Dd_ManagerOrderByWithRelationInput = {
  ZUBankCompany?: InputMaybe<ZuBankCompanyOrderByRelationAggregateInput>;
  ZUContact?: InputMaybe<ZuContactOrderByRelationAggregateInput>;
  ZUMonthlyPayContract?: InputMaybe<ZuMonthlyPayContractOrderByRelationAggregateInput>;
  ZUMonthlyPayTransfer?: InputMaybe<ZuMonthlyPayTransferOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  lastSignedAt?: InputMaybe<SortOrderInput>;
  password?: InputMaybe<SortOrderInput>;
  phone?: InputMaybe<SortOrder>;
  roles?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrderInput>;
};

export type Dd_Notification_Logs = {
  __typename?: 'dd_notification_logs';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  notificationUserId: Scalars['Int']['output'];
  response: Scalars['String']['output'];
};

export type Dd_Notification_LogsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Dd_Notification_Users = {
  __typename?: 'dd_notification_users';
  _count: Dd_Notification_UsersCount;
  actionTarget?: Maybe<Scalars['String']['output']>;
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dd_notification_logs?: Maybe<Array<Dd_Notification_Logs>>;
  id: Scalars['ID']['output'];
  notification: Dd_Notifications;
  notificationId?: Maybe<Scalars['Int']['output']>;
  notificationLog?: Maybe<Dd_Notification_Logs>;
  title: Scalars['String']['output'];
  user: Dd_Notification_Users;
  userId: Scalars['Int']['output'];
};

export type Dd_Notification_UsersOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Dd_Notification_UsersOrderByWithRelationInput = {
  actionTarget?: InputMaybe<SortOrderInput>;
  contents?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dd_notification_logs?: InputMaybe<Dd_Notification_LogsOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  notification?: InputMaybe<Dd_NotificationsOrderByWithRelationInput>;
  notificationId?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  user?: InputMaybe<Zu_UsersOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type Dd_Notifications = {
  __typename?: 'dd_notifications';
  _count: Dd_NotificationsCount;
  approve_manager_id?: Maybe<Scalars['Int']['output']>;
  approvedAt?: Maybe<Scalars['Int']['output']>;
  canceledAt?: Maybe<Scalars['Int']['output']>;
  completedAt?: Maybe<Scalars['Int']['output']>;
  countErrors?: Maybe<Scalars['Int']['output']>;
  countUsers: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  dd_notification_users?: Maybe<Array<Dd_Notification_Users>>;
  id: Scalars['ID']['output'];
  pushPolicyId?: Maybe<Scalars['Int']['output']>;
  scheduledAt: Scalars['Int']['output'];
  sendedAt?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  template: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Dd_NotificationsOrderByWithRelationInput = {
  approve_manager_id?: InputMaybe<SortOrderInput>;
  approvedAt?: InputMaybe<SortOrderInput>;
  canceledAt?: InputMaybe<SortOrderInput>;
  completedAt?: InputMaybe<SortOrderInput>;
  countErrors?: InputMaybe<SortOrderInput>;
  countUsers?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dd_notification_users?: InputMaybe<Dd_Notification_UsersOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  pushPolicyId?: InputMaybe<SortOrderInput>;
  scheduledAt?: InputMaybe<SortOrder>;
  sendedAt?: InputMaybe<SortOrderInput>;
  summary?: InputMaybe<SortOrderInput>;
  template?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrderInput>;
};

export type Dd_User_Devices = {
  __typename?: 'dd_user_devices';
  appVersion?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  token?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user: Zu_Users;
  userId: Scalars['Int']['output'];
};

export type Dd_User_DevicesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Traits = {
  __typename?: 'traits';
  convenience?: Maybe<Scalars['Float']['output']>;
  exercise?: Maybe<Scalars['Float']['output']>;
  greenary?: Maybe<Scalars['Float']['output']>;
  health?: Maybe<Scalars['Float']['output']>;
  life?: Maybe<Scalars['Float']['output']>;
  play?: Maybe<Scalars['Float']['output']>;
  safety?: Maybe<Scalars['Float']['output']>;
  traffic?: Maybe<Scalars['Float']['output']>;
};

export type TraitsScoreMentMap = {
  __typename?: 'traitsScoreMentMap';
  convenience: Array<Scalars['String']['output']>;
  exercise: Array<Scalars['String']['output']>;
  greenary: Array<Scalars['String']['output']>;
  health: Array<Scalars['String']['output']>;
  life: Array<Scalars['String']['output']>;
  play: Array<Scalars['String']['output']>;
  safety: Array<Scalars['String']['output']>;
  traffic: Array<Scalars['String']['output']>;
};

export type Zu_Form_Results = {
  __typename?: 'zu_form_results';
  createdAt: Scalars['DateTime']['output'];
  formId: Scalars['Int']['output'];
  formType?: Maybe<Zu_Form_Results_FormType>;
  formTypeResult?: Maybe<FormTypeResult>;
  id: Scalars['ID']['output'];
  result?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: Zu_Users;
  userId: Scalars['Int']['output'];
};

export type Zu_Form_ResultsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum Zu_Form_Results_FormType {
  SaleInfo = 'SALE_INFO',
  Zuti = 'ZUTI'
}

export type Zu_Form_Weights = {
  __typename?: 'zu_form_weights';
  elevator?: Maybe<Scalars['Float']['output']>;
  floorHighest?: Maybe<Scalars['Float']['output']>;
  floorStructure?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  interior?: Maybe<Scalars['Float']['output']>;
  jeonseDeposit?: Maybe<Scalars['Float']['output']>;
  monthlyDeposit?: Maybe<Scalars['Float']['output']>;
  monthlyRent?: Maybe<Scalars['Float']['output']>;
  option?: Maybe<Scalars['Float']['output']>;
  parkingCount?: Maybe<Scalars['Float']['output']>;
  parkingType?: Maybe<Scalars['Float']['output']>;
  supplyArea?: Maybe<Scalars['Float']['output']>;
  yearConstruction?: Maybe<Scalars['Float']['output']>;
};

export enum Zu_Link_Type {
  External = 'external',
  Internal = 'internal'
}

export type Zu_Logs = {
  __typename?: 'zu_logs';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logContents: Scalars['String']['output'];
  type: Scalars['String']['output'];
  userId?: Maybe<Scalars['Int']['output']>;
};

export type Zu_LogsOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrderInput>;
  date?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  logContents?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrderInput>;
};

export type Zu_Notices = {
  __typename?: 'zu_notices';
  button?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fixed?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  linkType?: Maybe<Zu_Link_Type>;
  manager: Dd_Manager;
  managerId?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Zu_Officetels = {
  __typename?: 'zu_officetels';
  ZUOfficetelFiles?: Maybe<Array<ZuOfficetelFiles>>;
  _count: Zu_OfficetelsCount;
  addressJibun?: Maybe<Scalars['String']['output']>;
  addressStreat?: Maybe<Scalars['String']['output']>;
  arounds: Arounds;
  avgPriceJeonse?: Maybe<Scalars['String']['output']>;
  avgPriceMonthlyRent?: Maybe<Scalars['String']['output']>;
  avgPriceMonthlyRentDeposit?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  countHousehold?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['DateTime']['output'];
  floorHighest?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Dd_Files>>;
  inactivated: Scalars['Boolean']['output'];
  indicator: OfficetelIndicator;
  latitude?: Maybe<Scalars['Decimal']['output']>;
  longitude?: Maybe<Scalars['Decimal']['output']>;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  recentTradeDate?: Maybe<Scalars['Int']['output']>;
  recentTradeExclusivePrivateArea?: Maybe<Scalars['Decimal']['output']>;
  recentTradeFloor?: Maybe<Scalars['Int']['output']>;
  recentTradePriceRent?: Maybe<Scalars['String']['output']>;
  recentTradePriceRentDeposit?: Maybe<Scalars['String']['output']>;
  rentableAreaMax?: Maybe<Scalars['Decimal']['output']>;
  rentableAreaMin?: Maybe<Scalars['Decimal']['output']>;
  score: Scalars['Float']['output'];
  subwayStationNear?: Maybe<Scalars['String']['output']>;
  supplyArea?: Maybe<Scalars['String']['output']>;
  traits: Traits;
  updated_at: Scalars['DateTime']['output'];
  urlMap?: Maybe<Scalars['String']['output']>;
  yearConstruction?: Maybe<Scalars['Int']['output']>;
};


export type Zu_OfficetelsAroundsArgs = {
  exceptCctv?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Zu_OfficetelsOrderByWithRelationInput = {
  ZUOfficetelFiles?: InputMaybe<ZuOfficetelFilesOrderByRelationAggregateInput>;
  addressJibun?: InputMaybe<SortOrderInput>;
  addressStreat?: InputMaybe<SortOrderInput>;
  avgPriceJeonse?: InputMaybe<SortOrderInput>;
  avgPriceMonthlyRent?: InputMaybe<SortOrderInput>;
  avgPriceMonthlyRentDeposit?: InputMaybe<SortOrderInput>;
  code?: InputMaybe<SortOrder>;
  countHousehold?: InputMaybe<SortOrderInput>;
  created_at?: InputMaybe<SortOrder>;
  floorHighest?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrderInput>;
  longitude?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrderInput>;
  recentTradeDate?: InputMaybe<SortOrderInput>;
  recentTradeExclusivePrivateArea?: InputMaybe<SortOrderInput>;
  recentTradeFloor?: InputMaybe<SortOrderInput>;
  recentTradePriceRent?: InputMaybe<SortOrderInput>;
  recentTradePriceRentDeposit?: InputMaybe<SortOrderInput>;
  rentableAreaMax?: InputMaybe<SortOrderInput>;
  rentableAreaMin?: InputMaybe<SortOrderInput>;
  subwayStationNear?: InputMaybe<SortOrderInput>;
  supplyArea?: InputMaybe<SortOrderInput>;
  updated_at?: InputMaybe<SortOrder>;
  urlMap?: InputMaybe<SortOrderInput>;
  yearConstruction?: InputMaybe<SortOrderInput>;
};

export enum Zu_Popups_Link_Type {
  Class = 'CLASS',
  External = 'EXTERNAL',
  Notice = 'NOTICE',
  Vote = 'VOTE'
}

export type Zu_Push_Policies = {
  __typename?: 'zu_push_policies';
  createdAt: Scalars['DateTime']['output'];
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  lastSentAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  periodDays: Scalars['Int']['output'];
  startHour: Scalars['Int']['output'];
  targetType: Zu_Push_Policies_Target_Type;
  template: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum Zu_Push_Policies_Target_Type {
  All = 'ALL',
  SaleAlarm = 'SALE_ALARM'
}

export type Zu_Recommend_Towns = {
  __typename?: 'zu_recommend_towns';
  code: Scalars['String']['output'];
  convenience: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  exercise: Scalars['Int']['output'];
  greenary: Scalars['Int']['output'];
  health: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Dd_Files>;
  life: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  play: Scalars['Int']['output'];
  safety: Scalars['Int']['output'];
  traffic: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Zu_Records = {
  __typename?: 'zu_records';
  address?: Maybe<Scalars['String']['output']>;
  countRoom?: Maybe<Scalars['Decimal']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  elevator?: Maybe<Scalars['String']['output']>;
  floorHighest?: Maybe<Scalars['Int']['output']>;
  floorStructure?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Dd_Files>>;
  interior?: Maybe<Scalars['String']['output']>;
  jeonseDeposit?: Maybe<Scalars['BigInt']['output']>;
  maintenanceCost?: Maybe<Scalars['BigInt']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  monthlyDeposit?: Maybe<Scalars['BigInt']['output']>;
  monthlyRent?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  option?: Maybe<Scalars['String']['output']>;
  parkingCount?: Maybe<Scalars['Int']['output']>;
  parkingType?: Maybe<Scalars['String']['output']>;
  saleType?: Maybe<Scalars['String']['output']>;
  score: Scalars['Int']['output'];
  supplyArea?: Maybe<Scalars['Int']['output']>;
  tradeType?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId: Scalars['Int']['output'];
  yearConstruction?: Maybe<Scalars['Int']['output']>;
};

export type Zu_Sales = {
  __typename?: 'zu_sales';
  address?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  connectionStructure?: Maybe<Scalars['String']['output']>;
  countHousehold?: Maybe<Scalars['Int']['output']>;
  countLikes?: Maybe<Scalars['Int']['output']>;
  countOption?: Maybe<Scalars['Int']['output']>;
  countRoom?: Maybe<Scalars['Decimal']['output']>;
  countUnlikes?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  disabled: Scalars['Boolean']['output'];
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  elevator?: Maybe<Scalars['String']['output']>;
  floor?: Maybe<Scalars['String']['output']>;
  floorHighest?: Maybe<Scalars['String']['output']>;
  floorStructure?: Maybe<Scalars['String']['output']>;
  heatingCooling?: Maybe<Scalars['String']['output']>;
  houseOrientation?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  immediate?: Maybe<Scalars['Boolean']['output']>;
  interior?: Maybe<Scalars['String']['output']>;
  isNew?: Maybe<Scalars['Boolean']['output']>;
  jeonseDeposit?: Maybe<Scalars['String']['output']>;
  lastChecked_at?: Maybe<Scalars['DateTime']['output']>;
  maintenanceFee?: Maybe<Scalars['Int']['output']>;
  metaImage?: Maybe<Scalars['String']['output']>;
  monthlyDeposit?: Maybe<Scalars['String']['output']>;
  monthlyRent?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  option?: Maybe<Scalars['String']['output']>;
  parkingCount?: Maybe<Scalars['String']['output']>;
  parkingType?: Maybe<Scalars['String']['output']>;
  platformUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  saleType: Scalars['String']['output'];
  score?: Maybe<Scalars['Int']['output']>;
  secure?: Maybe<Scalars['String']['output']>;
  stairway?: Maybe<Scalars['String']['output']>;
  supplyArea?: Maybe<Scalars['Decimal']['output']>;
  tradeType?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
  viewerHasAction: Scalars['Boolean']['output'];
  viewerHasZzimed: Scalars['Boolean']['output'];
  wallpaper?: Maybe<Scalars['String']['output']>;
  yearConstruction?: Maybe<Scalars['Int']['output']>;
};

export type Zu_SalesOrderByWithRelationInput = {
  address?: InputMaybe<SortOrderInput>;
  code?: InputMaybe<SortOrderInput>;
  connectionStructure?: InputMaybe<SortOrderInput>;
  countError?: InputMaybe<SortOrderInput>;
  countHousehold?: InputMaybe<SortOrderInput>;
  countLikes?: InputMaybe<SortOrderInput>;
  countOption?: InputMaybe<SortOrderInput>;
  countRoom?: InputMaybe<SortOrderInput>;
  countUnlikes?: InputMaybe<SortOrderInput>;
  countVisits?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  disabledAt?: InputMaybe<SortOrderInput>;
  elevator?: InputMaybe<SortOrderInput>;
  floor?: InputMaybe<SortOrderInput>;
  floorHighest?: InputMaybe<SortOrderInput>;
  floorStructure?: InputMaybe<SortOrderInput>;
  heatingCooling?: InputMaybe<SortOrderInput>;
  houseOrientation?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  immediate?: InputMaybe<SortOrderInput>;
  interior?: InputMaybe<SortOrderInput>;
  jeonseDeposit?: InputMaybe<SortOrderInput>;
  lastChecked_at?: InputMaybe<SortOrderInput>;
  maintenanceFee?: InputMaybe<SortOrderInput>;
  monthlyDeposit?: InputMaybe<SortOrderInput>;
  monthlyRent?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrderInput>;
  option?: InputMaybe<SortOrderInput>;
  parkingCount?: InputMaybe<SortOrderInput>;
  parkingType?: InputMaybe<SortOrderInput>;
  platformUpdatedAt?: InputMaybe<SortOrderInput>;
  saleType?: InputMaybe<SortOrder>;
  security?: InputMaybe<SortOrderInput>;
  stairway?: InputMaybe<SortOrderInput>;
  supplyArea?: InputMaybe<SortOrderInput>;
  tradeType?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrderInput>;
  wallpaper?: InputMaybe<SortOrderInput>;
  yearConstruction?: InputMaybe<SortOrderInput>;
};

export type Zu_Short_Form_Results = {
  __typename?: 'zu_short_form_results';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  result?: Maybe<Scalars['JSON']['output']>;
  shortFormId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type Zu_Short_Forms = {
  __typename?: 'zu_short_forms';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  fields?: Maybe<ShortFormFields>;
  id: Scalars['ID']['output'];
  /** @deprecated deprecated instead use isParticipated */
  isParticiated: Scalars['Boolean']['output'];
  isParticipated: Scalars['Boolean']['output'];
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ShortFormType>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Zu_Terms_And_Conditions = {
  __typename?: 'zu_terms_and_conditions';
  _count: Zu_Terms_And_ConditionsCount;
  code?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isRequired?: Maybe<Scalars['Boolean']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  revisionedAt: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  zu_user_terms_and_conditions?: Maybe<Array<Zu_User_Terms_And_Conditions>>;
};

export type Zu_Traits = {
  __typename?: 'zu_traits';
  category: Scalars['String']['output'];
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  indicator: OfficetelIndicator;
  latitude?: Maybe<Scalars['Decimal']['output']>;
  longitude?: Maybe<Scalars['Decimal']['output']>;
  name: Scalars['String']['output'];
  subType?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Zu_User_Terms_And_Conditions = {
  __typename?: 'zu_user_terms_and_conditions';
  TermsAndConditions?: Maybe<Zu_Terms_And_Conditions>;
  User?: Maybe<Zu_Users>;
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  termsAndConditionsId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type Zu_User_Terms_And_ConditionsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Zu_Users = {
  __typename?: 'zu_users';
  ZUUserApplyCardBenefit?: Maybe<Array<ZuUserApplyCardBenefit>>;
  _count: Zu_UsersCount;
  age?: Maybe<Scalars['String']['output']>;
  agreeMarketingAt?: Maybe<Scalars['DateTime']['output']>;
  /** 사용자가 마케팅 수신 동의한 방법들 */
  agreeMarketingMethods?: Maybe<Array<ZuUserMarketingAgreeMethods>>;
  applyCardBenefit?: Maybe<ZuUserApplyCardBenefit>;
  birthday?: Maybe<Scalars['String']['output']>;
  cardBenefitsGrantedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 사용자의 1:1문의 내역 */
  contacts: Array<ZuContact>;
  /** 사용자가 소유한 쿠폰 목록 */
  coupons: Array<ZuCoupon>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedMemo?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  externalCode: Scalars['String']['output'];
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** 전세보고서 작성 가능 여부 */
  isJeonseReportPossible: Scalars['Boolean']['output'];
  job?: Maybe<Scalars['String']['output']>;
  lastSignedAt?: Maybe<Scalars['DateTime']['output']>;
  lastUsedAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  newPlannerAlaramAcceptedAt?: Maybe<Scalars['DateTime']['output']>;
  newSaleAlarmAcceptedAt?: Maybe<Scalars['DateTime']['output']>;
  newServiceAlarmAcceptedAt?: Maybe<Scalars['DateTime']['output']>;
  oauthId?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  purchases: Array<ZuUserProductPurchase>;
  /** 사용자의 스토어허브 한국 요청 목록 */
  requestsStoreHubKorea: Array<StoreHubKoreanRequest>;
  submittedForms: Array<Zu_Form_Results>;
  termsAndConditionsWithAgreedAt: Array<TermsAndConditionsWithAgreedAt>;
  type: ZuUserOauthType;
  updatedAt: Scalars['DateTime']['output'];
  /** 마지막 사용한 사용자의 디바이스 정보 */
  userDevice?: Maybe<Dd_User_Devices>;
  userSales: Array<Zu_Sales>;
  userTaskInput: Array<ZuUserTaskInput>;
  userTasks: Array<ZuUserTask>;
  /** 사용자의 ZUTI 결과 */
  zutiResult?: Maybe<ZutiResult>;
  zutiType?: Maybe<ZutiType>;
};

export type Zu_UsersOrderByWithRelationInput = {
  AresaJeonseSagi?: InputMaybe<AresaJeonseSagiOrderByRelationAggregateInput>;
  StoreHubKoreanRequest?: InputMaybe<StoreHubKoreanRequestOrderByRelationAggregateInput>;
  ZUBenefitUserHistory?: InputMaybe<ZuBenefitUserHistoryOrderByRelationAggregateInput>;
  ZUCertificationOfContent?: InputMaybe<ZuCertificationOfContentOrderByRelationAggregateInput>;
  ZUClassUser?: InputMaybe<ZuClassUserOrderByRelationAggregateInput>;
  ZUContact?: InputMaybe<ZuContactOrderByRelationAggregateInput>;
  ZUCoupon?: InputMaybe<ZuCouponOrderByRelationAggregateInput>;
  ZUEventParticipation?: InputMaybe<ZuEventParticipationOrderByRelationAggregateInput>;
  ZUJeonseSafetyReport?: InputMaybe<ZuJeonseSafetyReportOrderByRelationAggregateInput>;
  ZUMonthlyPayContract?: InputMaybe<ZuMonthlyPayContractOrderByRelationAggregateInput>;
  ZUOrder?: InputMaybe<ZuOrderOrderByRelationAggregateInput>;
  ZUPoint?: InputMaybe<ZuPointOrderByRelationAggregateInput>;
  ZUSalesUserView?: InputMaybe<ZuSalesUserViewOrderByRelationAggregateInput>;
  ZUUserApplyCardBenefit?: InputMaybe<ZuUserApplyCardBenefitOrderByRelationAggregateInput>;
  ZUUserProduct?: InputMaybe<ZuUserProductOrderByRelationAggregateInput>;
  ZUUserProductPurchase?: InputMaybe<ZuUserProductPurchaseOrderByRelationAggregateInput>;
  ZUUserTask?: InputMaybe<ZuUserTaskOrderByRelationAggregateInput>;
  ZUUserTaskInput?: InputMaybe<ZuUserTaskInputOrderByRelationAggregateInput>;
  age?: InputMaybe<SortOrderInput>;
  agreeMarketingAt?: InputMaybe<SortOrderInput>;
  birthday?: InputMaybe<SortOrderInput>;
  cardBenefitsGrantedAt?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  dd_notification_users?: InputMaybe<Dd_Notification_UsersOrderByRelationAggregateInput>;
  dd_user_devices?: InputMaybe<Dd_User_DevicesOrderByRelationAggregateInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedMemo?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrderInput>;
  gender?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  job?: InputMaybe<SortOrderInput>;
  lastSignedAt?: InputMaybe<SortOrderInput>;
  lastUsedAt?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrderInput>;
  newPlannerAlaramAcceptedAt?: InputMaybe<SortOrderInput>;
  newSaleAlarmAcceptedAt?: InputMaybe<SortOrderInput>;
  newServiceAlarmAcceptedAt?: InputMaybe<SortOrderInput>;
  oauthId?: InputMaybe<SortOrderInput>;
  password?: InputMaybe<SortOrderInput>;
  phone?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  zu_form_results?: InputMaybe<Zu_Form_ResultsOrderByRelationAggregateInput>;
  zu_user_terms_and_conditions?: InputMaybe<Zu_User_Terms_And_ConditionsOrderByRelationAggregateInput>;
  zutiType?: InputMaybe<SortOrderInput>;
};

export type GetEventQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetEventQuery = { __typename?: 'Query', event: { __typename?: 'ZUEvent', id: string, title: string, description?: string | null } };


export const GetEventDocument = gql`
    query GetEvent($id: ID, $code: String) {
  event(id: $id, code: $code) {
    id
    title
    description
  }
}
    `;

/**
 * __useGetEventQuery__
 *
 * To run a query within a React component, call `useGetEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventQuery({
 *   variables: {
 *      id: // value for 'id'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetEventQuery(baseOptions?: Apollo.QueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
      }
export function useGetEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
        }
export function useGetEventSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
        }
export type GetEventQueryHookResult = ReturnType<typeof useGetEventQuery>;
export type GetEventLazyQueryHookResult = ReturnType<typeof useGetEventLazyQuery>;
export type GetEventSuspenseQueryHookResult = ReturnType<typeof useGetEventSuspenseQuery>;
export type GetEventQueryResult = Apollo.QueryResult<GetEventQuery, GetEventQueryVariables>;