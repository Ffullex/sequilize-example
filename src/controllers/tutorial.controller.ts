import { Request, Response } from 'express'
import TutorialRepository from '../repositories/tutorial.repository'

export default class TutorialController {
  public async create( request: Request, response: Response ) {
    const result = await TutorialRepository.save(request.body)

    return response.json(result)
  }

  public async findAll( request: Request, response: Response ) {
    const result = await TutorialRepository.retrieveAll(request.params)

    return response.json(result)
  }

  public async findOne( request: Request, response: Response ) {
    const result = await TutorialRepository.retrieveById(+request.params.id)

    return response.json(result)
  }

  public async update( request: Request, response: Response ) {
    const result = await TutorialRepository.update(request.body)

    return response.json(result)
  }

  public async delete( request: Request, response: Response ) {
    return
  }

  public async deleteAll( request: Request, response: Response ) {
    const result = await TutorialRepository.delete(+request.params.id)

    return response.json(result)
  }

  public async findAllPublished( request: Request, response: Response ) {
  }
}
