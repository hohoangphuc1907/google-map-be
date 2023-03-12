import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';

export type RoomDocument = Room & Document;

@Schema()
export class Room {
    @Prop({ auto: true, type: mongoose.Schema.Types.ObjectId })
    _id?: ObjectId;
    
    @Prop({ required: true, unique: true })
    name?: string;

    @Prop({ required: true, type: {} })
    address?: string;

    @Prop({ required: true })
    price?: number;
}

export const RoomSchema = SchemaFactory.createForClass(Room);