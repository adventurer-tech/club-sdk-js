declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  records: RecordsAPI;
  applications: ApplicationsAPI;
  members: MembersAPI;
  favorite: FavoriteAPI;
  notification: NotificationAPI;
}

export interface Options {
  base?: string;
  token?: string | (() => string);
}

export interface RecordsAPI {
  /**
   * Create record
   */
  createRecord(req: CreateRecordRequest): Promise<CreateRecordResponse>;
  /**
   * List all records
   */
  listRecords(req: ListRecordsRequest): Promise<ListRecordsResponse>;
}
export interface ApplicationsAPI {
  /**
   * Create application
   */
  createApplication(req: CreateApplicationRequest): Promise<CreateApplicationResponse>;
  /**
   * List all applications
   */
  listApplications(req: ListApplicationsRequest): Promise<ListApplicationsResponse>;
  /**
   * Find application by id
   */
  getApplication(req: GetApplicationRequest): Promise<GetApplicationResponse>;
  /**
   * Delete application by id
   */
  deleteApplication(req: DeleteApplicationRequest): Promise<void>;
  /**
   * approve application
   */
  approveApplication(req: ApproveApplicationRequest): Promise<ApproveApplicationResponse>;
  /**
   * reject application
   */
  rejectApplication(req: RejectApplicationRequest): Promise<RejectApplicationResponse>;
}
export interface MembersAPI {
  /**
   * Create member
   */
  createMember(req: CreateMemberRequest): Promise<CreateMemberResponse>;
  /**
   * List all members
   */
  listMembers(req: ListMembersRequest): Promise<ListMembersResponse>;
  /**
   * Find member by id
   */
  getMember(req: GetMemberRequest): Promise<GetMemberResponse>;
  /**
   * Update member
   */
  updateMember(req: UpdateMemberRequest): Promise<UpdateMemberResponse>;
  /**
   * Delete member
   */
  deleteMember(req: DeleteMemberRequest): Promise<void>;
  /**
   * Find member by userId
   */
  getMemberByUser(req: GetMemberByUserRequest): Promise<GetMemberByUserResponse>;
  /**
   * Find member by github
   */
  getMemberByGithub(req: GetMemberByGithubRequest): Promise<GetMemberByGithubResponse>;
  /**
   * Create invitation
   */
  createInvitation(req: CreateInvitationRequest): Promise<CreateInvitationResponse>;
}
export interface FavoriteAPI {
  /**
   * Create favorite
   */
  createFavorite(req: CreateFavoriteRequest): Promise<CreateFavoriteResponse>;
  /**
   * List all favorites
   */
  listFavorites(req: ListFavoritesRequest): Promise<ListFavoritesResponse>;
  /**
   * Delete favorite
   */
  deleteFavorite(req: DeleteFavoriteRequest): Promise<void>;
}
export interface NotificationAPI {
  /**
   * Create notification
   */
  createNotification(req: CreateNotificationRequest): Promise<CreateNotificationResponse>;
  /**
   * List all system notifications
   */
  listSystemNotifications(
    req: ListSystemNotificationsRequest
  ): Promise<ListSystemNotificationsResponse>;
  /**
   * List all member notifications
   */
  listMemberNotifications(
    req: ListMemberNotificationsRequest
  ): Promise<ListMemberNotificationsResponse>;
  /**
   * Delete favorite
   */
  deleteNotification(req: DeleteNotificationRequest): Promise<void>;
}

