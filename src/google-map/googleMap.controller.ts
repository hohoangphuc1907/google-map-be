import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoomDTO } from './googleMap.dto';
import { GoogleMapService } from './googleMap.service';

@Controller('google-map')
export class GoogleMapController {
    constructor(
        private readonly googleMapService: GoogleMapService,
       
    ) {}

    @Get()
    async getRooms() {
        return this.googleMapService.getRooms();
    }

    @Post()
    async createRoom(@Body() room: RoomDTO) {
        const data = await  this.googleMapService.createRoom(room);
        return {data:data, statusCode: 200};
    }
}
