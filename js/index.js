'use strict';

const options = {
  results: 5,
  page: 1,
  seed: 'pe20212',
};

loadUsers(options);

function loadUsers(options) {
  fetch(
    `https://randomuser.me/api/?results=${options.results}&page=${options.page}&seed=${options.seed}`
  )
    .then(response => response.json())
    .then(({ results }) => {
      console.log('data :>> ', results);
      renderUsers(results);
    })
    .catch(e => {
      console.log('e :>> ', e);
    });
}

const [backBtn, prevBtn, nextBtn] = document.querySelectorAll('button');

backBtn.addEventListener('click', backBtnHandler);
prevBtn.addEventListener('click', prevBtnHandler);
nextBtn.addEventListener('click', nextBtnHandler);

function backBtnHandler(){
  options.page = 0;
  loadUsers(options);
}
function prevBtnHandler() {
  if (options.page > 1) {
    options.page -= 1;
    loadUsers(options);
  }
}
function nextBtnHandler() {
  options.page += 1;
  loadUsers(options);
}

function renderUsers(users) {
  const usersList = document.querySelector('.users-list');

  const usersListItems = users.map(u => createUserItem(u));

  usersList.replaceChildren(...usersListItems);
}

function createUserItem({
  name: { first: firstName, last: lastName },
  picture: { large: src },
  registered: { age: age },
  email,
  gender
}) {
  const userListItem = document.createElement('li');
  userListItem.classList.add('user-list-item');


  userListItem.addEventListener('click',  function(e){
    const rez = document.querySelector('.rez');
    const rezName = document.createElement('p');
    if(!e.currentTarget.classList.contains('active')){
      e.currentTarget.classList.add('active');
       rezName.append(`${firstName} ${lastName}`);
       return rez.append(rezName);
    }
  })

  userListItem.append(
    createUserImg(src, `${firstName} ${lastName}`, gender),
    createUserMainInfo(`${firstName} ${lastName} age:${age} email:${email}`)
  );

  return userListItem;
}

function createUserImg(src, alt,  gender) {
  // console.log('gender :>> ', gender);
  const userImgEl = document.createElement('img');
  userImgEl.src = src;
  userImgEl.alt = alt;
  userImgEl.onerror = () => {
    userImgEl.src = './imgs/defaultImg.png';
  };
  if(gender === 'male'){
    userImgEl.style.borderColor = '#00bfff'
  }else {
    userImgEl.style.borderColor = 'pink'
  }
  return userImgEl;
}

function createUserMainInfo(textContent) {
  const userMainInfoEl = document.createElement('p');
  userMainInfoEl.textContent = textContent;
  return userMainInfoEl;
}
