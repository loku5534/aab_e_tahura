const { Staff } = require("../models");
const { staffSchema } = require("../utils/schema");
// const { uploadFile, deleteFile } = require("../s3");
// const fs = require("fs");
// const util = require("util");
// const unlinkFile = util.promisify(fs.unlink);

const staffRegister = async (req, res) => {
    try {

        let staffBodyData = await staffSchema.validate(req.body);
        let staffEmail = await Staff.findOne({
            email: staffBodyData.email,
          });
        if (staffEmail !== null) {
            return res.status(409).json({
              message: "Staff already exists with same email!",
            });
          }
          else {
      
            let staffCnic = await Staff.findOne({ cnic: staffBodyData.cnic });
            if (staffCnic !== null) {
              return res.status(409).json({
                message: "Cnic already registered against an Staff Account."
              });
            };
        }
        // let file = req.file;
        // if (file) {
        //     const result = await uploadFile(file);
        //     key = result.key;
        //     await unlinkFile(file.path);
        // }
        let staff = await Staff.create(staffBodyData)
        return res.status(200).json({
            message: "Staff Register Successfully",
            Result: true,
            Data: staff
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })

    }
}


const staffUpdateById = async (req, res) => {
    try {

        let getId = req.params.id;
        console.log(getId)
        let staffBodyData = await staffSchema.validate(req.body);
        let staff = await Staff.findOne({ _id: getId })
        if (staff == null) {
            return res.status(404).json({
                message: "Staff not found against Id"
            })
        } else {
            let staffUpdate = await Staff.updateOne({ _id: getId }, { $set: staffBodyData }) // Add $set operator to update specific fields
            return res.status(200).json({
                message: "Staff Update Successfully",
                Result: true,
                Data: staffUpdate
            })
        }


    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
}

const staffGetAll = async (req, res) => {
    try {
        let staff = await Staff.find()
        if (staff.length == 0) {
            return res.status(404).json({
                message: "staff not found"
            })
        }
        if (staff.length >= 1) {
            return res.status(200).json({
                message: "staff found successfully",
                Result: true,
                Data: staff
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


const staffGetbyId = async (req, res) => {
    try {
        let getId = req.params.id;
        let staff = await Staff.findById({ _id: getId })
        if (staff == null) {
            return res.status(404).json({
                message: "staff not exist against this Id"
            })
        }
        if (staff !== null) {
            return res.status(200).json({
                message: "staff successfully found against this Id",
                result: true,
                Data: staff
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


const staffDeleteById = async (req, res) => {
    try {
        let getId = req.params.id;
        let staffDelete = await Staff.findByIdAndDelete({ _id: getId })
        if (staffDelete == null) {
            return res.status(404).json({
                message: "staff not exist against this Id"
            })
        }
        if (staffDelete !== null) {
            return res.status(200).json({
                message: "staff successfully Delete",
                result: true,
                Data: staffDelete
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


module.exports = { staffRegister, staffGetAll, staffGetbyId, staffDeleteById, staffUpdateById }