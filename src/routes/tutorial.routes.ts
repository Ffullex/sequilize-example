import { Router } from 'express'
import TutorialController from '../controllers/tutorial.controller'

class TutorialRoutes {
  router = Router()
  controller = new TutorialController()

  constructor() {
    this.initializeRouter()
  }

  initializeRouter() {
    // @ts-ignore
    this.router.get( '/all', this.controller.findAll )

    // Create a new Tutorial
    // @ts-ignore
    this.router.post( '/', this.controller.create )

    // Retrieve all Tutorials
    // @ts-ignore
    this.router.get( '/', this.controller.findAll )

    // Retrieve a single Tutorial with id
    // @ts-ignore
    this.router.get( '/:id', this.controller.findOne )

    // Update a Tutorial with id
    // @ts-ignore
    this.router.put( '/:id', this.controller.update )

    // Delete a Tutorial with id
    // @ts-ignore
    this.router.delete( '/:id', this.controller.delete )
  }
}

export default new TutorialRoutes().router