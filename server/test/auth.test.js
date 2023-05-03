const app = require("../app")
const db = require("../app/models");
require("dotenv").config();

const expect = require("chai").expect;
const request = require("supertest");


describe("auth", function() {
    // before();

    describe("POST /api/auth/signup", function() {
        it("Sign up: valid username, valid password", async () => {
            const res = await request(app)
                            .post("/api/auth/signup")
                            .send({
                                username: "test1",
                                email: "test1@datafresh",
                                password: "password",
                                roles: ["user", "moderator"]
                            })
                            .set("Content-Type","application/json");
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property("message", "User was registered successfully!");
        });
    });

    after(async () => {
        db.user.deleteMany({ username: /^test/ }, (err) => {
            if (err) {
                console.error(err);`1`
            } else {
                console.log('All users with username starting with "test" have been deleted.');
            }
        });
    });
});


