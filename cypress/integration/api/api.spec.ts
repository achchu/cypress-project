import { params } from "./params";

let headers = {
  Authorization: `Bearer ${Cypress.env("ACCESS_TOKEN")}`,
  "Redirect-URL": Cypress.env("REDIRECT_URL"),
  "Webhook-URL": Cypress.env("WEBHOOK_URL"),
  "Client-Id": Cypress.env("CLIENT_ID"),
  "Client-Secret": Cypress.env("CLIENT_SECRET"),
};

// Helper function to initiate payment
function initiatePayment(body, failOnStatusCode = true) {
  return cy.request({
    url: `${Cypress.env("apiBaseUrl")}`,
    method: "POST",
    headers,
    body,
    failOnStatusCode,
  });
}

// Helper function to assert successful payment properties
function assertSuccessfulPayment(response) {
  expect(response.status).to.eq(200);
  expect(response.body).to.have.property("id");
  expect(response.body).to.have.property("bankStatus");
  expect(response.body).to.have.property("statusGroup");
  expect(response.body).to.have.property("confirmLink");
  expect(response.body.bankStatus).to.eq("STRD");
  expect(response.body.statusGroup).to.eq("started");
}

describe("Payment Initiate Endpoint", () => {
  beforeEach(() => {
    headers = {
      Authorization: `Bearer ${Cypress.env("ACCESS_TOKEN")}`,
      "Redirect-URL": Cypress.env("REDIRECT_URL"),
      "Webhook-URL": Cypress.env("WEBHOOK_URL"),
      "Client-Id": Cypress.env("CLIENT_ID"),
      "Client-Secret": Cypress.env("CLIENT_SECRET"),
    };
  });

  it("Successfully initiates a payment with valid parameters", () => {
    initiatePayment(params).then((response) => {
      assertSuccessfulPayment(response);
      cy.log("Request body:", params);
      cy.log("Response body:", response.body);
    });
  });

  it("Successfully initiates a payment with minimum required parameters", () => {
    const minData = JSON.parse(JSON.stringify(params));
    delete minData.identifier;

    initiatePayment(minData).then((response) => {
      assertSuccessfulPayment(response);
    });
  });

  it("Fails to initiate a payment without required parameters", () => {
    initiatePayment({}, false).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("error");
      expect(response.body.error.code).to.eq(10000);
      expect(response.body.error.name).to.eq("SomethingWentWrong");
      expect(response.body.error.description).to.eq(
        "Sorry something went wrong..."
      );
    });
  });

  it("Fails to initiate a payment without authorization", () => {
    delete headers["Authorization"];

    initiatePayment(params, false).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.eq("Unauthorized");
    });
  });

  it("Fails to initiate a payment with an invalid token", () => {
    headers["Authorization"] = "Bearer InvalidToken";

    initiatePayment(params, false).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("error");
      expect(response.body.error.code).to.eq(10005);
      expect(response.body.error.name).to.eq("InvalidToken");
      expect(response.body.error.description).to.eq(
        "Token is invalid or expired."
      );
    });
  });

  it("Fails to initiate a payment with a wrong token definition", () => {
    headers["Authorization"] = "WrongTokenDefinition";

    initiatePayment(params, false).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("error");
      expect(response.body.error.code).to.eq(10009);
      expect(response.body.error.name).to.eq("WrongTokenDefinition");
      expect(response.body.error.description).to.eq(
        "We accept only Bearer tokens."
      );
    });
  });

  it("Fails to initiate a payment with an invalid webhook URL", () => {
    headers["Webhook-URL"] = "InvalidURL";

    initiatePayment(params, false).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("error");
      expect(response.body.error.code).to.eq(90007);
      expect(response.body.error.name).to.eq("InvalidWebhookUrl");
      expect(response.body.error.description).to.eq(
        "Incorrect webhook URL provided."
      );
    });
  });
});
