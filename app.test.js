const request = require("supertest");
const app = require("./app.js");


describe("Medical Bills API", () => {

  // Get api test
  describe("GET /items/get", () => {
    it("should return an array of medical bills", async () => {
      const res = await request(app).get("/items/get");
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBeTruthy();
    });
  });

  // Post api test
  describe("POST /items", () => {
    it("should create a new medical bill", async () => {
      const bill = {
        patientName: "John Doe",
        patientAddress: "123 Main St.",
        hospitalName: "City Hospital",
        dateOfService: "2022-01-01",
        billAmount: 1000,
      };
      const res = await request(app).post("/items").send(bill);
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(bill);
    });
  });
});
