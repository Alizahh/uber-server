import { Body, Controller, Get, Param, Post, Patch, Delete, Req, Res } from "@nestjs/common";
import { VehicleService } from './vehicle.service';
@Controller("booking")
export class VehicleController {
    constructor(private readonly vehicleService: VehicleService) { }

}
