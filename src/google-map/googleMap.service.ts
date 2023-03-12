import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomDTO } from './googleMap.dto';
import { Room, RoomDocument } from './googleMap.schemas';

@Injectable()
export class GoogleMapService {
    constructor(@InjectModel(Room.name) private roomModel: Model<RoomDocument>) { }

    async getRooms(): Promise<Room[]> {
        return this.roomModel.find().exec();
    }

    async createRoom(room: RoomDTO): Promise<Room> {
        const createdRoom = new this.roomModel(room);
        return createdRoom.save();
    }
}
