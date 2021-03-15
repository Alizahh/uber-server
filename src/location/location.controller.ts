import { Body, Controller, Get, Param, Post, Patch, Delete, Req, Res } from "@nestjs/common";
import { Request, Response } from 'express';
import { LocationService } from "./location.service";

@Controller()
export class LocationController {
    constructor(private readonly __locationService: LocationService) { }
}
