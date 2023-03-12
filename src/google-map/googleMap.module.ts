import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GoogleMapController } from './googleMap.controller';
import { Room, RoomSchema } from './googleMap.schemas';
import { GoogleMapService } from './googleMap.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }])],
    controllers: [GoogleMapController],
    providers: [GoogleMapService],
    exports: [GoogleMapService]
})
export class GoogleMapModule {}
