import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Patch,
    Post,
    Put,
    Query,
    Req,
    Res
} from '@nestjs/common';
import { Response } from 'express';
  
  @Controller('movies')
  export class MovieController {
    constructor() {}
  
    @Get()
    async getAll(@Query('page') page = 1, @Query('limit') limit = 10, @Req() request) {
        return {
            data: [{
                id: 1,
                title: 'The prestige', 
                director: 'Cristopher Nolan'
            }],
            meta: {
                page, 
                limit, 
                total: 1
            }
        };
    }
  
    @Get(`:id`)
    async getById(@Param('id') movieId: number){
      return {
        id: 1, 
        title: 'Interstellar'
      }
    }
  
    @Post()
    async create(@Body() campaignDTO: {title: string}, @Req() request, @Res() response: Response) {
      response.statusCode = HttpStatus.CREATED;
      response.send();
    }
  
    @Put(`:id`)
    async update(
      @Param('id') movieId: number,
      @Body() movieDto: {title: string},
      @Res() response
    ) {
        response.send({
            status: HttpStatus.NO_CONTENT
        });
    }
  
    @Patch(`:id`)
    async updatePartial(
      @Param('id') movieId: number,
      @Body() movieDto: {title: string},
      @Res() response: Response
    ) {
        response.send({
            status: HttpStatus.NO_CONTENT
        });
    }
  
    @Delete(`:id`)
    async delete(@Param('id') movieId: number, @Res() response: Response) {
        response.send({
            status: HttpStatus.NO_CONTENT
        });
    }
  
    
  }
  

