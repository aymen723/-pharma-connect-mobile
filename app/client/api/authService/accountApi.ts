import axios from "axios";
import { AUTH_SERVICE_URL_V1 } from "../../config/settings";
import { UserProfile } from "../../types/responses/authResponses";

// export const fetchAccountProfile = (accountId: number) => {
//   return axios<UserProfile>({
//     url: `${AUTH_SERVICE_URL_V1}/accounts/${accountId}/profile`,
//     method: "get",
//     headers: {
//       Authorization: `Bearer ` + getLocalAccessToken(),
//     },
//   });
// };
