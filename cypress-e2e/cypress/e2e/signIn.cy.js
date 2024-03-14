describe("admin sign in", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.getByTestId("header-signin").click();
    // confirm that user is redirected to the sign in page
    cy.url().should("include", "/sign-in");
    cy.contains("h1", "Sign In").should("be.visible");
    // confirm that the sign in page has the correct form elements
    cy.getByTestId("signin-email-input").should("be.visible");
    cy.getByTestId("signin-password-input").should("be.visible");
    cy.getByTestId("signin-button").should("be.visible");
    cy.getByTestId("signin-google-button").should("be.visible");
  });
  it("confirms an admin can sign in with email and password and see their admin dashboard", () => {
    // fill in email and password fields
    cy.getByTestId("signin-email-input").type("admin@admin.com");
    cy.getByTestId("signin-password-input").type("password123");
    // click the sign in button
    cy.getByTestId("signin-button").click();
    // confirm that user is redirected to the homepage
    cy.url().should("not.include", "/sign-in");
    cy.contains("h1", "Hey there!").should("be.visible");
    // confirm that the toast appears and disappears after 2 seconds
    cy.contains("Successfully signed in!").should("be.visible");
    cy.wait(2000);
    cy.contains("Successfully signed in!").should("not.be.visible");
    // go to admin dasbhoard
    cy.getByTestId("header-avatar").click();
    cy.getByTestId("header-profile").click();
    cy.url().should("include", "/dashboard?tab=profile");
    // confirm logged in user is an admin by checking that the sidebar label says Admin
    cy.get('[data-testid="flowbite-sidebar-label"] > span').contains("Admin");
  });
});
