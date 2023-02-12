// Селекторы валидации
const selectors = {
  formSelector: '.form',
  sectionSelector: '.form__section',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  errorSelector: '.form__input-error',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

// Элементы профиля
const profileElement = document.querySelector('.profile');
const profileTitleName = profileElement.querySelector('.profile__title');
const elementPopupAddOpenButton = profileElement.querySelector('.profile__add-button');
const profileSubtitleJob = profileElement.querySelector('.profile__subtitle');
const profilePopupEditOpenButton = profileElement.querySelector('.profile__edit-button');
const avatarPopupOpenButton = profileElement.querySelector('.profile__block-avatar');
const profileAvatar = profileElement.querySelector('.profile__avatar');

// Попап редактора профиля
const profilePopupEdit = '.popup_type_profile';
const profilePopupForm = document.querySelector('.form_type_profile');
const profileInputName = document.querySelector('.form__input_profile_name');
const profileInputJob = document.querySelector('.form__input_profile_job');

// Попап редактора аватара
const avatarPopupEdit = '.popup_type_avatar';
const avatarFormEdit = document.querySelector('.form_type_avatar');

// Попап просмотра картинки
const cardPopupContainerImage = '.popup_type_image';

// Блок создания карточек
const cardTemplateContainer = document.querySelector('.elements');

// Попап добавления карточки
const elementPopupAdd = '.popup_type_element';
const elementPopupForm = document.querySelector('.form_type_element');
const templateCardDefault = '.template-element_type_default';

// Попап удаления карточки
const elementPopupCardDelete = '.popup_type_trash';

// Кнопка отправить формы удаления карты
const submitDeleteFormButton = document.querySelector(elementPopupCardDelete).querySelector('.form__submit'); 

export {
  selectors,
  profilePopupEdit,
  profilePopupForm,
  profileInputName,
  profileInputJob,
  profileTitleName,
  elementPopupAddOpenButton,
  profileSubtitleJob,
  profilePopupEditOpenButton,
  cardPopupContainerImage,
  elementPopupAdd,
  elementPopupForm,
  cardTemplateContainer,
  templateCardDefault,
  avatarPopupEdit,
  avatarPopupOpenButton,
  elementPopupCardDelete,
  avatarFormEdit,
  profileAvatar,
  submitDeleteFormButton
};