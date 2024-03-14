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
  it("handles invalid credentials", () => {
    // leave email and password fields empty and attempt to sign in
    cy.getByTestId("signin-button").click();
    cy.get('[data-testid="flowbite-alert-wrapper"] > div').as("errorMessage");
    cy.get("@errorMessage").contains("Please fill in all the fields");
    // fill in email but no password
    cy.getByTestId("signin-email-input").type("invalid@invalid.com");
    cy.getByTestId("signin-button").click();
    cy.get("@errorMessage").contains("Please fill in all the fields");
    // fill in email and password fields with invalid credentials
    cy.getByTestId("signin-email-input").clear();
    cy.getByTestId("signin-email-input").type("invalid@invalid.com");
    cy.getByTestId("signin-password-input").type("invalid");
    cy.getByTestId("signin-button").click();
    cy.get("@errorMessage").contains("User not found");
  });
  it("confirms standard users are not able to create blog posts", () => {
    // fill in email and password fields
    cy.getByTestId("signin-email-input").type("notanadmin@notanadmin.com");
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
    // go to user dashboard
    cy.getByTestId("header-avatar").click();
    cy.getByTestId("header-profile").click();
    cy.url().should("include", "/dashboard?tab=profile");
    // confirm logged in user is not an admin by checking that the sidebar label says User
    cy.get('[data-testid="flowbite-sidebar-label"] > span').contains("User");
    cy.getByTestId("create-post-button").should("not.exist");
  });
  it("confirms an admin can sign in with email and password, see their admin dashboard, and can create blog posts", () => {
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
    cy.getByTestId("create-post-button").should("be.visible");
  });
});
