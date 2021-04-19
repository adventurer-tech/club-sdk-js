declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  applications: ApplicationsAPI;
}

export interface Options {
  base?: string;
  token?: string | (() => string);
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

export interface CreateApplicationRequest {
  body: {
    /**
     * 申请的类型
     */
    type: "REPOSITORY" | "PROJECT";
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
    /**
     * 申请的类型
     */
    type?: "REPOSITORY" | "PROJECT";
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
    /**
     * 申请的状态
     */
    ref?: "APPLYING" | "APPROVED" | "REJECTED";
  };
}
export interface ListApplicationsResponse {
  body: ({
    /**
     * 申请的类型
     */
    type?: "REPOSITORY" | "PROJECT";
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
    /**
     * 申请的类型
     */
    type?: "REPOSITORY" | "PROJECT";
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
    /**
     * 申请的类型
     */
    type?: "REPOSITORY" | "PROJECT";
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
    /**
     * 申请的类型
     */
    type?: "REPOSITORY" | "PROJECT";
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
export type ObjectId = string;

/**
 * 申请的类型
 */
export type ApplicationTypeEnum = "REPOSITORY" | "PROJECT";

/**
 * 申请的状态
 */
export type ApplicationStateEnum = "APPLYING" | "APPROVED" | "REJECTED";

export type DateTime = Date;

export interface ApplicationDoc {
  /**
   * 申请的类型
   */
  type?: "REPOSITORY" | "PROJECT";
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
  /**
   * 申请的类型
   */
  type?: "REPOSITORY" | "PROJECT";
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
  /**
   * 申请的类型
   */
  type: "REPOSITORY" | "PROJECT";
  /**
   * 关联的资源，比如 project, repository 的 id 等
   */
  ref: string;
  /**
   * 用户在第三方的标识 比如github的username
   */
  oid?: string;
}

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