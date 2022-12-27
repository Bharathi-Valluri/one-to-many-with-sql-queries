const company_controller = require('../controller/companyController')
const router = require('express').Router()
router.post('/insertTableData', company_controller.InsertingData)
router.get('/getAllRecords', company_controller.fetchAllRecords)
router.get('/getOneRecord', company_controller.fetchOneRecord)
router.put('/updateCompanyRecords', company_controller.modifyCompanyData)
router.put('/updateEmployeeRecords', company_controller.updateEmployeeData)
router.delete('/deleteRecords', company_controller.removeData)

module.exports = router
