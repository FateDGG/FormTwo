import { FormTemplate } from "./FormInterfaces"


const initialResponses = (id: string, chapter: string, qFather: string, idOptResponse: string): FormTemplate => ({
    qId: id,
    surveyId: "2",
    chapterId: chapter,
    qFather: qFather ,
    response: [
        {
            idoptresponse: idOptResponse,
            responseuser: [""],
            subQuestion3Responses: undefined,
            subQuestion1Responses: undefined,
            subQuestion2Responses: undefined,
            subQuestions: []
        }
    ]
});

export const getInitialValuesPage1 = () => {
    return {
        P1: initialResponses("P1","1","","1"),
        P2: initialResponses("P2","1","","2"),
        P3: initialResponses("P3","1","","3"),
        P4: initialResponses("P4","1","","4"),
        P5: initialResponses("P5","1","","5"),
        P6: initialResponses("P5","1","","6"),
    }
}

export const getInitialValuesPage2 = () => {
    return {
        P7: initialResponses("P7","1","","7"),
        P8: initialResponses("P8","1","","8"),
        P9: initialResponses("P9","1","",""),
        P10: initialResponses("P10","1","","10"),
        P11: initialResponses("P11","1","10","11"),
        P12: initialResponses("P12","1","","12"),
        P13: initialResponses("P13","1","","13"),
    }
}

export const getInitialValuesPage3 = () => {
    return {
        P13: initialResponses("P13","1","","13"),
        P14: initialResponses("P14","1","","14"),
        P15: initialResponses("P8","1","","15"),

    }

    
}

export const getInitialValuesPage4 = () => {
    return {
        P16a: initialResponses("P8","1","","16"),
        P16b: initialResponses("P8","1","","16"),
        P16c: initialResponses("P8","1","","16"),
        P16d: initialResponses("P8","1","","16"),
        P16e: initialResponses("P8","1","","16"),
        P16f: initialResponses("P8","1","","16"),
        P16g: initialResponses("P8","1","","16"),
        P16h: initialResponses("P8","1","","16"),
        P17: initialResponses("P8","1","","17"),
    }

    
}

export const getInitialValuesPage6 = () => {
    return {
        P18a: initialResponses("P8","1","","18"),
        P18b: initialResponses("P8","1","","18"),
        P18c: initialResponses("P8","1","","18"),
        P18d: initialResponses("P8","1","","18"),
        P18e: initialResponses("P8","1","","18"),
        P18f: initialResponses("P8","1","","18"),
        P18g: initialResponses("P8","1","","18"),
        P18h: initialResponses("P8","1","","18"),
        P18i: initialResponses("P8","1","","18"),
        P18j: initialResponses("P8","1","","18"),
        P18k: initialResponses("P8","1","","18"),
        P18l: initialResponses("P8","1","","18"),
        P18m: initialResponses("P8","1","","18"),
        P18n: initialResponses("P8","1","","18"),
        P18o: initialResponses("P8","1","","18"),
    }

}