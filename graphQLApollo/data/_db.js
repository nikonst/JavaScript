const books =
  [
    { "id": 1, "title": "Circles (Krugovi)", "authorID": 2, "pages": 628, "price": 232.9 },
    { "id": 2, "title": "Little Girl Who Lives Down the Lane, The", "authorID": 10, "pages": 589, "price": 237.13 },
    { "id": 3, "title": "Hell's Highway: The True Story of Highway Safety Films", "authorID": 6, "pages": 270, "price": 246.27 },
    { "id": 4, "title": "Artois the Goat", "authorID": 1, "pages": 133, "price": 225.82 },
    { "id": 5, "title": "Devil's Due", "authorID": 9, "pages": 138, "price": 201.51 },
    { "id": 6, "title": "Bad Boys", "authorID": 2, "pages": 461, "price": 217.38 },
    { "id": 7, "title": "Surviving the Game", "authorID": 1, "pages": 364, "price": 53.12 },
    { "id": 8, "title": "Punisher: War Zone", "authorID": 2, "pages": 744, "price": 20.08 },
    { "id": 9, "title": "Exorcist III, The", "authorID": 7, "pages": 628, "price": 128.01 },
    { "id": 10, "title": "Mutants", "authorID": 9, "pages": 144, "price": 110.48 }
  ]

const authors = [
  { "id": 1, "name": "Buffy Sallan", "addressID": 1 },
  { "id": 2, "name": "Cornall Ashburne", "addressID": 2 },
  { "id": 3, "name": "Jehu Bultitude", "addressID": 3 },
  { "id": 4, "name": "Anatol Giorgi", "addressID": 4 },
  { "id": 5, "name": "Eada Gaddesby", "addressID": 5 },
  { "id": 6, "name": "Jerrome Blankley", "addressID": 6 },
  { "id": 7, "name": "Marita Walcher", "addressID": 7 },
  { "id": 8, "name": "Ernesta Ridgewell", "addressID": 8 },
  { "id": 9, "name": "Morgan Wharf", "addressID": 9 },
  { "id": 10, "name": "Elton Joderli", "addressID": 10 }
]

const address = [
  { "id": 1, "street": "1 Garrison Parkway", "city": "La Joya", "country": "Mexico", "authorID": 7 },
  { "id": 2, "street": "56649 Fordem Junction", "city": "Ouro Preto do Oeste", "country": "Brazil", "authorID": 2 },
  { "id": 3, "street": "016 Troy Road", "city": "Zhichanghe", "country": "China", "authorID": 4 },
  { "id": 4, "street": "82405 3rd Way", "city": "Sepanjang", "country": "Indonesia", "authorID": 7 },
  { "id": 5, "street": "53112 Annamark Point", "city": "Kobleve", "country": "Ukraine", "authorID": 6 },
  { "id": 6, "street": "8 Hagan Trail", "city": "Liufeng", "country": "China", "authorID": 5 },
  { "id": 7, "street": "2 Tennessee Point", "city": "Shijing", "country": "China", "authorID": 9 },
  { "id": 8, "street": "0540 Hansons Alley", "city": "Kukuluk", "country": "Indonesia", "authorID": 1 },
  { "id": 9, "street": "83 Eliot Pass", "city": "Neringa", "country": "Lithuania", "authorID": 9 },
  { "id": 10, "street": "53 Almo Alley", "city": "Kertasari", "country": "Indonesia", "authorID": 3 }
]

export default { books, authors, address }