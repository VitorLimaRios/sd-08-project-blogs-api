class Error400 extends Error {
  constructor(message) {
    super(message);
    this.code = 400;
  }
}

module.exports = Error400;