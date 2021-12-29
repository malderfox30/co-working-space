import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type AdminNotification = {
  __typename?: 'AdminNotification';
  bodyText: Scalars['String'];
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
  userNames?: Maybe<Scalars['JSON']>;
};

export type AdminNotificationDto = {
  bodyText: Scalars['String'];
  emails?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  topic?: InputMaybe<NotificationTopic>;
  type?: InputMaybe<NotificationType>;
};

export type Audit = {
  __typename?: 'Audit';
  actorId: Scalars['String'];
  auditType: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  ipAddress: Scalars['String'];
  platform: Scalars['String'];
  referenceId: Scalars['String'];
  userId: Scalars['String'];
  utcTime: Scalars['Date'];
};

export type ChangePasswordDto = {
  confirmedPassword: Scalars['String'];
  newPassWord: Scalars['String'];
  oldPassWord: Scalars['String'];
};

export type Commission = {
  __typename?: 'Commission';
  createdAt?: Maybe<Scalars['Date']>;
  driverCommission?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  systemCommission?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type ConfirmForgotPasswordDto = {
  confirmationCode: Scalars['String'];
  confirmedPassword: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Coordinate = {
  __typename?: 'Coordinate';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type CoordinateInfor = {
  __typename?: 'CoordinateInfor';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Coordinates = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Country = {
  __typename?: 'Country';
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  isoCode?: Maybe<Scalars['String']>;
  languages: Array<Language>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type DealConversation = {
  __typename?: 'DealConversation';
  createdAt?: Maybe<Scalars['Date']>;
  dealStatus?: Maybe<Scalars['String']>;
  deletedAt: Scalars['Date'];
  id: Scalars['String'];
  lastMessage?: Maybe<LastMessage>;
  members?: Maybe<Array<Scalars['String']>>;
  messages?: Maybe<Array<Message>>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  userDealConversations?: Maybe<Array<UserDealConversation>>;
  users?: Maybe<Array<User>>;
};

export type DeleteFileDto = {
  url: Scalars['String'];
};

export type DeliveryDto = {
  /**
   *
   *   Field it as JSON
   *   Eg: { "city": "Da Nang", "district": "Son Tra", "address": "18 An Nhon 3" }
   *
   */
  address?: InputMaybe<Scalars['JSON']>;
  address2?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['Date']>;
  document?: InputMaybe<Array<Scalars['String']>>;
  driverVerificationRequest?: InputMaybe<DriverVerificationRequest>;
  email: Scalars['String'];
  fullName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  preferredLanguage?: InputMaybe<Scalars['String']>;
  transportationIds?: InputMaybe<Array<Scalars['String']>>;
  userType: UserType;
  vehicleVerifications?: InputMaybe<Array<VehicleVerificationDto>>;
};

export type DeliveryInformationInput = {
  currency: Scalars['String'];
  expectedCost: Scalars['Float'];
  note: Scalars['String'];
  transportationIds: Array<Scalars['String']>;
};

export type DriverVerificationRequest = {
  cardNumber?: InputMaybe<Scalars['String']>;
  dateRegister?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  expiredDate?: InputMaybe<Scalars['Date']>;
  governmentPhotoUrls?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<VerificationRequestStatus>;
};

export type FilterDto = {
  data: Scalars['String'];
  field: Scalars['String'];
  operator: QueryOperator;
};

export type ForgotPasswordDto = {
  email: Scalars['String'];
};

/** User gender */
export enum Gender {
  Female = 'Female',
  Male = 'Male',
}

export type IAdminNotifications = {
  __typename?: 'IAdminNotifications';
  items: Array<AdminNotification>;
  meta: MetaPaginationInterface;
};

export type IAudits = {
  __typename?: 'IAudits';
  items: Array<Audit>;
  meta: MetaPaginationInterface;
};

export type IAverageFeeDashboard = {
  __typename?: 'IAverageFeeDashboard';
  fee?: Maybe<Scalars['Float']>;
};

export type ICommission = {
  __typename?: 'ICommission';
  createdAt?: Maybe<Scalars['Date']>;
  driverCommission?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  systemCommission?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type ICommissions = {
  __typename?: 'ICommissions';
  items: Array<Commission>;
  meta: MetaPaginationInterface;
};

export type ICountDashboard = {
  __typename?: 'ICountDashboard';
  count: Scalars['Float'];
};

export type ICountries = {
  __typename?: 'ICountries';
  items: Array<ICountry>;
  meta: MetaPaginationInterface;
};

export type ICountry = {
  __typename?: 'ICountry';
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  isoCode?: Maybe<Scalars['String']>;
  languages: Array<Language>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type IDriver = {
  __typename?: 'IDriver';
  _id?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['JSONObject']>;
  address2?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  avgRate?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  connectedAccountId?: Maybe<Scalars['String']>;
  coordinates?: Maybe<CoordinateInfor>;
  countRate?: Maybe<Scalars['Float']>;
  country?: Maybe<Country>;
  createdAt?: Maybe<Scalars['Date']>;
  customerId?: Maybe<Scalars['String']>;
  dealConversations?: Maybe<Array<DealConversation>>;
  description?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  orderReviews?: Maybe<OrderReview>;
  phoneNumber?: Maybe<Scalars['String']>;
  preferredLanguage: Scalars['String'];
  referralCode?: Maybe<Scalars['String']>;
  referralCodeInvite?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Role>>;
  totalOrder?: Maybe<Scalars['Float']>;
  transportation?: Maybe<Array<Transportation>>;
  updatedAt?: Maybe<Scalars['Date']>;
  userType?: Maybe<UserType>;
  userVerificationId?: Maybe<Scalars['String']>;
  userVerificationRequest?: Maybe<UserVerificationRequest>;
};

export type IDrivers = {
  __typename?: 'IDrivers';
  items: Array<IDriver>;
  meta: MetaPaginationInterface;
};

export type IOrderAmountData = {
  __typename?: 'IOrderAmountData';
  driver_received: Scalars['Float'];
  key: Scalars['Date'];
  user_paid: Scalars['Float'];
};

export type IOrderAmountReport = {
  __typename?: 'IOrderAmountReport';
  data: Array<IOrderAmountData>;
  endDate: Scalars['Date'];
  groupBy: ReportType;
  startDate: Scalars['Date'];
};

export type IOrderDashboardData = {
  __typename?: 'IOrderDashboardData';
  key: Scalars['Date'];
  value: Scalars['Float'];
};

export type IOrderRankingData = {
  __typename?: 'IOrderRankingData';
  avatar?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  key: Scalars['Date'];
  total?: Maybe<Scalars['Float']>;
};

export type IOrderRankingReport = {
  __typename?: 'IOrderRankingReport';
  data: Array<IOrderRankingData>;
  endDate: Scalars['Date'];
  groupBy: ReportType;
  startDate: Scalars['Date'];
};

export type IOrderReport = {
  __typename?: 'IOrderReport';
  data: Array<IOrderDashboardData>;
  endDate: Scalars['Date'];
  groupBy: ReportType;
  startDate: Scalars['Date'];
};

export type IOrders = {
  __typename?: 'IOrders';
  items: Array<Order>;
  meta: MetaPaginationInterface;
};

export type IPackages = {
  __typename?: 'IPackages';
  items: Array<Package>;
  meta: MetaPaginationInterface;
};

export type IPreSignUrl = {
  __typename?: 'IPreSignUrl';
  fileType: Scalars['String'];
  pathFile: Scalars['String'];
  uploadUrl: Scalars['String'];
};

export type IPromotion = {
  __typename?: 'IPromotion';
  amount: Scalars['Float'];
  code: Scalars['String'];
  condition?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  isReferral: Scalars['Boolean'];
  startDate?: Maybe<Scalars['Date']>;
  type?: Maybe<Scalars['String']>;
  unit: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
  userId?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
};

export type IPromotionReferral = {
  __typename?: 'IPromotionReferral';
  amount: Scalars['Float'];
  createdAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  promotionType: Scalars['String'];
  unit: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type IPromotionReferrals = {
  __typename?: 'IPromotionReferrals';
  items: Array<IPromotionReferral>;
  meta: MetaPaginationInterface;
};

export type IPromotions = {
  __typename?: 'IPromotions';
  items: Array<IPromotion>;
  meta: MetaPaginationInterface;
};

export type IRevenueDashboard = {
  __typename?: 'IRevenueDashboard';
  revenue?: Maybe<Scalars['Float']>;
};

export type ITransportations = {
  __typename?: 'ITransportations';
  items: Array<Transportation>;
  meta: MetaPaginationInterface;
};

export type IUser = {
  __typename?: 'IUser';
  _id?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['JSONObject']>;
  address2?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  avgRate?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  connectedAccountId?: Maybe<Scalars['String']>;
  coordinates?: Maybe<CoordinateInfor>;
  countRate?: Maybe<Scalars['Float']>;
  country?: Maybe<Country>;
  createdAt?: Maybe<Scalars['Date']>;
  customerId?: Maybe<Scalars['String']>;
  dealConversations?: Maybe<Array<DealConversation>>;
  description?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  orderReviews?: Maybe<OrderReview>;
  phoneNumber?: Maybe<Scalars['String']>;
  preferredLanguage: Scalars['String'];
  referralCode?: Maybe<Scalars['String']>;
  referralCodeInvite?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Role>>;
  totalOrder?: Maybe<Scalars['Float']>;
  transportation?: Maybe<Array<Transportation>>;
  updatedAt?: Maybe<Scalars['Date']>;
  userType?: Maybe<UserType>;
  userVerificationId?: Maybe<Scalars['String']>;
  userVerificationRequest?: Maybe<UserVerificationRequest>;
};

export type IUserDashboardData = {
  __typename?: 'IUserDashboardData';
  key: Scalars['Date'];
  value: Scalars['Float'];
};

export type IUserReport = {
  __typename?: 'IUserReport';
  data: Array<IUserDashboardData>;
  endDate: Scalars['Date'];
  groupBy: ReportType;
  startDate: Scalars['Date'];
};

export type IUserVerificationRequest = {
  __typename?: 'IUserVerificationRequest';
  cardNumber?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  dateRegister?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['JSON']>;
  expiredDate?: Maybe<Scalars['Date']>;
  governmentPhotoUrls?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
  reasonDeny?: Maybe<Scalars['String']>;
  selfiePhotoUrls?: Maybe<Scalars['JSON']>;
  status?: Maybe<VerificationRequestStatus>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
  userId: Scalars['String'];
  vehicles?: Maybe<Array<VehicleVerification>>;
};

export type IUserVerificationRequests = {
  __typename?: 'IUserVerificationRequests';
  items: Array<UserVerificationRequest>;
  meta: MetaPaginationInterface;
};

export type IUsers = {
  __typename?: 'IUsers';
  items: Array<IUser>;
  meta: MetaPaginationInterface;
};

export type IVehicles = {
  __typename?: 'IVehicles';
  items: Array<VehicleVerification>;
  meta: MetaPaginationInterface;
};

export type InstallationInput = {
  deviceId: Scalars['String'];
  deviceToken?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type Language = {
  __typename?: 'Language';
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
};

export type LanguageDto = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type LastMessage = {
  __typename?: 'LastMessage';
  files?: Maybe<Array<Scalars['String']>>;
  isSeen?: Maybe<Scalars['Boolean']>;
  seenBy?: Maybe<Array<Scalars['String']>>;
  senderId?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export enum MessageType {
  Audio = 'Audio',
  File = 'File',
  Image = 'Image',
  Text = 'Text',
  Video = 'Video',
}

export type Message = {
  __typename?: 'Message';
  _id?: Maybe<Scalars['String']>;
  attachment?: Maybe<Scalars['String']>;
  audio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  dealConversation?: Maybe<DealConversation>;
  dealConversationId?: Maybe<Scalars['String']>;
  files?: Maybe<Array<Scalars['String']>>;
  id: Scalars['String'];
  image?: Maybe<Array<Scalars['String']>>;
  isSeen?: Maybe<Scalars['Boolean']>;
  seenBy?: Maybe<Array<Scalars['String']>>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<MessageType>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
  userDealConversation?: Maybe<UserDealConversation>;
  userDealConversationId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  video?: Maybe<Array<Scalars['String']>>;
};

export type MetaPaginationInterface = {
  __typename?: 'MetaPaginationInterface';
  currentPage: Scalars['Float'];
  itemCount: Scalars['Float'];
  itemsPerPage: Scalars['Float'];
  totalItems: Scalars['Float'];
  totalPages: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activatePromotion: IPromotion;
  activateTransportation: Transportation;
  applyReferralCodeInvite: Promotion;
  approveUserVerificationRequest: IUserVerificationRequest;
  changePassword: IUser;
  clearNotificationCount: Scalars['String'];
  confirmForgotPassword: IUser;
  createNewToken: Scalars['String'];
  createNotification: Scalars['String'];
  deactivatePromotion: IPromotion;
  deactivateTransportation: Transportation;
  deleteAllNotification: Scalars['String'];
  deleteFileS3: Scalars['String'];
  deleteNotification: Scalars['String'];
  deleteToken: Scalars['String'];
  denyUserVerificationRequest: IUserVerificationRequest;
  disableDriver: IUser;
  disableUser: IUser;
  enableDriver: IUser;
  enableUser: IUser;
  forgotPassword: IUser;
  markAllNotificationAsSeen: Scalars['String'];
  markNotificationAsSeen: Scalars['String'];
  markNotificationAsUnseen: Scalars['String'];
  presignedUrlS3: IPreSignUrl;
  signUpDriver: IDriver;
  updateMe: IUser;
  updateOrderPayment: Order;
  updateUserType: IUser;
  upsertAdminNotification: AdminNotification;
  upsertCommission: Commission;
  upsertConfigPromotionReferral: IPromotionReferral;
  upsertCountry: ICountry;
  upsertDriver: IDriver;
  upsertOrder: Order;
  upsertPromotion: IPromotion;
  upsertPromotionReferral: IPromotionReferral;
  upsertTransportation: Transportation;
  upsertUserVerificationRequest: IUserVerificationRequest;
};

export type MutationActivatePromotionArgs = {
  id: Scalars['String'];
};

export type MutationActivateTransportationArgs = {
  id: Scalars['String'];
};

export type MutationApplyReferralCodeInviteArgs = {
  referralCode: Scalars['String'];
};

export type MutationApproveUserVerificationRequestArgs = {
  id: Scalars['String'];
};

export type MutationChangePasswordArgs = {
  input: ChangePasswordDto;
};

export type MutationClearNotificationCountArgs = {
  userId: Scalars['String'];
};

export type MutationConfirmForgotPasswordArgs = {
  input: ConfirmForgotPasswordDto;
};

export type MutationCreateNewTokenArgs = {
  input: InstallationInput;
};

export type MutationCreateNotificationArgs = {
  input: AdminNotificationDto;
};

export type MutationDeactivatePromotionArgs = {
  id: Scalars['String'];
};

export type MutationDeactivateTransportationArgs = {
  id: Scalars['String'];
};

export type MutationDeleteAllNotificationArgs = {
  userId: Scalars['String'];
};

export type MutationDeleteFileS3Args = {
  deleteFileDto: DeleteFileDto;
};

export type MutationDeleteNotificationArgs = {
  createdAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type MutationDeleteTokenArgs = {
  input: InstallationInput;
};

export type MutationDenyUserVerificationRequestArgs = {
  id: Scalars['String'];
  reason: Scalars['String'];
};

export type MutationDisableDriverArgs = {
  id: Scalars['String'];
};

export type MutationDisableUserArgs = {
  id: Scalars['String'];
};

export type MutationEnableDriverArgs = {
  id: Scalars['String'];
};

export type MutationEnableUserArgs = {
  id: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  input: ForgotPasswordDto;
};

export type MutationMarkAllNotificationAsSeenArgs = {
  userId: Scalars['String'];
};

export type MutationMarkNotificationAsSeenArgs = {
  createdAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type MutationMarkNotificationAsUnseenArgs = {
  createdAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type MutationPresignedUrlS3Args = {
  presignedUrlDto: PresignedUrlDto;
};

export type MutationSignUpDriverArgs = {
  input: DeliveryDto;
};

export type MutationUpdateMeArgs = {
  input: UpdateMeDto;
};

export type MutationUpdateOrderPaymentArgs = {
  updateOrderPaymentDto: UpdateOrderPaymentDto;
};

export type MutationUpdateUserTypeArgs = {
  input: UpdateUserTypeDto;
};

export type MutationUpsertAdminNotificationArgs = {
  upsertAdminNotificationDto: UpsertNotificationDto;
};

export type MutationUpsertCommissionArgs = {
  upsertCommssionDto: UpsertCommssionDto;
};

export type MutationUpsertConfigPromotionReferralArgs = {
  upsertPromotionReferralDto: UpsertPromotionReferralDto;
};

export type MutationUpsertCountryArgs = {
  upsertCountryDto: UpsertCountryDto;
};

export type MutationUpsertDriverArgs = {
  input: DeliveryDto;
};

export type MutationUpsertOrderArgs = {
  upsertOrderDto: UpsertOrderDto;
};

export type MutationUpsertPromotionArgs = {
  upsertPromotionDto: UpsertPromotionDto;
};

export type MutationUpsertPromotionReferralArgs = {
  upsertPromotionReferralDto: UpsertPromotionReferralDto;
};

export type MutationUpsertTransportationArgs = {
  input: UpsertTransportationDto;
};

export type MutationUpsertUserVerificationRequestArgs = {
  upsertUserVerificationRequestDto: UploadVerificationRequestDto;
};

export enum NotificationStatus {
  Seen = 'SEEN',
  Unseen = 'UNSEEN',
}

export enum NotificationTopic {
  PikThatForAllUser = 'PikThatForAllUser',
}

export enum NotificationType {
  AdminVerification = 'ADMIN_VERIFICATION',
  AutoCancelOrder = 'AUTO_CANCEL_ORDER',
  CloseDeal = 'CLOSE_DEAL',
  DisableAccount = 'DISABLE_ACCOUNT',
  DriverAcceptedDealOrder = 'DRIVER_ACCEPTED_DEAL_ORDER',
  DriverCounterOfferDealOrder = 'DRIVER_COUNTER_OFFER_DEAL_ORDER',
  DriverVerificationFail = 'DRIVER_VERIFICATION_FAIL',
  DriverVerificationSuccess = 'DRIVER_VERIFICATION_SUCCESS',
  ReceivedNewMessage = 'RECEIVED_NEW_MESSAGE',
  Referral = 'REFERRAL',
  SystemNotification = 'SYSTEM_NOTIFICATION',
  UserAcceptedOrder = 'USER_ACCEPTED_ORDER',
  UserAgreeDeal = 'USER_AGREE_DEAL',
  UserCancelledOrder = 'USER_CANCELLED_ORDER',
  UserCompletedOrder = 'USER_COMPLETED_ORDER',
  UserDenyDeal = 'USER_DENY_DEAL',
  UserPickedUpOrder = 'USER_PICKED_UP_ORDER',
  UserVerificationFail = 'USER_VERIFICATION_FAIL',
  UserVerificationSuccess = 'USER_VERIFICATION_SUCCESS',
}

export type Notification = {
  __typename?: 'Notification';
  bodyText?: Maybe<Scalars['String']>;
  cancelReason?: Maybe<Scalars['String']>;
  conversationId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  dealCost?: Maybe<Scalars['Float']>;
  driverId?: Maybe<Scalars['String']>;
  extraObject?: Maybe<Scalars['JSON']>;
  notificationStatus?: Maybe<NotificationStatus>;
  orderId?: Maybe<Scalars['String']>;
  relevantId?: Maybe<Scalars['String']>;
  senderName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<NotificationType>;
  userId?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export enum OrderStatus {
  Accepted = 'Accepted',
  Cancelled = 'Cancelled',
  Completed = 'Completed',
  LookingForDriver = 'LookingForDriver',
  Pending = 'Pending',
  PickedUp = 'PickedUp',
}

export type Order = {
  __typename?: 'Order';
  cancelReason?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Float']>;
  commissionInfo?: Maybe<Scalars['JSON']>;
  completedAt?: Maybe<Scalars['Date']>;
  coordinates?: Maybe<CoordinateInfor>;
  counterOfferCost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Date']>;
  currency: Scalars['String'];
  dealConversation?: Maybe<DealConversation>;
  dealConversationId?: Maybe<Scalars['String']>;
  deliveryScheduledAt?: Maybe<Scalars['Date']>;
  driver?: Maybe<User>;
  driverId?: Maybe<Scalars['String']>;
  driverPromotion?: Maybe<Promotion>;
  driverPromotionId?: Maybe<Scalars['String']>;
  driverReceivedAmount?: Maybe<Scalars['Float']>;
  expectedCost?: Maybe<Scalars['Float']>;
  finalCost?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  isRating: Scalars['Boolean'];
  note?: Maybe<Scalars['String']>;
  packageInfo: Array<PackageInfo>;
  packageQuantity?: Maybe<Scalars['Float']>;
  packages?: Maybe<Array<Package>>;
  payment?: Maybe<Payment>;
  paymentId?: Maybe<Scalars['String']>;
  paymentIntentId?: Maybe<Scalars['String']>;
  pickedUpAt?: Maybe<Scalars['Date']>;
  promotion?: Maybe<Promotion>;
  promotionDiscount?: Maybe<Scalars['Float']>;
  promotionId?: Maybe<Scalars['String']>;
  sender?: Maybe<User>;
  senderId: Scalars['String'];
  senderInfo: UserInfo;
  status: OrderStatus;
  tip?: Maybe<Scalars['Float']>;
  transportation?: Maybe<Array<Transportation>>;
  transportationTransfer?: Maybe<Transportation>;
  transportationTransferId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  userDiscountAmount?: Maybe<Scalars['Float']>;
  userPaidAmount?: Maybe<Scalars['Float']>;
};

export type OrderAmountReportDto = {
  /** Format: mm/dd/yyyy */
  endDate: Scalars['Date'];
  groupBy: ReportType;
  /** Format: mm/dd/yyyy */
  startDate: Scalars['Date'];
};

export type OrderRankingReportDto = {
  /** Format: mm/dd/yyyy */
  endDate: Scalars['Date'];
  groupBy: ReportType;
  /** Format: mm/dd/yyyy */
  startDate: Scalars['Date'];
  userType: UserType;
};

export type OrderReportDto = {
  /** Format: mm/dd/yyyy */
  endDate: Scalars['Date'];
  groupBy: ReportType;
  /** Format: mm/dd/yyyy */
  startDate: Scalars['Date'];
};

export type OrderReview = {
  __typename?: 'OrderReview';
  createdAt?: Maybe<Scalars['Date']>;
  driverId: Scalars['String'];
  feedback?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  orderId: Scalars['String'];
  rating: Scalars['Float'];
  sender?: Maybe<User>;
  senderId: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export enum PackageStatus {
  Accepted = 'Accepted',
  Cancelled = 'Cancelled',
  Completed = 'Completed',
  LookingForDriver = 'LookingForDriver',
  PickedUp = 'PickedUp',
}

export enum PaymentTypes {
  Cash = 'Cash',
  Stripe = 'Stripe',
}

export type Package = {
  __typename?: 'Package';
  acceptedAt?: Maybe<Scalars['Date']>;
  cancelledAt?: Maybe<Scalars['Date']>;
  completedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  deliveryScheduledAt?: Maybe<Scalars['Date']>;
  description: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  images?: Maybe<Scalars['JSON']>;
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['String']>;
  packageCode?: Maybe<Scalars['String']>;
  pickedUpAt?: Maybe<Scalars['Date']>;
  receiverAddress?: Maybe<Scalars['String']>;
  receiverAddress2?: Maybe<Scalars['String']>;
  receiverAvatar?: Maybe<Scalars['String']>;
  receiverCoordinates?: Maybe<Coordinate>;
  receiverEmail?: Maybe<Scalars['String']>;
  receiverName?: Maybe<Scalars['String']>;
  receiverNote?: Maybe<Scalars['String']>;
  receiverPhoneNumber?: Maybe<Scalars['String']>;
  status?: Maybe<PackageStatus>;
  updatedAt?: Maybe<Scalars['Date']>;
  weight?: Maybe<Scalars['Float']>;
};

export type PackageInfo = {
  __typename?: 'PackageInfo';
  acceptedAt?: Maybe<Scalars['Date']>;
  cancelledAt?: Maybe<Scalars['Date']>;
  completedAt?: Maybe<Scalars['Date']>;
  deliveryScheduledAt?: Maybe<Scalars['Date']>;
  description: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Scalars['String']>>;
  pickedUpAt?: Maybe<Scalars['Date']>;
  receiver: UserInfo;
  status?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type PackageInformationInput = {
  acceptedAt?: InputMaybe<Scalars['Date']>;
  cancelledAt?: InputMaybe<Scalars['Date']>;
  completedAt?: InputMaybe<Scalars['Date']>;
  deliveryScheduledAt?: InputMaybe<Scalars['Date']>;
  description: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  pickedUpAt?: InputMaybe<Scalars['Date']>;
  receiver: UserInput;
  status?: InputMaybe<PackageStatus>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
};

export type PaginationNotification = {
  __typename?: 'PaginationNotification';
  items: Array<Notification>;
  pageInfo: PageInfo;
};

export type Payment = {
  __typename?: 'Payment';
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  order?: Maybe<Order>;
  paymentType: PaymentTypes;
  stripeChargeId?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripePaymentMethodInfo?: Maybe<Scalars['JSON']>;
  updatedAt?: Maybe<Scalars['Date']>;
  userId?: Maybe<Scalars['String']>;
};

export type PresignedUrlDto = {
  fileName: Scalars['String'];
  fileType: Scalars['String'];
  pathType: S3UploadType;
};

export type Promotion = {
  __typename?: 'Promotion';
  amount: Scalars['Float'];
  code: Scalars['String'];
  condition?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  isReferral: Scalars['Boolean'];
  startDate?: Maybe<Scalars['Date']>;
  type?: Maybe<Scalars['String']>;
  unit: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
  userId?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
};

export enum QueryOperator {
  Eq = 'eq',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Like = 'like',
  Lt = 'lt',
  Lte = 'lte',
  Neq = 'neq',
  Nin = 'nin',
}

export type Query = {
  __typename?: 'Query';
  getAdminNotification: AdminNotification;
  getAdminNotifications: IAdminNotifications;
  getAudits: IAudits;
  getAverageFeeDashboard: IAverageFeeDashboard;
  getCommission: ICommission;
  getCommissions: ICommissions;
  getConfigPromotionReferral: IPromotionReferral;
  getCountries: ICountries;
  getCountry: ICountry;
  getDriver: IDriver;
  getDriverDashboard: ICountDashboard;
  getDriverVerificationRequest: UserVerificationRequest;
  getDrivers: IDrivers;
  getMe: IUser;
  getNewNotificationCount: Scalars['Float'];
  getNotifications: PaginationNotification;
  getOrder: Order;
  getOrderAmountReport: IOrderAmountReport;
  getOrderDashboard: ICountDashboard;
  getOrderRankingReport: IOrderRankingReport;
  getOrderReport: IOrderReport;
  getOrderTracking: Order;
  getOrders: IOrders;
  getPackages: IPackages;
  getPromotion: IPromotion;
  getPromotionReferral: IPromotionReferral;
  getPromotionReferrals: IPromotionReferrals;
  getPromotions: IPromotions;
  getRevenueDashboard: IRevenueDashboard;
  getTransportation: Transportation;
  getTransportations: ITransportations;
  getUser: IUser;
  getUserByEmail: IUser;
  getUserDashboard: ICountDashboard;
  getUserReport: IUserReport;
  getUserVerificationRequest: IUserVerificationRequest;
  getUserVerificationRequests: IUserVerificationRequests;
  getUsers: IUsers;
  getVehiclesByUserVerificationId: IVehicles;
};

export type QueryGetAdminNotificationArgs = {
  id: Scalars['String'];
};

export type QueryGetAdminNotificationsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetAuditsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetCommissionArgs = {
  id: Scalars['String'];
};

export type QueryGetCommissionsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetCountriesArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetCountryArgs = {
  id: Scalars['String'];
};

export type QueryGetDriverArgs = {
  id: Scalars['String'];
};

export type QueryGetDriverVerificationRequestArgs = {
  id: Scalars['String'];
};

export type QueryGetDriversArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetNewNotificationCountArgs = {
  userId: Scalars['String'];
};

export type QueryGetNotificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  userId: Scalars['String'];
};

export type QueryGetOrderArgs = {
  id: Scalars['String'];
};

export type QueryGetOrderAmountReportArgs = {
  filter: OrderAmountReportDto;
};

export type QueryGetOrderRankingReportArgs = {
  filter: OrderRankingReportDto;
};

export type QueryGetOrderReportArgs = {
  filter: OrderReportDto;
};

export type QueryGetOrderTrackingArgs = {
  code: Scalars['Float'];
};

export type QueryGetOrdersArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetPackagesArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetPromotionArgs = {
  id: Scalars['String'];
};

export type QueryGetPromotionReferralArgs = {
  id: Scalars['String'];
};

export type QueryGetPromotionReferralsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetPromotionsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetTransportationArgs = {
  id: Scalars['String'];
};

export type QueryGetTransportationsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetUserArgs = {
  id: Scalars['String'];
};

export type QueryGetUserByEmailArgs = {
  email: Scalars['String'];
};

export type QueryGetUserReportArgs = {
  filter: UserReportDto;
};

export type QueryGetUserVerificationRequestArgs = {
  id: Scalars['String'];
};

export type QueryGetUserVerificationRequestsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetUsersArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetVehiclesByUserVerificationIdArgs = {
  driverVerificationId: Scalars['String'];
  queryParams: QueryFilterDto;
};

export type QueryFilterDto = {
  /**
   *
   * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "createdAt:DESC"
   *
   */
  coordinates?: InputMaybe<Coordinates>;
  /**
   *
   * - Filter equal: filters:[{field: "name", operator: eq, data: "Jayce"}]
   * - Filter not equal: filters:[{field: "name", operator: neq, data: "Jayce"}]
   * - Filter less than: filters:[{field: "age", operator: lt, data: 40}]
   * - Filter greater than: filters:[{field: "age", operator: gt, data: 40}]
   * - Filter less than and equal: filters:[{field: "age", operator: lte, data: 40}]
   * - Filter greater than and equal: filters:[{field: "age", operator: gte, data: 40}]
   * - Filter field in many choice: filters:[{field: "name", operator: in, data: "Alex,Julia"}]
   * - Filter field not in many choice: filters:[{field: "name", operator: nin, data: "Alex,Julia"}]
   * - Filter field by text: filters:[{field: "name", operator: like, data: "Jayce"}]
   */
  filters?: InputMaybe<Array<FilterDto>>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  limit?: InputMaybe<Scalars['Float']>;
  /**
   *
   * - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "createdAt:DESC"
   *
   */
  orderBy?: InputMaybe<Scalars['String']>;
  /**
   *
   * - Paginate with limit and offset. Ex: limit:10, page:1
   *
   */
  page?: InputMaybe<Scalars['Float']>;
  /**
   *
   * - Query by text. Ex: q:"abcxyz"
   *
   */
  q?: InputMaybe<Scalars['String']>;
};

export enum ReportType {
  Day = 'day',
  Hour = 'hour',
  Month = 'month',
  Week = 'week',
  Year = 'year',
}

export type Role = {
  __typename?: 'Role';
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  users?: Maybe<Array<User>>;
};

export enum S3UploadType {
  Booking = 'Booking',
  Chatting = 'Chatting',
  Package = 'Package',
  Profile = 'Profile',
  Public = 'Public',
}

export enum TypePromotion {
  FixedCashDiscount = 'FIXED_CASH_DISCOUNT',
  PercentageDiscount = 'PERCENTAGE_DISCOUNT',
}

export type Transportation = {
  __typename?: 'Transportation';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  logoUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export enum UserType {
  Admin = 'Admin',
  Driver = 'Driver',
  Undefined = 'Undefined',
  User = 'User',
}

export type UpdateMeDto = {
  /**
   *
   *   Field it as JSON
   *   Eg: { "city": "Da Nang", "district": "Son Tra", "address": "18 An Nhon 3" }
   *
   */
  address?: InputMaybe<Scalars['JSON']>;
  address2?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['Date']>;
  fullName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  preferredLanguage?: InputMaybe<Scalars['String']>;
};

export type UpdateOrderPaymentDto = {
  currency: Scalars['String'];
  finalCost: Scalars['Float'];
  id: Scalars['String'];
  paymentIntentId?: InputMaybe<Scalars['String']>;
  promotionCode?: InputMaybe<Scalars['String']>;
  tip?: InputMaybe<Scalars['Float']>;
};

export type UpdateUserTypeDto = {
  email: Scalars['String'];
  userType: UserType;
};

export type UploadVerificationRequestDto = {
  governmentPhotoUrls: Scalars['JSON'];
  id?: InputMaybe<Scalars['String']>;
  selfiePhotoUrls: Scalars['JSON'];
};

export type UpsertCommssionDto = {
  id?: InputMaybe<Scalars['String']>;
  systemCommission?: InputMaybe<Scalars['Float']>;
  unit?: InputMaybe<Scalars['String']>;
};

export type UpsertCountryDto = {
  id?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isoCode: Scalars['String'];
  languages: Array<LanguageDto>;
  name: Scalars['String'];
};

export type UpsertNotificationDto = {
  bodyText: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type UpsertOrderDto = {
  coordinates?: InputMaybe<Coordinates>;
  deliveryInformation: DeliveryInformationInput;
  id?: InputMaybe<Scalars['String']>;
  packageInformations: Array<PackageInformationInput>;
  sender: UserInput;
  senderId: Scalars['String'];
  status?: InputMaybe<OrderStatus>;
};

export type UpsertPromotionDto = {
  amount: Scalars['Float'];
  code: Scalars['String'];
  condition?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  startDate?: InputMaybe<Scalars['Date']>;
  type: TypePromotion;
  userType: UserType;
};

export type UpsertPromotionReferralDto = {
  amount: Scalars['Float'];
  createdAt?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  promotionType: TypePromotion;
  updatedAt?: InputMaybe<Scalars['Date']>;
};

export type UpsertTransportationDto = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  logoUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['JSONObject']>;
  address2?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  avgRate?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  connectedAccountId?: Maybe<Scalars['String']>;
  coordinates?: Maybe<CoordinateInfor>;
  countRate?: Maybe<Scalars['Float']>;
  country?: Maybe<Country>;
  createdAt?: Maybe<Scalars['Date']>;
  customerId?: Maybe<Scalars['String']>;
  dealConversations?: Maybe<Array<DealConversation>>;
  description?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  orderReviews?: Maybe<OrderReview>;
  phoneNumber?: Maybe<Scalars['String']>;
  preferredLanguage: Scalars['String'];
  referralCode?: Maybe<Scalars['String']>;
  referralCodeInvite?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Role>>;
  totalOrder?: Maybe<Scalars['Float']>;
  transportation?: Maybe<Array<Transportation>>;
  updatedAt?: Maybe<Scalars['Date']>;
  userType?: Maybe<UserType>;
  userVerificationId?: Maybe<Scalars['String']>;
  userVerificationRequest?: Maybe<UserVerificationRequest>;
};

export type UserDealConversation = {
  __typename?: 'UserDealConversation';
  createdAt?: Maybe<Scalars['Date']>;
  dealConversation?: Maybe<DealConversation>;
  dealConversationId?: Maybe<Scalars['String']>;
  deletedAt: Scalars['Date'];
  id: Scalars['String'];
  lastMessage?: Maybe<LastMessage>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type UserInfo = {
  __typename?: 'UserInfo';
  address?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  coordinates?: Maybe<CoordinateInfor>;
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserInput = {
  address: Scalars['String'];
  avatar: Scalars['String'];
  coordinates?: InputMaybe<Coordinates>;
  email: Scalars['String'];
  name: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
};

export type UserReportDto = {
  /** Format: mm/dd/yyyy */
  endDate: Scalars['Date'];
  groupBy: ReportType;
  /** Format: mm/dd/yyyy */
  startDate: Scalars['Date'];
};

export type UserVerificationRequest = {
  __typename?: 'UserVerificationRequest';
  cardNumber?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  dateRegister?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['JSON']>;
  expiredDate?: Maybe<Scalars['Date']>;
  governmentPhotoUrls?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
  reasonDeny?: Maybe<Scalars['String']>;
  selfiePhotoUrls?: Maybe<Scalars['JSON']>;
  status?: Maybe<VerificationRequestStatus>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
  userId: Scalars['String'];
  vehicles?: Maybe<Array<VehicleVerification>>;
};

export enum VerificationRequestStatus {
  Approved = 'Approved',
  Denied = 'Denied',
  NotVerify = 'Not_Verify',
  Pending = 'Pending',
}

export type VehicleVerification = {
  __typename?: 'VehicleVerification';
  brand?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
  driverExpirationDate?: Maybe<Scalars['Date']>;
  driverLicenseNumber?: Maybe<Scalars['String']>;
  driverPhotoUrl?: Maybe<Scalars['JSON']>;
  driverVerification?: Maybe<UserVerificationRequest>;
  driverVerificationId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  insuranceExpirationDate?: Maybe<Scalars['Date']>;
  insuranceNumber?: Maybe<Scalars['String']>;
  insurancePhotoUrl?: Maybe<Scalars['JSON']>;
  licensePlate?: Maybe<Scalars['String']>;
  licensenPlatePhotoUrl?: Maybe<Scalars['JSON']>;
  ownerName?: Maybe<Scalars['String']>;
  regisVehicleExpirationDate?: Maybe<Scalars['Date']>;
  regisVehicleLicenseNumber?: Maybe<Scalars['String']>;
  regisVehiclePhotoUrl?: Maybe<Scalars['JSON']>;
  transportation?: Maybe<Transportation>;
  transportationId?: Maybe<Scalars['String']>;
  typeVehicle?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
  userId: Scalars['String'];
  yearOfManufacture?: Maybe<Scalars['Date']>;
};

export type VehicleVerificationDto = {
  brand?: InputMaybe<Scalars['String']>;
  driverExpirationDate?: InputMaybe<Scalars['Date']>;
  driverLicenseNumber?: InputMaybe<Scalars['String']>;
  driverPhotoUrl?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['String']>;
  insuranceExpirationDate?: InputMaybe<Scalars['Date']>;
  insuranceNumber?: InputMaybe<Scalars['String']>;
  insurancePhotoUrl?: InputMaybe<Array<Scalars['String']>>;
  licensePlate?: InputMaybe<Scalars['String']>;
  licensenPlatePhotoUrl?: InputMaybe<Array<Scalars['String']>>;
  ownerName?: InputMaybe<Scalars['String']>;
  regisVehicleExpirationDate?: InputMaybe<Scalars['Date']>;
  regisVehicleLicenseNumber?: InputMaybe<Scalars['String']>;
  regisVehiclePhotoUrl?: InputMaybe<Array<Scalars['String']>>;
  transportationId?: InputMaybe<Scalars['String']>;
  typeVehicle?: InputMaybe<Scalars['String']>;
  yearOfManufacture?: InputMaybe<Scalars['Date']>;
};

export const MetaFragmentFragmentDoc = gql`
  fragment MetaFragment on MetaPaginationInterface {
    totalItems
    itemCount
    itemsPerPage
    totalPages
    currentPage
  }
`;
export const ActivatePromotionDocument = gql`
  mutation activatePromotion($id: String!) {
    activatePromotion(id: $id) {
      id
    }
  }
`;
export type ActivatePromotionMutationFn = Apollo.MutationFunction<
  ActivatePromotionMutation,
  ActivatePromotionMutationVariables
>;

/**
 * __useActivatePromotionMutation__
 *
 * To run a mutation, you first call `useActivatePromotionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivatePromotionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activatePromotionMutation, { data, loading, error }] = useActivatePromotionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useActivatePromotionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ActivatePromotionMutation,
    ActivatePromotionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ActivatePromotionMutation,
    ActivatePromotionMutationVariables
  >(ActivatePromotionDocument, options);
}
export type ActivatePromotionMutationHookResult = ReturnType<
  typeof useActivatePromotionMutation
>;
export type ActivatePromotionMutationResult =
  Apollo.MutationResult<ActivatePromotionMutation>;
export type ActivatePromotionMutationOptions = Apollo.BaseMutationOptions<
  ActivatePromotionMutation,
  ActivatePromotionMutationVariables
>;
export const ActivateTransportationDocument = gql`
  mutation activateTransportation($id: String!) {
    activateTransportation(id: $id) {
      id
    }
  }
`;
export type ActivateTransportationMutationFn = Apollo.MutationFunction<
  ActivateTransportationMutation,
  ActivateTransportationMutationVariables
>;

/**
 * __useActivateTransportationMutation__
 *
 * To run a mutation, you first call `useActivateTransportationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivateTransportationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activateTransportationMutation, { data, loading, error }] = useActivateTransportationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useActivateTransportationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ActivateTransportationMutation,
    ActivateTransportationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ActivateTransportationMutation,
    ActivateTransportationMutationVariables
  >(ActivateTransportationDocument, options);
}
export type ActivateTransportationMutationHookResult = ReturnType<
  typeof useActivateTransportationMutation
>;
export type ActivateTransportationMutationResult =
  Apollo.MutationResult<ActivateTransportationMutation>;
export type ActivateTransportationMutationOptions = Apollo.BaseMutationOptions<
  ActivateTransportationMutation,
  ActivateTransportationMutationVariables
>;
export const ApproveUserVerificationRequestDocument = gql`
  mutation approveUserVerificationRequest($id: String!) {
    approveUserVerificationRequest(id: $id) {
      status
    }
  }
`;
export type ApproveUserVerificationRequestMutationFn = Apollo.MutationFunction<
  ApproveUserVerificationRequestMutation,
  ApproveUserVerificationRequestMutationVariables
>;

/**
 * __useApproveUserVerificationRequestMutation__
 *
 * To run a mutation, you first call `useApproveUserVerificationRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApproveUserVerificationRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [approveUserVerificationRequestMutation, { data, loading, error }] = useApproveUserVerificationRequestMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useApproveUserVerificationRequestMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ApproveUserVerificationRequestMutation,
    ApproveUserVerificationRequestMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ApproveUserVerificationRequestMutation,
    ApproveUserVerificationRequestMutationVariables
  >(ApproveUserVerificationRequestDocument, options);
}
export type ApproveUserVerificationRequestMutationHookResult = ReturnType<
  typeof useApproveUserVerificationRequestMutation
>;
export type ApproveUserVerificationRequestMutationResult =
  Apollo.MutationResult<ApproveUserVerificationRequestMutation>;
export type ApproveUserVerificationRequestMutationOptions =
  Apollo.BaseMutationOptions<
    ApproveUserVerificationRequestMutation,
    ApproveUserVerificationRequestMutationVariables
  >;
export const ClearNotificationCountDocument = gql`
  mutation clearNotificationCount($userId: String!) {
    clearNotificationCount(userId: $userId)
  }
`;
export type ClearNotificationCountMutationFn = Apollo.MutationFunction<
  ClearNotificationCountMutation,
  ClearNotificationCountMutationVariables
>;

/**
 * __useClearNotificationCountMutation__
 *
 * To run a mutation, you first call `useClearNotificationCountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearNotificationCountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearNotificationCountMutation, { data, loading, error }] = useClearNotificationCountMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useClearNotificationCountMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ClearNotificationCountMutation,
    ClearNotificationCountMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ClearNotificationCountMutation,
    ClearNotificationCountMutationVariables
  >(ClearNotificationCountDocument, options);
}
export type ClearNotificationCountMutationHookResult = ReturnType<
  typeof useClearNotificationCountMutation
>;
export type ClearNotificationCountMutationResult =
  Apollo.MutationResult<ClearNotificationCountMutation>;
export type ClearNotificationCountMutationOptions = Apollo.BaseMutationOptions<
  ClearNotificationCountMutation,
  ClearNotificationCountMutationVariables
>;
export const CreateNewTokenDocument = gql`
  mutation createNewToken($input: InstallationInput!) {
    createNewToken(input: $input)
  }
`;
export type CreateNewTokenMutationFn = Apollo.MutationFunction<
  CreateNewTokenMutation,
  CreateNewTokenMutationVariables
>;

/**
 * __useCreateNewTokenMutation__
 *
 * To run a mutation, you first call `useCreateNewTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewTokenMutation, { data, loading, error }] = useCreateNewTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateNewTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateNewTokenMutation,
    CreateNewTokenMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateNewTokenMutation,
    CreateNewTokenMutationVariables
  >(CreateNewTokenDocument, options);
}
export type CreateNewTokenMutationHookResult = ReturnType<
  typeof useCreateNewTokenMutation
>;
export type CreateNewTokenMutationResult =
  Apollo.MutationResult<CreateNewTokenMutation>;
export type CreateNewTokenMutationOptions = Apollo.BaseMutationOptions<
  CreateNewTokenMutation,
  CreateNewTokenMutationVariables
>;
export const CreateNotificationDocument = gql`
  mutation createNotification($input: AdminNotificationDto!) {
    createNotification(input: $input)
  }
`;
export type CreateNotificationMutationFn = Apollo.MutationFunction<
  CreateNotificationMutation,
  CreateNotificationMutationVariables
>;

/**
 * __useCreateNotificationMutation__
 *
 * To run a mutation, you first call `useCreateNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNotificationMutation, { data, loading, error }] = useCreateNotificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateNotificationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateNotificationMutation,
    CreateNotificationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateNotificationMutation,
    CreateNotificationMutationVariables
  >(CreateNotificationDocument, options);
}
export type CreateNotificationMutationHookResult = ReturnType<
  typeof useCreateNotificationMutation
>;
export type CreateNotificationMutationResult =
  Apollo.MutationResult<CreateNotificationMutation>;
export type CreateNotificationMutationOptions = Apollo.BaseMutationOptions<
  CreateNotificationMutation,
  CreateNotificationMutationVariables
>;
export const DeactivatePromotionDocument = gql`
  mutation deactivatePromotion($id: String!) {
    deactivatePromotion(id: $id) {
      id
    }
  }
`;
export type DeactivatePromotionMutationFn = Apollo.MutationFunction<
  DeactivatePromotionMutation,
  DeactivatePromotionMutationVariables
>;

/**
 * __useDeactivatePromotionMutation__
 *
 * To run a mutation, you first call `useDeactivatePromotionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeactivatePromotionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deactivatePromotionMutation, { data, loading, error }] = useDeactivatePromotionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeactivatePromotionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeactivatePromotionMutation,
    DeactivatePromotionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeactivatePromotionMutation,
    DeactivatePromotionMutationVariables
  >(DeactivatePromotionDocument, options);
}
export type DeactivatePromotionMutationHookResult = ReturnType<
  typeof useDeactivatePromotionMutation
>;
export type DeactivatePromotionMutationResult =
  Apollo.MutationResult<DeactivatePromotionMutation>;
export type DeactivatePromotionMutationOptions = Apollo.BaseMutationOptions<
  DeactivatePromotionMutation,
  DeactivatePromotionMutationVariables
>;
export const DeactivateTransportationDocument = gql`
  mutation deactivateTransportation($id: String!) {
    deactivateTransportation(id: $id) {
      id
    }
  }
`;
export type DeactivateTransportationMutationFn = Apollo.MutationFunction<
  DeactivateTransportationMutation,
  DeactivateTransportationMutationVariables
>;

/**
 * __useDeactivateTransportationMutation__
 *
 * To run a mutation, you first call `useDeactivateTransportationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeactivateTransportationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deactivateTransportationMutation, { data, loading, error }] = useDeactivateTransportationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeactivateTransportationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeactivateTransportationMutation,
    DeactivateTransportationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeactivateTransportationMutation,
    DeactivateTransportationMutationVariables
  >(DeactivateTransportationDocument, options);
}
export type DeactivateTransportationMutationHookResult = ReturnType<
  typeof useDeactivateTransportationMutation
>;
export type DeactivateTransportationMutationResult =
  Apollo.MutationResult<DeactivateTransportationMutation>;
export type DeactivateTransportationMutationOptions =
  Apollo.BaseMutationOptions<
    DeactivateTransportationMutation,
    DeactivateTransportationMutationVariables
  >;
export const DeleteAllNotificationDocument = gql`
  mutation deleteAllNotification($userId: String!) {
    deleteAllNotification(userId: $userId)
  }
`;
export type DeleteAllNotificationMutationFn = Apollo.MutationFunction<
  DeleteAllNotificationMutation,
  DeleteAllNotificationMutationVariables
>;

/**
 * __useDeleteAllNotificationMutation__
 *
 * To run a mutation, you first call `useDeleteAllNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAllNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAllNotificationMutation, { data, loading, error }] = useDeleteAllNotificationMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteAllNotificationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAllNotificationMutation,
    DeleteAllNotificationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteAllNotificationMutation,
    DeleteAllNotificationMutationVariables
  >(DeleteAllNotificationDocument, options);
}
export type DeleteAllNotificationMutationHookResult = ReturnType<
  typeof useDeleteAllNotificationMutation
>;
export type DeleteAllNotificationMutationResult =
  Apollo.MutationResult<DeleteAllNotificationMutation>;
export type DeleteAllNotificationMutationOptions = Apollo.BaseMutationOptions<
  DeleteAllNotificationMutation,
  DeleteAllNotificationMutationVariables
>;
export const DeleteNotificationDocument = gql`
  mutation deleteNotification($userId: String!, $createdAt: DateTime!) {
    deleteNotification(userId: $userId, createdAt: $createdAt)
  }
`;
export type DeleteNotificationMutationFn = Apollo.MutationFunction<
  DeleteNotificationMutation,
  DeleteNotificationMutationVariables
>;

/**
 * __useDeleteNotificationMutation__
 *
 * To run a mutation, you first call `useDeleteNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNotificationMutation, { data, loading, error }] = useDeleteNotificationMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      createdAt: // value for 'createdAt'
 *   },
 * });
 */
export function useDeleteNotificationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteNotificationMutation,
    DeleteNotificationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteNotificationMutation,
    DeleteNotificationMutationVariables
  >(DeleteNotificationDocument, options);
}
export type DeleteNotificationMutationHookResult = ReturnType<
  typeof useDeleteNotificationMutation
>;
export type DeleteNotificationMutationResult =
  Apollo.MutationResult<DeleteNotificationMutation>;
export type DeleteNotificationMutationOptions = Apollo.BaseMutationOptions<
  DeleteNotificationMutation,
  DeleteNotificationMutationVariables
>;
export const DeleteTokenDocument = gql`
  mutation deleteToken($input: InstallationInput!) {
    createNewToken(input: $input)
  }
`;
export type DeleteTokenMutationFn = Apollo.MutationFunction<
  DeleteTokenMutation,
  DeleteTokenMutationVariables
>;

/**
 * __useDeleteTokenMutation__
 *
 * To run a mutation, you first call `useDeleteTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTokenMutation, { data, loading, error }] = useDeleteTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTokenMutation,
    DeleteTokenMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteTokenMutation, DeleteTokenMutationVariables>(
    DeleteTokenDocument,
    options,
  );
}
export type DeleteTokenMutationHookResult = ReturnType<
  typeof useDeleteTokenMutation
>;
export type DeleteTokenMutationResult =
  Apollo.MutationResult<DeleteTokenMutation>;
export type DeleteTokenMutationOptions = Apollo.BaseMutationOptions<
  DeleteTokenMutation,
  DeleteTokenMutationVariables
>;
export const DenyUserVerificationRequestDocument = gql`
  mutation denyUserVerificationRequest($reason: String!, $id: String!) {
    denyUserVerificationRequest(reason: $reason, id: $id) {
      status
    }
  }
`;
export type DenyUserVerificationRequestMutationFn = Apollo.MutationFunction<
  DenyUserVerificationRequestMutation,
  DenyUserVerificationRequestMutationVariables
>;

/**
 * __useDenyUserVerificationRequestMutation__
 *
 * To run a mutation, you first call `useDenyUserVerificationRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDenyUserVerificationRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [denyUserVerificationRequestMutation, { data, loading, error }] = useDenyUserVerificationRequestMutation({
 *   variables: {
 *      reason: // value for 'reason'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDenyUserVerificationRequestMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DenyUserVerificationRequestMutation,
    DenyUserVerificationRequestMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DenyUserVerificationRequestMutation,
    DenyUserVerificationRequestMutationVariables
  >(DenyUserVerificationRequestDocument, options);
}
export type DenyUserVerificationRequestMutationHookResult = ReturnType<
  typeof useDenyUserVerificationRequestMutation
>;
export type DenyUserVerificationRequestMutationResult =
  Apollo.MutationResult<DenyUserVerificationRequestMutation>;
export type DenyUserVerificationRequestMutationOptions =
  Apollo.BaseMutationOptions<
    DenyUserVerificationRequestMutation,
    DenyUserVerificationRequestMutationVariables
  >;
export const DisableDriverDocument = gql`
  mutation disableDriver($id: String!) {
    disableDriver(id: $id) {
      id
    }
  }
`;
export type DisableDriverMutationFn = Apollo.MutationFunction<
  DisableDriverMutation,
  DisableDriverMutationVariables
>;

/**
 * __useDisableDriverMutation__
 *
 * To run a mutation, you first call `useDisableDriverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisableDriverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disableDriverMutation, { data, loading, error }] = useDisableDriverMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDisableDriverMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DisableDriverMutation,
    DisableDriverMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DisableDriverMutation,
    DisableDriverMutationVariables
  >(DisableDriverDocument, options);
}
export type DisableDriverMutationHookResult = ReturnType<
  typeof useDisableDriverMutation
>;
export type DisableDriverMutationResult =
  Apollo.MutationResult<DisableDriverMutation>;
export type DisableDriverMutationOptions = Apollo.BaseMutationOptions<
  DisableDriverMutation,
  DisableDriverMutationVariables
>;
export const DisableUserDocument = gql`
  mutation disableUser($id: String!) {
    disableUser(id: $id) {
      id
    }
  }
`;
export type DisableUserMutationFn = Apollo.MutationFunction<
  DisableUserMutation,
  DisableUserMutationVariables
>;

/**
 * __useDisableUserMutation__
 *
 * To run a mutation, you first call `useDisableUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisableUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disableUserMutation, { data, loading, error }] = useDisableUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDisableUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DisableUserMutation,
    DisableUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DisableUserMutation, DisableUserMutationVariables>(
    DisableUserDocument,
    options,
  );
}
export type DisableUserMutationHookResult = ReturnType<
  typeof useDisableUserMutation
>;
export type DisableUserMutationResult =
  Apollo.MutationResult<DisableUserMutation>;
export type DisableUserMutationOptions = Apollo.BaseMutationOptions<
  DisableUserMutation,
  DisableUserMutationVariables
>;
export const EnableDriverDocument = gql`
  mutation enableDriver($id: String!) {
    enableDriver(id: $id) {
      id
    }
  }
`;
export type EnableDriverMutationFn = Apollo.MutationFunction<
  EnableDriverMutation,
  EnableDriverMutationVariables
>;

/**
 * __useEnableDriverMutation__
 *
 * To run a mutation, you first call `useEnableDriverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableDriverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableDriverMutation, { data, loading, error }] = useEnableDriverMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEnableDriverMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EnableDriverMutation,
    EnableDriverMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    EnableDriverMutation,
    EnableDriverMutationVariables
  >(EnableDriverDocument, options);
}
export type EnableDriverMutationHookResult = ReturnType<
  typeof useEnableDriverMutation
>;
export type EnableDriverMutationResult =
  Apollo.MutationResult<EnableDriverMutation>;
export type EnableDriverMutationOptions = Apollo.BaseMutationOptions<
  EnableDriverMutation,
  EnableDriverMutationVariables
>;
export const EnableUserDocument = gql`
  mutation enableUser($id: String!) {
    enableUser(id: $id) {
      id
    }
  }
`;
export type EnableUserMutationFn = Apollo.MutationFunction<
  EnableUserMutation,
  EnableUserMutationVariables
>;

/**
 * __useEnableUserMutation__
 *
 * To run a mutation, you first call `useEnableUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableUserMutation, { data, loading, error }] = useEnableUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEnableUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EnableUserMutation,
    EnableUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EnableUserMutation, EnableUserMutationVariables>(
    EnableUserDocument,
    options,
  );
}
export type EnableUserMutationHookResult = ReturnType<
  typeof useEnableUserMutation
>;
export type EnableUserMutationResult =
  Apollo.MutationResult<EnableUserMutation>;
export type EnableUserMutationOptions = Apollo.BaseMutationOptions<
  EnableUserMutation,
  EnableUserMutationVariables
>;
export const MarkAllNotificationAsSeenDocument = gql`
  mutation markAllNotificationAsSeen($userId: String!) {
    markAllNotificationAsSeen(userId: $userId)
  }
`;
export type MarkAllNotificationAsSeenMutationFn = Apollo.MutationFunction<
  MarkAllNotificationAsSeenMutation,
  MarkAllNotificationAsSeenMutationVariables
>;

/**
 * __useMarkAllNotificationAsSeenMutation__
 *
 * To run a mutation, you first call `useMarkAllNotificationAsSeenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkAllNotificationAsSeenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markAllNotificationAsSeenMutation, { data, loading, error }] = useMarkAllNotificationAsSeenMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useMarkAllNotificationAsSeenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MarkAllNotificationAsSeenMutation,
    MarkAllNotificationAsSeenMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    MarkAllNotificationAsSeenMutation,
    MarkAllNotificationAsSeenMutationVariables
  >(MarkAllNotificationAsSeenDocument, options);
}
export type MarkAllNotificationAsSeenMutationHookResult = ReturnType<
  typeof useMarkAllNotificationAsSeenMutation
>;
export type MarkAllNotificationAsSeenMutationResult =
  Apollo.MutationResult<MarkAllNotificationAsSeenMutation>;
export type MarkAllNotificationAsSeenMutationOptions =
  Apollo.BaseMutationOptions<
    MarkAllNotificationAsSeenMutation,
    MarkAllNotificationAsSeenMutationVariables
  >;
export const MarkNotificationAsSeenDocument = gql`
  mutation markNotificationAsSeen($userId: String!, $createdAt: DateTime!) {
    markNotificationAsSeen(userId: $userId, createdAt: $createdAt)
  }
`;
export type MarkNotificationAsSeenMutationFn = Apollo.MutationFunction<
  MarkNotificationAsSeenMutation,
  MarkNotificationAsSeenMutationVariables
>;

/**
 * __useMarkNotificationAsSeenMutation__
 *
 * To run a mutation, you first call `useMarkNotificationAsSeenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkNotificationAsSeenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markNotificationAsSeenMutation, { data, loading, error }] = useMarkNotificationAsSeenMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      createdAt: // value for 'createdAt'
 *   },
 * });
 */
export function useMarkNotificationAsSeenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MarkNotificationAsSeenMutation,
    MarkNotificationAsSeenMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    MarkNotificationAsSeenMutation,
    MarkNotificationAsSeenMutationVariables
  >(MarkNotificationAsSeenDocument, options);
}
export type MarkNotificationAsSeenMutationHookResult = ReturnType<
  typeof useMarkNotificationAsSeenMutation
>;
export type MarkNotificationAsSeenMutationResult =
  Apollo.MutationResult<MarkNotificationAsSeenMutation>;
export type MarkNotificationAsSeenMutationOptions = Apollo.BaseMutationOptions<
  MarkNotificationAsSeenMutation,
  MarkNotificationAsSeenMutationVariables
>;
export const PresignedUrlS3Document = gql`
  mutation presignedUrlS3($presignedUrlDto: PresignedUrlDto!) {
    presignedUrlS3(presignedUrlDto: $presignedUrlDto) {
      pathFile
      fileType
      uploadUrl
    }
  }
`;
export type PresignedUrlS3MutationFn = Apollo.MutationFunction<
  PresignedUrlS3Mutation,
  PresignedUrlS3MutationVariables
>;

/**
 * __usePresignedUrlS3Mutation__
 *
 * To run a mutation, you first call `usePresignedUrlS3Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePresignedUrlS3Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [presignedUrlS3Mutation, { data, loading, error }] = usePresignedUrlS3Mutation({
 *   variables: {
 *      presignedUrlDto: // value for 'presignedUrlDto'
 *   },
 * });
 */
export function usePresignedUrlS3Mutation(
  baseOptions?: Apollo.MutationHookOptions<
    PresignedUrlS3Mutation,
    PresignedUrlS3MutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PresignedUrlS3Mutation,
    PresignedUrlS3MutationVariables
  >(PresignedUrlS3Document, options);
}
export type PresignedUrlS3MutationHookResult = ReturnType<
  typeof usePresignedUrlS3Mutation
>;
export type PresignedUrlS3MutationResult =
  Apollo.MutationResult<PresignedUrlS3Mutation>;
export type PresignedUrlS3MutationOptions = Apollo.BaseMutationOptions<
  PresignedUrlS3Mutation,
  PresignedUrlS3MutationVariables
>;
export const SignUpDriverDocument = gql`
  mutation signUpDriver($input: DeliveryDto!) {
    signUpDriver(input: $input) {
      id
      fullName
      email
      isVerified
      phoneNumber
      code
      avatar
      address
      gender
      code
      dob
      isActive
      userType
      createdAt
      updatedAt
      transportation {
        id
        name
        description
        isActive
      }
      userVerificationRequest {
        id
        createdAt
        governmentPhotoUrls
        selfiePhotoUrls
        cardNumber
        dateRegister
        vehicles {
          id
          driverVerificationId
          driverPhotoUrl
          driverLicenseNumber
          driverExpirationDate
          regisVehiclePhotoUrl
          regisVehicleLicenseNumber
          regisVehicleExpirationDate
          yearOfManufacture
          brand
          ownerName
          typeVehicle
          insurancePhotoUrl
          insuranceNumber
          insuranceExpirationDate
          createdAt
        }
      }
    }
  }
`;
export type SignUpDriverMutationFn = Apollo.MutationFunction<
  SignUpDriverMutation,
  SignUpDriverMutationVariables
>;

/**
 * __useSignUpDriverMutation__
 *
 * To run a mutation, you first call `useSignUpDriverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpDriverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpDriverMutation, { data, loading, error }] = useSignUpDriverMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpDriverMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpDriverMutation,
    SignUpDriverMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SignUpDriverMutation,
    SignUpDriverMutationVariables
  >(SignUpDriverDocument, options);
}
export type SignUpDriverMutationHookResult = ReturnType<
  typeof useSignUpDriverMutation
>;
export type SignUpDriverMutationResult =
  Apollo.MutationResult<SignUpDriverMutation>;
export type SignUpDriverMutationOptions = Apollo.BaseMutationOptions<
  SignUpDriverMutation,
  SignUpDriverMutationVariables
>;
export const UpdateMeDocument = gql`
  mutation updateMe($input: UpdateMeDto!) {
    updateMe(input: $input) {
      id
      fullName
      email
      avatar
      userType
    }
  }
`;
export type UpdateMeMutationFn = Apollo.MutationFunction<
  UpdateMeMutation,
  UpdateMeMutationVariables
>;

/**
 * __useUpdateMeMutation__
 *
 * To run a mutation, you first call `useUpdateMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeMutation, { data, loading, error }] = useUpdateMeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMeMutation,
    UpdateMeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateMeMutation, UpdateMeMutationVariables>(
    UpdateMeDocument,
    options,
  );
}
export type UpdateMeMutationHookResult = ReturnType<typeof useUpdateMeMutation>;
export type UpdateMeMutationResult = Apollo.MutationResult<UpdateMeMutation>;
export type UpdateMeMutationOptions = Apollo.BaseMutationOptions<
  UpdateMeMutation,
  UpdateMeMutationVariables
>;
export const UpsertCommissionDocument = gql`
  mutation upsertCommission($upsertCommssionDto: UpsertCommssionDto!) {
    upsertCommission(upsertCommssionDto: $upsertCommssionDto) {
      id
      driverCommission
      systemCommission
      createdAt
      updatedAt
    }
  }
`;
export type UpsertCommissionMutationFn = Apollo.MutationFunction<
  UpsertCommissionMutation,
  UpsertCommissionMutationVariables
>;

/**
 * __useUpsertCommissionMutation__
 *
 * To run a mutation, you first call `useUpsertCommissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertCommissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertCommissionMutation, { data, loading, error }] = useUpsertCommissionMutation({
 *   variables: {
 *      upsertCommssionDto: // value for 'upsertCommssionDto'
 *   },
 * });
 */
export function useUpsertCommissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertCommissionMutation,
    UpsertCommissionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpsertCommissionMutation,
    UpsertCommissionMutationVariables
  >(UpsertCommissionDocument, options);
}
export type UpsertCommissionMutationHookResult = ReturnType<
  typeof useUpsertCommissionMutation
>;
export type UpsertCommissionMutationResult =
  Apollo.MutationResult<UpsertCommissionMutation>;
export type UpsertCommissionMutationOptions = Apollo.BaseMutationOptions<
  UpsertCommissionMutation,
  UpsertCommissionMutationVariables
>;
export const UpsertConfigPromotionReferralDocument = gql`
  mutation upsertConfigPromotionReferral(
    $upsertPromotionReferralDto: UpsertPromotionReferralDto!
  ) {
    upsertConfigPromotionReferral(
      upsertPromotionReferralDto: $upsertPromotionReferralDto
    ) {
      id
      promotionType
      unit
      amount
    }
  }
`;
export type UpsertConfigPromotionReferralMutationFn = Apollo.MutationFunction<
  UpsertConfigPromotionReferralMutation,
  UpsertConfigPromotionReferralMutationVariables
>;

/**
 * __useUpsertConfigPromotionReferralMutation__
 *
 * To run a mutation, you first call `useUpsertConfigPromotionReferralMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertConfigPromotionReferralMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertConfigPromotionReferralMutation, { data, loading, error }] = useUpsertConfigPromotionReferralMutation({
 *   variables: {
 *      upsertPromotionReferralDto: // value for 'upsertPromotionReferralDto'
 *   },
 * });
 */
export function useUpsertConfigPromotionReferralMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertConfigPromotionReferralMutation,
    UpsertConfigPromotionReferralMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpsertConfigPromotionReferralMutation,
    UpsertConfigPromotionReferralMutationVariables
  >(UpsertConfigPromotionReferralDocument, options);
}
export type UpsertConfigPromotionReferralMutationHookResult = ReturnType<
  typeof useUpsertConfigPromotionReferralMutation
>;
export type UpsertConfigPromotionReferralMutationResult =
  Apollo.MutationResult<UpsertConfigPromotionReferralMutation>;
export type UpsertConfigPromotionReferralMutationOptions =
  Apollo.BaseMutationOptions<
    UpsertConfigPromotionReferralMutation,
    UpsertConfigPromotionReferralMutationVariables
  >;
export const UpsertDriverDocument = gql`
  mutation upsertDriver($input: DeliveryDto!) {
    upsertDriver(input: $input) {
      id
      fullName
      email
      isVerified
      phoneNumber
      code
      avatar
      address
      gender
      code
      dob
      isActive
      userType
      createdAt
      updatedAt
      transportation {
        id
        name
        description
        isActive
      }
      userVerificationRequest {
        id
        createdAt
        governmentPhotoUrls
        selfiePhotoUrls
        cardNumber
        dateRegister
        description
        vehicles {
          id
          driverVerificationId
          driverPhotoUrl
          driverLicenseNumber
          driverExpirationDate
          regisVehiclePhotoUrl
          regisVehicleLicenseNumber
          regisVehicleExpirationDate
          yearOfManufacture
          brand
          ownerName
          typeVehicle
          insurancePhotoUrl
          insuranceNumber
          insuranceExpirationDate
          createdAt
        }
      }
    }
  }
`;
export type UpsertDriverMutationFn = Apollo.MutationFunction<
  UpsertDriverMutation,
  UpsertDriverMutationVariables
>;

/**
 * __useUpsertDriverMutation__
 *
 * To run a mutation, you first call `useUpsertDriverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertDriverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertDriverMutation, { data, loading, error }] = useUpsertDriverMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertDriverMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertDriverMutation,
    UpsertDriverMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpsertDriverMutation,
    UpsertDriverMutationVariables
  >(UpsertDriverDocument, options);
}
export type UpsertDriverMutationHookResult = ReturnType<
  typeof useUpsertDriverMutation
>;
export type UpsertDriverMutationResult =
  Apollo.MutationResult<UpsertDriverMutation>;
export type UpsertDriverMutationOptions = Apollo.BaseMutationOptions<
  UpsertDriverMutation,
  UpsertDriverMutationVariables
>;
export const UpsertPromotionDocument = gql`
  mutation upsertPromotion($upsertPromotionDto: UpsertPromotionDto!) {
    upsertPromotion(upsertPromotionDto: $upsertPromotionDto) {
      id
      code
      type
      amount
      startDate
      endDate
      description
      isActive
    }
  }
`;
export type UpsertPromotionMutationFn = Apollo.MutationFunction<
  UpsertPromotionMutation,
  UpsertPromotionMutationVariables
>;

/**
 * __useUpsertPromotionMutation__
 *
 * To run a mutation, you first call `useUpsertPromotionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertPromotionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertPromotionMutation, { data, loading, error }] = useUpsertPromotionMutation({
 *   variables: {
 *      upsertPromotionDto: // value for 'upsertPromotionDto'
 *   },
 * });
 */
export function useUpsertPromotionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertPromotionMutation,
    UpsertPromotionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpsertPromotionMutation,
    UpsertPromotionMutationVariables
  >(UpsertPromotionDocument, options);
}
export type UpsertPromotionMutationHookResult = ReturnType<
  typeof useUpsertPromotionMutation
>;
export type UpsertPromotionMutationResult =
  Apollo.MutationResult<UpsertPromotionMutation>;
export type UpsertPromotionMutationOptions = Apollo.BaseMutationOptions<
  UpsertPromotionMutation,
  UpsertPromotionMutationVariables
>;
export const UpsertTransportationDocument = gql`
  mutation upsertTransportation($input: UpsertTransportationDto!) {
    upsertTransportation(input: $input) {
      id
      name
      logoUrl
      description
      isActive
    }
  }
`;
export type UpsertTransportationMutationFn = Apollo.MutationFunction<
  UpsertTransportationMutation,
  UpsertTransportationMutationVariables
>;

/**
 * __useUpsertTransportationMutation__
 *
 * To run a mutation, you first call `useUpsertTransportationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertTransportationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertTransportationMutation, { data, loading, error }] = useUpsertTransportationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertTransportationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertTransportationMutation,
    UpsertTransportationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpsertTransportationMutation,
    UpsertTransportationMutationVariables
  >(UpsertTransportationDocument, options);
}
export type UpsertTransportationMutationHookResult = ReturnType<
  typeof useUpsertTransportationMutation
>;
export type UpsertTransportationMutationResult =
  Apollo.MutationResult<UpsertTransportationMutation>;
export type UpsertTransportationMutationOptions = Apollo.BaseMutationOptions<
  UpsertTransportationMutation,
  UpsertTransportationMutationVariables
>;
export const GetAdminNotificationsDocument = gql`
  query getAdminNotifications($queryParams: QueryFilterDto!) {
    getAdminNotifications(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        code
        userNames
        title
        bodyText
        createdAt
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetAdminNotificationsQuery__
 *
 * To run a query within a React component, call `useGetAdminNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminNotificationsQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetAdminNotificationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAdminNotificationsQuery,
    GetAdminNotificationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAdminNotificationsQuery,
    GetAdminNotificationsQueryVariables
  >(GetAdminNotificationsDocument, options);
}
export function useGetAdminNotificationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAdminNotificationsQuery,
    GetAdminNotificationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAdminNotificationsQuery,
    GetAdminNotificationsQueryVariables
  >(GetAdminNotificationsDocument, options);
}
export type GetAdminNotificationsQueryHookResult = ReturnType<
  typeof useGetAdminNotificationsQuery
>;
export type GetAdminNotificationsLazyQueryHookResult = ReturnType<
  typeof useGetAdminNotificationsLazyQuery
>;
export type GetAdminNotificationsQueryResult = Apollo.QueryResult<
  GetAdminNotificationsQuery,
  GetAdminNotificationsQueryVariables
>;
export function refetchGetAdminNotificationsQuery(
  variables: GetAdminNotificationsQueryVariables,
) {
  return { query: GetAdminNotificationsDocument, variables: variables };
}
export const GetAllUsersDocument = gql`
  query getAllUsers($queryParams: QueryFilterDto!) {
    getUsers(queryParams: $queryParams) {
      items {
        id
        fullName
        email
      }
    }
    getDrivers(queryParams: $queryParams) {
      items {
        id
        fullName
        email
      }
    }
  }
`;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetAllUsersQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAllUsersQuery,
    GetAllUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
    GetAllUsersDocument,
    options,
  );
}
export function useGetAllUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllUsersQuery,
    GetAllUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
    GetAllUsersDocument,
    options,
  );
}
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<
  typeof useGetAllUsersLazyQuery
>;
export type GetAllUsersQueryResult = Apollo.QueryResult<
  GetAllUsersQuery,
  GetAllUsersQueryVariables
>;
export function refetchGetAllUsersQuery(variables: GetAllUsersQueryVariables) {
  return { query: GetAllUsersDocument, variables: variables };
}
export const GetAverageFeeDashboardDocument = gql`
  query getAverageFeeDashboard {
    getAverageFeeDashboard {
      fee
    }
  }
`;

/**
 * __useGetAverageFeeDashboardQuery__
 *
 * To run a query within a React component, call `useGetAverageFeeDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAverageFeeDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAverageFeeDashboardQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAverageFeeDashboardQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAverageFeeDashboardQuery,
    GetAverageFeeDashboardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAverageFeeDashboardQuery,
    GetAverageFeeDashboardQueryVariables
  >(GetAverageFeeDashboardDocument, options);
}
export function useGetAverageFeeDashboardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAverageFeeDashboardQuery,
    GetAverageFeeDashboardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAverageFeeDashboardQuery,
    GetAverageFeeDashboardQueryVariables
  >(GetAverageFeeDashboardDocument, options);
}
export type GetAverageFeeDashboardQueryHookResult = ReturnType<
  typeof useGetAverageFeeDashboardQuery
>;
export type GetAverageFeeDashboardLazyQueryHookResult = ReturnType<
  typeof useGetAverageFeeDashboardLazyQuery
>;
export type GetAverageFeeDashboardQueryResult = Apollo.QueryResult<
  GetAverageFeeDashboardQuery,
  GetAverageFeeDashboardQueryVariables
>;
export function refetchGetAverageFeeDashboardQuery(
  variables?: GetAverageFeeDashboardQueryVariables,
) {
  return { query: GetAverageFeeDashboardDocument, variables: variables };
}
export const GetCommissionsDocument = gql`
  query getCommissions($queryParams: QueryFilterDto!) {
    getCommissions(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        driverCommission
        systemCommission
        createdAt
        updatedAt
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetCommissionsQuery__
 *
 * To run a query within a React component, call `useGetCommissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommissionsQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetCommissionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCommissionsQuery,
    GetCommissionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCommissionsQuery, GetCommissionsQueryVariables>(
    GetCommissionsDocument,
    options,
  );
}
export function useGetCommissionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCommissionsQuery,
    GetCommissionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCommissionsQuery, GetCommissionsQueryVariables>(
    GetCommissionsDocument,
    options,
  );
}
export type GetCommissionsQueryHookResult = ReturnType<
  typeof useGetCommissionsQuery
>;
export type GetCommissionsLazyQueryHookResult = ReturnType<
  typeof useGetCommissionsLazyQuery
>;
export type GetCommissionsQueryResult = Apollo.QueryResult<
  GetCommissionsQuery,
  GetCommissionsQueryVariables
>;
export function refetchGetCommissionsQuery(
  variables: GetCommissionsQueryVariables,
) {
  return { query: GetCommissionsDocument, variables: variables };
}
export const GetConfigPromotionReferralDocument = gql`
  query getConfigPromotionReferral {
    getConfigPromotionReferral {
      id
      promotionType
      unit
      amount
    }
  }
`;

/**
 * __useGetConfigPromotionReferralQuery__
 *
 * To run a query within a React component, call `useGetConfigPromotionReferralQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConfigPromotionReferralQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConfigPromotionReferralQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetConfigPromotionReferralQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetConfigPromotionReferralQuery,
    GetConfigPromotionReferralQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetConfigPromotionReferralQuery,
    GetConfigPromotionReferralQueryVariables
  >(GetConfigPromotionReferralDocument, options);
}
export function useGetConfigPromotionReferralLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetConfigPromotionReferralQuery,
    GetConfigPromotionReferralQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetConfigPromotionReferralQuery,
    GetConfigPromotionReferralQueryVariables
  >(GetConfigPromotionReferralDocument, options);
}
export type GetConfigPromotionReferralQueryHookResult = ReturnType<
  typeof useGetConfigPromotionReferralQuery
>;
export type GetConfigPromotionReferralLazyQueryHookResult = ReturnType<
  typeof useGetConfigPromotionReferralLazyQuery
>;
export type GetConfigPromotionReferralQueryResult = Apollo.QueryResult<
  GetConfigPromotionReferralQuery,
  GetConfigPromotionReferralQueryVariables
>;
export function refetchGetConfigPromotionReferralQuery(
  variables?: GetConfigPromotionReferralQueryVariables,
) {
  return { query: GetConfigPromotionReferralDocument, variables: variables };
}
export const GetCountriesDocument = gql`
  query getCountries($queryParams: QueryFilterDto!) {
    getCountries(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        createdAt
        updatedAt
        name
        isActive
        isoCode
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetCountriesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCountriesQuery,
    GetCountriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GetCountriesDocument,
    options,
  );
}
export function useGetCountriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCountriesQuery,
    GetCountriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GetCountriesDocument,
    options,
  );
}
export type GetCountriesQueryHookResult = ReturnType<
  typeof useGetCountriesQuery
>;
export type GetCountriesLazyQueryHookResult = ReturnType<
  typeof useGetCountriesLazyQuery
>;
export type GetCountriesQueryResult = Apollo.QueryResult<
  GetCountriesQuery,
  GetCountriesQueryVariables
>;
export function refetchGetCountriesQuery(
  variables: GetCountriesQueryVariables,
) {
  return { query: GetCountriesDocument, variables: variables };
}
export const GetDriverDocument = gql`
  query getDriver($id: String!) {
    getDriver(id: $id) {
      id
      fullName
      email
      isVerified
      phoneNumber
      code
      avatar
      gender
      code
      dob
      address
      address2
      isActive
      userType
      createdAt
      updatedAt
      avgRate
      countRate
      transportation {
        id
        name
        description
        isActive
      }
      userVerificationRequest {
        id
        userId
        createdAt
        governmentPhotoUrls
        selfiePhotoUrls
        cardNumber
        dateRegister
        status
        description
        document
        vehicles {
          id
          userId
          driverVerificationId
          driverPhotoUrl
          driverLicenseNumber
          driverExpirationDate
          licensePlate
          regisVehiclePhotoUrl
          regisVehicleLicenseNumber
          regisVehicleExpirationDate
          yearOfManufacture
          brand
          ownerName
          typeVehicle
          transportationId
          insurancePhotoUrl
          insuranceNumber
          insuranceExpirationDate
          createdAt
          deletedAt
        }
      }
    }
  }
`;

/**
 * __useGetDriverQuery__
 *
 * To run a query within a React component, call `useGetDriverQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDriverQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDriverQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDriverQuery(
  baseOptions: Apollo.QueryHookOptions<GetDriverQuery, GetDriverQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDriverQuery, GetDriverQueryVariables>(
    GetDriverDocument,
    options,
  );
}
export function useGetDriverLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDriverQuery,
    GetDriverQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDriverQuery, GetDriverQueryVariables>(
    GetDriverDocument,
    options,
  );
}
export type GetDriverQueryHookResult = ReturnType<typeof useGetDriverQuery>;
export type GetDriverLazyQueryHookResult = ReturnType<
  typeof useGetDriverLazyQuery
>;
export type GetDriverQueryResult = Apollo.QueryResult<
  GetDriverQuery,
  GetDriverQueryVariables
>;
export function refetchGetDriverQuery(variables: GetDriverQueryVariables) {
  return { query: GetDriverDocument, variables: variables };
}
export const GetDriverDashboardDocument = gql`
  query getDriverDashboard {
    getDriverDashboard {
      count
    }
  }
`;

/**
 * __useGetDriverDashboardQuery__
 *
 * To run a query within a React component, call `useGetDriverDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDriverDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDriverDashboardQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDriverDashboardQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDriverDashboardQuery,
    GetDriverDashboardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetDriverDashboardQuery,
    GetDriverDashboardQueryVariables
  >(GetDriverDashboardDocument, options);
}
export function useGetDriverDashboardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDriverDashboardQuery,
    GetDriverDashboardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetDriverDashboardQuery,
    GetDriverDashboardQueryVariables
  >(GetDriverDashboardDocument, options);
}
export type GetDriverDashboardQueryHookResult = ReturnType<
  typeof useGetDriverDashboardQuery
>;
export type GetDriverDashboardLazyQueryHookResult = ReturnType<
  typeof useGetDriverDashboardLazyQuery
>;
export type GetDriverDashboardQueryResult = Apollo.QueryResult<
  GetDriverDashboardQuery,
  GetDriverDashboardQueryVariables
>;
export function refetchGetDriverDashboardQuery(
  variables?: GetDriverDashboardQueryVariables,
) {
  return { query: GetDriverDashboardDocument, variables: variables };
}
export const GetDriverVerificationRequestDocument = gql`
  query getDriverVerificationRequest($id: String!) {
    getDriverVerificationRequest(id: $id) {
      id
      createdAt
      updatedAt
      userId
      governmentPhotoUrls
      selfiePhotoUrls
      cardNumber
      dateRegister
      expiredDate
      status
      description
      document
      vehicles {
        id
        userId
        transportationId
        driverVerificationId
        driverPhotoUrl
        driverLicenseNumber
        driverExpirationDate
        regisVehiclePhotoUrl
        regisVehicleLicenseNumber
        regisVehicleExpirationDate
        yearOfManufacture
        brand
        licensePlate
        ownerName
        typeVehicle
        insurancePhotoUrl
        insuranceNumber
        insuranceExpirationDate
        createdAt
        deletedAt
      }
    }
  }
`;

/**
 * __useGetDriverVerificationRequestQuery__
 *
 * To run a query within a React component, call `useGetDriverVerificationRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDriverVerificationRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDriverVerificationRequestQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDriverVerificationRequestQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetDriverVerificationRequestQuery,
    GetDriverVerificationRequestQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetDriverVerificationRequestQuery,
    GetDriverVerificationRequestQueryVariables
  >(GetDriverVerificationRequestDocument, options);
}
export function useGetDriverVerificationRequestLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDriverVerificationRequestQuery,
    GetDriverVerificationRequestQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetDriverVerificationRequestQuery,
    GetDriverVerificationRequestQueryVariables
  >(GetDriverVerificationRequestDocument, options);
}
export type GetDriverVerificationRequestQueryHookResult = ReturnType<
  typeof useGetDriverVerificationRequestQuery
>;
export type GetDriverVerificationRequestLazyQueryHookResult = ReturnType<
  typeof useGetDriverVerificationRequestLazyQuery
>;
export type GetDriverVerificationRequestQueryResult = Apollo.QueryResult<
  GetDriverVerificationRequestQuery,
  GetDriverVerificationRequestQueryVariables
>;
export function refetchGetDriverVerificationRequestQuery(
  variables: GetDriverVerificationRequestQueryVariables,
) {
  return { query: GetDriverVerificationRequestDocument, variables: variables };
}
export const GetDriversDocument = gql`
  query getDrivers($queryParams: QueryFilterDto!) {
    getDrivers(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        fullName
        email
        isVerified
        phoneNumber
        code
        avatar
        address
        address2
        gender
        code
        dob
        isActive
        userType
        createdAt
        updatedAt
        avgRate
        transportation {
          id
          name
          description
          isActive
        }
        userVerificationRequest {
          status
        }
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetDriversQuery__
 *
 * To run a query within a React component, call `useGetDriversQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDriversQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDriversQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetDriversQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetDriversQuery,
    GetDriversQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDriversQuery, GetDriversQueryVariables>(
    GetDriversDocument,
    options,
  );
}
export function useGetDriversLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDriversQuery,
    GetDriversQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDriversQuery, GetDriversQueryVariables>(
    GetDriversDocument,
    options,
  );
}
export type GetDriversQueryHookResult = ReturnType<typeof useGetDriversQuery>;
export type GetDriversLazyQueryHookResult = ReturnType<
  typeof useGetDriversLazyQuery
>;
export type GetDriversQueryResult = Apollo.QueryResult<
  GetDriversQuery,
  GetDriversQueryVariables
>;
export function refetchGetDriversQuery(variables: GetDriversQueryVariables) {
  return { query: GetDriversDocument, variables: variables };
}
export const GetMeDocument = gql`
  query getMe {
    getMe {
      id
      fullName
      email
      avatar
      userType
    }
  }
`;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    options,
  );
}
export function useGetMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    options,
  );
}
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<
  GetMeQuery,
  GetMeQueryVariables
>;
export function refetchGetMeQuery(variables?: GetMeQueryVariables) {
  return { query: GetMeDocument, variables: variables };
}
export const GetNewNotificationCountDocument = gql`
  query getNewNotificationCount($userId: String!) {
    getNewNotificationCount(userId: $userId)
  }
`;

/**
 * __useGetNewNotificationCountQuery__
 *
 * To run a query within a React component, call `useGetNewNotificationCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewNotificationCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewNotificationCountQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetNewNotificationCountQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetNewNotificationCountQuery,
    GetNewNotificationCountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetNewNotificationCountQuery,
    GetNewNotificationCountQueryVariables
  >(GetNewNotificationCountDocument, options);
}
export function useGetNewNotificationCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNewNotificationCountQuery,
    GetNewNotificationCountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetNewNotificationCountQuery,
    GetNewNotificationCountQueryVariables
  >(GetNewNotificationCountDocument, options);
}
export type GetNewNotificationCountQueryHookResult = ReturnType<
  typeof useGetNewNotificationCountQuery
>;
export type GetNewNotificationCountLazyQueryHookResult = ReturnType<
  typeof useGetNewNotificationCountLazyQuery
>;
export type GetNewNotificationCountQueryResult = Apollo.QueryResult<
  GetNewNotificationCountQuery,
  GetNewNotificationCountQueryVariables
>;
export function refetchGetNewNotificationCountQuery(
  variables: GetNewNotificationCountQueryVariables,
) {
  return { query: GetNewNotificationCountDocument, variables: variables };
}
export const GetNotificationsDocument = gql`
  query getNotifications($userId: String!, $first: Float, $after: String) {
    getNotifications(userId: $userId, first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      items {
        notificationStatus
        createdAt
        title
        bodyText
        relevantId
        extraObject
      }
    }
  }
`;

/**
 * __useGetNotificationsQuery__
 *
 * To run a query within a React component, call `useGetNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotificationsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetNotificationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetNotificationsQuery,
    GetNotificationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(
    GetNotificationsDocument,
    options,
  );
}
export function useGetNotificationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNotificationsQuery,
    GetNotificationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetNotificationsQuery,
    GetNotificationsQueryVariables
  >(GetNotificationsDocument, options);
}
export type GetNotificationsQueryHookResult = ReturnType<
  typeof useGetNotificationsQuery
>;
export type GetNotificationsLazyQueryHookResult = ReturnType<
  typeof useGetNotificationsLazyQuery
>;
export type GetNotificationsQueryResult = Apollo.QueryResult<
  GetNotificationsQuery,
  GetNotificationsQueryVariables
>;
export function refetchGetNotificationsQuery(
  variables: GetNotificationsQueryVariables,
) {
  return { query: GetNotificationsDocument, variables: variables };
}
export const GetOrderDocument = gql`
  query getOrder($id: String!) {
    getOrder(id: $id) {
      id
      code
      senderId
      senderInfo {
        name
        email
        avatar
        phoneNumber
        note
        address
        address2
      }
      sender {
        id
        fullName
        email
        isVerified
        phoneNumber
        avatar
        gender
        address
        address2
        dob
        isActive
        code
        userVerificationRequest {
          status
        }
      }
      driver {
        id
        fullName
        email
        isVerified
        phoneNumber
        avatar
        gender
        address
        address2
        dob
        isActive
        code
        userVerificationRequest {
          status
        }
      }
      driverId
      status
      packages {
        id
        packageCode
        receiverName
        receiverAvatar
        receiverEmail
        receiverPhoneNumber
        receiverNote
        receiverAddress
        receiverAddress2
        weight
        height
        description
        images
        completedAt
      }
      transportation {
        id
        name
        description
      }
      note
      finalCost
      promotionDiscount
      tip
      currency
      cancelReason
      deliveryScheduledAt
      pickedUpAt
      completedAt
      expectedCost
      createdAt
      updatedAt
      promotionId
      driverReceivedAmount
      userPaidAmount
      paymentIntentId
      packageQuantity
      userDiscountAmount
      payment {
        paymentType
        stripePaymentMethodInfo
      }
      commissionInfo
    }
  }
`;

/**
 * __useGetOrderQuery__
 *
 * To run a query within a React component, call `useGetOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrderQuery(
  baseOptions: Apollo.QueryHookOptions<GetOrderQuery, GetOrderQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOrderQuery, GetOrderQueryVariables>(
    GetOrderDocument,
    options,
  );
}
export function useGetOrderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrderQuery,
    GetOrderQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOrderQuery, GetOrderQueryVariables>(
    GetOrderDocument,
    options,
  );
}
export type GetOrderQueryHookResult = ReturnType<typeof useGetOrderQuery>;
export type GetOrderLazyQueryHookResult = ReturnType<
  typeof useGetOrderLazyQuery
>;
export type GetOrderQueryResult = Apollo.QueryResult<
  GetOrderQuery,
  GetOrderQueryVariables
>;
export function refetchGetOrderQuery(variables: GetOrderQueryVariables) {
  return { query: GetOrderDocument, variables: variables };
}
export const GetOrderAmountReportDocument = gql`
  query getOrderAmountReport($filter: OrderAmountReportDto!) {
    getOrderAmountReport(filter: $filter) {
      data {
        key
        user_paid
        driver_received
      }
    }
  }
`;

/**
 * __useGetOrderAmountReportQuery__
 *
 * To run a query within a React component, call `useGetOrderAmountReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderAmountReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderAmountReportQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetOrderAmountReportQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOrderAmountReportQuery,
    GetOrderAmountReportQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetOrderAmountReportQuery,
    GetOrderAmountReportQueryVariables
  >(GetOrderAmountReportDocument, options);
}
export function useGetOrderAmountReportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrderAmountReportQuery,
    GetOrderAmountReportQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetOrderAmountReportQuery,
    GetOrderAmountReportQueryVariables
  >(GetOrderAmountReportDocument, options);
}
export type GetOrderAmountReportQueryHookResult = ReturnType<
  typeof useGetOrderAmountReportQuery
>;
export type GetOrderAmountReportLazyQueryHookResult = ReturnType<
  typeof useGetOrderAmountReportLazyQuery
>;
export type GetOrderAmountReportQueryResult = Apollo.QueryResult<
  GetOrderAmountReportQuery,
  GetOrderAmountReportQueryVariables
>;
export function refetchGetOrderAmountReportQuery(
  variables: GetOrderAmountReportQueryVariables,
) {
  return { query: GetOrderAmountReportDocument, variables: variables };
}
export const GetOrderDashboardDocument = gql`
  query getOrderDashboard {
    getOrderDashboard {
      count
    }
  }
`;

/**
 * __useGetOrderDashboardQuery__
 *
 * To run a query within a React component, call `useGetOrderDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderDashboardQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrderDashboardQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetOrderDashboardQuery,
    GetOrderDashboardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetOrderDashboardQuery,
    GetOrderDashboardQueryVariables
  >(GetOrderDashboardDocument, options);
}
export function useGetOrderDashboardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrderDashboardQuery,
    GetOrderDashboardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetOrderDashboardQuery,
    GetOrderDashboardQueryVariables
  >(GetOrderDashboardDocument, options);
}
export type GetOrderDashboardQueryHookResult = ReturnType<
  typeof useGetOrderDashboardQuery
>;
export type GetOrderDashboardLazyQueryHookResult = ReturnType<
  typeof useGetOrderDashboardLazyQuery
>;
export type GetOrderDashboardQueryResult = Apollo.QueryResult<
  GetOrderDashboardQuery,
  GetOrderDashboardQueryVariables
>;
export function refetchGetOrderDashboardQuery(
  variables?: GetOrderDashboardQueryVariables,
) {
  return { query: GetOrderDashboardDocument, variables: variables };
}
export const GetOrderRankingReportDocument = gql`
  query getOrderRankingReport($filter: OrderRankingReportDto!) {
    getOrderRankingReport(filter: $filter) {
      data {
        key
        id
        email
        fullname
        avatar
        total
      }
    }
  }
`;

/**
 * __useGetOrderRankingReportQuery__
 *
 * To run a query within a React component, call `useGetOrderRankingReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderRankingReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderRankingReportQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetOrderRankingReportQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOrderRankingReportQuery,
    GetOrderRankingReportQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetOrderRankingReportQuery,
    GetOrderRankingReportQueryVariables
  >(GetOrderRankingReportDocument, options);
}
export function useGetOrderRankingReportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrderRankingReportQuery,
    GetOrderRankingReportQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetOrderRankingReportQuery,
    GetOrderRankingReportQueryVariables
  >(GetOrderRankingReportDocument, options);
}
export type GetOrderRankingReportQueryHookResult = ReturnType<
  typeof useGetOrderRankingReportQuery
>;
export type GetOrderRankingReportLazyQueryHookResult = ReturnType<
  typeof useGetOrderRankingReportLazyQuery
>;
export type GetOrderRankingReportQueryResult = Apollo.QueryResult<
  GetOrderRankingReportQuery,
  GetOrderRankingReportQueryVariables
>;
export function refetchGetOrderRankingReportQuery(
  variables: GetOrderRankingReportQueryVariables,
) {
  return { query: GetOrderRankingReportDocument, variables: variables };
}
export const GetOrderReportDocument = gql`
  query getOrderReport($filter: OrderReportDto!) {
    getOrderReport(filter: $filter) {
      data {
        key
        value
      }
    }
  }
`;

/**
 * __useGetOrderReportQuery__
 *
 * To run a query within a React component, call `useGetOrderReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderReportQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetOrderReportQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOrderReportQuery,
    GetOrderReportQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOrderReportQuery, GetOrderReportQueryVariables>(
    GetOrderReportDocument,
    options,
  );
}
export function useGetOrderReportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrderReportQuery,
    GetOrderReportQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOrderReportQuery, GetOrderReportQueryVariables>(
    GetOrderReportDocument,
    options,
  );
}
export type GetOrderReportQueryHookResult = ReturnType<
  typeof useGetOrderReportQuery
>;
export type GetOrderReportLazyQueryHookResult = ReturnType<
  typeof useGetOrderReportLazyQuery
>;
export type GetOrderReportQueryResult = Apollo.QueryResult<
  GetOrderReportQuery,
  GetOrderReportQueryVariables
>;
export function refetchGetOrderReportQuery(
  variables: GetOrderReportQueryVariables,
) {
  return { query: GetOrderReportDocument, variables: variables };
}
export const GetOrdersDocument = gql`
  query getOrders($queryParams: QueryFilterDto!) {
    getOrders(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        code
        sender {
          id
          fullName
          email
          avatar
          code
        }
        driver {
          id
          fullName
          email
          avatar
          code
        }
        status
        transportation {
          id
          name
          description
          isActive
        }
        finalCost
        currency
        deliveryScheduledAt
        expectedCost
        createdAt
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetOrdersQuery(
  baseOptions: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(
    GetOrdersDocument,
    options,
  );
}
export function useGetOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrdersQuery,
    GetOrdersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(
    GetOrdersDocument,
    options,
  );
}
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<
  typeof useGetOrdersLazyQuery
>;
export type GetOrdersQueryResult = Apollo.QueryResult<
  GetOrdersQuery,
  GetOrdersQueryVariables
>;
export function refetchGetOrdersQuery(variables: GetOrdersQueryVariables) {
  return { query: GetOrdersDocument, variables: variables };
}
export const GetPackagesDocument = gql`
  query getPackages($queryParams: QueryFilterDto!) {
    getPackages(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        receiverName
        receiverNote
        receiverEmail
        receiverAvatar
        receiverAddress
        receiverAddress2
        receiverCoordinates {
          longitude
          latitude
        }
        receiverPhoneNumber
        weight
        height
        description
        images
        status
        deliveryScheduledAt
        pickedUpAt
        acceptedAt
        cancelledAt
        completedAt
        packageCode
        orderId
        order {
          id
          code
          senderId
          sender {
            id
            fullName
          }
          senderInfo {
            name
            email
            avatar
            phoneNumber
            note
            address
            address2
          }
          coordinates {
            longitude
            latitude
          }
          driver {
            id
            fullName
            email
            isVerified
            phoneNumber
            avatar
            gender
            address
            address2
            dob
            isActive
            code
            preferredLanguage
            userVerificationId
          }
          driverId
          status
          transportation {
            id
            name
            description
          }
          transportationTransferId
          currency
          cancelReason
          deliveryScheduledAt
          pickedUpAt
          completedAt
          expectedCost
          finalCost
          isRating
          createdAt
          updatedAt
        }
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetPackagesQuery__
 *
 * To run a query within a React component, call `useGetPackagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPackagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPackagesQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetPackagesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPackagesQuery,
    GetPackagesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPackagesQuery, GetPackagesQueryVariables>(
    GetPackagesDocument,
    options,
  );
}
export function useGetPackagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPackagesQuery,
    GetPackagesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPackagesQuery, GetPackagesQueryVariables>(
    GetPackagesDocument,
    options,
  );
}
export type GetPackagesQueryHookResult = ReturnType<typeof useGetPackagesQuery>;
export type GetPackagesLazyQueryHookResult = ReturnType<
  typeof useGetPackagesLazyQuery
>;
export type GetPackagesQueryResult = Apollo.QueryResult<
  GetPackagesQuery,
  GetPackagesQueryVariables
>;
export function refetchGetPackagesQuery(variables: GetPackagesQueryVariables) {
  return { query: GetPackagesDocument, variables: variables };
}
export const GetPromotionsDocument = gql`
  query getPromotions($queryParams: QueryFilterDto!) {
    getPromotions(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        code
        type
        amount
        condition
        description
        startDate
        endDate
        isActive
        userType
        isReferral
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetPromotionsQuery__
 *
 * To run a query within a React component, call `useGetPromotionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPromotionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPromotionsQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetPromotionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPromotionsQuery,
    GetPromotionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPromotionsQuery, GetPromotionsQueryVariables>(
    GetPromotionsDocument,
    options,
  );
}
export function useGetPromotionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPromotionsQuery,
    GetPromotionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPromotionsQuery, GetPromotionsQueryVariables>(
    GetPromotionsDocument,
    options,
  );
}
export type GetPromotionsQueryHookResult = ReturnType<
  typeof useGetPromotionsQuery
>;
export type GetPromotionsLazyQueryHookResult = ReturnType<
  typeof useGetPromotionsLazyQuery
>;
export type GetPromotionsQueryResult = Apollo.QueryResult<
  GetPromotionsQuery,
  GetPromotionsQueryVariables
>;
export function refetchGetPromotionsQuery(
  variables: GetPromotionsQueryVariables,
) {
  return { query: GetPromotionsDocument, variables: variables };
}
export const GetRevenueDashboardDocument = gql`
  query getRevenueDashboard {
    getRevenueDashboard {
      revenue
    }
  }
`;

/**
 * __useGetRevenueDashboardQuery__
 *
 * To run a query within a React component, call `useGetRevenueDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRevenueDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRevenueDashboardQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRevenueDashboardQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRevenueDashboardQuery,
    GetRevenueDashboardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetRevenueDashboardQuery,
    GetRevenueDashboardQueryVariables
  >(GetRevenueDashboardDocument, options);
}
export function useGetRevenueDashboardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRevenueDashboardQuery,
    GetRevenueDashboardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRevenueDashboardQuery,
    GetRevenueDashboardQueryVariables
  >(GetRevenueDashboardDocument, options);
}
export type GetRevenueDashboardQueryHookResult = ReturnType<
  typeof useGetRevenueDashboardQuery
>;
export type GetRevenueDashboardLazyQueryHookResult = ReturnType<
  typeof useGetRevenueDashboardLazyQuery
>;
export type GetRevenueDashboardQueryResult = Apollo.QueryResult<
  GetRevenueDashboardQuery,
  GetRevenueDashboardQueryVariables
>;
export function refetchGetRevenueDashboardQuery(
  variables?: GetRevenueDashboardQueryVariables,
) {
  return { query: GetRevenueDashboardDocument, variables: variables };
}
export const GetTransportationDocument = gql`
  query getTransportation($id: String!) {
    getTransportation(id: $id) {
      id
      name
      code
      logoUrl
      description
      isActive
    }
  }
`;

/**
 * __useGetTransportationQuery__
 *
 * To run a query within a React component, call `useGetTransportationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransportationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransportationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTransportationQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTransportationQuery,
    GetTransportationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetTransportationQuery,
    GetTransportationQueryVariables
  >(GetTransportationDocument, options);
}
export function useGetTransportationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTransportationQuery,
    GetTransportationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetTransportationQuery,
    GetTransportationQueryVariables
  >(GetTransportationDocument, options);
}
export type GetTransportationQueryHookResult = ReturnType<
  typeof useGetTransportationQuery
>;
export type GetTransportationLazyQueryHookResult = ReturnType<
  typeof useGetTransportationLazyQuery
>;
export type GetTransportationQueryResult = Apollo.QueryResult<
  GetTransportationQuery,
  GetTransportationQueryVariables
>;
export function refetchGetTransportationQuery(
  variables: GetTransportationQueryVariables,
) {
  return { query: GetTransportationDocument, variables: variables };
}
export const GetTransportationsDocument = gql`
  query getTransportations($queryParams: QueryFilterDto!) {
    getTransportations(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        name
        code
        logoUrl
        description
        isActive
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetTransportationsQuery__
 *
 * To run a query within a React component, call `useGetTransportationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransportationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransportationsQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetTransportationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTransportationsQuery,
    GetTransportationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetTransportationsQuery,
    GetTransportationsQueryVariables
  >(GetTransportationsDocument, options);
}
export function useGetTransportationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTransportationsQuery,
    GetTransportationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetTransportationsQuery,
    GetTransportationsQueryVariables
  >(GetTransportationsDocument, options);
}
export type GetTransportationsQueryHookResult = ReturnType<
  typeof useGetTransportationsQuery
>;
export type GetTransportationsLazyQueryHookResult = ReturnType<
  typeof useGetTransportationsLazyQuery
>;
export type GetTransportationsQueryResult = Apollo.QueryResult<
  GetTransportationsQuery,
  GetTransportationsQueryVariables
>;
export function refetchGetTransportationsQuery(
  variables: GetTransportationsQueryVariables,
) {
  return { query: GetTransportationsDocument, variables: variables };
}
export const GetUserDocument = gql`
  query getUser($id: String!) {
    getUser(id: $id) {
      id
      fullName
      email
      referralCode
      isVerified
      phoneNumber
      code
      avatar
      gender
      code
      dob
      address
      address2
      isActive
      userType
      createdAt
      updatedAt
      userVerificationRequest {
        id
        userId
        status
      }
    }
  }
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options,
  );
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options,
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>;
export function refetchGetUserQuery(variables: GetUserQueryVariables) {
  return { query: GetUserDocument, variables: variables };
}
export const GetUserDashboardDocument = gql`
  query getUserDashboard {
    getUserDashboard {
      count
    }
  }
`;

/**
 * __useGetUserDashboardQuery__
 *
 * To run a query within a React component, call `useGetUserDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDashboardQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserDashboardQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserDashboardQuery,
    GetUserDashboardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserDashboardQuery, GetUserDashboardQueryVariables>(
    GetUserDashboardDocument,
    options,
  );
}
export function useGetUserDashboardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserDashboardQuery,
    GetUserDashboardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserDashboardQuery,
    GetUserDashboardQueryVariables
  >(GetUserDashboardDocument, options);
}
export type GetUserDashboardQueryHookResult = ReturnType<
  typeof useGetUserDashboardQuery
>;
export type GetUserDashboardLazyQueryHookResult = ReturnType<
  typeof useGetUserDashboardLazyQuery
>;
export type GetUserDashboardQueryResult = Apollo.QueryResult<
  GetUserDashboardQuery,
  GetUserDashboardQueryVariables
>;
export function refetchGetUserDashboardQuery(
  variables?: GetUserDashboardQueryVariables,
) {
  return { query: GetUserDashboardDocument, variables: variables };
}
export const GetUserReportDocument = gql`
  query getUserReport($filter: UserReportDto!) {
    getUserReport(filter: $filter) {
      data {
        key
        value
      }
    }
  }
`;

/**
 * __useGetUserReportQuery__
 *
 * To run a query within a React component, call `useGetUserReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserReportQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetUserReportQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserReportQuery,
    GetUserReportQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserReportQuery, GetUserReportQueryVariables>(
    GetUserReportDocument,
    options,
  );
}
export function useGetUserReportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserReportQuery,
    GetUserReportQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserReportQuery, GetUserReportQueryVariables>(
    GetUserReportDocument,
    options,
  );
}
export type GetUserReportQueryHookResult = ReturnType<
  typeof useGetUserReportQuery
>;
export type GetUserReportLazyQueryHookResult = ReturnType<
  typeof useGetUserReportLazyQuery
>;
export type GetUserReportQueryResult = Apollo.QueryResult<
  GetUserReportQuery,
  GetUserReportQueryVariables
>;
export function refetchGetUserReportQuery(
  variables: GetUserReportQueryVariables,
) {
  return { query: GetUserReportDocument, variables: variables };
}
export const GetUserVerificationRequestsDocument = gql`
  query getUserVerificationRequests($queryParams: QueryFilterDto!) {
    getUserVerificationRequests(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        createdAt
        updatedAt
        userId
        governmentPhotoUrls
        selfiePhotoUrls
        status
        cardNumber
        expiredDate
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetUserVerificationRequestsQuery__
 *
 * To run a query within a React component, call `useGetUserVerificationRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserVerificationRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserVerificationRequestsQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetUserVerificationRequestsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserVerificationRequestsQuery,
    GetUserVerificationRequestsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetUserVerificationRequestsQuery,
    GetUserVerificationRequestsQueryVariables
  >(GetUserVerificationRequestsDocument, options);
}
export function useGetUserVerificationRequestsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserVerificationRequestsQuery,
    GetUserVerificationRequestsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserVerificationRequestsQuery,
    GetUserVerificationRequestsQueryVariables
  >(GetUserVerificationRequestsDocument, options);
}
export type GetUserVerificationRequestsQueryHookResult = ReturnType<
  typeof useGetUserVerificationRequestsQuery
>;
export type GetUserVerificationRequestsLazyQueryHookResult = ReturnType<
  typeof useGetUserVerificationRequestsLazyQuery
>;
export type GetUserVerificationRequestsQueryResult = Apollo.QueryResult<
  GetUserVerificationRequestsQuery,
  GetUserVerificationRequestsQueryVariables
>;
export function refetchGetUserVerificationRequestsQuery(
  variables: GetUserVerificationRequestsQueryVariables,
) {
  return { query: GetUserVerificationRequestsDocument, variables: variables };
}
export const GetUsersDocument = gql`
  query getUsers($queryParams: QueryFilterDto!) {
    getUsers(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        fullName
        email
        referralCode
        isVerified
        phoneNumber
        address
        address2
        code
        avatar
        gender
        code
        dob
        isActive
        userType
        createdAt
        updatedAt
        userVerificationRequest {
          id
          userId
          status
        }
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
export function refetchGetUsersQuery(variables: GetUsersQueryVariables) {
  return { query: GetUsersDocument, variables: variables };
}
export const GetVehiclesByUserVerificationIdDocument = gql`
  query getVehiclesByUserVerificationId(
    $driverVerificationId: String!
    $queryParams: QueryFilterDto!
  ) {
    getVehiclesByUserVerificationId(
      driverVerificationId: $driverVerificationId
      queryParams: $queryParams
    ) {
      meta {
        ...MetaFragment
      }
      items {
        id
        transportationId
        transportation {
          id
          name
        }
        brand
        yearOfManufacture
        licensePlate
        typeVehicle
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetVehiclesByUserVerificationIdQuery__
 *
 * To run a query within a React component, call `useGetVehiclesByUserVerificationIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVehiclesByUserVerificationIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVehiclesByUserVerificationIdQuery({
 *   variables: {
 *      driverVerificationId: // value for 'driverVerificationId'
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetVehiclesByUserVerificationIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetVehiclesByUserVerificationIdQuery,
    GetVehiclesByUserVerificationIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetVehiclesByUserVerificationIdQuery,
    GetVehiclesByUserVerificationIdQueryVariables
  >(GetVehiclesByUserVerificationIdDocument, options);
}
export function useGetVehiclesByUserVerificationIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetVehiclesByUserVerificationIdQuery,
    GetVehiclesByUserVerificationIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetVehiclesByUserVerificationIdQuery,
    GetVehiclesByUserVerificationIdQueryVariables
  >(GetVehiclesByUserVerificationIdDocument, options);
}
export type GetVehiclesByUserVerificationIdQueryHookResult = ReturnType<
  typeof useGetVehiclesByUserVerificationIdQuery
>;
export type GetVehiclesByUserVerificationIdLazyQueryHookResult = ReturnType<
  typeof useGetVehiclesByUserVerificationIdLazyQuery
>;
export type GetVehiclesByUserVerificationIdQueryResult = Apollo.QueryResult<
  GetVehiclesByUserVerificationIdQuery,
  GetVehiclesByUserVerificationIdQueryVariables
>;
export function refetchGetVehiclesByUserVerificationIdQuery(
  variables: GetVehiclesByUserVerificationIdQueryVariables,
) {
  return {
    query: GetVehiclesByUserVerificationIdDocument,
    variables: variables,
  };
}
export type MetaFragmentFragment = {
  __typename?: 'MetaPaginationInterface';
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
};

export type ActivatePromotionMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type ActivatePromotionMutation = {
  __typename?: 'Mutation';
  activatePromotion: { __typename?: 'IPromotion'; id: string };
};

export type ActivateTransportationMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type ActivateTransportationMutation = {
  __typename?: 'Mutation';
  activateTransportation: { __typename?: 'Transportation'; id: string };
};

export type ApproveUserVerificationRequestMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type ApproveUserVerificationRequestMutation = {
  __typename?: 'Mutation';
  approveUserVerificationRequest: {
    __typename?: 'IUserVerificationRequest';
    status?: VerificationRequestStatus | null | undefined;
  };
};

export type ClearNotificationCountMutationVariables = Exact<{
  userId: Scalars['String'];
}>;

export type ClearNotificationCountMutation = {
  __typename?: 'Mutation';
  clearNotificationCount: string;
};

export type CreateNewTokenMutationVariables = Exact<{
  input: InstallationInput;
}>;

export type CreateNewTokenMutation = {
  __typename?: 'Mutation';
  createNewToken: string;
};

export type CreateNotificationMutationVariables = Exact<{
  input: AdminNotificationDto;
}>;

export type CreateNotificationMutation = {
  __typename?: 'Mutation';
  createNotification: string;
};

export type DeactivatePromotionMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeactivatePromotionMutation = {
  __typename?: 'Mutation';
  deactivatePromotion: { __typename?: 'IPromotion'; id: string };
};

export type DeactivateTransportationMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeactivateTransportationMutation = {
  __typename?: 'Mutation';
  deactivateTransportation: { __typename?: 'Transportation'; id: string };
};

export type DeleteAllNotificationMutationVariables = Exact<{
  userId: Scalars['String'];
}>;

export type DeleteAllNotificationMutation = {
  __typename?: 'Mutation';
  deleteAllNotification: string;
};

export type DeleteNotificationMutationVariables = Exact<{
  userId: Scalars['String'];
  createdAt: Scalars['DateTime'];
}>;

export type DeleteNotificationMutation = {
  __typename?: 'Mutation';
  deleteNotification: string;
};

export type DeleteTokenMutationVariables = Exact<{
  input: InstallationInput;
}>;

export type DeleteTokenMutation = {
  __typename?: 'Mutation';
  createNewToken: string;
};

export type DenyUserVerificationRequestMutationVariables = Exact<{
  reason: Scalars['String'];
  id: Scalars['String'];
}>;

export type DenyUserVerificationRequestMutation = {
  __typename?: 'Mutation';
  denyUserVerificationRequest: {
    __typename?: 'IUserVerificationRequest';
    status?: VerificationRequestStatus | null | undefined;
  };
};

export type DisableDriverMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type DisableDriverMutation = {
  __typename?: 'Mutation';
  disableDriver: { __typename?: 'IUser'; id: string };
};

export type DisableUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type DisableUserMutation = {
  __typename?: 'Mutation';
  disableUser: { __typename?: 'IUser'; id: string };
};

export type EnableDriverMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type EnableDriverMutation = {
  __typename?: 'Mutation';
  enableDriver: { __typename?: 'IUser'; id: string };
};

export type EnableUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type EnableUserMutation = {
  __typename?: 'Mutation';
  enableUser: { __typename?: 'IUser'; id: string };
};

export type MarkAllNotificationAsSeenMutationVariables = Exact<{
  userId: Scalars['String'];
}>;

export type MarkAllNotificationAsSeenMutation = {
  __typename?: 'Mutation';
  markAllNotificationAsSeen: string;
};

export type MarkNotificationAsSeenMutationVariables = Exact<{
  userId: Scalars['String'];
  createdAt: Scalars['DateTime'];
}>;

export type MarkNotificationAsSeenMutation = {
  __typename?: 'Mutation';
  markNotificationAsSeen: string;
};

export type PresignedUrlS3MutationVariables = Exact<{
  presignedUrlDto: PresignedUrlDto;
}>;

export type PresignedUrlS3Mutation = {
  __typename?: 'Mutation';
  presignedUrlS3: {
    __typename?: 'IPreSignUrl';
    pathFile: string;
    fileType: string;
    uploadUrl: string;
  };
};

export type SignUpDriverMutationVariables = Exact<{
  input: DeliveryDto;
}>;

export type SignUpDriverMutation = {
  __typename?: 'Mutation';
  signUpDriver: {
    __typename?: 'IDriver';
    id: string;
    fullName?: string | null | undefined;
    email?: string | null | undefined;
    isVerified?: boolean | null | undefined;
    phoneNumber?: string | null | undefined;
    code?: string | null | undefined;
    avatar?: string | null | undefined;
    address?: any | null | undefined;
    gender?: Gender | null | undefined;
    dob?: any | null | undefined;
    isActive?: boolean | null | undefined;
    userType?: UserType | null | undefined;
    createdAt?: any | null | undefined;
    updatedAt?: any | null | undefined;
    transportation?:
      | Array<{
          __typename?: 'Transportation';
          id: string;
          name: string;
          description?: string | null | undefined;
          isActive?: boolean | null | undefined;
        }>
      | null
      | undefined;
    userVerificationRequest?:
      | {
          __typename?: 'UserVerificationRequest';
          id: string;
          createdAt?: any | null | undefined;
          governmentPhotoUrls?: any | null | undefined;
          selfiePhotoUrls?: any | null | undefined;
          cardNumber?: string | null | undefined;
          dateRegister?: any | null | undefined;
          vehicles?:
            | Array<{
                __typename?: 'VehicleVerification';
                id: string;
                driverVerificationId?: string | null | undefined;
                driverPhotoUrl?: any | null | undefined;
                driverLicenseNumber?: string | null | undefined;
                driverExpirationDate?: any | null | undefined;
                regisVehiclePhotoUrl?: any | null | undefined;
                regisVehicleLicenseNumber?: string | null | undefined;
                regisVehicleExpirationDate?: any | null | undefined;
                yearOfManufacture?: any | null | undefined;
                brand?: string | null | undefined;
                ownerName?: string | null | undefined;
                typeVehicle?: string | null | undefined;
                insurancePhotoUrl?: any | null | undefined;
                insuranceNumber?: string | null | undefined;
                insuranceExpirationDate?: any | null | undefined;
                createdAt?: any | null | undefined;
              }>
            | null
            | undefined;
        }
      | null
      | undefined;
  };
};

export type UpdateMeMutationVariables = Exact<{
  input: UpdateMeDto;
}>;

export type UpdateMeMutation = {
  __typename?: 'Mutation';
  updateMe: {
    __typename?: 'IUser';
    id: string;
    fullName?: string | null | undefined;
    email?: string | null | undefined;
    avatar?: string | null | undefined;
    userType?: UserType | null | undefined;
  };
};

export type UpsertCommissionMutationVariables = Exact<{
  upsertCommssionDto: UpsertCommssionDto;
}>;

export type UpsertCommissionMutation = {
  __typename?: 'Mutation';
  upsertCommission: {
    __typename?: 'Commission';
    id: string;
    driverCommission?: number | null | undefined;
    systemCommission?: number | null | undefined;
    createdAt?: any | null | undefined;
    updatedAt?: any | null | undefined;
  };
};

export type UpsertConfigPromotionReferralMutationVariables = Exact<{
  upsertPromotionReferralDto: UpsertPromotionReferralDto;
}>;

export type UpsertConfigPromotionReferralMutation = {
  __typename?: 'Mutation';
  upsertConfigPromotionReferral: {
    __typename?: 'IPromotionReferral';
    id: string;
    promotionType: string;
    unit: string;
    amount: number;
  };
};

export type UpsertDriverMutationVariables = Exact<{
  input: DeliveryDto;
}>;

export type UpsertDriverMutation = {
  __typename?: 'Mutation';
  upsertDriver: {
    __typename?: 'IDriver';
    id: string;
    fullName?: string | null | undefined;
    email?: string | null | undefined;
    isVerified?: boolean | null | undefined;
    phoneNumber?: string | null | undefined;
    code?: string | null | undefined;
    avatar?: string | null | undefined;
    address?: any | null | undefined;
    gender?: Gender | null | undefined;
    dob?: any | null | undefined;
    isActive?: boolean | null | undefined;
    userType?: UserType | null | undefined;
    createdAt?: any | null | undefined;
    updatedAt?: any | null | undefined;
    transportation?:
      | Array<{
          __typename?: 'Transportation';
          id: string;
          name: string;
          description?: string | null | undefined;
          isActive?: boolean | null | undefined;
        }>
      | null
      | undefined;
    userVerificationRequest?:
      | {
          __typename?: 'UserVerificationRequest';
          id: string;
          createdAt?: any | null | undefined;
          governmentPhotoUrls?: any | null | undefined;
          selfiePhotoUrls?: any | null | undefined;
          cardNumber?: string | null | undefined;
          dateRegister?: any | null | undefined;
          description?: string | null | undefined;
          vehicles?:
            | Array<{
                __typename?: 'VehicleVerification';
                id: string;
                driverVerificationId?: string | null | undefined;
                driverPhotoUrl?: any | null | undefined;
                driverLicenseNumber?: string | null | undefined;
                driverExpirationDate?: any | null | undefined;
                regisVehiclePhotoUrl?: any | null | undefined;
                regisVehicleLicenseNumber?: string | null | undefined;
                regisVehicleExpirationDate?: any | null | undefined;
                yearOfManufacture?: any | null | undefined;
                brand?: string | null | undefined;
                ownerName?: string | null | undefined;
                typeVehicle?: string | null | undefined;
                insurancePhotoUrl?: any | null | undefined;
                insuranceNumber?: string | null | undefined;
                insuranceExpirationDate?: any | null | undefined;
                createdAt?: any | null | undefined;
              }>
            | null
            | undefined;
        }
      | null
      | undefined;
  };
};

export type UpsertPromotionMutationVariables = Exact<{
  upsertPromotionDto: UpsertPromotionDto;
}>;

export type UpsertPromotionMutation = {
  __typename?: 'Mutation';
  upsertPromotion: {
    __typename?: 'IPromotion';
    id: string;
    code: string;
    type?: string | null | undefined;
    amount: number;
    startDate?: any | null | undefined;
    endDate?: any | null | undefined;
    description?: string | null | undefined;
    isActive?: boolean | null | undefined;
  };
};

export type UpsertTransportationMutationVariables = Exact<{
  input: UpsertTransportationDto;
}>;

export type UpsertTransportationMutation = {
  __typename?: 'Mutation';
  upsertTransportation: {
    __typename?: 'Transportation';
    id: string;
    name: string;
    logoUrl?: string | null | undefined;
    description?: string | null | undefined;
    isActive?: boolean | null | undefined;
  };
};

export type GetAdminNotificationsQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetAdminNotificationsQuery = {
  __typename?: 'Query';
  getAdminNotifications: {
    __typename?: 'IAdminNotifications';
    meta: {
      __typename?: 'MetaPaginationInterface';
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      __typename?: 'AdminNotification';
      id: string;
      code: string;
      userNames?: any | null | undefined;
      title: string;
      bodyText: string;
      createdAt?: any | null | undefined;
    }>;
  };
};

export type GetAllUsersQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetAllUsersQuery = {
  __typename?: 'Query';
  getUsers: {
    __typename?: 'IUsers';
    items: Array<{
      __typename?: 'IUser';
      id: string;
      fullName?: string | null | undefined;
      email?: string | null | undefined;
    }>;
  };
  getDrivers: {
    __typename?: 'IDrivers';
    items: Array<{
      __typename?: 'IDriver';
      id: string;
      fullName?: string | null | undefined;
      email?: string | null | undefined;
    }>;
  };
};

export type GetAverageFeeDashboardQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetAverageFeeDashboardQuery = {
  __typename?: 'Query';
  getAverageFeeDashboard: {
    __typename?: 'IAverageFeeDashboard';
    fee?: number | null | undefined;
  };
};

export type GetCommissionsQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetCommissionsQuery = {
  __typename?: 'Query';
  getCommissions: {
    __typename?: 'ICommissions';
    meta: {
      __typename?: 'MetaPaginationInterface';
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      __typename?: 'Commission';
      id: string;
      driverCommission?: number | null | undefined;
      systemCommission?: number | null | undefined;
      createdAt?: any | null | undefined;
      updatedAt?: any | null | undefined;
    }>;
  };
};

export type GetConfigPromotionReferralQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetConfigPromotionReferralQuery = {
  __typename?: 'Query';
  getConfigPromotionReferral: {
    __typename?: 'IPromotionReferral';
    id: string;
    promotionType: string;
    unit: string;
    amount: number;
  };
};

export type GetCountriesQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetCountriesQuery = {
  __typename?: 'Query';
  getCountries: {
    __typename?: 'ICountries';
    meta: {
      __typename?: 'MetaPaginationInterface';
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      __typename?: 'ICountry';
      id: string;
      createdAt?: any | null | undefined;
      updatedAt?: any | null | undefined;
      name?: string | null | undefined;
      isActive?: boolean | null | undefined;
      isoCode?: string | null | undefined;
    }>;
  };
};

export type GetDriverQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetDriverQuery = {
  __typename?: 'Query';
  getDriver: {
    __typename?: 'IDriver';
    id: string;
    fullName?: string | null | undefined;
    email?: string | null | undefined;
    isVerified?: boolean | null | undefined;
    phoneNumber?: string | null | undefined;
    code?: string | null | undefined;
    avatar?: string | null | undefined;
    gender?: Gender | null | undefined;
    dob?: any | null | undefined;
    address?: any | null | undefined;
    address2?: string | null | undefined;
    isActive?: boolean | null | undefined;
    userType?: UserType | null | undefined;
    createdAt?: any | null | undefined;
    updatedAt?: any | null | undefined;
    avgRate?: number | null | undefined;
    countRate?: number | null | undefined;
    transportation?:
      | Array<{
          __typename?: 'Transportation';
          id: string;
          name: string;
          description?: string | null | undefined;
          isActive?: boolean | null | undefined;
        }>
      | null
      | undefined;
    userVerificationRequest?:
      | {
          __typename?: 'UserVerificationRequest';
          id: string;
          userId: string;
          createdAt?: any | null | undefined;
          governmentPhotoUrls?: any | null | undefined;
          selfiePhotoUrls?: any | null | undefined;
          cardNumber?: string | null | undefined;
          dateRegister?: any | null | undefined;
          status?: VerificationRequestStatus | null | undefined;
          description?: string | null | undefined;
          document?: any | null | undefined;
          vehicles?:
            | Array<{
                __typename?: 'VehicleVerification';
                id: string;
                userId: string;
                driverVerificationId?: string | null | undefined;
                driverPhotoUrl?: any | null | undefined;
                driverLicenseNumber?: string | null | undefined;
                driverExpirationDate?: any | null | undefined;
                licensePlate?: string | null | undefined;
                regisVehiclePhotoUrl?: any | null | undefined;
                regisVehicleLicenseNumber?: string | null | undefined;
                regisVehicleExpirationDate?: any | null | undefined;
                yearOfManufacture?: any | null | undefined;
                brand?: string | null | undefined;
                ownerName?: string | null | undefined;
                typeVehicle?: string | null | undefined;
                transportationId?: string | null | undefined;
                insurancePhotoUrl?: any | null | undefined;
                insuranceNumber?: string | null | undefined;
                insuranceExpirationDate?: any | null | undefined;
                createdAt?: any | null | undefined;
                deletedAt?: any | null | undefined;
              }>
            | null
            | undefined;
        }
      | null
      | undefined;
  };
};

export type GetDriverDashboardQueryVariables = Exact<{ [key: string]: never }>;

export type GetDriverDashboardQuery = {
  __typename?: 'Query';
  getDriverDashboard: { __typename?: 'ICountDashboard'; count: number };
};

export type GetDriverVerificationRequestQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetDriverVerificationRequestQuery = {
  __typename?: 'Query';
  getDriverVerificationRequest: {
    __typename?: 'UserVerificationRequest';
    id: string;
    createdAt?: any | null | undefined;
    updatedAt?: any | null | undefined;
    userId: string;
    governmentPhotoUrls?: any | null | undefined;
    selfiePhotoUrls?: any | null | undefined;
    cardNumber?: string | null | undefined;
    dateRegister?: any | null | undefined;
    expiredDate?: any | null | undefined;
    status?: VerificationRequestStatus | null | undefined;
    description?: string | null | undefined;
    document?: any | null | undefined;
    vehicles?:
      | Array<{
          __typename?: 'VehicleVerification';
          id: string;
          userId: string;
          transportationId?: string | null | undefined;
          driverVerificationId?: string | null | undefined;
          driverPhotoUrl?: any | null | undefined;
          driverLicenseNumber?: string | null | undefined;
          driverExpirationDate?: any | null | undefined;
          regisVehiclePhotoUrl?: any | null | undefined;
          regisVehicleLicenseNumber?: string | null | undefined;
          regisVehicleExpirationDate?: any | null | undefined;
          yearOfManufacture?: any | null | undefined;
          brand?: string | null | undefined;
          licensePlate?: string | null | undefined;
          ownerName?: string | null | undefined;
          typeVehicle?: string | null | undefined;
          insurancePhotoUrl?: any | null | undefined;
          insuranceNumber?: string | null | undefined;
          insuranceExpirationDate?: any | null | undefined;
          createdAt?: any | null | undefined;
          deletedAt?: any | null | undefined;
        }>
      | null
      | undefined;
  };
};

export type GetDriversQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetDriversQuery = {
  __typename?: 'Query';
  getDrivers: {
    __typename?: 'IDrivers';
    meta: {
      __typename?: 'MetaPaginationInterface';
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      __typename?: 'IDriver';
      id: string;
      fullName?: string | null | undefined;
      email?: string | null | undefined;
      isVerified?: boolean | null | undefined;
      phoneNumber?: string | null | undefined;
      code?: string | null | undefined;
      avatar?: string | null | undefined;
      address?: any | null | undefined;
      address2?: string | null | undefined;
      gender?: Gender | null | undefined;
      dob?: any | null | undefined;
      isActive?: boolean | null | undefined;
      userType?: UserType | null | undefined;
      createdAt?: any | null | undefined;
      updatedAt?: any | null | undefined;
      avgRate?: number | null | undefined;
      transportation?:
        | Array<{
            __typename?: 'Transportation';
            id: string;
            name: string;
            description?: string | null | undefined;
            isActive?: boolean | null | undefined;
          }>
        | null
        | undefined;
      userVerificationRequest?:
        | {
            __typename?: 'UserVerificationRequest';
            status?: VerificationRequestStatus | null | undefined;
          }
        | null
        | undefined;
    }>;
  };
};

export type GetMeQueryVariables = Exact<{ [key: string]: never }>;

export type GetMeQuery = {
  __typename?: 'Query';
  getMe: {
    __typename?: 'IUser';
    id: string;
    fullName?: string | null | undefined;
    email?: string | null | undefined;
    avatar?: string | null | undefined;
    userType?: UserType | null | undefined;
  };
};

export type GetNewNotificationCountQueryVariables = Exact<{
  userId: Scalars['String'];
}>;

export type GetNewNotificationCountQuery = {
  __typename?: 'Query';
  getNewNotificationCount: number;
};

export type GetNotificationsQueryVariables = Exact<{
  userId: Scalars['String'];
  first?: InputMaybe<Scalars['Float']>;
  after?: InputMaybe<Scalars['String']>;
}>;

export type GetNotificationsQuery = {
  __typename?: 'Query';
  getNotifications: {
    __typename?: 'PaginationNotification';
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null | undefined;
      hasNextPage: boolean;
    };
    items: Array<{
      __typename?: 'Notification';
      notificationStatus?: NotificationStatus | null | undefined;
      createdAt: any;
      title?: string | null | undefined;
      bodyText?: string | null | undefined;
      relevantId?: string | null | undefined;
      extraObject?: any | null | undefined;
    }>;
  };
};

export type GetOrderQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetOrderQuery = {
  __typename?: 'Query';
  getOrder: {
    __typename?: 'Order';
    id: string;
    code?: number | null | undefined;
    senderId: string;
    driverId?: string | null | undefined;
    status: OrderStatus;
    note?: string | null | undefined;
    finalCost?: number | null | undefined;
    promotionDiscount?: number | null | undefined;
    tip?: number | null | undefined;
    currency: string;
    cancelReason?: string | null | undefined;
    deliveryScheduledAt?: any | null | undefined;
    pickedUpAt?: any | null | undefined;
    completedAt?: any | null | undefined;
    expectedCost?: number | null | undefined;
    createdAt?: any | null | undefined;
    updatedAt?: any | null | undefined;
    promotionId?: string | null | undefined;
    driverReceivedAmount?: number | null | undefined;
    userPaidAmount?: number | null | undefined;
    paymentIntentId?: string | null | undefined;
    packageQuantity?: number | null | undefined;
    userDiscountAmount?: number | null | undefined;
    commissionInfo?: any | null | undefined;
    senderInfo: {
      __typename?: 'UserInfo';
      name: string;
      email?: string | null | undefined;
      avatar?: string | null | undefined;
      phoneNumber?: string | null | undefined;
      note?: string | null | undefined;
      address?: string | null | undefined;
      address2?: string | null | undefined;
    };
    sender?:
      | {
          __typename?: 'User';
          id: string;
          fullName?: string | null | undefined;
          email?: string | null | undefined;
          isVerified?: boolean | null | undefined;
          phoneNumber?: string | null | undefined;
          avatar?: string | null | undefined;
          gender?: Gender | null | undefined;
          address?: any | null | undefined;
          address2?: string | null | undefined;
          dob?: any | null | undefined;
          isActive?: boolean | null | undefined;
          code?: string | null | undefined;
          userVerificationRequest?:
            | {
                __typename?: 'UserVerificationRequest';
                status?: VerificationRequestStatus | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    driver?:
      | {
          __typename?: 'User';
          id: string;
          fullName?: string | null | undefined;
          email?: string | null | undefined;
          isVerified?: boolean | null | undefined;
          phoneNumber?: string | null | undefined;
          avatar?: string | null | undefined;
          gender?: Gender | null | undefined;
          address?: any | null | undefined;
          address2?: string | null | undefined;
          dob?: any | null | undefined;
          isActive?: boolean | null | undefined;
          code?: string | null | undefined;
          userVerificationRequest?:
            | {
                __typename?: 'UserVerificationRequest';
                status?: VerificationRequestStatus | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    packages?:
      | Array<{
          __typename?: 'Package';
          id: string;
          packageCode?: string | null | undefined;
          receiverName?: string | null | undefined;
          receiverAvatar?: string | null | undefined;
          receiverEmail?: string | null | undefined;
          receiverPhoneNumber?: string | null | undefined;
          receiverNote?: string | null | undefined;
          receiverAddress?: string | null | undefined;
          receiverAddress2?: string | null | undefined;
          weight?: number | null | undefined;
          height?: number | null | undefined;
          description: string;
          images?: any | null | undefined;
          completedAt?: any | null | undefined;
        }>
      | null
      | undefined;
    transportation?:
      | Array<{
          __typename?: 'Transportation';
          id: string;
          name: string;
          description?: string | null | undefined;
        }>
      | null
      | undefined;
    payment?:
      | {
          __typename?: 'Payment';
          paymentType: PaymentTypes;
          stripePaymentMethodInfo?: any | null | undefined;
        }
      | null
      | undefined;
  };
};

export type GetOrderAmountReportQueryVariables = Exact<{
  filter: OrderAmountReportDto;
}>;

export type GetOrderAmountReportQuery = {
  __typename?: 'Query';
  getOrderAmountReport: {
    __typename?: 'IOrderAmountReport';
    data: Array<{
      __typename?: 'IOrderAmountData';
      key: any;
      user_paid: number;
      driver_received: number;
    }>;
  };
};

export type GetOrderDashboardQueryVariables = Exact<{ [key: string]: never }>;

export type GetOrderDashboardQuery = {
  __typename?: 'Query';
  getOrderDashboard: { __typename?: 'ICountDashboard'; count: number };
};

export type GetOrderRankingReportQueryVariables = Exact<{
  filter: OrderRankingReportDto;
}>;

export type GetOrderRankingReportQuery = {
  __typename?: 'Query';
  getOrderRankingReport: {
    __typename?: 'IOrderRankingReport';
    data: Array<{
      __typename?: 'IOrderRankingData';
      key: any;
      id?: string | null | undefined;
      email?: string | null | undefined;
      fullname?: string | null | undefined;
      avatar?: string | null | undefined;
      total?: number | null | undefined;
    }>;
  };
};

export type GetOrderReportQueryVariables = Exact<{
  filter: OrderReportDto;
}>;

export type GetOrderReportQuery = {
  __typename?: 'Query';
  getOrderReport: {
    __typename?: 'IOrderReport';
    data: Array<{
      __typename?: 'IOrderDashboardData';
      key: any;
      value: number;
    }>;
  };
};

export type GetOrdersQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetOrdersQuery = {
  __typename?: 'Query';
  getOrders: {
    __typename?: 'IOrders';
    meta: {
      __typename?: 'MetaPaginationInterface';
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      __typename?: 'Order';
      id: string;
      code?: number | null | undefined;
      status: OrderStatus;
      finalCost?: number | null | undefined;
      currency: string;
      deliveryScheduledAt?: any | null | undefined;
      expectedCost?: number | null | undefined;
      createdAt?: any | null | undefined;
      sender?:
        | {
            __typename?: 'User';
            id: string;
            fullName?: string | null | undefined;
            email?: string | null | undefined;
            avatar?: string | null | undefined;
            code?: string | null | undefined;
          }
        | null
        | undefined;
      driver?:
        | {
            __typename?: 'User';
            id: string;
            fullName?: string | null | undefined;
            email?: string | null | undefined;
            avatar?: string | null | undefined;
            code?: string | null | undefined;
          }
        | null
        | undefined;
      transportation?:
        | Array<{
            __typename?: 'Transportation';
            id: string;
            name: string;
            description?: string | null | undefined;
            isActive?: boolean | null | undefined;
          }>
        | null
        | undefined;
    }>;
  };
};

export type GetPackagesQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetPackagesQuery = {
  __typename?: 'Query';
  getPackages: {
    __typename?: 'IPackages';
    meta: {
      __typename?: 'MetaPaginationInterface';
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      __typename?: 'Package';
      id: string;
      receiverName?: string | null | undefined;
      receiverNote?: string | null | undefined;
      receiverEmail?: string | null | undefined;
      receiverAvatar?: string | null | undefined;
      receiverAddress?: string | null | undefined;
      receiverAddress2?: string | null | undefined;
      receiverPhoneNumber?: string | null | undefined;
      weight?: number | null | undefined;
      height?: number | null | undefined;
      description: string;
      images?: any | null | undefined;
      status?: PackageStatus | null | undefined;
      deliveryScheduledAt?: any | null | undefined;
      pickedUpAt?: any | null | undefined;
      acceptedAt?: any | null | undefined;
      cancelledAt?: any | null | undefined;
      completedAt?: any | null | undefined;
      packageCode?: string | null | undefined;
      orderId?: string | null | undefined;
      receiverCoordinates?:
        | { __typename?: 'Coordinate'; longitude: number; latitude: number }
        | null
        | undefined;
      order?:
        | {
            __typename?: 'Order';
            id: string;
            code?: number | null | undefined;
            senderId: string;
            driverId?: string | null | undefined;
            status: OrderStatus;
            transportationTransferId?: string | null | undefined;
            currency: string;
            cancelReason?: string | null | undefined;
            deliveryScheduledAt?: any | null | undefined;
            pickedUpAt?: any | null | undefined;
            completedAt?: any | null | undefined;
            expectedCost?: number | null | undefined;
            finalCost?: number | null | undefined;
            isRating: boolean;
            createdAt?: any | null | undefined;
            updatedAt?: any | null | undefined;
            sender?:
              | {
                  __typename?: 'User';
                  id: string;
                  fullName?: string | null | undefined;
                }
              | null
              | undefined;
            senderInfo: {
              __typename?: 'UserInfo';
              name: string;
              email?: string | null | undefined;
              avatar?: string | null | undefined;
              phoneNumber?: string | null | undefined;
              note?: string | null | undefined;
              address?: string | null | undefined;
              address2?: string | null | undefined;
            };
            coordinates?:
              | {
                  __typename?: 'CoordinateInfor';
                  longitude: number;
                  latitude: number;
                }
              | null
              | undefined;
            driver?:
              | {
                  __typename?: 'User';
                  id: string;
                  fullName?: string | null | undefined;
                  email?: string | null | undefined;
                  isVerified?: boolean | null | undefined;
                  phoneNumber?: string | null | undefined;
                  avatar?: string | null | undefined;
                  gender?: Gender | null | undefined;
                  address?: any | null | undefined;
                  address2?: string | null | undefined;
                  dob?: any | null | undefined;
                  isActive?: boolean | null | undefined;
                  code?: string | null | undefined;
                  preferredLanguage: string;
                  userVerificationId?: string | null | undefined;
                }
              | null
              | undefined;
            transportation?:
              | Array<{
                  __typename?: 'Transportation';
                  id: string;
                  name: string;
                  description?: string | null | undefined;
                }>
              | null
              | undefined;
          }
        | null
        | undefined;
    }>;
  };
};

export type GetPromotionsQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetPromotionsQuery = {
  __typename?: 'Query';
  getPromotions: {
    __typename?: 'IPromotions';
    meta: {
      __typename?: 'MetaPaginationInterface';
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      __typename?: 'IPromotion';
      id: string;
      code: string;
      type?: string | null | undefined;
      amount: number;
      condition?: string | null | undefined;
      description?: string | null | undefined;
      startDate?: any | null | undefined;
      endDate?: any | null | undefined;
      isActive?: boolean | null | undefined;
      userType?: string | null | undefined;
      isReferral: boolean;
    }>;
  };
};

export type GetRevenueDashboardQueryVariables = Exact<{ [key: string]: never }>;

export type GetRevenueDashboardQuery = {
  __typename?: 'Query';
  getRevenueDashboard: {
    __typename?: 'IRevenueDashboard';
    revenue?: number | null | undefined;
  };
};

export type GetTransportationQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetTransportationQuery = {
  __typename?: 'Query';
  getTransportation: {
    __typename?: 'Transportation';
    id: string;
    name: string;
    code?: string | null | undefined;
    logoUrl?: string | null | undefined;
    description?: string | null | undefined;
    isActive?: boolean | null | undefined;
  };
};

export type GetTransportationsQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetTransportationsQuery = {
  __typename?: 'Query';
  getTransportations: {
    __typename?: 'ITransportations';
    meta: {
      __typename?: 'MetaPaginationInterface';
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      __typename?: 'Transportation';
      id: string;
      name: string;
      code?: string | null | undefined;
      logoUrl?: string | null | undefined;
      description?: string | null | undefined;
      isActive?: boolean | null | undefined;
    }>;
  };
};

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  getUser: {
    __typename?: 'IUser';
    id: string;
    fullName?: string | null | undefined;
    email?: string | null | undefined;
    referralCode?: string | null | undefined;
    isVerified?: boolean | null | undefined;
    phoneNumber?: string | null | undefined;
    code?: string | null | undefined;
    avatar?: string | null | undefined;
    gender?: Gender | null | undefined;
    dob?: any | null | undefined;
    address?: any | null | undefined;
    address2?: string | null | undefined;
    isActive?: boolean | null | undefined;
    userType?: UserType | null | undefined;
    createdAt?: any | null | undefined;
    updatedAt?: any | null | undefined;
    userVerificationRequest?:
      | {
          __typename?: 'UserVerificationRequest';
          id: string;
          userId: string;
          status?: VerificationRequestStatus | null | undefined;
        }
      | null
      | undefined;
  };
};

export type GetUserDashboardQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserDashboardQuery = {
  __typename?: 'Query';
  getUserDashboard: { __typename?: 'ICountDashboard'; count: number };
};

export type GetUserReportQueryVariables = Exact<{
  filter: UserReportDto;
}>;

export type GetUserReportQuery = {
  __typename?: 'Query';
  getUserReport: {
    __typename?: 'IUserReport';
    data: Array<{ __typename?: 'IUserDashboardData'; key: any; value: number }>;
  };
};

export type GetUserVerificationRequestsQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetUserVerificationRequestsQuery = {
  __typename?: 'Query';
  getUserVerificationRequests: {
    __typename?: 'IUserVerificationRequests';
    meta: {
      __typename?: 'MetaPaginationInterface';
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      __typename?: 'UserVerificationRequest';
      id: string;
      createdAt?: any | null | undefined;
      updatedAt?: any | null | undefined;
      userId: string;
      governmentPhotoUrls?: any | null | undefined;
      selfiePhotoUrls?: any | null | undefined;
      status?: VerificationRequestStatus | null | undefined;
      cardNumber?: string | null | undefined;
      expiredDate?: any | null | undefined;
    }>;
  };
};

export type GetUsersQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetUsersQuery = {
  __typename?: 'Query';
  getUsers: {
    __typename?: 'IUsers';
    meta: {
      __typename?: 'MetaPaginationInterface';
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      __typename?: 'IUser';
      id: string;
      fullName?: string | null | undefined;
      email?: string | null | undefined;
      referralCode?: string | null | undefined;
      isVerified?: boolean | null | undefined;
      phoneNumber?: string | null | undefined;
      address?: any | null | undefined;
      address2?: string | null | undefined;
      code?: string | null | undefined;
      avatar?: string | null | undefined;
      gender?: Gender | null | undefined;
      dob?: any | null | undefined;
      isActive?: boolean | null | undefined;
      userType?: UserType | null | undefined;
      createdAt?: any | null | undefined;
      updatedAt?: any | null | undefined;
      userVerificationRequest?:
        | {
            __typename?: 'UserVerificationRequest';
            id: string;
            userId: string;
            status?: VerificationRequestStatus | null | undefined;
          }
        | null
        | undefined;
    }>;
  };
};

export type GetVehiclesByUserVerificationIdQueryVariables = Exact<{
  driverVerificationId: Scalars['String'];
  queryParams: QueryFilterDto;
}>;

export type GetVehiclesByUserVerificationIdQuery = {
  __typename?: 'Query';
  getVehiclesByUserVerificationId: {
    __typename?: 'IVehicles';
    meta: {
      __typename?: 'MetaPaginationInterface';
      totalItems: number;
      itemCount: number;
      itemsPerPage: number;
      totalPages: number;
      currentPage: number;
    };
    items: Array<{
      __typename?: 'VehicleVerification';
      id: string;
      transportationId?: string | null | undefined;
      brand?: string | null | undefined;
      yearOfManufacture?: any | null | undefined;
      licensePlate?: string | null | undefined;
      typeVehicle?: string | null | undefined;
      transportation?:
        | { __typename?: 'Transportation'; id: string; name: string }
        | null
        | undefined;
    }>;
  };
};
