const Ticket = require("../models/tickets.model");

const getTicket = async (req, res) => {
  try {
    const response = await Ticket.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: "failure", message: error.message });
  }
};
module.exports = { getTicket };
