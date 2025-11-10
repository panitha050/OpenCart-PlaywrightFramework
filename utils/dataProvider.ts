import fs from 'fs';
import { parse } from 'csv-parse/sync';

export class DataProvider{

    //Read data from JSON
    static getTestDataFromJson(filePath: string){
        let data: any =JSON.parse(fs.readFileSync(filePath,'utf-8'));
        return data;
    }

    //Read data from CSV
    static getTestDataFromCsv(filePath: string){       
       let data:any = parse(fs.readFileSync(filePath,'utf-8'),{columns: true,skip_empty_lines: true});
       return data;

    }
}