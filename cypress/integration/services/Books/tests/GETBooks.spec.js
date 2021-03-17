import * as GETBooks from "../requests/GETBooks_request";

describe("GET Books", () => {
  it("Listar todos os livros", () => {
    GETBooks.allBooks().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.not.null;
      cy.log('Resultado', response)
    });
  });
});
