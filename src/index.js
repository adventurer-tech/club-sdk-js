//@ts-check
import fetch from "@36node/fetch";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    let token = this.token;
    // @ts-ignore
    if (typeof token === "function") token = token();
    if (token) return `Bearer ${token}`;

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = { base: "", token: "" }) {
    this.base = opt.base;
    this.token = opt.token;
  }

  /**
   * records's methods
   */
  records = {
    /**
     * Create record
     *
     * @param {CreateRecordRequest} req createRecord request
     * @returns {Promise<CreateRecordResponse>} The single record Doc
     */
    createRecord: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createRecord");

      return fetch(`${this.base}/records`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List all records
     *
     * @param {ListRecordsRequest} req listRecords request
     * @returns {Promise<ListRecordsResponse>} A paged array of records
     */
    listRecords: req => {
      const { query } = req || {};

      return fetch(`${this.base}/records`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * applications's methods
   */
  applications = {
    /**
     * Create application
     *
     * @param {CreateApplicationRequest} req createApplication request
     * @returns {Promise<CreateApplicationResponse>} The single application Doc
     */
    createApplication: req => {
      const { body } = req || {};

      if (!body)
        throw new Error("requetBody is required for createApplication");

      return fetch(`${this.base}/applications`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List all applications
     *
     * @param {ListApplicationsRequest} req listApplications request
     * @returns {Promise<ListApplicationsResponse>} A paged array of applications
     */
    listApplications: req => {
      const { query } = req || {};

      return fetch(`${this.base}/applications`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find application by id
     *
     * @param {GetApplicationRequest} req getApplication request
     * @returns {Promise<GetApplicationResponse>} The single application Doc
     */
    getApplication: req => {
      const { applicationId } = req || {};

      if (!applicationId)
        throw new Error("applicationId is required for getApplication");

      return fetch(`${this.base}/applications/${applicationId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete application by id
     *
     * @param {DeleteApplicationRequest} req deleteApplication request
     */
    deleteApplication: req => {
      const { applicationId } = req || {};

      if (!applicationId)
        throw new Error("applicationId is required for deleteApplication");

      return fetch(`${this.base}/applications/${applicationId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * approve application
     *
     * @param {ApproveApplicationRequest} req approveApplication request
     * @returns {Promise<ApproveApplicationResponse>} The single application Doc
     */
    approveApplication: req => {
      const { applicationId } = req || {};

      if (!applicationId)
        throw new Error("applicationId is required for approveApplication");

      return fetch(`${this.base}/applications/${applicationId}/!approve`, {
        method: "PUT",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * reject application
     *
     * @param {RejectApplicationRequest} req rejectApplication request
     * @returns {Promise<RejectApplicationResponse>} The single application Doc
     */
    rejectApplication: req => {
      const { applicationId } = req || {};

      if (!applicationId)
        throw new Error("applicationId is required for rejectApplication");

      return fetch(`${this.base}/applications/${applicationId}/!reject`, {
        method: "PUT",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * members's methods
   */
  members = {
    /**
     * Create member
     *
     * @param {CreateMemberRequest} req createMember request
     * @returns {Promise<CreateMemberResponse>} The single member Doc
     */
    createMember: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createMember");

      return fetch(`${this.base}/members`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List all members
     *
     * @param {ListMembersRequest} req listMembers request
     * @returns {Promise<ListMembersResponse>} A paged array of members
     */
    listMembers: req => {
      const { query } = req || {};

      return fetch(`${this.base}/members`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find member by id
     *
     * @param {GetMemberRequest} req getMember request
     * @returns {Promise<GetMemberResponse>} Expected response to a valid request
     */
    getMember: req => {
      const { memberId } = req || {};

      if (!memberId) throw new Error("memberId is required for getMember");

      return fetch(`${this.base}/members/${memberId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update member
     *
     * @param {UpdateMemberRequest} req updateMember request
     * @returns {Promise<UpdateMemberResponse>} The member
     */
    updateMember: req => {
      const { memberId, body } = req || {};

      if (!memberId) throw new Error("memberId is required for updateMember");
      if (!body) throw new Error("requetBody is required for updateMember");

      return fetch(`${this.base}/members/${memberId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete member
     *
     * @param {DeleteMemberRequest} req deleteMember request
     */
    deleteMember: req => {
      const { memberId } = req || {};

      if (!memberId) throw new Error("memberId is required for deleteMember");

      return fetch(`${this.base}/members/${memberId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * get member token
     *
     * @param {GetMemberTokenRequest} req getMemberToken request
     * @returns {Promise<GetMemberTokenResponse>} Expected response to a valid request
     */
    getMemberToken: req => {
      const { memberId } = req || {};

      if (!memberId) throw new Error("memberId is required for getMemberToken");

      return fetch(`${this.base}/members/${memberId}/token`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find member by userId
     *
     * @param {GetMemberByUserRequest} req getMemberByUser request
     * @returns {Promise<GetMemberByUserResponse>} Expected response to a valid request
     */
    getMemberByUser: req => {
      const { userId } = req || {};

      if (!userId) throw new Error("userId is required for getMemberByUser");

      return fetch(`${this.base}/users/${userId}/member`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find member by github
     *
     * @param {GetMemberByGithubRequest} req getMemberByGithub request
     * @returns {Promise<GetMemberByGithubResponse>} Expected response to a valid request
     */
    getMemberByGithub: req => {
      const { github } = req || {};

      if (!github) throw new Error("github is required for getMemberByGithub");

      return fetch(`${this.base}/github/${github}/member`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create invitation
     *
     * @param {CreateInvitationRequest} req createInvitation request
     * @returns {Promise<CreateInvitationResponse>} The single invitation Doc
     */
    createInvitation: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createInvitation");

      return fetch(`${this.base}/invitation`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * favorite's methods
   */
  favorite = {
    /**
     * Create favorite
     *
     * @param {CreateFavoriteRequest} req createFavorite request
     * @returns {Promise<CreateFavoriteResponse>} The single favorite Doc
     */
    createFavorite: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createFavorite");

      return fetch(`${this.base}/favorite`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List all favorites
     *
     * @param {ListFavoritesRequest} req listFavorites request
     * @returns {Promise<ListFavoritesResponse>} A paged array of favorites
     */
    listFavorites: req => {
      const { query } = req || {};

      return fetch(`${this.base}/favorite`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete favorite
     *
     * @param {DeleteFavoriteRequest} req deleteFavorite request
     */
    deleteFavorite: req => {
      const { favoriteId } = req || {};

      if (!favoriteId)
        throw new Error("favoriteId is required for deleteFavorite");

      return fetch(`${this.base}/favorite/${favoriteId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * notification's methods
   */
  notification = {
    /**
     * Create notification
     *
     * @param {CreateNotificationRequest} req createNotification request
     * @returns {Promise<CreateNotificationResponse>} The single notification Doc
     */
    createNotification: req => {
      const { body } = req || {};

      if (!body)
        throw new Error("requetBody is required for createNotification");

      return fetch(`${this.base}/notification`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List all system notifications
     *
     * @param {ListSystemNotificationsRequest} req listSystemNotifications request
     * @returns {Promise<ListSystemNotificationsResponse>} A paged array of notifications
     */
    listSystemNotifications: req => {
      const { query } = req || {};

      return fetch(`${this.base}/notification/system`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List all member notifications
     *
     * @param {ListMemberNotificationsRequest} req listMemberNotifications request
     * @returns {Promise<ListMemberNotificationsResponse>} A paged array of notifications
     */
    listMemberNotifications: req => {
      const { memberId, query } = req || {};

      if (!memberId)
        throw new Error("memberId is required for listMemberNotifications");

      return fetch(`${this.base}/notification/member/${memberId}`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete favorite
     *
     * @param {DeleteNotificationRequest} req deleteNotification request
     */
    deleteNotification: req => {
      const { notificationId } = req || {};

      if (!notificationId)
        throw new Error("notificationId is required for deleteNotification");

      return fetch(`${this.base}/notification/${notificationId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
}
