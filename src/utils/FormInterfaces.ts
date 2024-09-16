export interface Response{
    idoptresponse: string,
    responseuser: string[],
}
  
export interface FormTemplate{
qId: string;
surveyId: "2",
chapterId: string,
qFather: string;
response:[Response];
}