export interface CreateRecordRequest {
  /**
   * 记录
   */
  body: {
    /**
     * 关联的项目
     */
    project?: string;
    member?: string;
    /**
     * 关联的ticket
     */
    ticket?: string | null;
    /**
     * 关联的ticket type
     */
    ticketType?: string;
    /**
     * 关联的milestone
     */
    milestone?: string | null;
    /**
     * 时间
     */
    at?: Date;
    /**
     * 记录内容
     */
    content?: string;
    /**
     * 记录类型
     */
    type?: string;
    /**
     * 记录标签
     */
    tags?: string[];
    /**
     * 事件
     */
    event?: string;
    /**
     * 关联的用户
     */
    user?: string;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  };
}
export interface CreateRecordResponse {
  /**
   * 记录
   */
  body: {
    /**
     * 关联的项目
     */
    project?: string;
    member?: string;
    /**
     * 关联的ticket
     */
    ticket?: string | null;
    /**
     * 关联的ticket type
     */
    ticketType?: string;
    /**
     * 关联的milestone
     */
    milestone?: string | null;
    /**
     * 时间
     */
    at?: Date;
    /**
     * 记录内容
     */
    content?: string;
    /**
     * 记录类型
     */
    type?: string;
    /**
     * 记录标签
     */
    tags?: string[];
    /**
     * 事件
     */
    event?: string;
    /**
     * 关联的用户
     */
    user?: string;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListRecordsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    user?: string;
    ref?: string;
    state?: string;
    project?: string;
    ticket?: string;
    ticketType?: string;
    type?: string[];
    tags?: string[];
    milestone?: string;
  };
}
export interface ListRecordsResponse {
  body: ({
    /**
     * 关联的项目
     */
    project?: string;
    member?: string;
    /**
     * 关联的ticket
     */
    ticket?: string | null;
    /**
     * 关联的ticket type
     */
    ticketType?: string;
    /**
     * 关联的milestone
     */
    milestone?: string | null;
    /**
     * 时间
     */
    at?: Date;
    /**
     * 记录内容
     */
    content?: string;
    /**
     * 记录类型
     */
    type?: string;
    /**
     * 记录标签
     */
    tags?: string[];
    /**
     * 事件
     */
    event?: string;
    /**
     * 关联的用户
     */
    user?: string;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateApplicationRequest {
  body: {
    type: string;
    /**
     * 关联的资源，比如 project, repository 的 id 等
     */
    ref: string;
    /**
     * 用户在第三方的标识 比如github的username
     */
    oid?: string;
  };
}
export interface CreateApplicationResponse {
  /**
   * 申请
   */
  body: {
    type?: string;
    /**
     * 申请的状态
     */
    state?: "APPLYING" | "APPROVED" | "REJECTED";
    approveAt?: Date;
    /**
     * 同意人
     */
    approveBy?: string;
    rejectAt?: Date;
    /**
     * 拒绝人
     */
    rejectBy?: string;
    /**
     * 关联的资源，比如 project, repository 的 id 等
     */
    ref?: string;
    /**
     * 用户在第三方的标识 比如github的username
     */
    oid?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListApplicationsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    createBy?: string;
    ref?: string;
    type?: string[];
    /**
     * 申请的状态
     */
    state?: "APPLYING" | "APPROVED" | "REJECTED";
  };
}
export interface ListApplicationsResponse {
  body: ({
    type?: string;
    /**
     * 申请的状态
     */
    state?: "APPLYING" | "APPROVED" | "REJECTED";
    approveAt?: Date;
    /**
     * 同意人
     */
    approveBy?: string;
    rejectAt?: Date;
    /**
     * 拒绝人
     */
    rejectBy?: string;
    /**
     * 关联的资源，比如 project, repository 的 id 等
     */
    ref?: string;
    /**
     * 用户在第三方的标识 比如github的username
     */
    oid?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface GetApplicationRequest {
  applicationId: string;
}
export interface GetApplicationResponse {
  /**
   * 申请
   */
  body: {
    type?: string;
    /**
     * 申请的状态
     */
    state?: "APPLYING" | "APPROVED" | "REJECTED";
    approveAt?: Date;
    /**
     * 同意人
     */
    approveBy?: string;
    rejectAt?: Date;
    /**
     * 拒绝人
     */
    rejectBy?: string;
    /**
     * 关联的资源，比如 project, repository 的 id 等
     */
    ref?: string;
    /**
     * 用户在第三方的标识 比如github的username
     */
    oid?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteApplicationRequest {
  applicationId: string;
}
export interface ApproveApplicationRequest {
  applicationId: string;
}
export interface ApproveApplicationResponse {
  /**
   * 申请
   */
  body: {
    type?: string;
    /**
     * 申请的状态
     */
    state?: "APPLYING" | "APPROVED" | "REJECTED";
    approveAt?: Date;
    /**
     * 同意人
     */
    approveBy?: string;
    rejectAt?: Date;
    /**
     * 拒绝人
     */
    rejectBy?: string;
    /**
     * 关联的资源，比如 project, repository 的 id 等
     */
    ref?: string;
    /**
     * 用户在第三方的标识 比如github的username
     */
    oid?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface RejectApplicationRequest {
  applicationId: string;
}
export interface RejectApplicationResponse {
  /**
   * 申请
   */
  body: {
    type?: string;
    /**
     * 申请的状态
     */
    state?: "APPLYING" | "APPROVED" | "REJECTED";
    approveAt?: Date;
    /**
     * 同意人
     */
    approveBy?: string;
    rejectAt?: Date;
    /**
     * 拒绝人
     */
    rejectBy?: string;
    /**
     * 关联的资源，比如 project, repository 的 id 等
     */
    ref?: string;
    /**
     * 用户在第三方的标识 比如github的username
     */
    oid?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface CreateMemberRequest {
  body: {
    user: string;
    ns?: string;
    github?: string;
    /**
     * 名字
     */
    name: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 身份证号
     */
    idCard?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankCard?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  };
}
export interface CreateMemberResponse {
  /**
   * 成员
   */
  body: {
    /**
     * 关联用户
     */
    user?: string;
    /**
     * 名字
     */
    name?: string;
    ns?: string;
    /**
     * 工号
     */
    workNumber?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 身份证号
     */
    idCard?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankCard?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 用户github
     */
    github?: string;
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 钱包地址
     */
    wallet?: string;
    /**
     * 经验值
     */
    exp?: number;
    /**
     * 经验账号地址
     */
    expAccount?: string;
    /**
     * 当前已占用的token
     */
    token?: number;
    /**
     * 令牌账号地址
     */
    tokenAccount?: string;
    /**
     * 最大token数
     */
    maxToken?: number;
    /**
     * 等级
     */
    level?: number;
    /**
     * 下一等级经验值
     */
    nextLevelExp?: number;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListMembersRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    name_like?: string;
    ns?: string;
    position?: string;
    workNumber?: string;
  };
}
export interface ListMembersResponse {
  body: ({
    /**
     * 关联用户
     */
    user?: string;
    /**
     * 名字
     */
    name?: string;
    ns?: string;
    /**
     * 工号
     */
    workNumber?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 身份证号
     */
    idCard?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankCard?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 用户github
     */
    github?: string;
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 钱包地址
     */
    wallet?: string;
    /**
     * 经验值
     */
    exp?: number;
    /**
     * 经验账号地址
     */
    expAccount?: string;
    /**
     * 当前已占用的token
     */
    token?: number;
    /**
     * 令牌账号地址
     */
    tokenAccount?: string;
    /**
     * 最大token数
     */
    maxToken?: number;
    /**
     * 等级
     */
    level?: number;
    /**
     * 下一等级经验值
     */
    nextLevelExp?: number;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface GetMemberRequest {
  memberId: string;
}
export interface GetMemberResponse {
  /**
   * 成员
   */
  body: {
    /**
     * 关联用户
     */
    user?: string;
    /**
     * 名字
     */
    name?: string;
    ns?: string;
    /**
     * 工号
     */
    workNumber?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 身份证号
     */
    idCard?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankCard?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 用户github
     */
    github?: string;
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 钱包地址
     */
    wallet?: string;
    /**
     * 经验值
     */
    exp?: number;
    /**
     * 经验账号地址
     */
    expAccount?: string;
    /**
     * 当前已占用的token
     */
    token?: number;
    /**
     * 令牌账号地址
     */
    tokenAccount?: string;
    /**
     * 最大token数
     */
    maxToken?: number;
    /**
     * 等级
     */
    level?: number;
    /**
     * 下一等级经验值
     */
    nextLevelExp?: number;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateMemberRequest {
  memberId: string;
  body: {
    /**
     * 名字
     */
    name?: string;
    ns?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 身份证号
     */
    idCard?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankCard?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 只有 MEMBER_MANAGER 可以更新
     */
    level?: string;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  };
}
export interface UpdateMemberResponse {
  /**
   * 成员
   */
  body: {
    /**
     * 关联用户
     */
    user?: string;
    /**
     * 名字
     */
    name?: string;
    ns?: string;
    /**
     * 工号
     */
    workNumber?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 身份证号
     */
    idCard?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankCard?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 用户github
     */
    github?: string;
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 钱包地址
     */
    wallet?: string;
    /**
     * 经验值
     */
    exp?: number;
    /**
     * 经验账号地址
     */
    expAccount?: string;
    /**
     * 当前已占用的token
     */
    token?: number;
    /**
     * 令牌账号地址
     */
    tokenAccount?: string;
    /**
     * 最大token数
     */
    maxToken?: number;
    /**
     * 等级
     */
    level?: number;
    /**
     * 下一等级经验值
     */
    nextLevelExp?: number;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteMemberRequest {
  memberId: string;
}
export interface GetMemberByUserRequest {
  userId: string;
}
export interface GetMemberByUserResponse {
  /**
   * 成员
   */
  body: {
    /**
     * 关联用户
     */
    user?: string;
    /**
     * 名字
     */
    name?: string;
    ns?: string;
    /**
     * 工号
     */
    workNumber?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 身份证号
     */
    idCard?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankCard?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 用户github
     */
    github?: string;
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 钱包地址
     */
    wallet?: string;
    /**
     * 经验值
     */
    exp?: number;
    /**
     * 经验账号地址
     */
    expAccount?: string;
    /**
     * 当前已占用的token
     */
    token?: number;
    /**
     * 令牌账号地址
     */
    tokenAccount?: string;
    /**
     * 最大token数
     */
    maxToken?: number;
    /**
     * 等级
     */
    level?: number;
    /**
     * 下一等级经验值
     */
    nextLevelExp?: number;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface GetMemberByGithubRequest {
  github: string;
}
export interface GetMemberByGithubResponse {
  /**
   * 成员
   */
  body: {
    /**
     * 关联用户
     */
    user?: string;
    /**
     * 名字
     */
    name?: string;
    ns?: string;
    /**
     * 工号
     */
    workNumber?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 身份证号
     */
    idCard?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankCard?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 用户github
     */
    github?: string;
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 钱包地址
     */
    wallet?: string;
    /**
     * 经验值
     */
    exp?: number;
    /**
     * 经验账号地址
     */
    expAccount?: string;
    /**
     * 当前已占用的token
     */
    token?: number;
    /**
     * 令牌账号地址
     */
    tokenAccount?: string;
    /**
     * 最大token数
     */
    maxToken?: number;
    /**
     * 等级
     */
    level?: number;
    /**
     * 下一等级经验值
     */
    nextLevelExp?: number;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface CreateInvitationRequest {
  /**
   * 成员邀请
   */
  body: {
    /**
     * 被邀请人的邮箱
     */
    email: string;
  };
}
export interface CreateInvitationResponse {
  /**
   * 邀请
   */
  body: {
    /**
     * 被邀请人的邮箱
     */
    email: string;
    /**
     * 邀请码
     */
    code?: string;
    expireAt?: Date;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface CreateFavoriteRequest {
  body: {
    /**
     * 成员
     */
    member: string;
    /**
     * 收藏的ticket
     */
    ticket?: string;
    /**
     * 收藏的project
     */
    project?: string;
    /**
     * 收藏类型，比如 project | ticket
     */
    type: string;
  };
}
export interface CreateFavoriteResponse {
  /**
   * 收藏
   */
  body: {
    /**
     * 成员
     */
    member: string;
    /**
     * 收藏的ticket
     */
    ticket?: string;
    /**
     * 收藏的project
     */
    project?: string;
    /**
     * 收藏类型，比如 project | ticket
     */
    type: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListFavoritesRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    project?: string;
    ticket?: string;
    state?: string;
    type?: string[];
  };
}
export interface ListFavoritesResponse {
  body: ({
    /**
     * 成员
     */
    member: string;
    /**
     * 收藏的ticket
     */
    ticket?: string;
    /**
     * 收藏的project
     */
    project?: string;
    /**
     * 收藏类型，比如 project | ticket
     */
    type: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface DeleteFavoriteRequest {
  favoriteId: string;
}
export interface CreateNotificationRequest {
  /**
   * 通知
   */
  body: {
    member?: string;
    content: string;
    type: string;
    read?: boolean;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
    oid: string;
    /**
     * 标签
     */
    tags?: string[];
  };
}
export interface CreateNotificationResponse {
  /**
   * 通知
   */
  body: {
    member?: string;
    content: string;
    type: string;
    read?: boolean;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
    oid: string;
    /**
     * 标签
     */
    tags?: string[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListSystemNotificationsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
  };
}
export interface ListSystemNotificationsResponse {
  body: ({
    member?: string;
    content: string;
    type: string;
    read?: boolean;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
    oid: string;
    /**
     * 标签
     */
    tags?: string[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface ListMemberNotificationsRequest {
  memberId: string;
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
  };
}
export interface ListMemberNotificationsResponse {
  body: ({
    member?: string;
    content: string;
    type: string;
    read?: boolean;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
    oid: string;
    /**
     * 标签
     */
    tags?: string[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface DeleteNotificationRequest {
  notificationId: string;
}
export type ObjectId = string;

export type NullableObjectId2 = NullableObjectId | NullableObjectId1;
export type NullableObjectId = string;
export type NullableObjectId1 = null;

/**
 * 申请的状态
 */
export type ApplicationStateEnum = "APPLYING" | "APPROVED" | "REJECTED";

export type DateTime = Date;

export interface ApplicationDoc {
  type?: string;
  /**
   * 申请的状态
   */
  state?: "APPLYING" | "APPROVED" | "REJECTED";
  approveAt?: Date;
  /**
   * 同意人
   */
  approveBy?: string;
  rejectAt?: Date;
  /**
   * 拒绝人
   */
  rejectBy?: string;
  /**
   * 关联的资源，比如 project, repository 的 id 等
   */
  ref?: string;
  /**
   * 用户在第三方的标识 比如github的username
   */
  oid?: string;
}

/**
 * 申请
 */
export type Application = {
  type?: string;
  /**
   * 申请的状态
   */
  state?: "APPLYING" | "APPROVED" | "REJECTED";
  approveAt?: Date;
  /**
   * 同意人
   */
  approveBy?: string;
  rejectAt?: Date;
  /**
   * 拒绝人
   */
  rejectBy?: string;
  /**
   * 关联的资源，比如 project, repository 的 id 等
   */
  ref?: string;
  /**
   * 用户在第三方的标识 比如github的username
   */
  oid?: string;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

export interface ApplicationCreateDoc {
  type: string;
  /**
   * 关联的资源，比如 project, repository 的 id 等
   */
  ref: string;
  /**
   * 用户在第三方的标识 比如github的username
   */
  oid?: string;
}

/**
 * 记录
 */
export interface RecordDoc {
  /**
   * 关联的项目
   */
  project?: string;
  member?: string;
  /**
   * 关联的ticket
   */
  ticket?: string | null;
  /**
   * 关联的ticket type
   */
  ticketType?: string;
  /**
   * 关联的milestone
   */
  milestone?: string | null;
  /**
   * 时间
   */
  at?: Date;
  /**
   * 记录内容
   */
  content?: string;
  /**
   * 记录类型
   */
  type?: string;
  /**
   * 记录标签
   */
  tags?: string[];
  /**
   * 事件
   */
  event?: string;
  /**
   * 关联的用户
   */
  user?: string;
  /**
   * 额外数据
   */
  extra?: {
    key?: string;
    value?: string;
  }[];
}

/**
 * 记录
 */
export type Record = {
  /**
   * 关联的项目
   */
  project?: string;
  member?: string;
  /**
   * 关联的ticket
   */
  ticket?: string | null;
  /**
   * 关联的ticket type
   */
  ticketType?: string;
  /**
   * 关联的milestone
   */
  milestone?: string | null;
  /**
   * 时间
   */
  at?: Date;
  /**
   * 记录内容
   */
  content?: string;
  /**
   * 记录类型
   */
  type?: string;
  /**
   * 记录标签
   */
  tags?: string[];
  /**
   * 事件
   */
  event?: string;
  /**
   * 关联的用户
   */
  user?: string;
  /**
   * 额外数据
   */
  extra?: {
    key?: string;
    value?: string;
  }[];
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

export interface FavoriteDoc {
  /**
   * 成员
   */
  member: string;
  /**
   * 收藏的ticket
   */
  ticket?: string;
  /**
   * 收藏的project
   */
  project?: string;
  /**
   * 收藏类型，比如 project | ticket
   */
  type: string;
}

/**
 * 收藏
 */
export type Favorite = {
  /**
   * 成员
   */
  member: string;
  /**
   * 收藏的ticket
   */
  ticket?: string;
  /**
   * 收藏的project
   */
  project?: string;
  /**
   * 收藏类型，比如 project | ticket
   */
  type: string;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 通知
 */
export interface NotificationDoc {
  member?: string;
  content: string;
  type: string;
  read?: boolean;
  /**
   * 额外数据
   */
  extra?: {
    key?: string;
    value?: string;
  }[];
  oid: string;
  /**
   * 标签
   */
  tags?: string[];
}

/**
 * 通知
 */
export type Notification = {
  member?: string;
  content: string;
  type: string;
  read?: boolean;
  /**
   * 额外数据
   */
  extra?: {
    key?: string;
    value?: string;
  }[];
  oid: string;
  /**
   * 标签
   */
  tags?: string[];
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

export interface MemberCreateBody {
  user: string;
  ns?: string;
  github?: string;
  /**
   * 名字
   */
  name: string;
  /**
   * 职位
   */
  position?: string;
  /**
   * 手机号
   */
  phone?: string;
  /**
   * 身份证号
   */
  idCard?: string;
  /**
   * 开户行
   */
  bank?: string;
  /**
   * 银行卡号
   */
  bankCard?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 额外数据
   */
  extra?: {
    key?: string;
    value?: string;
  }[];
}

export interface MemberUpdateBody {
  /**
   * 名字
   */
  name?: string;
  ns?: string;
  /**
   * 职位
   */
  position?: string;
  /**
   * 手机号
   */
  phone?: string;
  /**
   * 身份证号
   */
  idCard?: string;
  /**
   * 开户行
   */
  bank?: string;
  /**
   * 银行卡号
   */
  bankCard?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 只有 MEMBER_MANAGER 可以更新
   */
  level?: string;
  /**
   * 额外数据
   */
  extra?: {
    key?: string;
    value?: string;
  }[];
}

/**
 * 成员
 */
export interface MemberDoc {
  /**
   * 关联用户
   */
  user?: string;
  /**
   * 名字
   */
  name?: string;
  ns?: string;
  /**
   * 工号
   */
  workNumber?: string;
  /**
   * 职位
   */
  position?: string;
  /**
   * 手机号
   */
  phone?: string;
  /**
   * 身份证号
   */
  idCard?: string;
  /**
   * 开户行
   */
  bank?: string;
  /**
   * 银行卡号
   */
  bankCard?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 用户github
   */
  github?: string;
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 钱包地址
   */
  wallet?: string;
  /**
   * 经验值
   */
  exp?: number;
  /**
   * 经验账号地址
   */
  expAccount?: string;
  /**
   * 当前已占用的token
   */
  token?: number;
  /**
   * 令牌账号地址
   */
  tokenAccount?: string;
  /**
   * 最大token数
   */
  maxToken?: number;
  /**
   * 等级
   */
  level?: number;
  /**
   * 下一等级经验值
   */
  nextLevelExp?: number;
  /**
   * 额外数据
   */
  extra?: {
    key?: string;
    value?: string;
  }[];
}

/**
 * 成员
 */
export type Member = {
  /**
   * 关联用户
   */
  user?: string;
  /**
   * 名字
   */
  name?: string;
  ns?: string;
  /**
   * 工号
   */
  workNumber?: string;
  /**
   * 职位
   */
  position?: string;
  /**
   * 手机号
   */
  phone?: string;
  /**
   * 身份证号
   */
  idCard?: string;
  /**
   * 开户行
   */
  bank?: string;
  /**
   * 银行卡号
   */
  bankCard?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 用户github
   */
  github?: string;
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 钱包地址
   */
  wallet?: string;
  /**
   * 经验值
   */
  exp?: number;
  /**
   * 经验账号地址
   */
  expAccount?: string;
  /**
   * 当前已占用的token
   */
  token?: number;
  /**
   * 令牌账号地址
   */
  tokenAccount?: string;
  /**
   * 最大token数
   */
  maxToken?: number;
  /**
   * 等级
   */
  level?: number;
  /**
   * 下一等级经验值
   */
  nextLevelExp?: number;
  /**
   * 额外数据
   */
  extra?: {
    key?: string;
    value?: string;
  }[];
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 成员邀请
 */
export interface InvitationCreateBody {
  /**
   * 被邀请人的邮箱
   */
  email: string;
}

/**
 * 邀请
 */
export interface InvitationDoc {
  /**
   * 被邀请人的邮箱
   */
  email: string;
  /**
   * 邀请码
   */
  code?: string;
  expireAt?: Date;
}

/**
 * 邀请
 */
export type Invitation = {
  /**
   * 被邀请人的邮箱
   */
  email: string;
  /**
   * 邀请码
   */
  code?: string;
  expireAt?: Date;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 额外数据
 */
export type Extra = {
  key?: string;
  value?: string;
}[];

export interface MongoDefault {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
}

export interface Err {
  code?: string;
  type?: string;
  message: boolean;
  name: string;
  details?: {
    keyword?: string;
    message?: string;
    path?: string;
    value?: string;
  }[];
}

export = SDK;
