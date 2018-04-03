export default class Helpers {

  headerToHash(header) {
    return header.toLowerCase().replace(/ /g, '-');
  }
}