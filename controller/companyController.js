const format = require('pg-format')
const { client } = require('../db')

const InsertingData = async (req, res) => {
  try {
    const resp = await client.query(
      `INSERT INTO Company(C_id,C_name) VALUES (${req.body.C_id},'${req.body.C_name}');
      
      INSERT INTO Employee (E_id,name,wage,position,C_id) VALUES (${req.body.E_id[0]},'${req.body.name[0]}','${req.body.wage[0]}','${req.body.position[0]}',${req.body.C_id}),
      (${req.body.E_id[1]},'${req.body.name[1]}','${req.body.wage[1]}','${req.body.position[1]}',${req.body.C_id});
      `
    )
    console.log(`Added an employee details with the name ${req.body.name}`)
    res.status(200).json({
      response: resp,
      message: 'Data inserted into db successfully!....'
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      response: null,
      message: 'Failed!.....'
    })
  }
}
const fetchOneRecord = async (req, res) => {
  try {
    const resp = await client.query(
      `SELECT * FROM Company NATURAL JOIN Employee
            WHERE E_id = ${req.body.E_id}`
    )
    res.status(200).json({
      response: resp,
      message: 'Data inserted into db successfully!....'
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      response: null,
      message: 'Failed to fetch the records!...'
    })
  }
}
const fetchAllRecords = async (req, res) => {
  try {
    const resp = await client.query(
      `SELECT * FROM Company NATURAL JOIN Employee`
    )
    res.status(200).json({
      response: resp,
      message: 'Data inserted into db successfully!....'
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      response: null,
      message: 'Failed to fetch the records!...'
    })
  }
}
const modifyCompanyData = async (req, res) => {
  try {
    const resp = await client.query(
      `UPDATE Company SET C_id=${req.body.C_id}, C_name='${req.body.C_name}' WHERE C_id=${req.body.C_id};`
    )
    console.log(resp)
    res.status(200).json({
      response: resp,
      message: 'Data Updated successfully!....'
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      response: null,
      message: 'Failed to update'
    })
  }
}
const updateEmployeeData = async (req, res) => {
  try {
    const resp = await client.query(
      `UPDATE Employee SET E_id=${req.body.E_id},name='${req.body.name}',position='${req.body.position}',wage=${req.body.wage} WHERE E_id=${req.body.E_id}`
    )
    console.log(resp)
    res.status(200).json({
      response: resp,
      message: 'Data Updated successfully!....'
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      response: null,
      message: 'Failed to update'
    })
  }
}
const removeData = async (req, res) => {
  try {
    const resp = await client.query(
      `DELETE  FROM Employee  WHERE C_id = ${req.body.C_id};DELETE  FROM Company WHERE C_id = ${req.body.C_id};`
    )
    console.log(resp)
    res.status(200).json({
      response: resp,
      message: 'Records deleted successfully!...'
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      response: null,
      message: 'Failed!...'
    })
  }
}

module.exports = {
  InsertingData,
  fetchAllRecords,
  fetchOneRecord,
  modifyCompanyData,
  updateEmployeeData,
  removeData
}
