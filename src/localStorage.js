export function localStorage(value){
  window.localStorage.setItem(`task${window.localStorage.length}`, value);
}