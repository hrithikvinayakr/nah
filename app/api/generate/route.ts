// import OpenAI from "openai";
// import { OpenAIStream, StreamingTextResponse } from "ai";




// const openai = new OpenAI({
//     apiKey: "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",
// });


export async function POST(req: Request): Promise<Response>{


    let promt = JSON.stringify(await req.json())
    let prompt = JSON.parse(promt).prompt


    // const chatCompletion = await openai.chat.completions.create({
    //     messages: [
    //         {
    //           role: "system",
    //           content:
    //             "You are an AI writing assistant that continues existing text based on context from prior text. " +
    //             "Give more weight/priority to the later characters than the beginning ones. " +
    //             "Limit your response to no more than 100 characters, but make sure to construct complete sentences.",
              
    //         },
    //         {
    //           role: "user",
    //           content: prompt,
    //         },
    //       ],
    //     model: "gpt-3.5-turbo",
    // });

    // console.log(chatCompletion.choices[0].message.content)

    return(
        new Response(": "+"CLone our github repo and add ur own api key to continue")
        ) 
    
}



