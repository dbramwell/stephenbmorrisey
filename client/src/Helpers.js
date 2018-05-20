class Helpers {
  headerToHash (header) {
    return header.toLowerCase().replace(/ /g, '-')
  }
}

export default new Helpers()
