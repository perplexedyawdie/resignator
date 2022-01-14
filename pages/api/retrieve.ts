// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse } from '../../models/api-response.model';
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiResponse>
) {
    try {

        const docId: string = (req.query.docId as string);

        const url: string = 'https://data.mongodb-api.com/app/data-ponbz/endpoint/data/beta/action/findOne'
        const body = JSON.stringify({
            "collection": "details",
            "database": "resigner",
            "dataSource": "resign-now",
            "filter": {
                "id": docId
            },
            "projection": {
                "recipient": 1,
                "weeksNotice": 1,
                "jobTitle": 1,
                "sender": 1,
                "company": 1,
                "resignationDate": 1,
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
            axiosResponse: data
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
