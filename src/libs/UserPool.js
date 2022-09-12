import { CognitoUserPool } from "amazon-cognito-identity-js";
const env = process.env;

const poolData = {
  UserPoolId: env.REACT_APP_USER_POOL_ID,
  ClientId: env.REACT_APP_CLIENT_ID,
};

export default new CognitoUserPool(poolData);
