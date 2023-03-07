export function getSurveysData(state){
  return (studyId)=>{
    return state.surveysData[studyId]
  }
}

export function getSurveyAnswers(state){
  return (studyId)=>{
    return state.surveyAnswers[studyId]
  }
}

export function getUserAnswers(state){
  return (studyId,userId)=>{
    return state.userAnswers[studyId][userId]
  }
}

///Scheduler
export function getScheduleTasksByStudy(state){
  return (studyId)=>{
    return state.schedulesByStudy[studyId]
  }
}

export function getScheduleTasksByUser(state){
  return (studyId,userId)=>{
    return state.schedulesByUser[studyId][userId]
  }
}





//Delete
export function getSurveysList(state) {
  return (idStudy) => {
    if(state.surveysList[idStudy]){
      return JSON.parse(JSON.stringify(state.surveysList[idStudy]));
    }
    else{
      return [];
    }
    
  };
}

export function getSurveysListData(state) {
  return (idStudy) => {
    if (state.surveysListData[idStudy]){
      return JSON.parse(JSON.stringify(state.surveysListData[idStudy]));
    }
    else{
      return {}
    }
  };
}

export function getSurveyDetail(state){
  return (studyId)=>{
    return  state.surveyDetail[studyId];
  }
}

export function getUserSurveys(state){
  return state.userSurveys;
}

export function getUserSurveysBuilder(state){
  return state.SurveyBuilderUser;
}

export function getUserSurveyQuestion(state){
  return state.SurveyUserQuestions
}

export function getAllQuestion(state){
  return state.allQuestions
}



