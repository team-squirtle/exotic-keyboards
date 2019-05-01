const productModel = require('../server/models/products');
const request = require('supertest');
const server = 'http://localhost:3000';

const testArray = [
  {
    "_id": 1,
    "type": "ash",
    "image": "https://imgur.com/1aIZHue",
    "description": "Tough hardwood imported from southeastern states",
    "price": "19.99",
    "inStock": true
  },
  {
    "_id": 2,
    "type": "pine",
    "image": "https://imgur.com/hCoZu9C",
    "description": "Imported from eastern states",
    "price": "15.99",
    "inStock": true
  },
  {
    "_id": 3,
    "type": "redoak",
    "image": "https://imgur.com/KACe4VK",
    "description": "Top of the line, solid wood imported from western states",
    "price": "29.99",
    "inStock": true
  },
  {
    "_id": 5,
    "type": "maple",
    "image": "https://imgur.com/hCoZu9C",
    "description": "Imported from eastern states",
    "price": "15.99",
    "inStock": true
  },
  {
    "_id": 6,
    "type": "ebony",
    "image": "https://imgur.com/KACe4VK",
    "description": "Top of the line, solid wood imported from western states",
    "price": "29.99",
    "inStock": true
  },
  {
    "_id": 4,
    "type": "zebrawood",
    "image": "https://imgur.com/1aIZHue",
    "description": "Tough hardwood imported from southeastern states",
    "price": "19.99",
    "inStock": true
  }
];
// let getArray;

describe('db unit tests', () => {
  it('queries the database to retrieve types of wood', () => {
    productModel.returnWoods(function (err, result) {
      expect(result).toEqual(testArray);
    });
  });
  it('queries the database to retrieve stains', () => {
    const stainArray = [
      {
        "_id": 1,
        "type": "Burgundy",
        "image": "https://imgur.com/Ybv96C6",
        "description": "Water-resistant and durable",
        "price": "19.99",
        "inStock": true
      },
      {
        "_id": 2,
        "type": "Cherry-Blossom",
        "image": "https://imgur.com/q3OvhO5",
        "description": "economical and durable",
        "price": "15.99",
        "inStock": true
      },
      {
        "_id": 3,
        "type": "Slate",
        "image": "https://imgur.com/l8VkEXM",
        "description": "High demand, high quality, water-resistant and durable",
        "price": "25.99",
        "inStock": true
      },
      {
        "_id": 8,
        "type": "Island-Water",
        "image": "https://imgur.com/n50UxsO",
        "description": "High quality, water-resistant and durable",
        "price": "25.99",
        "inStock": true
      },
      {
        "_id": 5,
        "type": "Natural",
        "image": "https://imgur.com/q3OvhO5",
        "description": "economical and durable",
        "price": "15.99",
        "inStock": true
      },
      {
        "_id": 6,
        "type": "Red",
        "image": "https://imgur.com/Ybv96C6",
        "description": "Water-resistant and durable",
        "price": "19.99",
        "inStock": true
      },
      {
        "_id": 4,
        "type": "Puple",
        "image": "https://imgur.com/x1vj3JB",
        "description": "Water-resistant and durable",
        "price": "20.99",
        "inStock": true
      },
      {
        "_id": 7,
        "type": "Ebony",
        "image": "https://imgur.com/l8VkEXM",
        "description": "High demand, high quality, water-resistant and durable",
        "price": "25.99",
        "inStock": true
      }
    ];
    productModel.returnStains(function (err, result) {
      // getArray = result;
      expect(result).toEqual(stainArray);
    });
  });
});

describe('Route integration', () => {
  describe('/api/wood', () => {
    describe('GET', () => {
      productModel.returnStains(function (err, result) {
        let testArray = result;
        it('responds with 200 status and an array', () => {
          return request(server)
            .get('/api/wood')
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .then(res => {
              expect(res.body).toEqual(testArray);
            });
        });
      });
    });
  })
});