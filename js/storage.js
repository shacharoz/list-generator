

function getStorage(type) {
  var storage = window[type + 'Storage'],
    delta = 0,
    li = document.createElement('li');

  if (!window[type + 'Storage']) return;

  if (storage.getItem('value')) {
    delta = ((new Date()).getTime() - (new Date()).setTime(storage.getItem('timestamp'))) / 1000;
    
    li.innerHTML = type + 'Storage: ' + storage.getItem('value') + ' (last updated: ' + delta + 's ago)';
  } else {
    li.innerHTML = type + 'Storage is empty';
  }

  document.querySelector('#previous').appendChild(li);
}

getStorage('session');
getStorage('local');

addEvent(document.querySelector('#session'), 'keyup', function () {
  sessionStorage.setItem('value', this.value);
  sessionStorage.setItem('timestamp', (new Date()).getTime());
});

addEvent(document.querySelector('#local'), 'keyup', function () {
  localStorage.setItem('value', this.value);
  localStorage.setItem('timestamp', (new Date()).getTime());
});

addEvent(document.querySelector('#clear'), 'click', function () {
  sessionStorage.clear();
  localStorage.clear();
  
  document.querySelector('#previous').innerHTML = '';
  getStorage('local');
  getStorage('session');
});
