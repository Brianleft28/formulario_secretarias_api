import {Router } from 'express';
import { readdir } from 'fs/promises';


const router = Router();
const ROUTE_PATH = `${__dirname}/`;

const cleanName = (name: string) => {
    return name.split('.').slice(0, -1).join('.');
}

readdir(ROUTE_PATH).then(files => {
    const cleanFiles: string[] = files.map(file => cleanName(file));

    cleanFiles.forEach((file: string) =>  {
        if (file === 'index') return;
        import(`./${file}`).then(module => {
            router.use(`/api/v1/${file}`, module.default);
            console.log(`Route /api/v1/${file} loaded`);
        })
    })
})

export default router;