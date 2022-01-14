// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { SaveRequest } from '../../dto/save-request.dto';
import { ApiResponse } from '../../models/api-response.model';
import { SaveBody } from '../../models/save-body';
import shortUUID from 'short-uuid';
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiResponse>
) {
    try {
        const saveId: string = shortUUID.generate();
        const saveRequest: SaveRequest = req.body;
        const saveBody: SaveBody = {
            ...saveRequest,
            id: saveId
        }
        const url: string = 'https://data.mongodb-api.com/app/data-ponbz/endpoint/data/beta/action/insertOne'
        const body = JSON.stringify({
            "collection": "details",
            "database": "resigner",
            "dataSource": "resign-now",
            "document": {
                ...saveBody
            }
        });

        const { data, status } = await axios.post(url, body, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': process.env.MONGO_API_KEY!
            }
        })
        const apiResponse: ApiResponse = {
            success: true,
            axiosResponse: data,
            saveId: saveId
        }
        res.statusCode = 201;
        res.json(apiResponse)
    } catch (error) {
        const apiResponse: ApiResponse = {
            success: false,
            error: JSON.stringify(error)
        }
        res.statusCode = 500;
        res.json(apiResponse)

    }
}
