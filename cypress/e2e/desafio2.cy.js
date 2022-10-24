
/// <reference types="cypress" />
describe('Entrega Desafio #2', () => {
  let datosLogin

  before("Datos Json", () => {
    cy.fixture('datosdesafio2').then(datos => {
      datosLogin = datos
    })
  });

  beforeEach("Se ejecuta el beforeeach ", () => {
    cy.visit('https://pushing-front.vercel.app/')
    cy.get('#registertoggle')
      .dblclick()
    cy.get('#user')
      .type(datosLogin.usuario)
    cy.get('#pass')
      .type(datosLogin.password)
    cy.get('#submitForm')
      .click()
    cy.get('#todolistlink').click()
  })
  
  
  it("Ingresar las 5 tareas", () => {
    cy.get('#task')
      .type(datosLogin.t1)
    cy.get('#sendTask')
      .click()
    cy.get('#task')
      .type(datosLogin.t2)
    cy.get('#sendTask')
      .click()
    cy.get('#task')
      .type(datosLogin.t3)
    cy.get('#sendTask')
      .click()
    cy.get('#task')
      .type(datosLogin.t4)
    cy.get('#sendTask').click()
    cy.get('#task')
      .type(datosLogin.t5)
    cy.get('#sendTask')
      .click()
    cy.get('#removeAll')
      .click()
  })

  it("Verificar que exista los botones All - Completed - Active - Remove All", () =>{
    cy.get('#all')
      .contains('All')
      .should('exist')
    cy.get('#completed')
      .contains('Completed')
      .should('exist')
    cy.get('#active')
      .contains('Active')
      .should('exist')
    cy.get('#removeAll')
      .contains('Remove all')
      .should('exist')

  })

  it("Agregar 2 tareas completarlas y eliminar la 1era", () =>{
    cy.xpath("//input[@id='task']")
      .type(datosLogin.t1)
    cy.xpath("//input[@id='task']/following-sibling::button")
      .click()
    cy.xpath("//input[@id='task']")
      .type(datosLogin.t2)
    cy.xpath("//input[@id='task']/following-sibling::button")
      .click()
    cy.xpath("//p[text()=('Tarea 1')]")
      .click()
    cy.xpath("//p[text()=('Tarea 2')]")
      .click()
    cy.xpath("(//button[@type='button'])[3]")
      .click()  
    cy.wait(2000)
    cy.get('#removeAll')
      .contains('Remove all')
      .should('exist')
      .click()
  })
  
  it("Agregar 2 tareas y eliminar la 1era", () => {
    cy.xpath("//input[@id='task']").type(datosLogin.t1)
    cy.xpath("//input[@id='task']/following-sibling::button").click()
    cy.xpath("//input[@id='task']").type(datosLogin.t2)
    cy.xpath("//input[@id='task']/following-sibling::button").click()
    cy.xpath("(//button[@type='button'])[2]").click()
    cy.wait(2000)
//  cy.get('#removeAll').contains('Remove all').should('exist').click()

  })
})
  


