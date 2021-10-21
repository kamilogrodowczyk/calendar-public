const express = require('express');
const Company = require('../models/company');
const router = express.Router();

router.post('/create-company', async (req, res) => {
  const { company } = req.body;
  let newCompany = await Company.findOne({ modificatedName: company.toLowerCase().replace(/\s/g, '') });

  if (newCompany) {
    return res.status(400).send('Firma o tej nazwie już istnieje.');
  }

  try {
    newCompany = new Company({ company, createdAt: new Date().toISOString(), modificatedName: company.toLowerCase().replace(/\s/g, '') });
    await newCompany.save();

    res.status(201).send();
  } catch (e) {
    res.status(500).send('Something went wrong. Try again later');
  }
});

router.get('/company', async (req, res) => {
  try {
    const companyElements = await Company.find({});
    res.json({ companyElements });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.delete('/company/:company', async (req, res) => {
  const company = req.params.company;
  let companyElements = await Company.find({});
  const deleted = companyElements.find((element) => element.company === company);
  if (!deleted) {
    return res.status(400).send('Company with the provided name does not exist.');
  }

  try {
    await Company.deleteOne({ company: company });
    res.json({ companyElements });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
