import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
    console.log('GET /secretarias');
    res.json({message: 'GET /secretarias, capo bro ya sos senior developer'});
}