import { test, expect } from '@playwright/test';

test('Verify products API response get method', async ({ request }) => {

    const response = await request.get('https://fakestoreapi.com/products');

    // Status code validation
    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    // Verify response is an array
    expect(Array.isArray(responseBody)).toBeTruthy();

    // Verify response is not empty
    expect(responseBody.length).toBeGreaterThan(0);

    // Verify first product schema
    const firstProduct = responseBody[0];

    expect(firstProduct).toHaveProperty('id');
    expect(firstProduct).toHaveProperty('title');
    expect(firstProduct).toHaveProperty('price');
    expect(firstProduct).toHaveProperty('description');
    expect(firstProduct).toHaveProperty('category');
    expect(firstProduct).toHaveProperty('image');

    // Verify data types
    expect(typeof firstProduct.id).toBe('number');
    expect(typeof firstProduct.title).toBe('string');
    expect(typeof firstProduct.price).toBe('number');
    expect(typeof firstProduct.description).toBe('string');
    expect(typeof firstProduct.category).toBe('string');
    expect(typeof firstProduct.image).toBe('string');
});

test('Verify products API response post method', async ({ request }) => {

const newProduct = {
  "id": 1,
  "title": "vijay",
  "price": 0.1,
  "description": "delhi",
  "category": "skkf",
  "image": "http://example.com"
};

 const response = await request.post('https://fakestoreapi.com/products', { data: newProduct });

 expect(response.status()).toBe(201);
});
