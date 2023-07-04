const sequlize = require("../config/dbConfig");
const {authCluster} = require("../models");
const { authSchema, loginSchema } = require("../utils/schema");
const {generateAccessToken,
  generateRefreshToken} = require("../utils/jsonwebtoken")


const authRegister = async(req, res) => {
    try {
        let authBodyData = await authSchema.validate(req.body);
        console.log(authBodyData)
        let auth = await authCluster.create(authBodyData);
        return res.status(200).json({
          message: "admin register successfully",
          result: true,
          data: auth
        })
    
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          message: error.message
        })
    
      }
}


const authLogin = (req, res) => {
  loginSchema.validate(req.body)
    .then(async (validatedData) => {
      let authData = await authCluster.findOne({
        email: validatedData.email,
      });

      if (authData !== null) {
        const passwordMatch = await authData.comparePassword(validatedData.password, authData.password);
        if (passwordMatch) {
          const token = generateAccessToken(authData);
          const refreshToken = generateRefreshToken(authData);
          res.status(200).json({
            message: 'Logged in successfully!',
            token: token,
            refreshToken: refreshToken,
            auth: authData,
          });
        } else {
          res.status(403).json({
            error: 'Invalid credentials!',
          });
        }
      } else {
        res.status(404).json({
          error: 'An account with the given credentials not found!',
        });
      }
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });
};

module.exports = { authRegister, authLogin }
