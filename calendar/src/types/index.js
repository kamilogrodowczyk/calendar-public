import PropTypes from 'prop-types';

export const DateProviderShape = {
  openState: PropTypes.array,
  dateState: PropTypes.array,
  event: PropTypes.array,
  clickedEvent: PropTypes.object,
  newDate: PropTypes.object,
  arrayIndex: PropTypes.number,
  setNewDate: PropTypes.func,
  editEvent: PropTypes.func,
  addNewEvent: PropTypes.func,
  showClickedEvent: PropTypes.func,
  update: PropTypes.func,
  addEvent: PropTypes.func,
  changeEditedEvent: PropTypes.func,
  toggleInputModal: PropTypes.func,
  toggleRemoveModal: PropTypes.func,
  toggleEditInputModal: PropTypes.func,
  toggleEditAcceptModal: PropTypes.func,
  setOpenRightbarState: PropTypes.func,
  isShowingRemoveModal: PropTypes.bool,
  isShowingEditAcceptModal: PropTypes.bool,
  isOpenRightbar: PropTypes.bool,
};

export const CompanyProviderShape = {
  selectedCompany: PropTypes.string,
  company: PropTypes.array,
  userData: PropTypes.object,
  addCompany: PropTypes.func,
  removeCompany: PropTypes.func,
  setSelectedCompany: PropTypes.func,
  setUserData: PropTypes.func,
  resetUserData: PropTypes.func,
};
