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
        P16: initialResponses("P8","1","","16"),
    }
}