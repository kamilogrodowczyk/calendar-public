import { date } from 'data/date';

export const initialCalendarContext = {
  event: [],
  clickedEvent: {},
  arrayIndex: null,
  editEvent: () => {},
  addNewEvent: () => {},
  showClickedEvent: () => {},
  update: () => {},
  addEvent: () => {},
  changeEditedEvent: () => {},
  // toggleInputModal: () => {},
  toggleRemoveModal: () => {},
  isShowingRemoveModal: false,
  // toggleEditInputModal: () => {},
  toggleEditAcceptModal: () => {},
  isShowingEditAcceptModal: false,
  // isShowingEditInputModal: false,
};

export const initialCompanyContext = {
  addCompany: () => {},
  removeCompany: () => {},
  company: [],
  setSelectedCompany: () => {},
  selectedCompany: '',
  userData: {},
  setUserData: () => {},
  resetUserData: () => {},
};

export const initialDate = {
  year: date.year,
  month: date.monthName[date.month],
  monthIndex: date.month + 1,
  remoldedMonthName: date.remoldedMonthName[date.month],
};

export const initialInput = {
  title: '',
  time: '',
  description: '',
  comments: '',
  image: '',
};

export const editedInput = {
  title: '',
  time: '',
  description: '',
  comment: '',
};

export const initialConstant = {
  eventDate: '',
  formattedDateToSort: '',
  creationDate: '',
  creationHour: '',
  company: '',
  day: '',
  activeUser: '',
};

export const initialEvent = { ...initialInput, ...initialConstant };
