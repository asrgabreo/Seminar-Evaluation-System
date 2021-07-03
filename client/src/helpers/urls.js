let API_ROOT = 'http://localhost:8000';

if(process.env.NODE_ENV === 'production'){
  API_ROOT = 'https://seminar-eval.herokuapp.com';
}

export const APIUrls = {
  login: () => `${API_ROOT}/api/v1/user/login`,
  signup: () => `${API_ROOT}/api/v1/user/register`,
  update: () => `${API_ROOT}/api/v1/user/update`,
  createAssignment: () => `${API_ROOT}/api/v1/assignment/create`,
  submitAssignment: () => `${API_ROOT}/api/v1/assignment/submit`,
  evaluateAssignment: () => `${API_ROOT}/api/v1/assignment/evaluate`,
  getAllAssignments: () => `${API_ROOT}/api/v1/assignment/all-assignments`,
  getAllStudents: () => `${API_ROOT}/user/all-students`,
  getmyAssign: () => `${API_ROOT}/api/v1/assignment/my-assign`,
};
